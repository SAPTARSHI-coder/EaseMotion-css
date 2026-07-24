# Neon Glow Text Utility

A reusable neon glow text effect built with CSS `text-shadow` and a subtle pulsing animation. Great for headings, logos, hero sections, buttons, and highlighted call-to-action text.

## Files
- `demo.html` — usage examples with multiple color variants
- `style.css` — the `.neon-glow` utility class and color variant modifiers

## Usage
Add the `neon-glow` class to any text element:

\```html
<h1 class="neon-glow">Neon Glow Text</h1>
\```

## Customization

The glow color is controlled by the `--neon-color` CSS custom property. Two ready-made variants are included:

\```html
<p class="neon-glow neon-glow--pink">Pink glow</p>
<button class="neon-glow neon-glow--green">Green glow</button>
\```

Default color is cyan (`#00e5ff`). Override it directly for a custom color:

\```html
<h1 class="neon-glow" style="--neon-color: #ffcc00;">Custom Gold Glow</h1>
\```

## Accessibility
- Respects `prefers-reduced-motion`: the pulsing animation is disabled for users who have reduced motion enabled at the OS/browser level.
- Works on any text element (`h1`–`h6`, `p`, `button`, `span`, etc.) without altering semantics.