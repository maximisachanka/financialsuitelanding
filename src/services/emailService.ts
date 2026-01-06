import emailjs from '@emailjs/browser';

// EmailJS configuration
// These values should be obtained from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'prodbykarlmann@gmail.com';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send demo form email
export const sendDemoFormEmail = async (data: {
  name: string;
  email: string;
  company: string;
}) => {
  try {
    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      message: `New demo request from ${data.name} (${data.email}) at ${data.company}`,
      form_type: 'Demo Request',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

// Send partner form email
export const sendPartnerFormEmail = async (data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}) => {
  try {
    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone || 'Not provided',
      message: data.message || 'No message provided',
      form_type: 'Partner Request',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};
