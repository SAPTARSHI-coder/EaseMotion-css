# Pricing Card Tier Toggle Switch State Test

1. What does this do? This provides a reference implementation and a Vitest automated test suite for the Pricing Card Tier Toggle. It verifies the ARIA state mutations and visibility toggling for Monthly vs Annual pricing elements.
2. How is it used? The `pricing-tier-toggle.test.js` file contains a self-contained JSDOM Vitest specification. The maintainers can copy this test directly into the `tests/` directory to satisfy automated edge-case assertions.
3. Why is it useful? Testing UI logic ensures components don't silently break in the future. This verifies happy paths, rapid repeated clicks (edge case), and simulated invalid input to guarantee robust behavior for the EaseMotion CSS framework elements.
