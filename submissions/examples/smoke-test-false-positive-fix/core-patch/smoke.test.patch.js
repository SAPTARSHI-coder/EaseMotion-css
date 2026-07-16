/* Maintainer patch for tests/smoke.test.js — replace loading button test with: */

it('should hide plain text in loading buttons and keep the spinner visible', () => {
  expect(css).toContain('.ease-btn-loading');
  expect(css).toContain('color: transparent');
  expect(css).toContain('.ease-btn-loading > *');
  expect(css).toContain('visibility: hidden');
  expect(css).toContain('.ease-btn-loading::after');
  expect(css).toContain('border: 2px solid currentColor');
});
