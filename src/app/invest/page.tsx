import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { INVESTMENT_STEPS, SECTORS, CONTACT_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Investir à Madagascar ou Maurice - CCIMM',
  description:
    "Guide complet pour investir à Madagascar ou à Maurice. La CCIMM vous accompagne dans votre projet d'investissement.",
};

export default function InvestPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Guide d'investissement
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Investir à Madagascar ou à Maurice ?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Contactez la CCIMM – Guide pas à pas, dans le respect du cadre légal
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Vous souhaitez investir, vous implanter ou développer des partenariats ? La CCIMM vous
            accompagne de manière structurée, confidentielle et conforme.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Notre approche"
            subtitle="Un accompagnement professionnel et sécurisé"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Conformité légale',
                description:
                  'Orientation vers les procédures administratives et réglementaires applicables',
                icon: '⚖️',
              },
              {
                title: 'Sécurisation',
                description: 'Bonnes pratiques, transparence, diligence et traçabilité',
                icon: '🔒',
              },
              {
                title: 'Mise en réseau',
                description: 'Connexions B2B et B2G (entreprises / institutions)',
                icon: '🤝',
              },
              {
                title: 'Accompagnement',
                description: 'Cadrage du projet et coordination avec les partenaires habilités',
                icon: '📋',
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Le parcours CCIMM"
            subtitle="Guide pas à pas pour votre projet d'investissement"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

              {INVESTMENT_STEPS.map((step, index) => (
                <div key={step.id} className="relative flex items-start mb-8 last:mb-0">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    {step.id}
                  </div>

                  {/* Content */}
                  <Card className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Secteurs prioritaires"
            subtitle="Nous couvrons les principaux secteurs d'activité économique"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SECTORS.map((sector) => (
              <span
                key={sector.id}
                className="bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-medium hover:bg-primary-100 transition-colors"
              >
                {sector.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Engagement de conformité
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              La CCIMM agit dans le respect des lois des deux pays et promeut la transparence, la
              lutte contre la corruption, la lutte contre le blanchiment d'argent, ainsi que le
              respect des droits humains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Transparence', 'Anti-corruption', 'Anti-blanchiment', 'Droits humains'].map(
                (item) => (
                  <span key={item} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    ✓ {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez la CCIMM pour un premier échange sur votre projet d'investissement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-secondary-600 hover:bg-gray-100"
            >
              Nous contacter
            </Button>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
