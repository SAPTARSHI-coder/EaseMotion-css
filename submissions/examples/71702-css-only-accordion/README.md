# CSS-Only Accordion Component (`ease-accordion`)

A pure HTML + Vanilla CSS disclosure accordion component featuring checkbox-driven expansion (`:checked ~ .ease-accordion-content`), smooth `max-height` and `opacity` transitions, rotating indicator chevrons, accessible focus-visible keyboard controls, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive collapsible accordion without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Checkbox-Driven `:checked` Mechanics**: Uses native `<input type="checkbox">` elements paired with `<label>` controls and CSS sibling combinators to trigger expansion seamlessly.
- **Smooth `max-height` Expansion**: Transitions content height smoothly via `max-height var(--acc-duration, 0.35s) ease-in-out` and rotates the indicator icon 180 degrees.
- **100% Accessible**: Uses a visually-hidden `.sr-only` clip pattern for inputs (rather than `display: none`), preserving native keyboard focusability (`Tab`, `Space`, `Enter`), visible focus rings, and screen reader announcements. Includes `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability & Motion Controls**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-accordion">
  <!-- Visually hidden checkbox toggle -->
  <input
    type="checkbox"
    id="faq-1"
    class="ease-accordion-toggle sr-only"
    checked
  />

  <!-- Accordion Label Header -->
  <label for="faq-1" class="ease-accordion-header">
    <span class="header-title">What is EaseMotion CSS?</span>
    <svg
      class="ease-accordion-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </label>

  <!-- Collapsible Content Panel -->
  <div class="ease-accordion-content">
    <div class="content-inner">
      EaseMotion CSS is a zero-dependency library of pure HTML and CSS motion
      components.
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-accordion {
  --acc-duration: 0.35s;
  --acc-max-height: 500px;
  --acc-primary: #0284c7;
  --acc-border: #cbd5e1;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71702-css-only-accordion/demo.html) directly in any modern web browser to interact with the CSS accordion component offline.
