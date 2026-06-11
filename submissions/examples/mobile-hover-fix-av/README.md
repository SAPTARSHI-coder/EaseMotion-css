# Mobile "Sticky Hover" Architecture Fix

## What does this do?
Proposes a massive, structural CSS refactor to wrap all interactive `:hover` pseudo-classes globally inside `@media (hover: hover)` media queries. This permanently and natively solves the infamous "sticky hover" bug on iOS and Android devices across all framework components.

## How is it used?
Maintainers and open-source contributors must encapsulate all `:hover` rules within the `@media (hover: hover)` block. This standard ensures that hover-specific CSS rules are exclusively applied on devices equipped with a true pointer device (e.g., a desktop mouse or laptop trackpad).

```css
@media (hover: hover) {
  .ease-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--ease-shadow-lg);
  }
}
```

Simultaneously, components should heavily utilize the `:active` pseudo-class (written outside the media query) to provide immediate, transient tap feedback for mobile users.

## Why is it useful?
Currently, almost every interactive component inside the `components/` directory (spanning `buttons.css`, `cards.css`, `tooltips.css`, `navbar.css`, and 8+ other core layout files) applies `:hover` states entirely unconditionally. 

On touch devices (iOS/Android), tapping a button or card immediately triggers its hover state. However, because a smartphone lacks a physical mouse cursor that can "move away" from the element, the browser leaves the element permanently stuck in that hover state until the user explicitly taps somewhere else on the screen. This results in a highly degraded, buggy mobile UX (e.g., dropdowns getting stuck open, buttons looking permanently pressed). Encapsulating all hovers fixes this issue universally without relying on heavy, error-prone JavaScript touch detection scripts.
