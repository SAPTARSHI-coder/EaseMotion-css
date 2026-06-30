# Animated Cookie Consent Banner

## What does this add?

A cookie consent banner that slides up from the bottom of the page with a smooth entrance, and slides back down on dismiss — using EaseMotion's existing `.ease-btn` button system for Accept/Decline.

## How is it used?

```html
<div
  class="ease-cookie-banner"
  id="cookieBanner"
  role="dialog"
  aria-live="polite"
  aria-label="Cookie consent"
>
  <div class="ease-cookie-banner-content">
    <p class="ease-cookie-banner-text">
      We use cookies to improve your experience...
    </p>
    <div class="ease-cookie-banner-actions">
      <button class="ease-btn ease-btn-outline ease-btn-sm">Decline</button>
      <button class="ease-btn ease-btn-primary ease-btn-sm">Accept</button>
    </div>
  </div>
</div>
```

```js
// Entrance: translateY(100%) -> 0
cookieBanner.classList.add("is-visible");

// Dismiss: translateY(0) -> translateY(100%)
cookieBanner.classList.remove("is-visible");
cookieBanner.classList.add("is-dismissing");
```

The banner starts at `transform: translateY(100%)` (fully off-screen below the viewport). Adding `.is-visible` transitions it to `translateY(0)`. On Accept/Decline, removing `.is-visible` and adding `.is-dismissing` transitions it back to `translateY(100%)` with a slightly quicker easing for the exit.

## Why does it fit EaseMotion CSS?

A cookie banner is needed on nearly every real site, and an abrupt `display:block`/`display:none` toggle feels jarring compared to the smooth slide-up most production sites use. This reuses EaseMotion's own `.ease-btn` / `.ease-btn-primary` / `.ease-btn-outline` classes for the actions instead of inventing new button styles, so it drops straight into a project already using the design system.

## Files

- demo.html
- style.css

## Usage

Open `demo.html`. The banner slides up shortly after load. Click Accept or Decline to see it slide back down, then use "Show Cookie Banner Again" to replay the entrance.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

- `role="dialog"` and `aria-label="Cookie consent"` for screen readers
- `aria-live="polite"` so the banner's appearance is announced without interrupting
- Respects `prefers-reduced-motion: reduce` — the banner still shows/hides, just without the slide transition
