# Component: ease-cookie-consent-banner

**Category:** Component — Popups & Overlays  
**Type:** Pure CSS  
**Folder:** `submissions/examples/ease-cookie-consent-banner/`

---

## What does this do?
Displays a clean, sliding cookie consent banner with zero JavaScript. It slides in and fades on load, and runs a smooth slide-out exit transition when accepted or declined.

---

## How is it used?

Wrap the hidden controller checkbox and the banner container inside a wrapper:

```html
<div class="ease-cookie-banner-wrapper">
  <!-- State input (must have class ease-cookie-state and precede the banner) -->
  <input type="checkbox" id="cookie-banner-checkbox" class="ease-cookie-state">

  <!-- Banner Box -->
  <div class="ease-cookie-banner">
    <div class="ease-cookie-content">
      <div class="ease-cookie-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"></path>
          <path d="M8.5 8.5v.01"></path>
          <path d="M16 15.5v.01"></path>
        </svg>
      </div>
      <div class="ease-cookie-text-wrapper">
        <h4 class="ease-cookie-title">We value your privacy</h4>
        <p class="ease-cookie-description">
          We use cookies to improve experience and compile traffic details.
          <a href="#">Cookie Policy</a>.
        </p>
      </div>
    </div>

    <!-- Action Labels (bind to the checkbox ID to trigger the CSS dismiss animation) -->
    <div class="ease-cookie-actions">
      <label for="cookie-banner-checkbox" tabindex="0" class="ease-cookie-btn ease-cookie-btn--text">Decline</label>
      <label for="cookie-banner-checkbox" tabindex="0" class="ease-cookie-btn ease-cookie-btn--primary">Accept All</label>
    </div>
  </div>
</div>
```

---

## Why is it useful?

1. **Pure CSS Interactivity:** Avoids bringing in external libraries or custom JavaScript scripts. By binding action triggers (`Accept`, `Decline`) as `<label>` tags pointing to the state checkbox, clicking them toggles the checked status, firing the exit transition completely via CSS selectors.
2. **Animation-first & Hardware Accelerated:** Animates `transform` (translating along Y axis and scaling) and `opacity` properties. This triggers composite changes rather than layouts or repaints, keeping transition speeds at a fluid 60fps.
3. **Multiple Positioning Modifiers:** Supports placement on bottom-right (default), bottom-left, bottom-center, top-center, and a top notification bar with simple class suffixes.
4. **Accessibility First:**
   - Incorporates `tabindex="0"` on control labels.
   - Automatically supports `@media (prefers-reduced-motion: reduce)` to bypass slides/scales and perform a simple, quick fade animation for motion-sensitive users.

---

## Modifier Classes

| Class Name | Target Element | Description |
|---|---|---|
| `.ease-cookie-state` | `input[type="checkbox"]` | Hidden state toggle controller. must be a sibling of the banner. |
| `.ease-cookie-banner` | Banner Box Container | The core popup component. Styles position, backdrop blurs, and sets entrance transitions. |
| `.ease-cookie-banner--bottom-left` | Banner Box Container | Modifies placement to bottom-left of viewport. |
| `.ease-cookie-banner--bottom-center` | Banner Box Container | Modifies placement to center-bottom of viewport. |
| `.ease-cookie-banner--top` | Banner Box Container | Aligns top-center of screen. Entrances slide downwards. |
| `.ease-cookie-banner--top-bar` | Banner Box Container | Transforms banner into a full-width alert strip at the top. |

---

## Customization (CSS Variables)

Visual tokens are configured inside `:root` for simple custom overrides:

```css
:root {
  --ease-cookie-duration: 0.5s;                  /* Animation transition length */
  --ease-cookie-ease: cubic-bezier(0.16, 1, 0.3, 1); /* Custom easing curve */
  --ease-cookie-bg: rgba(17, 24, 39, 0.85);      /* Glassmorphic backdrop color */
  --ease-cookie-color: #f3f4f6;                  /* Primary text color */
  --ease-cookie-text-muted: #9ca3af;             /* Subtext color */
  --ease-cookie-border: rgba(255, 255, 255, 0.08);/* Boundary edge line color */
  --ease-cookie-accent: #6366f1;                 /* Primary button and icon color */
  --ease-cookie-radius: 16px;                    /* Corner rounding radius */
}
```

To modify these properties locally:
```html
<div class="ease-cookie-banner" style="--ease-cookie-accent: #10b981; --ease-cookie-radius: 8px;">
   ...
</div>
```

---

## Contribution Notes
- Leverages sibling combinator selectors (`:checked ~`) for high performance dismiss transitions.
- Designed with responsive styling supporting tablet & mobile viewports natively.
