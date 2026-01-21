import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { LOCATIONS } from '@/lib/constants';

export default function LocationsSection() {
  const madagascarLocations = LOCATIONS.filter((l) => l.country === 'madagascar');
  const mauritiusLocations = LOCATIONS.filter((l) => l.country === 'mauritius');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos implantations"
          subtitle="Présents à Madagascar et à Maurice pour mieux vous servir"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Madagascar */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Madagascar</h3>
            </div>
            <div className="space-y-4">
              {madagascarLocations.map((location) => (
                <Card key={location.id} padding="sm" className="border-l-4 border-accent-green">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-5 h-5 text-accent-green mt-1 flex-shrink-0"
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
                    <div>
                      <h4 className="font-semibold text-gray-900">{location.title}</h4>
                      {location.address.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Maurice */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MU</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Maurice</h3>
            </div>
            <div className="space-y-4">
              {mauritiusLocations.map((location) => (
                <Card key={location.id} padding="sm" className="border-l-4 border-accent-red">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-5 h-5 text-accent-red mt-1 flex-shrink-0"
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
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {location.title}
                        {location.availableFrom && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            À partir de {location.availableFrom}
                          </span>
                        )}
                      </h4>
                      {location.address.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
