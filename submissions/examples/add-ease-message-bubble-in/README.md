# Chat Message Bubble Entrance (add-ease-message-bubble-in)

A premium, highly fluid chat message bubble entrance animation. It uses organic spring-physics simulations and dynamic skew shifts to present incoming and outgoing messages with an elegant "jelly pop" motion.

## What does this do?

This animation coordinates scale, translation, and horizontal skew to emulate organic physics:

1. **Directional Origin**: Incoming messages scale up anchoring from the bottom-left corner (`transform-origin: bottom left`). Outgoing messages anchor from the bottom-right corner (`transform-origin: bottom right`).
2. **Dynamic Skew**: As the bubble rises, it skews horizontally toward its anchoring origin, creating a subtle "jelly-swoosh" stretching effect.
3. **Spring Bounce**: Reaching peak scale, the bubble oscillates using standard spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to settle smoothly back to `scale(1)`.

## How is it used?

Include the CSS utility class `.add-ease-message-bubble-in` along with the corresponding directional modifier `.is-incoming` or `.is-outgoing`:

### 1. Incoming Message Bubble (Received)

```html
<div class="chat-bubble incoming add-ease-message-bubble-in is-incoming">
  <span>Hello! How can I help you today?</span>
  <span class="chat-time">10:42 AM</span>
</div>
```

### 2. Outgoing Message Bubble (Sent)

```html
<div class="chat-bubble outgoing add-ease-message-bubble-in is-outgoing">
  <span>Show me the new spring animation.</span>
  <span class="chat-time">10:43 AM</span>
</div>
```

### 3. Dynamic Customization (CSS Custom Properties)

You can customize the animation's behavior globally or inline using the following custom properties:

```css
.add-ease-message-bubble-in {
  --ease-bubble-duration: 350ms; /* Timing speed */
  --ease-bubble-scale-start: 0.35; /* Starting scale */
  --ease-bubble-skew-start: 8deg; /* Starting skew stretch angle */
  --ease-bubble-translate-start: 24px; /* Vertical/horizontal offset */
}
```

## Timings & Specifications

- **Default Duration**: `0.35s` (using EaseMotion's `--ease-speed-medium` token).
- **Scale Entrance**: Starts at `0.35` scale, peaks at `1.04` at `60%` duration, and settles to `1.00` by `100%`.
- **Skew Transition**: Starts at `8deg`, stretches back to `-2.6deg` at `60%`, settles to `1deg` at `85%`, and finishes at `0deg` (normal).
- **Translation Offset**: Displaces by `24px` on the Y-axis and `24px` toward the respective edge on the X-axis at start, returning to center.

## Design Tokens Used

This example links directly to the EaseMotion CSS core design tokens:

- `--ease-color-primary` & `--ease-color-secondary`: Outgoing message bubble gradient fill.
- `--ease-color-neutral-800` & `--ease-color-neutral-100`: Incoming message bubble backgrounds in dark/light modes.
- `--ease-speed-medium` & `--ease-speed-fast`: Smooth transitions and timing defaults.
- `--ease-radius-xl` & `--ease-radius-lg`: Border radius sizing.
- `--ease-shadow-sm`: Subtle message elevation.

## Accessibility (a11y)

- Respects user preferences for reduced motion (`prefers-reduced-motion: reduce`).
- Under reduced motion:
  - Bouncy physics, origin anchors, and skew distortions are bypassed.
  - The bubble fades in and expands slightly (`scale(0.96) -> scale(1)`) using a standard linear ease over a shortened `180ms` duration.
- Semantic HTML tags, titles, list containers, and screen-reader elements are fully integrated for assistive technologies.

## Performance

- Leverages GPU-accelerated `transform: translate3d(...)` offsets and `skewX()` transformations to prevent layout thrashing and repaints.
- The `will-change` property targets `transform` and `opacity`, prompting modern browsers to allocate dedicated compositor layers for rendering at a locked 60fps.
