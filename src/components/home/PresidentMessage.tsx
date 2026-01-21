import React from 'react';
import Card from '@/components/ui/Card';
import { PRESIDENT_NAME } from '@/lib/constants';

export default function PresidentMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-12 h-12"
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
                      <p className="font-semibold">{PRESIDENT_NAME}</p>
                      <p className="text-sm text-white/80">Président de la CCIMM</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500 rounded-xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-lg -z-10"></div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  Mot du Président
                </span>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                <span className="text-6xl text-primary-300 leading-none">"</span>
                La création de la Chambre de Commerce et d'Industrie Maurice–Madagascar (CCIMM)
                répond à une conviction profonde : celle que Maurice et Madagascar partagent un
                potentiel économique complémentaire encore insuffisamment structuré.
              </blockquote>

              <p className="text-gray-600 leading-relaxed mb-6">
                La CCIMM est née de la volonté de créer un cadre crédible, neutre et professionnel
                permettant aux entreprises, aux investisseurs et aux institutions des deux pays de
                dialoguer, de coopérer et de bâtir des partenariats durables.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Notre ambition n'est pas de nous substituer aux acteurs existants, mais d'agir comme
                un pont économique, facilitateur d'échanges, catalyseur d'opportunités et
                interlocuteur structuré entre les secteurs public et privé.
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-secondary-500"></div>
                <div>
                  <p className="font-bold text-gray-900">{PRESIDENT_NAME}</p>
                  <p className="text-gray-500 text-sm">Président de la CCIMM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
