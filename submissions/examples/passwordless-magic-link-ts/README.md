# Passwordless Magic Link Sign-in Panel

## What does this do?

A self-contained sign-in card for passwordless (magic link) authentication. It has two CSS states:

1. **Form view** — email input, submit button, optional social sign-in row, and a footer note.
2. **Sent view** — confirmation screen with an animated envelope icon, sparkle particles, and a resend/back action.

The state switch is driven by a single class: add `is-sent` to `.magic-link-card` to show the confirmation view. No CSS framework or preprocessor is needed.

## How is it used?

```html
<!-- Default: form view -->
<form class="magic-link-card" novalidate>

  <div class="magic-link-form-view">
    <p class="magic-link-title">Sign in without a password</p>
    <p class="magic-link-sub">We'll email you a secure link.</p>

    <label class="magic-link-label" for="email">Email address</label>
    <input class="magic-link-input" type="email" id="email" placeholder="you@example.com" required />

    <button class="magic-link-btn" type="button">Send magic link</button>
  </div>

  <div class="magic-link-sent-view">
    <div class="magic-link-envelope" aria-hidden="true">
      <div class="magic-link-envelope-bg"></div>
      <div class="magic-link-sparks">
        <span class="magic-link-spark"></span>
        <span class="magic-link-spark"></span>
        <span class="magic-link-spark"></span>
        <span class="magic-link-spark"></span>
      </div>
      <!-- envelope SVG here -->
    </div>
    <p class="magic-link-sent-title">Check your inbox</p>
    <p class="magic-link-sent-sub">We sent a link to <span class="magic-link-sent-email">you@example.com</span></p>
  </div>

</form>
```

To flip to the confirmation state from JavaScript:

```js
document.querySelector('.magic-link-card').classList.add('is-sent');
```

To go back:

```js
document.querySelector('.magic-link-card').classList.remove('is-sent');
```

The card also lifts on `:focus-within` via a `translateY(-2px)` transition and a purple shadow, giving immediate visual feedback when the user clicks into the email field.

## Why is it useful?

Passwordless sign-in is increasingly common in SaaS, developer tools, and consumer apps. This example shows how form feedback and a confirmation state can be handled with polished motion — a subtle card lift on focus, a pop entrance on the envelope icon, orbiting sparkle particles, and a pulsing ring — while staying entirely framework-free and easy to adapt. The two-view pattern (form → confirmation) is driven by a single CSS class, which maps directly to how a real integration would work. Dark mode is handled via `prefers-color-scheme` and `prefers-reduced-motion` disables all animations while keeping both views fully usable.
