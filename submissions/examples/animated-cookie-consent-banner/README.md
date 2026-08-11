# Cookie Consent Banner (Slide-Up)

## What does this do?
A bottom-fixed banner that slides up on first visit to request cookie
consent, and stays dismissed on future visits via localStorage.

## How is it used?
Place .cookie-banner at the end of <body>. On load, a script checks
localStorage for prior consent — if absent, it adds .visible to trigger
the slide-up transition. Clicking "Accept" stores consent and removes the
class to slide it back out.

## Why is it useful?
- Near-universal real-world requirement for public sites (GDPR/cookie law)
- The project's own live demo/docs currently has no such banner
- Combines EaseMotion's entrance-animation strength with minimal persistence logic
- Fully self-contained, no external consent-management dependency