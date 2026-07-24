# Animated Icon Buttons

## What does this do?
This example provides a collection of reusable patterns for animating icons within buttons. It covers common interaction design patterns like arrow sliding, icon rotation, pulsing, and icon-swapping transitions.

## How is it used?
Apply the following helper classes to your buttons:

1. **Arrow Slide**: Use `.ease-btn-slide` with `.ease-btn-icon-right` or `.ease-btn-icon-left`.
2. **Icon Rotation**: Use `.ease-btn-rotate` or `.ease-btn-rotate-45`.
3. **Pulse Effect**: Use `.ease-btn-pulse`.
4. **Icon Swap**: Use `.ease-btn-swap` with `.icon-primary` and `.icon-secondary` elements.
5. **Alt Loading**: Use `.ease-btn-loading-alt` for buttons with persistent animated icons.

## Why is it useful?
Icons add clarity to buttons, and animating them on hover provides excellent feedback to the user. It makes the UI feel "snappy" and interactive, guiding the user's focus towards the action (e.g., an arrow sliding right indicates progression).

## Tech Stack
- HTML
- CSS (Native Transitions & Animations)
- EaseMotion CSS (Core Variables, Animations, Components)

## Preview
Open `demo.html` directly in your browser to see the various animated icon button styles.

## Contribution Notes
- Leverages existing EaseMotion design tokens (e.g., `--ease-speed-medium`, `--ease-ease-bounce`).
- Full support for `prefers-reduced-motion`.
- Responsive design compatible with standard EaseMotion grid utilities.
