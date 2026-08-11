# Blur-Entrance Navbar — Minimalist Tech Layouts

A sticky navigation bar where each link starts slightly blurred and out of focus, then snaps sharply into view on hover with a smooth deblur transition.

## How It Works

Each nav link has `filter: blur(1.2px)` and `opacity: 0.7` in its resting state. On hover, both transition to `blur(0px)` and `opacity: 1`, creating the illusion of the text coming into focus. A small underline accent scales in from the left as a secondary cue.

The CTA button also starts with a slight blur and becomes crisp on hover, with a subtle lift and sky-blue box-shadow. The brand mark intentionally blurs on hover instead, adding a playful contrast.

## Customization

Override `--ben-sky` to change the accent color. Tweak the initial `blur()` value on `.ben-nav__link` for more or less resting blur. The underline delay is set to `0.06s` for a staggered feel.

## Accessibility

- `prefers-reduced-motion` removes all blur transitions and restores full opacity
- Focus-visible outlines on all interactive elements
- Semantic `<nav>` with `aria-label`
