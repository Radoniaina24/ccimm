import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

export default function InstitutionalRelations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Relations institutionnelles"
          subtitle="Engagements avec les autorités diplomatiques des deux pays"
        />

        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Rencontre avec les autorités diplomatiques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dans le cadre de ses activités institutionnelles, le Président de la CCIMM a
                  engagé des échanges avec les autorités diplomatiques des deux pays.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">
                Rencontres de courtoisie et de travail avec :
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">
                    Son Excellence le Ministre des Affaires étrangères de la République de
                    Madagascar
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">
                    Son Excellence le Ministre des Affaires étrangères et du Commerce international
                    de la République de Maurice (Foreign Affairs & Regional Trade)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Sujets abordés :</h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-primary-50 rounded-lg p-4 text-center">
                  <p className="text-primary-800 font-medium">Vision et objectifs de la CCIMM</p>
                </li>
                <li className="bg-primary-50 rounded-lg p-4 text-center">
                  <p className="text-primary-800 font-medium">
                    Renforcement de la coopération bilatérale
                  </p>
                </li>
                <li className="bg-primary-50 rounded-lg p-4 text-center">
                  <p className="text-primary-800 font-medium">Rôle du secteur privé</p>
                </li>
              </ul>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              La CCIMM se positionne comme un partenaire institutionnel de dialogue économique, dans
              le respect des souverainetés et des cadres légaux des deux États.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
