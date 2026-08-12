# Cassette Player Controls

A fully rendered animated cassette player component for EaseMotion issue #66770.

## Requirements covered

- Real cassette player hardware interface rather than a generic animated container.
- Semantic elements for reel hubs, tape window, transport buttons and stereo level meter.
- Component-specific CSS animations with named keyframes.
- Pure HTML and CSS.
- Native focusable controls with visible focus states.
- Responsive layouts for desktop, tablet and mobile.
- Reduced-motion support.

## Component anatomy

The cassette shell represents the physical tape body. Two reel hubs rotate in opposite directions, while the tape strip remains visually threaded between them. The display provides track context, the transport row provides familiar playback controls, and the level meter adds a rhythmic audio cue.

## Motion

`reel-spin` provides continuous rotation. The two reels use different durations and opposite directions to make the tape path feel mechanically plausible. `level-pulse` animates the stereo meter with staggered delays. A separate `window-glare` animation gives the cassette window a restrained reflective sweep.

## Accessibility

Transport controls are native buttons with accessible labels. The cassette window and reels have descriptive labels. Focus-visible outlines are provided, and `prefers-reduced-motion` disables continuous animation for users who request reduced motion.

## Customization

Edit the CSS variables at the top of `style.css` to change the deck, display, accent and background palette. Reel size, animation speed and meter timing can also be adjusted directly in the component rules.

## Responsive behavior

The desktop layout presents the full deck with four analog controls. At tablet widths the control bank wraps and the anatomy grid becomes two columns. On mobile the cassette window, transport controls and knobs scale down and stack without requiring horizontal scrolling.

## Review checklist

- [x] Reel hubs
- [x] Tape window
- [x] Play control
- [x] Pause control
- [x] Level meter
- [x] Named keyframes
- [x] Responsive layout
- [x] Reduced-motion support
- [x] Keyboard focus states
