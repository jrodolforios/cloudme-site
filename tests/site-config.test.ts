import { describe, expect, it } from 'vitest';
import { buildWhatsappLink, contact } from '@/config/site';

describe('buildWhatsappLink', () => {
  it('builds a wa.me link using the configured phone number in E.164 digits', () => {
    const link = buildWhatsappLink('pt');
    const digits = contact.whatsappNumber.replace(/[^\d]/g, '');
    expect(link.startsWith(`https://wa.me/${digits}?text=`)).toBe(true);
  });

  it('encodes the Portuguese pre-filled message', () => {
    const link = buildWhatsappLink('pt');
    expect(decodeURIComponent(link.split('?text=')[1])).toContain('Conheci a CloudMe pelo site');
  });

  it('encodes the English pre-filled message', () => {
    const link = buildWhatsappLink('en');
    expect(decodeURIComponent(link.split('?text=')[1])).toContain('I found CloudMe through the website');
  });

  it('produces different messages for pt and en', () => {
    expect(buildWhatsappLink('pt')).not.toBe(buildWhatsappLink('en'));
  });
});
