import { describe, it, expect } from 'vitest';
import { submitInquiry, submitNewsletter } from '../services/api';

describe('API & Form Validation Services', () => {
  it('rejects inquiry with invalid email', async () => {
    const res = await submitInquiry({
      fullName: 'Eleanor Vance',
      email: 'not-an-email',
      phone: '555-1234',
    });
    expect(res.success).toBe(false);
    expect(res.message).toMatch(/highlighted errors/i);
    expect(res.fieldErrors?.email).toMatch(/valid email/i);
  });

  it('rejects inquiry with empty required name', async () => {
    const res = await submitInquiry({
      fullName: '   ',
      email: 'eleanor@example.com',
      phone: '555-1234',
    });
    expect(res.success).toBe(false);
    expect(res.fieldErrors?.fullName).toMatch(/required/i);
  });

  it('successfully validates and submits valid inquiry', async () => {
    const res = await submitInquiry({
      fullName: 'Marcus Sterling',
      email: 'marcus@sterling.co',
      phone: '+1 (555) 234-5678',
    });
    expect(res.success).toBe(true);
    expect(res.message).toMatch(/thank you/i);
  });

  it('rejects invalid newsletter email', async () => {
    const res = await submitNewsletter({ email: 'invalid-address' });
    expect(res.success).toBe(false);
    expect(res.fieldErrors?.email).toMatch(/valid email/i);
  });

  it('successfully subscribes with valid newsletter email', async () => {
    const res = await submitNewsletter({ email: 'investor@familyoffice.com' });
    expect(res.success).toBe(true);
    expect(res.message).toMatch(/thank you/i);
  });
});
