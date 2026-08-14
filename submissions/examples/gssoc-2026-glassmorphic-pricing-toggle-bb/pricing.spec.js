// Unit specification test for Glassmorphic Pricing Card Toggle
describe('Glassmorphic Pricing Card Toggle Component', () => {
  it('should render pricing cards', () => {
    const cards = document.querySelectorAll('.pricing-card');
    expect(cards.length).toBe(2);
  });

  it('should toggle annual pricing state on toggle click', () => {
    const toggle = document.getElementById('billingToggle');
    const starterPrice = document.getElementById('priceStarter');
    toggle.click();
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(starterPrice.textContent).toBe('$15');
  });
});
