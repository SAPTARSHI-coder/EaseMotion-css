# Wobble Newsletter Popup

## What does this do?

This submission creates a responsive, accessible newsletter popup with a playful wobble entrance and a medical-dashboard-inspired visual design using only HTML and CSS.

## How is it used?

```html
<details class="newsletter-controller-jp" open>
  <summary class="newsletter-toggle-jp">
    Open or close newsletter popup
  </summary>

  <div class="popup-backdrop-jp">
    <section class="newsletter-popup-jp ease-wobble-in-jp">
      <h2>Smarter health updates, minus the noise.</h2>

      <form class="newsletter-form-jp">
        <label for="newsletter-email">Email address</label>

        <div class="field-row-jp">
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <button type="submit" class="ease-hover-grow-jp">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  </div>
</details>
```

Customize the animation and visual tokens through CSS variables:

```css
:root {
  --ease-wobble-duration-jp: 820ms;
  --ease-wobble-curve-jp: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-fast-jp: 240ms;
  --ease-popup-radius-jp: 1.75rem;
  --ease-medical-blue-jp: #2c7df0;
  --ease-medical-green-jp: #20b38b;
}
```

The native `details` and `summary` elements allow the popup to be opened and closed without JavaScript.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Newsletter popups are common in landing pages, dashboards, medical portals, SaaS products, and content platforms.

This example fits EaseMotion CSS because it:

- uses a clear wobble animation to introduce the popup;
- exposes reusable motion variables and keyframes;
- uses native keyboard-accessible open and close controls;
- includes semantic form labels and validation;
- provides visible focus states;
- adapts to small screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
