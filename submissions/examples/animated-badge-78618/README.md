# Animated Badge

Documentation showcase for EaseMotion CSS issue #78618. This example demonstrates compact status, notification, and attention badges with lightweight CSS motion.

## What This Example Demonstrates

The component uses native links and buttons so the badge remains useful as an interface element rather than being only decorative. Each badge has a distinct purpose: status communication, a notification count, or an attention action.

The animation is intentionally short and subtle. The visual treatment uses transform, opacity, and emphasis rather than JavaScript-driven timers.

## Files

- `demo.html` — complete semantic showcase with multiple badge variants.
- `style.css` — layout, badge surfaces, animation, focus states, responsive behavior, and reduced-motion handling.

## Variants

### Status badge

The Available badge combines a status dot with a readable label. The dot provides a visual cue while the text remains the source of meaning.

### Notification badge

The Updates badge demonstrates a compact numeric count. The count includes an accessible label so assistive technology can understand what the number represents.

### Attention badge

The Attention button demonstrates how the same visual language can be applied to an actionable state.

## Usage

Copy the badge markup into an existing interface and replace the sample labels, destinations, and counts with application data. Keep interactive elements as native `<a>` or `<button>` elements so keyboard and assistive technology behavior is preserved.

## Accessibility

- Native interactive elements are used for actions and navigation.
- Focus-visible styling provides a clear keyboard indicator.
- Decorative status dots are hidden from assistive technology.
- The notification count has an explicit accessible description.
- Reduced-motion preferences are respected.

## Responsive Behavior

The badge group wraps naturally on narrow screens. Spacing and badge padding are reduced at smaller widths while maintaining a comfortable touch target.

## Customization

Badge colors, radii, shadows, and animation timing can be adjusted in `style.css`. The component does not require a JavaScript runtime or external dependency.

## Preview

Open `demo.html` directly in a browser. The page is self-contained apart from its local stylesheet.
