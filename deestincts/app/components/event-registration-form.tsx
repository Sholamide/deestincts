'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// import PaystackPop from '@paystack/inline-js';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/form-input';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

export function EventRegistrationForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '' },
  });

  async function onSubmit(values: FormData) {
    setLoading(true);
    try {
      const res = await fetch('/api/paystack/transaction/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          phone: values.phone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Could not start payment');
        setLoading(false);
        return;
      }

      const accessCode = data.access_code;
      if (!accessCode) {
        toast.error('Invalid response from payment server');
        setLoading(false);
        return;
      }

      const PaystackPop = (await import('@paystack/inline-js')).default;
      const popup = new PaystackPop();
      popup.resumeTransaction(accessCode, {
        onSuccess: async (transaction: { reference: string }) => {
          setLoading(false);
          toast.success('Payment successful! Ticket sent to your email 🎟️');
          try {
            await fetch('/api/paystack/verify-and-fulfill', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ reference: transaction.reference }),
            });
          } catch {
            toast.error('Ticket could not be sent – contact support');
          }
          form.reset();
        },
        onCancel: () => {
          setLoading(false);
        },
        onError: (err: { message?: string }) => {
          setLoading(false);
          toast.error(err?.message || 'Payment failed');
        },
      });
    } catch {
      toast.error('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Deestincts User" {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="08012345678" {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-5 text-lg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Register & Pay'}
        </Button>
      </form>
    </Form>
  );
}
