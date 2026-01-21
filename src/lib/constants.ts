import {
  NavItem,
  Service,
  Value,
  Location,
  Sector,
  ContactInfo,
  MembershipBenefit,
  Step,
} from '@/types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Qui sommes-nous', href: '/about' },
  { label: 'Nos services', href: '/services' },
  { label: 'Investir', href: '/invest' },
  { label: 'Devenir membre', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'accompaniment',
    title: 'Accompagnement des entreprises',
    description: 'Support complet pour votre développement',
    icon: 'Briefcase',
    items: [
      'Orientation juridique, administrative et institutionnelle',
      "Appui à l'investissement et à l'implantation",
      'Assistance aux projets transfrontaliers',
    ],
  },
  {
    id: 'networking',
    title: 'Réseautage et partenariats',
    description: 'Connexions stratégiques pour votre croissance',
    icon: 'Users',
    items: [
      'Rencontres B2B et B2G',
      'Forums et missions économiques',
      'Coopérations sectorielles ciblées',
    ],
  },
  {
    id: 'representation',
    title: 'Représentation institutionnelle',
    description: 'Votre voix auprès des autorités',
    icon: 'Building',
    items: [
      'Interface avec les autorités publiques',
      'Dialogue public–privé',
      'Défense des intérêts des membres',
    ],
  },
  {
    id: 'information',
    title: 'Information & veille économique',
    description: 'Restez informé des opportunités',
    icon: 'FileText',
    items: [
      "Opportunités d'affaires",
      'Informations réglementaires',
      'Analyses sectorielles Maurice–Madagascar',
    ],
  },
];

export const VALUES: Value[] = [
  {
    id: 'integrity',
    title: 'Intégrité et transparence',
    description: 'Nous agissons avec honnêteté et ouverture dans toutes nos actions.',
    icon: 'Shield',
  },
  {
    id: 'compliance',
    title: 'Respect des lois',
    description: 'Conformité aux lois et normes internationales.',
    icon: 'Scale',
  },
  {
    id: 'anti-corruption',
    title: 'Lutte contre la corruption',
    description: "Engagement ferme contre la corruption et le blanchiment d'argent.",
    icon: 'Ban',
  },
  {
    id: 'human-rights',
    title: 'Droits humains',
    description: 'Respect des droits humains fondamentaux.',
    icon: 'Heart',
  },
  {
    id: 'governance',
    title: 'Bonne gouvernance',
    description: 'Neutralité, responsabilité et bonne gouvernance.',
    icon: 'CheckCircle',
  },
];

export const LOCATIONS: Location[] = [
  {
    id: 'hq-madagascar',
    title: 'Siège social – Madagascar',
    address: ['Lot VA 17 AZ Tsiadana', 'Antananarivo, Madagascar'],
    type: 'headquarters',
    country: 'madagascar',
  },
  {
    id: 'exec-madagascar',
    title: 'Bureau exécutif – Madagascar',
    address: ['Lot II A 105 E Nanisana Iadiambola', 'Antananarivo, Madagascar'],
    type: 'executive',
    country: 'madagascar',
  },
  {
    id: 'exec-mauritius',
    title: 'Bureau exécutif – Maurice',
    address: ['Ebène Cybercity', 'République de Maurice'],
    type: 'executive',
    country: 'mauritius',
    availableFrom: 'Mars 2026',
  },
  {
    id: 'rep-mauritius',
    title: 'Bureau de représentation – Maurice',
    address: ['Villa Nº1, Chemin Desvaux', 'Petit Verger, Saint Pierre, Maurice'],
    type: 'representation',
    country: 'mauritius',
  },
];

export const SECTORS: Sector[] = [
  { id: 'agro', name: 'Agro-industrie', icon: 'Wheat' },
  { id: 'commerce', name: 'Commerce', icon: 'ShoppingBag' },
  { id: 'industry', name: 'Industrie', icon: 'Factory' },
  { id: 'logistics', name: 'Logistique', icon: 'Truck' },
  { id: 'digital', name: 'Numérique', icon: 'Monitor' },
  { id: 'services', name: 'Services', icon: 'Headphones' },
  { id: 'health', name: 'Santé', icon: 'Stethoscope' },
  { id: 'education', name: 'Éducation/formation', icon: 'GraduationCap' },
  { id: 'tourism', name: 'Tourisme', icon: 'Plane' },
  { id: 'construction', name: 'BTP/énergie', icon: 'Hammer' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'contact@cci-mauricemadagascar.org',
  phone: '+230 5488 4377',
  website: 'www.cci-mauricemadagascar.org',
};

export const MEMBERSHIP_BENEFITS: MembershipBenefit[] = [
  {
    id: 'network',
    title: 'Réseau institutionnel',
    description: "Accès à un réseau institutionnel et d'affaires privilégié",
    icon: 'Network',
  },
  {
    id: 'connections',
    title: 'Mise en relation',
    description: 'Connexions ciblées avec des partenaires stratégiques',
    icon: 'Handshake',
  },
  {
    id: 'support',
    title: 'Accompagnement',
    description: 'Support personnalisé et visibilité accrue',
    icon: 'UserCheck',
  },
  {
    id: 'events',
    title: 'Événements',
    description: 'Participation aux événements exclusifs de la Chambre',
    icon: 'Calendar',
  },
];

export const INVESTMENT_STEPS: Step[] = [
  {
    id: 1,
    title: 'Qualification de votre projet',
    description:
      'Nous analysons votre besoin : secteur, budget, calendrier, pays cible, objectifs (création, partenariat, représentation, investissement).',
  },
  {
    id: 2,
    title: 'Orientation réglementaire',
    description:
      'Nous vous guidons vers les démarches clés : statut juridique, autorisations, fiscalité, immigration/permits si applicable, obligations de conformité.',
  },
  {
    id: 3,
    title: 'Mise en relation ciblée',
    description:
      "Nous facilitons les échanges avec les parties prenantes appropriées : administrations, agences de promotion, partenaires techniques, cabinets habilités, banques/assurances, zones d'activités.",
  },
  {
    id: 4,
    title: 'Structuration du partenariat',
    description:
      "Appui à la préparation de vos documents : note de projet, lettre d'intention, MoU, cadre de coopération, plan d'implantation.",
  },
  {
    id: 5,
    title: 'Suivi et intégration',
    description:
      'Suivi des étapes, intégration dans le réseau de la CCIMM et accès aux événements, rencontres et opportunités bilatérales.',
  },
];

export const PRESIDENT_NAME = 'Dr Rojo Claudino Andrianasolo';
