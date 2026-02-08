import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

const SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function POST(req: NextRequest) {
    if (!SECRET_KEY) {
        return NextResponse.json({ error: 'Paystack not configured' }, { status: 500 });
    }

    try {
        const body = await req.json();
        const email = (body.email || '').trim();
        const name = (body.name || '').trim();
        const phone = (body.phone || '').trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        // ✅ Add length limits to prevent abuse
        if (name.length > 100 || phone.length > 20) {
            return NextResponse.json({ error: 'Input too long' }, { status: 400 });
        }

        const payload: Record<string, unknown> = {
            email,
            amount: '2500000',
            //amount: '30000',
        };
        if (name || phone) {
            payload.metadata = { name, phone };
        }
        const params = JSON.stringify(payload);

        const options: https.RequestOptions = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        };

        const data = await new Promise<string>((resolve, reject) => {
            const request = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => resolve(data));
            });
            request.on('error', reject);
            request.write(params);
            request.end();
        });

        const parsed = JSON.parse(data);

        if (!parsed.status) {
            return NextResponse.json(
                { error: parsed.message || 'Failed to initialize transaction' },
                { status: 400 }
            );
        }

        return NextResponse.json(parsed.data);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to initialize payment' },
            { status: 500 }
        );
    }
}
