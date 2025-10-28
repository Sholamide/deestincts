import {defineField, defineType} from 'sanity'

export const skillUpRegistration = defineType({
  name: 'skillUpRegistration',
  title: 'SkillUp50 Registration',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'sameAsPhone',
      title: 'Same as Phone Number',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'designPath',
      title: 'Preferred Design Path',
      type: 'string',
      options: {
        list: [
          {title: 'Brand Design', value: 'Brand Design'},
          {title: 'UI/UX Design', value: 'UI/UX Design'},
          {title: 'Motion Graphics', value: 'Motion Graphics'},
          {title: 'Illustration', value: 'Illustration'},
          {title: 'Web Design', value: 'Web Design'},
          {title: 'Print Design', value: 'Print Design'},
          {title: 'Digital Marketing Design', value: 'Digital Marketing Design'},
          {title: 'Product Design', value: 'Product Design'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Level of Experience',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'Beginner'},
          {title: 'Intermediate', value: 'Intermediate'},
          {title: 'Advanced', value: 'Advanced'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'motivation',
      title: 'Motivation',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: 'registrationDate',
      title: 'Registration Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Under Review', value: 'under_review'},
          {title: 'Interview Scheduled', value: 'interview_scheduled'},
          {title: 'Accepted', value: 'accepted'},
          {title: 'Rejected', value: 'rejected'},
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Admin Notes',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${status}`,
      }
    },
  },
})
