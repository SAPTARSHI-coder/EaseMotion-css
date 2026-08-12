# Forgot Password — Email Token Lifecycle Demo

## What does this do?

Simulates the full "Forgot Password" flow using pure CSS radio-button state toggles. Walks through each step of the secure token lifecycle — request, email delivery, password reset, and token invalidation — exactly as a real backend implementation would handle it.

## How is it used?

Open `demo.html` and click through the 4 steps:

1. **Forgot Password** — enter your email to request a reset link
2. **Email Sent** — shows confirmation with a simulated countdown timer
3. **Reset Form** — enter and confirm a new password
4. **Success** — confirmation with token invalidation notice

A **Token Lifecycle** panel at the bottom explains the crypto/DB operations happening at each stage.

## Key visual features

- 4-step progress indicator with active/done/completed states
- Animated envelope bounce and success pulse
- Token expiration timer visual (15-minute window)
- Password rule hints for UX guidance
- Token lifecycle visualization panel

## CSS concepts used

- `:checked` sibling selectors for multi-step state management
- CSS custom properties for consistent theming
- `@keyframes` for fade-in, bounce, and pulse animations
- `transition` for progress bar smooth color shifts

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom form/step-specific styles.
