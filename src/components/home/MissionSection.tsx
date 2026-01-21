import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

const missions = [
  'Structurer et promouvoir les échanges économiques et commerciaux Maurice–Madagascar',
  "Accompagner les entreprises dans leurs projets d'implantation, d'investissement et de partenariat",
  'Faciliter le dialogue entre secteurs public et privé',
  'Représenter et défendre les intérêts économiques de ses membres',
  "Contribuer à l'intégration économique régionale dans l'océan Indien",
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Notre mission"
          subtitle="Nous oeuvrons pour le développement économique bilatéral"
        />

        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <ul className="space-y-6">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{mission}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Vision */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card
            className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
            padding="lg"
          >
            <h3 className="text-2xl font-bold mb-4 font-heading">Notre vision</h3>
            <p className="text-lg leading-relaxed text-white/90">
              Faire de la CCIMM un acteur de référence de la coopération économique bilatérale entre
              Maurice et Madagascar, reconnu pour son professionnalisme, sa neutralité, sa
              crédibilité institutionnelle et son impact économique.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
