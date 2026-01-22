import LocationsSection from '@/components/sections/LocationsSection';
import ValuesSection from '@/components/sections/ValuesSection';
import Card from '@/components/ui/Card';
import { PRESIDENT_NAME } from '@/lib/constants';
import React from 'react';

export default function About() {
  return (
    <div className="pt-24 bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Chambre de Commerce et d'Industrie
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-white leading-tight">
              Qui sommes-nous
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              La Chambre de Commerce et d'Industrie Maurice–Madagascar (CCIMM) est une plateforme
              institutionnelle dédiée au renforcement des relations économiques, commerciales et
              industrielles entre la République de Madagascar et la République de Maurice.
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center mt-10 space-x-2">
              <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  À propos
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">
                  Notre <span className="text-blue-600">identité</span>
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    La CCIMM est une organisation à but non lucratif, légalement constituée à
                    Madagascar, disposant de bureaux opérationnels et de représentation à Madagascar
                    et à Maurice.
                  </p>
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Elle rassemble des entreprises, dirigeants, investisseurs, institutions
                    publiques et privées, engagés dans le développement des échanges
                    Maurice–Madagascar.
                  </p>
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    La CCIMM agit comme un pont stratégique entre les deux pays, en accompagnant les
                    entreprises, les investisseurs et les institutions dans une dynamique de
                    coopération bilatérale durable, structurée et responsable.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* President Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-white/30">
                      <svg
                        className="w-12 h-12 text-white"
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
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      Présidence
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{PRESIDENT_NAME}</h3>
                    <p className="text-blue-200">Président de la CCIMM</p>
                  </div>
                </div>

                {/* Governance Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Gouvernance</h3>
                  </div>
                  <ul className="space-y-3">
                    {["Conseil d'Administration", 'Bureau Exécutif', 'Comités sectoriels'].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-center p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                            <svg
                              className="w-4 h-4 text-white"
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
                          </span>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-slate-600 flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Gouvernance basée sur la transparence, responsabilité et conformité aux
                      standards internationaux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Notre engagement
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-heading">
              Mission & <span className="text-blue-600">Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
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
                <div className="ml-5">
                  <h3 className="text-2xl font-bold text-slate-900">Notre mission</h3>
                  <p className="text-slate-500">Ce que nous faisons</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Structurer et promouvoir les échanges économiques',
                  'Accompagner les entreprises dans leurs projets',
                  'Faciliter le dialogue public–privé',
                  'Représenter et défendre les intérêts des membres',
                  "Contribuer à l'intégration économique régionale",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors">
                      <svg
                        className="w-3.5 h-3.5 text-blue-600 group-hover/item:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 right-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-4 ring-white/20 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <div className="ml-5">
                    <h3 className="text-2xl font-bold">Notre vision</h3>
                    <p className="text-blue-200">Ce que nous visons</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-blue-100 mb-8">
                  Faire de la CCIMM un acteur de référence de la coopération économique bilatérale
                  entre Maurice et Madagascar, reconnu pour son professionnalisme, sa neutralité, sa
                  crédibilité institutionnelle et son impact économique.
                </p>

                {/* Vision keywords */}
                <div className="flex flex-wrap gap-2">
                  {['Professionnalisme', 'Neutralité', 'Crédibilité', 'Impact'].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <LocationsSection />
    </div>
  );
}
