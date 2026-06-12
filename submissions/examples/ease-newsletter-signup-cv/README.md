# Newsletter Signup (cv variant)

## What does this do?

A premium newsletter signup component with glassmorphism design, floating labels, animated success states, and three distinct variants (default glass, compact inline, premium gradient) — all built with pure CSS.

## How is it used?

### Default Glass Variant

```html
<div class="ease-newsletter-signup-cv">
  <div class="ease-newsletter-signup-cv-bg"></div>

  <div class="ease-newsletter-signup-cv-content">
    <div class="ease-newsletter-signup-cv-icon">📧</div>
    <h2 class="ease-newsletter-signup-cv-heading">Stay in the Loop</h2>
    <p class="ease-newsletter-signup-cv-subheading">Your description here</p>

    <form
      class="ease-newsletter-signup-cv-form"
      onsubmit="event.preventDefault(); this.classList.add('ease-newsletter-signup-cv-success');"
    >
      <div class="ease-newsletter-signup-cv-input-wrapper">
        <input
          type="email"
          placeholder=" "
          required
          class="ease-newsletter-signup-cv-input"
          id="email"
        />
        <label for="email" class="ease-newsletter-signup-cv-label">
          Your email address
        </label>
      </div>
      <button type="submit" class="ease-newsletter-signup-cv-btn">
        <span class="ease-newsletter-signup-cv-btn-text">Subscribe</span>
        <span class="ease-newsletter-signup-cv-btn-icon">→</span>
        <span class="ease-newsletter-signup-cv-btn-success">✓ Subscribed!</span>
      </button>
    </form>

    <p class="ease-newsletter-signup-cv-footer">
      ✓ No spam · Unsubscribe anytime
    </p>
  </div>
</div>
```
