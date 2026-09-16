# Accessibility Testing Checklist

## What does this do?

Provides an accessibility testing checklist and a static demo page that models correct, WCAG-compliant HTML patterns for navigation landmarks, form labels, focus visibility, and image alt text.

## How is it used?

The demo showcases the following accessible markup patterns:

```html
<!-- Navigation landmark with aria-label -->
<nav aria-label="Primary Navigation">
  <a href="#main">Skip to content</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Properly associated label/input pair -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- Accessible submit button -->
<button type="submit">Subscribe</button>

<!-- Image with descriptive alt text -->
<img src="logo.png" alt="Accessibility testing logo showing the a11y abbreviation">
```

## Why is it useful?

EaseMotion CSS components should be usable by everyone — keyboard-only users, screen-reader users, and users who depend on sufficient color contrast. This checklist ensures that every component meets WCAG AA standards and gives contributors a concrete reference for writing accessible markup alongside their animations and styles.

## Overview

This submission documents an automated accessibility (a11y) testing approach using axe-core integrated with Playwright. It provides a reference checklist of scenarios to validate, a static demo page that models correct accessible markup, and an example test snippet that can be adapted into any CI pipeline.

## Covered Scenarios

- Color contrast meets WCAG AA minimum ratios
- Keyboard focus visibility and logical tab order
- ARIA attribute usage on landmarks and interactive elements
- Semantic heading structure (single `<h1>`, logical hierarchy)
- Landmark regions (`<nav>`, `<main>`)
- Form label associations (`<label for="">` / `<input id="">`)
- Image alt text for meaningful images
- Touch target sizing (minimum 44 × 44 px interactive area)

## Expected Behavior

All interactive elements in the demo (links, the email input, and the subscribe button) are fully keyboard-operable and display a visible focus indicator when navigated with the Tab key. The form input is programmatically associated with its label so assistive technology announces the field purpose.

The page uses contrast-safe colors that satisfy WCAG AA requirements (at least 4.5:1 for normal text and 3:1 for large text). The image carries descriptive alt text, and landmark regions (`<nav>`, `<main>`) give screen-reader users a reliable page outline.

## Testing Checklist

- [ ] Run axe-core against the demo page and confirm zero violations
- [ ] Tab through all interactive elements and verify visible focus rings
- [ ] Confirm the `<label>` is announced when the email input receives focus
- [ ] Verify the `<img>` alt text is read aloud by a screen reader
- [ ] Check color contrast ratios with a tool such as the Chrome DevTools contrast checker
- [ ] Validate landmark regions appear in the screen-reader rotor / landmarks list

Example automated test using axe-core and Playwright:

```javascript
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test('demo page has no a11y violations', async ({ page }) => {
  await page.goto('http://localhost:3000/demo.html');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
```

## Demo

Open `demo.html` directly in a browser to review the accessible form, navigation landmark, and focus-visible states.

## Related Issue

Closes #30324
