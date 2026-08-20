import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

// A simple implementation of the toggle logic to test
function createToggleLogic(document) {
  const toggleBtn = document.getElementById('tier-toggle');
  const monthlyPrices = document.querySelectorAll('.price-monthly');
  const annualPrices = document.querySelectorAll('.price-annual');

  if (!toggleBtn) return null;

  toggleBtn.addEventListener('click', (e) => {
    // Edge case / Invalid input simulation
    if (e && e.detail && e.detail.invalid) return;
    
    const isChecked = toggleBtn.getAttribute('aria-checked') === 'true';
    toggleBtn.setAttribute('aria-checked', !isChecked);
    
    if (!isChecked) {
      // Switch to Annual
      monthlyPrices.forEach(el => el.setAttribute('hidden', ''));
      annualPrices.forEach(el => el.removeAttribute('hidden'));
    } else {
      // Switch to Monthly
      annualPrices.forEach(el => el.setAttribute('hidden', ''));
      monthlyPrices.forEach(el => el.removeAttribute('hidden'));
    }
  });

  return toggleBtn;
}

describe('Pricing Card Tier Toggle Switch State', () => {
  let dom;
  let document;
  let toggleBtn;

  beforeEach(() => {
    dom = new JSDOM(`
      <button id="tier-toggle" aria-checked="false" role="switch">Toggle Billing</button>
      <div class="price-monthly">$10/mo</div>
      <div class="price-annual" hidden>$100/yr</div>
    `);
    document = dom.window.document;
    toggleBtn = createToggleLogic(document);
  });

  it('happy path: default state is Monthly', () => {
    expect(toggleBtn.getAttribute('aria-checked')).toBe('false');
    expect(document.querySelector('.price-monthly').hasAttribute('hidden')).toBe(false);
    expect(document.querySelector('.price-annual').hasAttribute('hidden')).toBe(true);
  });

  it('happy path: clicking toggles to Annually', () => {
    toggleBtn.click();
    expect(toggleBtn.getAttribute('aria-checked')).toBe('true');
    expect(document.querySelector('.price-monthly').hasAttribute('hidden')).toBe(true);
    expect(document.querySelector('.price-annual').hasAttribute('hidden')).toBe(false);
  });

  it('edge case: rapidly clicking the toggle multiple times resolves correctly', () => {
    toggleBtn.click(); // Annual
    toggleBtn.click(); // Monthly
    toggleBtn.click(); // Annual
    expect(toggleBtn.getAttribute('aria-checked')).toBe('true');
    expect(document.querySelector('.price-monthly').hasAttribute('hidden')).toBe(true);
    expect(document.querySelector('.price-annual').hasAttribute('hidden')).toBe(false);
  });

  it('invalid input: does not toggle if invalid event detail is passed', () => {
    const event = new dom.window.CustomEvent('click', { detail: { invalid: true } });
    toggleBtn.dispatchEvent(event);
    
    // Should remain in default state
    expect(toggleBtn.getAttribute('aria-checked')).toBe('false');
  });
});
