import dynamic from 'next/dynamic';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { PRESIDENT_NAME } from '@/lib/constants';
import About from './components/About';

// Code Splitting
const ValuesSection = dynamic(() => import('@/components/sections/ValuesSection'));
const LocationsSection = dynamic(() => import('@/components/sections/LocationsSection'));

export const metadata = {
  title: 'Qui sommes-nous - CCIMM',
  description:
    "Découvrez la Chambre de Commerce et d'Industrie Maurice–Madagascar, notre mission, notre vision et nos valeurs.",
};

export default function AboutPage() {
  return <About />;
}
