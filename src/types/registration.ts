// Types basés sur les données réelles du backend
export interface ExpoData {
  _id: string;
  visitorType: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  position: string;
  industry: string;
  newsletter: boolean;
  terms: boolean;
  createdAt: string;
  updatedAt?: string;
}

// Réponse de l'API pour la liste
export interface ExpoListResponse {
  totalExpos: number;
  totalPages: number;
  currentPage: number;
  expos: ExpoData[];
}

// Paramètres de requête pour la liste
export interface ExpoQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  visitorType?: string;
  country?: string;
}

// Pour la création/mise à jour
export interface ExpoFormData {
  visitorType: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  position: string;
  industry: string;
  newsletter: boolean;
  terms: boolean;
}

// Types pour le tri
export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  key: keyof ExpoData | null;
  direction: SortDirection;
}

// Types pour les modales
export type ModalType = 'view' | 'edit' | 'delete' | null;

export interface ModalState {
  type: ModalType;
  data: ExpoData | null;
  isOpen: boolean;
}

// Types pour les notifications
export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

// Constantes
export const VISITOR_TYPES = [
  'Professionnel',
  'Entreprise',
  'Étudiant',
  'Presse',
  'Exposant',
] as const;

export const TITLES = ['Mr', 'Mme', 'Mlle', 'Dr', 'Prof'] as const;

export const INDUSTRIES = [
  'Technologie',
  'Santé',
  'Finance',
  'Éducation',
  'Industrie',
  'Commerce',
  'Média',
  'Design',
  'Conseil',
  'Autre',
] as const;

export const COUNTRIES = [
  'France',
  'Belgique',
  'Suisse',
  'Canada',
  'Allemagne',
  'Royaume-Uni',
  'Espagne',
  'Italie',
  'Pays-Bas',
  'États-Unis',
  'Maroc',
  'Algérie',
  'Tunisie',
  'Sénégal',
  "Côte d'Ivoire",
  'Madagascar',
] as const;
