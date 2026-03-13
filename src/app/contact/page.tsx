import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Ved Rexine Store at 5888/4 Dev Nagar, Karol Bagh, New Delhi 110005. Call 011-25720328. Get quotes for foam sheets, EVA, mattresses and adhesives.',
};

export default function ContactPage() {
  return <ContactForm />;
}
