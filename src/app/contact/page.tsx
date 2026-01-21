import dynamic from 'next/dynamic';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { CONTACT_INFO, LOCATIONS } from '@/lib/constants';

// Code splitting pour le formulaire
const ContactForm = dynamic(() => import('@/components/ui/ContactForm'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

export const metadata = {
  title: 'Contact - CCIMM',
  description:
    "Contactez la CCIMM pour toute demande d'information sur nos services, l'investissement ou l'adhésion.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Contactez-nous</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous
            accompagner dans vos projets.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Email */}
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </Card>

            {/* Phone */}
            <Card className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-secondary-600 hover:text-secondary-700 transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </Card>

            {/* Website */}
            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Site web</h3>
              <a
                href={`https://${CONTACT_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                {CONTACT_INFO.website}
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Envoyez-nous un message"
            subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais"
          />

          <div className="max-w-3xl mx-auto">
            <Card padding="lg">
              <ContactForm type="contact" />
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nos bureaux" subtitle="Retrouvez-nous à Madagascar et à Maurice" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {LOCATIONS.map((location) => (
              <Card key={location.id} className="border-l-4 border-primary-600">
                <h3 className="font-bold text-gray-900 mb-2">
                  {location.title}
                  {location.availableFrom && (
                    <span className="block text-xs text-yellow-600 mt-1">
                      À partir de {location.availableFrom}
                    </span>
                  )}
                </h3>
                {location.address.map((line, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {line}
                  </p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
