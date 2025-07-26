import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ReCAPTCHA from 'react-google-recaptcha';

const formSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().min(8, 'Please enter a valid phone number'),
  reason:  z.string().min(1, 'Please select a reason'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  const contactReasons = [
    { value: 'booking', label: 'Make a Booking' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'feedback', label: 'Provide Feedback' },
    { value: 'support', label: 'Customer Support' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  // 1. 实时校验（可选）
  const validate = () => {
    try {
      formSchema.parse(form);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zerrors: Record<string,string> = {};
        err.errors.forEach(e => {
          if (e.path[0]) zerrors[e.path[0]] = e.message;
        });
        setErrors(zerrors);
      }
      return false;
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      toast({ title:'Please verify you are human', variant:'destructive' });
      return;
    }
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Send to your server for reCAPTCHA verification
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          recaptchaToken
        }),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({ title: 'Sent!', description: 'Your message has been sent.', duration: 5000 });
        setForm({ name:'', email:'', phone:'', reason:'', message:'' });
        setRecaptchaToken(null);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      toast({ 
        title: 'Error', 
        description: 'Failed to send message. Please try again later.', 
        variant: 'destructive' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ReCAPTCHA
         sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
         onChange={token => setRecaptchaToken(token)}
         onExpired={() => setRecaptchaToken(null)}
      />
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{t('name')}</Label>
        <Input 
          id="name" 
          value={form.name} 
          onChange={handleChange('name')}
          className={`bg-resort-white ${errors.name ? 'border-red-500' : ''}`} 
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input 
          id="email" 
          type="email" 
          value={form.email} 
          onChange={handleChange('email')}
          className={`bg-resort-white ${errors.email ? 'border-red-500' : ''}`} 
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Mobile Phone</Label>
        <Input 
          id="phone" 
          type="tel" 
          value={form.phone} 
          onChange={handleChange('phone')}
          className={`bg-resort-white ${errors.phone ? 'border-red-500' : ''}`}
          placeholder="e.g. 0412 345 678"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      
      {/* Reason */}
      <div className="space-y-2">
        <Label htmlFor="reason">Reason for Contact</Label>
        <Select value={form.reason} onValueChange={val => setForm(f => ({ ...f, reason: val }))}>
          <SelectTrigger 
            id="reason" 
            className={`bg-resort-white ${errors.reason ? 'border-red-500' : ''}`}
          >
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {contactReasons.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
      </div>
      
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea 
          id="message" 
          rows={6} 
          value={form.message} 
          onChange={handleChange('message')}
          className={`bg-resort-white ${errors.message ? 'border-red-500' : ''}`} 
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      {/* Submit */}
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending…' : t('send')}
      </Button>
    </form>
  );
};

export default ContactForm;
