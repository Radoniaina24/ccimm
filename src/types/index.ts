export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Location {
  id: string;
  title: string;
  address: string[];
  type: 'headquarters' | 'executive' | 'representation';
  country: 'madagascar' | 'mauritius';
  availableFrom?: string;
}

export interface Sector {
  id: string;
  name: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  website: string;
}

export interface MembershipBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}
