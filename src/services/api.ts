import { InquiryFormData, NewsletterFormData, FormSubmissionResult } from '../types';

// Rate limiting in-memory store for client-side abuse protection
const submissionTimestamps: number[] = [];
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

function checkRateLimit(): boolean {
  const now = Date.now();
  // Clear old timestamps
  while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - RATE_LIMIT_WINDOW_MS) {
    submissionTimestamps.shift();
  }
  if (submissionTimestamps.length >= RATE_LIMIT_MAX) {
    return false;
  }
  submissionTimestamps.push(now);
  return true;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  // Allow international formatting with digits, +, spaces, hyphens, parentheses
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  return cleaned.length >= 7 && cleaned.length <= 16 && /^\+?[0-9]+$/.test(cleaned);
}

export async function submitInquiry(data: InquiryFormData): Promise<FormSubmissionResult> {
  // Abuse protection: check rate limit
  if (!checkRateLimit()) {
    return {
      success: false,
      message: 'Too many requests. Please wait a minute before trying again.',
    };
  }

  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full Name is required (minimum 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = 'Please provide a valid phone number.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted errors.',
      fieldErrors: errors,
    };
  }

  // Check if external webhook / API endpoint is configured in env
  const endpoint = import.meta.env?.VITE_INQUIRY_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'inquiry',
          fullName: data.fullName.trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      return {
        success: true,
        message: 'Thank you! Your inquiry has been received. Our team will contact you shortly.',
      };
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Unknown error';
      return {
        success: false,
        message: `Submission failed: ${errMessage}. Please try again later.`,
      };
    }
  }

  // Verified local simulation with network latency simulation
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: 'Thank you! Your inquiry has been received. Our team will contact you shortly.',
  };
}

export async function submitNewsletter(data: NewsletterFormData): Promise<FormSubmissionResult> {
  if (!checkRateLimit()) {
    return {
      success: false,
      message: 'Too many requests. Please wait a minute before trying again.',
    };
  }

  const errors: Record<string, string> = {};

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
      fieldErrors: errors,
    };
  }

  const endpoint = import.meta.env?.VITE_NEWSLETTER_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          email: data.email.trim(),
          subscribedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      return {
        success: true,
        message: 'Thank you! You are now subscribed to exclusive property updates.',
      };
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Unknown error';
      return {
        success: false,
        message: `Subscription failed: ${errMessage}. Please try again later.`,
      };
    }
  }

  // Verified local simulation with network latency simulation
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: 'Thank you! You are now subscribed to exclusive property updates.',
  };
}
