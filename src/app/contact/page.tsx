import dynamic from 'next/dynamic';

// Code splitting pour le formulaire
const ContactForm = dynamic(() => import('@/app/contact/components/Contact'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

export const metadata = {
  title: 'Contact - CCIMM',
  description:
    "Contactez la CCIMM pour toute demande d'information sur nos services, l'investissement ou l'adhésion.",
};

export default function ContactPage() {
  return <ContactForm />;
}
