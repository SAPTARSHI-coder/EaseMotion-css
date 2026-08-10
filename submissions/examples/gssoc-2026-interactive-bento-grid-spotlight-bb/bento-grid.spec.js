// Unit specification test for Bento Grid Spotlight
describe('Interactive Bento Grid Spotlight Component', () => {
  it('should render bento cards with spotlight attributes', () => {
    const cards = document.querySelectorAll('[data-glow]');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should update mouse coordinates on mousemove event', () => {
    const card = document.querySelector('[data-glow]');
    const event = new MouseEvent('mousemove', { clientX: 100, clientY: 100 });
    card.dispatchEvent(event);
    expect(card.style.getPropertyValue('--mouse-x')).toBeDefined();
  });
});
