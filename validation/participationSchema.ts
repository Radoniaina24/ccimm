// validation/participationSchema.ts
import * as Yup from 'yup';

// Step 1: Contact Details
export const step1Schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .required('Full name is required'),
  jobTitle: Yup.string()
    .min(2, 'Job title must be at least 2 characters')
    .required('Job title is required'),
  company: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company/Organisation is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Professional email is required'),
  phone: Yup.string()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number')
    .required('Phone/WhatsApp is required'),
});

// Step 2: Country
export const step2Schema = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  city: Yup.string(),
});

// Step 3: Participation Profile
export const step3Schema = Yup.object().shape({
  businessSector: Yup.string()
    .min(5, 'Please provide more details about your business sector')
    .required('Business sector is required'),
  participationType: Yup.array()
    .min(1, 'Please select at least one participation type')
    .required('Participation type is required'),
  objectives: Yup.array(),
});

// Step 4: Logistics
export const step4Schema = Yup.object().shape({
  logisticalPackage: Yup.string().required('Please select a logistical preference'),
  representatives: Yup.string().required('Please indicate the number of representatives'),
});

// Step 5: Confirmation
export const step5Schema = Yup.object().shape({
  additionalInfo: Yup.string().max(1000, 'Additional information is too long'),
  confirmation: Yup.boolean()
    .oneOf([true], 'You must confirm the information provided')
    .required('Confirmation is required'),
});

// All schemas array for easy access
export const stepSchemas = [step1Schema, step2Schema, step3Schema, step4Schema, step5Schema];

// Full schema
export const participationSchema = Yup.object().shape({
  ...step1Schema.fields,
  ...step2Schema.fields,
  ...step3Schema.fields,
  ...step4Schema.fields,
  ...step5Schema.fields,
});
