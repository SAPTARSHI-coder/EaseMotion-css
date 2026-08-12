# Focus-Ring Pulse Button (Keyboard Accessible)

A highly accessible, premium button component styled for modern interfaces. It leverages the native `:focus-visible` pseudo-class to apply a custom `focus-ring-ripple` pulse animation only when navigated via keyboard (preserving standard styling during mouse clicks).

## Features
- **Keyboard-Only Visuals**: Uses `:focus-visible` to ensure the pulsing ring is only trigered by keyboard interactions (`Tab` key), leaving mouse actions outline-free and clean.
- **Custom Pulse Animation**: Integrates an expanding box-shadow ripple ring animation (`focus-ring-ripple`) that scales out and fades seamlessly.
- **Micro-interactions**: Subtle hover translations, background transitions, and magnetic-like focus feedback.
- **No JavaScript**: Pure CSS solution, self-contained and zero external library overhead.
- **EaseMotion Style Guide**: Integrates with EaseMotion CSS layout tokens, radiuses, and spacing utilities.

## Files
- `demo.html`: Interactive accessibility testing playground containing multiple button variants (primary, secondary, danger) to test via keyboard tab navigation.
- `style.css`: Button presets, focus outline overrides, and the core expanding pulse animation keyframes.