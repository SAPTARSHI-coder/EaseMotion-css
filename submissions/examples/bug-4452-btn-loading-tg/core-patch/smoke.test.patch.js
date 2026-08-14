/* Maintainer patch for tests/smoke.test.js — replace loading button test with: */

it('should hide plain text in loading buttons and keep the spinner visible', () => {
  expect(css).toMatch(/\.ease-btn-loading\s*\{[^}]*font-size:\s*0/);
  expect(css).toMatch(/\.ease-btn-loading\s*\{[^}]*pointer-events:\s*none/);
  expect(css).not.toMatch(/\.ease-btn-loading\s*\{[^}]*color:\s*transparent/);
  expect(css).toContain('.ease-btn-loading > *');
  expect(css).toContain('visibility: hidden');
  expect(css).toContain('.ease-btn-loading::after');
  expect(css).toContain('--ease-btn-spinner-color');
  expect(css).toMatch(/\.ease-btn-loading::after\s*\{[^}]*border:\s*2px solid var\(--ease-btn-spinner-color/);
});
