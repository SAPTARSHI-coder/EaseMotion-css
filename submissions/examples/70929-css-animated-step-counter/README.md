# CSS Animated Step Counter Component (`ease-step-counter`)

A pure HTML + Vanilla CSS animated step counter component featuring sliding number counter transitions (`transform: translateY(-25%)`), progressive progress track filling, active step node highlights, keyboard accessible navigation, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive step wizard counter animation without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Radio `:checked` State Mechanics**: Uses native `<input type="radio">` state triggers paired with `<label>` nodes to drive step navigation seamlessly.
- **Sliding Number Window**: Transitions numbers vertically (`01` &rarr; `02` &rarr; `03` &rarr; `04`) using `transform: translateY()` on `.counter-number-slider`.
- **100% Accessible**: Node labels and navigation controls use `<label tabindex="0">` with explicit focus rings (`:focus-visible`). Preserves screen reader context and includes `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-step-counter-wrapper">
  <!-- Visually hidden state radio inputs -->
  <input type="radio" name="step-group" id="step-1" class="sr-only" checked />
  <input type="radio" name="step-group" id="step-2" class="sr-only" />

  <section class="step-showcase-card">
    <nav class="stepper-nav">
      <label for="step-1" class="step-node node-1">Step 1</label>
      <label for="step-2" class="step-node node-2">Step 2</label>
    </nav>

    <div class="counter-number-window">
      <div class="counter-number-slider">
        <span class="num">01</span>
        <span class="num">02</span>
      </div>
    </div>
  </section>
</div>
```

### Customization Variables

```css
.ease-step-counter-wrapper {
  --step-duration: 0.4s;
  --step-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --step-primary: #0284c7;
  --step-border: #cbd5e1;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70929-css-animated-step-counter/demo.html) directly in any modern web browser to interact with the animated step counter component offline.
