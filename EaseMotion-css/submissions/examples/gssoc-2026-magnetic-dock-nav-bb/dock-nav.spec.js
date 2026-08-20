// Unit specification test for Magnetic Dock Navigation
describe('Magnetic Dock Navigation Component', () => {
  it('should render dock items with tooltips', () => {
    const dockItems = document.querySelectorAll('.dock-item');
    expect(dockItems.length).toBeGreaterThan(0);
    dockItems.forEach(item => {
      expect(item.getAttribute('data-tooltip')).not.toBeNull();
    });
  });

  it('should toggle active dock item on mouseenter', () => {
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems[1].dispatchEvent(new MouseEvent('mouseenter'));
    expect(dockItems[1].classList.contains('active')).toBe(true);
  });
});
