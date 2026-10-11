export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  badge?: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Feature {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export interface Article {
  id: string;
  title: string;
  date: { day: string; month: string };
  category: string;
  author: string;
  image: string;
  href: string;
}

export interface CounterStat {
  value: number;
  suffix: string;
  label: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  csrfToken?: string;
}

export interface NewsletterFormData {
  email: string;
  csrfToken?: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}
