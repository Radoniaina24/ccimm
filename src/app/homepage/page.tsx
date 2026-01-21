import dynamic from 'next/dynamic';

// Code Splitting - Dynamic imports with loading states
const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  loading: () => <div className="min-h-screen bg-primary-900 animate-pulse" />,
});

const MissionSection = dynamic(() => import('@/components/home/MissionSection'), {
  loading: () => <div className="py-20 bg-gray-50 animate-pulse" />,
});

const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview'), {
  loading: () => <div className="py-20 bg-white animate-pulse" />,
});

const ValuesSection = dynamic(() => import('@/components/sections/ValuesSection'), {
  loading: () => <div className="py-20 bg-primary-800 animate-pulse" />,
});

const PresidentMessage = dynamic(() => import('@/components/home/PresidentMessage'), {
  loading: () => <div className="py-20 bg-gray-50 animate-pulse" />,
});

const LocationsSection = dynamic(() => import('@/components/sections/LocationsSection'), {
  loading: () => <div className="py-20 bg-white animate-pulse" />,
});

const InstitutionalRelations = dynamic(
  () => import('@/components/sections/InstitutionalRelations'),
  {
    loading: () => <div className="py-20 bg-gray-50 animate-pulse" />,
  }
);

// CTA Section component inline (small, no need for code splitting)
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-500 to-secondary-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
          Prêt à développer vos activités entre Maurice et Madagascar ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Rejoignez la CCIMM et bénéficiez d'un réseau institutionnel unique pour votre expansion
          bilatérale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/membership"
            className="inline-flex items-center px-8 py-4 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Devenir membre
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesPreview />
      <ValuesSection />
      <PresidentMessage />
      <InstitutionalRelations />
      <LocationsSection />
      <CTASection />
    </>
  );
}
