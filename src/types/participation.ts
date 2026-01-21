// types/participation.ts
export interface ParticipationFormValues {
  // Step 1: Contact Details
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;

  // Step 2: Country of Origin
  country: string;
  city: string;

  // Step 3: Participation Profile
  businessSector: string;
  participationType: string[];
  objectives: string[];

  // Step 4: Logistics
  logisticalPackage: string;
  representatives: string;

  // Step 5: Additional Info
  additionalInfo: string;
  confirmation: boolean;
}

export const initialValues: ParticipationFormValues = {
  fullName: '',
  jobTitle: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  businessSector: '',
  participationType: [],
  objectives: [],
  logisticalPackage: '',
  representatives: '',
  additionalInfo: '',
  confirmation: false,
};

export interface Step {
  id: number;
  title: string;
  shortTitle: string;
  icon: string;
}

export const formSteps: Step[] = [
  { id: 1, title: 'Contact Details', shortTitle: 'Contact', icon: 'user' },
  { id: 2, title: 'Country of Origin', shortTitle: 'Location', icon: 'globe' },
  { id: 3, title: 'Participation Profile', shortTitle: 'Profile', icon: 'briefcase' },
  { id: 4, title: 'Logistics & Team', shortTitle: 'Logistics', icon: 'truck' },
  { id: 5, title: 'Confirmation', shortTitle: 'Confirm', icon: 'check' },
];
