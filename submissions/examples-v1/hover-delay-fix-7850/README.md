# Hover Delay Fix (#7850)

This submission resolves a critical UX bug where `.ease-delay-*` stagger utilities were unintentionally adding lags to hover interactions.

## The Bug
Previously, `.ease-delay-*` applied both `animation-delay` AND `transition-delay`. Thus, when used to stagger entrance animations (`ease-fade-in`), it would permanently saddle the element with a transition delay, ruining interactive states like `.ease-hover-lift`.

## The Fix
This submission provides CSS overrides that decouple the two properties:
1. `.ease-delay-*` now purely applies `animation-delay` for entrance staggers (transition-delay is reset to 0s).
2. A new suite of `.ease-transition-delay-*` classes was created for explicit transition delays if a developer needs them.

This guarantees smooth hover effects immediately upon interaction, improving the perceived performance of the entire framework.

*Note for Maintainers: Please merge these overrides directly into `core/animations.css` when accepting this PR.*
