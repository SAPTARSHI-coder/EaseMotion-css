// Unit specification test for Glassmorphic Command Palette
describe('Glassmorphic Command Palette Component', () => {
  it('should initialize with backdrop hidden', () => {
    const backdrop = document.getElementById('paletteBackdrop');
    expect(backdrop.hasAttribute('hidden')).toBe(true);
  });

  it('should open modal when trigger button is clicked', () => {
    const triggerBtn = document.getElementById('openPaletteBtn');
    const backdrop = document.getElementById('paletteBackdrop');
    triggerBtn.click();
    expect(backdrop.classList.contains('active')).toBe(true);
    expect(triggerBtn.getAttribute('aria-expanded')).toBe('true');
  });

  it('should close modal when ESC key is pressed', () => {
    const backdrop = document.getElementById('paletteBackdrop');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(backdrop.hasAttribute('hidden')).toBe(true);
  });
});
