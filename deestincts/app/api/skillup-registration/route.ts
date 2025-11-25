import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { client } from '@/sanity/lib/client'

const resend = new Resend(process.env.RESEND_API_KEY)

// Registration status - set to true to close registration
const REGISTRATION_CLOSED = true

export async function POST(request: NextRequest) {
  try {
    // Check if registration is closed
    if (REGISTRATION_CLOSED) {
      return NextResponse.json(
        { error: 'Registration is currently closed. All spots have been filled.' },
        { status: 403 }
      )
    }

    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'whatsapp', 'location', 'designPath', 'experience', 'motivation']
    const missingFields = requiredFields.filter(field => !data[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Send email to contact@deestincts.com
    const emailToTeam = await resend.emails.send({
      from: 'SkillUp50 Registration <noreply@deestincts.com>',
      to: ['contact@deestincts.com'],
      subject: `🎯 New SkillUp50 Registration - ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9a1212;">🎯 New SkillUp50 Registration</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Personal Information</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
            <p><strong>Location:</strong> ${data.location}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Design Information</h3>
            <p><strong>Preferred Design Path:</strong> ${data.designPath}</p>
            <p><strong>Experience Level:</strong> ${data.experience}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Motivation</h3>
            <p style="white-space: pre-wrap;">${data.motivation}</p>
          </div>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;"><strong>📅 Registration Time:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; color: #856404;"><strong>📍 Location Requirement:</strong> Must be physically available in Lagos, Nigeria</p>
          </div>
        </div>
      `
    })

    // Send confirmation email to applicant
    const confirmationEmail = await resend.emails.send({
      from: 'SkillUp50 Team <noreply@deestincts.com>',
      to: [data.email],
      subject: 'You\'re Almost In! ✅ | SkillUp50 Registration Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #9a1212; font-size: 28px;">You're Almost In! ✅</h1>
          </div>
          
          <p>Dear ${data.fullName.split(' ')[0]},</p>
          
          <p>Thank you for registering for the <strong>SkillUp50 initiative</strong> by Deestincts.</p>
          
          <p>We've received your application, and our team will review it shortly.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #9a1212; margin-top: 0;">Next Steps:</h3>
            <ul style="padding-left: 20px;">
              <li>You will be invited for a short screening interview</li>
              <li>Once qualified, you will receive a WhatsApp link to join the SkillUp50 community</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0;">
            <p style="margin: 0; color: #856404;"><strong>📍 Important:</strong> The program will be held in Lagos, Nigeria, and only applicants available to attend physically will be considered.</p>
          </div>
          
          <p>Please stay close to your email, as all communication will be done via email.</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">Warm regards,<br><strong>Team Deestincts</strong></p>
            <p style="color: #999; font-size: 12px; margin-top: 10px;">
              This is an automated confirmation email. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    })

    // Save to Sanity CMS
    let sanityResult = null
    try {
      const sanityData = {
        _type: 'skillUpRegistration',
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsapp,
        sameAsPhone: data.sameAsPhone || false,
        location: data.location,
        designPath: data.designPath,
        experience: data.experience,
        motivation: data.motivation,
        registrationDate: new Date().toISOString(),
        status: 'new',
      }

      sanityResult = await client.create(sanityData)
      console.log('Saved to Sanity:', sanityResult._id)
    } catch (sanityError) {
      console.error('Sanity save failed:', sanityError)
      // Continue with email sending even if Sanity fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Registration submitted successfully',
      emailSent: emailToTeam.data?.id,
      confirmationSent: confirmationEmail.data?.id,
      sanityId: sanityResult?._id || null
    })

  } catch (error) {
    console.error('Registration API error:', error)
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
}
