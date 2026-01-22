import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { LOCATIONS } from '@/lib/constants';

export default function LocationsSection() {
  const madagascarLocations = LOCATIONS.filter((l) => l.country === 'madagascar');
  const mauritiusLocations = LOCATIONS.filter((l) => l.country === 'mauritius');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nos implantations"
          subtitle="Présents à Madagascar et à Maurice pour mieux vous servir"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Madagascar */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-900/5 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-blue-100">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">MG</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Madagascar</h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {madagascarLocations.length} bureau{madagascarLocations.length > 1 ? 'x' : ''}
                  </p>
                </div>
              </div>

              {/* Locations list */}
              <div className="space-y-3">
                {madagascarLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className="group/item relative bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl hover:from-blue-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Location icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Location details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover/item:text-blue-700 transition-colors duration-300">
                          {location.title}
                        </h4>
                        <div className="mt-1 space-y-0.5">
                          {location.address.map((line, i) => (
                            <p key={i} className="text-gray-500 text-sm leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Maurice */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-900/5 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-blue-100">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">MU</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maurice</h3>
                  <p className="text-sm text-indigo-600 font-medium">
                    {mauritiusLocations.length} bureau{mauritiusLocations.length > 1 ? 'x' : ''}
                  </p>
                </div>
              </div>

              {/* Locations list */}
              <div className="space-y-3">
                {mauritiusLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className="group/item relative bg-gradient-to-r from-indigo-50 to-transparent p-4 rounded-xl hover:from-indigo-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Location icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover/item:bg-indigo-200 transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Location details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover/item:text-indigo-700 transition-colors duration-300 flex flex-wrap items-center gap-2">
                          {location.title}
                          {location.availableFrom && (
                            <span className="inline-flex items-center text-xs bg-gradient-to-r from-amber-400 to-orange-400 text-white px-2.5 py-0.5 rounded-full font-medium shadow-sm">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {location.availableFrom}
                            </span>
                          )}
                        </h4>
                        <div className="mt-1 space-y-0.5">
                          {location.address.map((line, i) => (
                            <p key={i} className="text-gray-500 text-sm leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-indigo-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-sm text-blue-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
            <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Présence internationale dans l'Océan Indien</span>
          </div>
        </div>
      </div>
    </section>
  );
}
