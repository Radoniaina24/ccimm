import dynamic from 'next/dynamic';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { MEMBERSHIP_BENEFITS } from '@/lib/constants';

// Code splitting pour le formulaire
const ContactForm = dynamic(() => import('@/components/ui/ContactForm'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

export const metadata = {
  title: 'Devenir Membre - CCIMM',
  description:
    'Rejoignez la CCIMM et intégrez un réseau économique bilatéral stratégique entre Maurice et Madagascar.',
};

export default function MembershipPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Devenir membre de la CCIMM
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Rejoindre la CCIMM, c'est intégrer un réseau économique bilatéral stratégique au service
            de vos activités à Maurice et à Madagascar.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Avantages pour les membres"
            subtitle="Bénéficiez de nombreux avantages en rejoignant notre réseau"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {MEMBERSHIP_BENEFITS.map((benefit, index) => (
              <Card key={benefit.id} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-8 h-8 text-primary-600 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Formulaire d'adhésion"
            subtitle="Remplissez le formulaire ci-dessous pour soumettre votre candidature"
          />

          <div className="max-w-3xl mx-auto">
            <Card padding="lg">
              <ContactForm type="membership" />
            </Card>

            <p className="text-center text-gray-500 mt-6">
              Une fois le formulaire soumis, notre équipe prendra contact pour finaliser l'adhésion.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Info */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
              Une gouvernance solide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Conseil d'Administration</h3>
                <p className="text-white/70 text-sm">Organe de décision stratégique</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Bureau Exécutif</h3>
                <p className="text-white/70 text-sm">Gestion opérationnelle quotidienne</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Comités sectoriels</h3>
                <p className="text-white/70 text-sm">Expertise par domaine d'activité</p>
              </div>
            </div>
            <p className="mt-8 text-white/80">
              Gouvernance basée sur la transparence, la responsabilité et la conformité aux
              standards internationaux.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
