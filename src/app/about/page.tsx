import dynamic from 'next/dynamic';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { PRESIDENT_NAME } from '@/lib/constants';

// Code Splitting
const ValuesSection = dynamic(() => import('@/components/sections/ValuesSection'));
const LocationsSection = dynamic(() => import('@/components/sections/LocationsSection'));

export const metadata = {
  title: 'Qui sommes-nous - CCIMM',
  description:
    "Découvrez la Chambre de Commerce et d'Industrie Maurice–Madagascar, notre mission, notre vision et nos valeurs.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Qui sommes-nous</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              La Chambre de Commerce et d'Industrie Maurice–Madagascar (CCIMM) est une plateforme
              institutionnelle dédiée au renforcement des relations économiques, commerciales et
              industrielles entre la République de Madagascar et la République de Maurice.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                  Notre identité
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    La CCIMM est une organisation à but non lucratif, légalement constituée à
                    Madagascar, disposant de bureaux opérationnels et de représentation à Madagascar
                    et à Maurice.
                  </p>
                  <p className="mb-4">
                    Elle rassemble des entreprises, dirigeants, investisseurs, institutions
                    publiques et privées, engagés dans le développement des échanges
                    Maurice–Madagascar.
                  </p>
                  <p className="mb-4">
                    La CCIMM agit comme un pont stratégique entre les deux pays, en accompagnant les
                    entreprises, les investisseurs et les institutions dans une dynamique de
                    coopération bilatérale durable, structurée et responsable.
                  </p>
                </div>
              </div>

              <div>
                <Card className="bg-primary-50 border border-primary-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Présidence</h3>
                    <p className="text-primary-700 font-semibold">{PRESIDENT_NAME}</p>
                    <p className="text-gray-600 text-sm">Président de la CCIMM</p>
                  </div>
                </Card>

                <Card className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gouvernance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span className="text-gray-700">Conseil d'Administration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span className="text-gray-700">Bureau Exécutif</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span className="text-gray-700">Comités sectoriels</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    Gouvernance basée sur la transparence, responsabilité et conformité aux
                    standards internationaux.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <Card padding="lg">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre mission</h3>
              <ul className="space-y-4">
                {[
                  'Structurer et promouvoir les échanges économiques',
                  'Accompagner les entreprises dans leurs projets',
                  'Faciliter le dialogue public–privé',
                  'Représenter et défendre les intérêts des membres',
                  "Contribuer à l'intégration économique régionale",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Vision */}
            <Card
              padding="lg"
              className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Notre vision</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Faire de la CCIMM un acteur de référence de la coopération économique bilatérale
                entre Maurice et Madagascar, reconnu pour son professionnalisme, sa neutralité, sa
                crédibilité institutionnelle et son impact économique.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ValuesSection />
      <LocationsSection />
    </div>
  );
}
