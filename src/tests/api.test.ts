import { describe, it, expect, vi, afterEach } from 'vitest';
import { submitContact, validateContact, NOT_CONFIGURED_MESSAGE } from '../services/api';
import { ContactFormData } from '../types';

const validData: ContactFormData = {
  fullName: 'Jordan Ellis',
  email: 'jordan@example.org',
  inquiryType: 'Community Partnership',
  message: 'We would like to explore a partnership with Heirloom Legacy.',
  website: '',
};

describe('Contact form validation', () => {
  it('rejects an invalid email address', () => {
    const errors = validateContact({ ...validData, email: 'not-an-email' });
    expect(errors.email).toMatch(/valid email/i);
  });

  it('rejects an empty name, missing inquiry type, and short message', () => {
    const errors = validateContact({ fullName: ' ', email: 'a@b.co', inquiryType: '', message: 'hi' });
    expect(errors.fullName).toMatch(/required/i);
    expect(errors.inquiryType).toMatch(/inquiry type/i);
    expect(errors.message).toMatch(/minimum 10/i);
  });

  it('passes valid data with no errors', () => {
    expect(validateContact(validData)).toEqual({});
  });
});

describe('submitContact', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('returns field errors for invalid submissions', async () => {
    const res = await submitContact({ ...validData, email: 'bad' });
    expect(res.success).toBe(false);
    expect(res.fieldErrors?.email).toMatch(/valid email/i);
  });

  it('silently rejects honeypot submissions', async () => {
    const res = await submitContact({ ...validData, website: 'http://spam.example' });
    expect(res.success).toBe(false);
    expect(res.fieldErrors).toBeUndefined();
  });

  it('never reports a false success when no endpoint is configured', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', '');
    const res = await submitContact(validData);
    expect(res.success).toBe(false);
    expect(res.message).toBe(NOT_CONFIGURED_MESSAGE);
  });

  it('posts to the configured endpoint and reports success', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', 'https://relay.example/contact');
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal('fetch', fetchMock);

    const res = await submitContact(validData);

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://relay.example/contact');
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.to).toBe('info@heirloomlegacy.org');
    expect(body.inquiryType).toBe('Community Partnership');
    expect(res.success).toBe(true);
  });
});
