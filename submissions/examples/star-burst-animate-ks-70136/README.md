# CSS Star Burst Animate

## 1. Feature Overview
A pure HTML & CSS animation component showing a minimalist, technology-inspired star that starts small and bursts into a larger star with radiating rays when activated.

## 2. How It Works
The animation is controlled entirely with HTML + CSS. It does not require any JavaScript. The interaction is driven by a visually-hidden `<input type="checkbox">` and the CSS `:checked` pseudo-class.

## 3. Star Structure
- **Activation Control**: A semantic `input[type="checkbox"]` with an associated `<label>` that acts as the visible button.
- **Star Element**: The main star shape is created using a single HTML element and a CSS `clip-path` polygon.
- **Burst Rays**: The rays surrounding the star are created using separate HTML `div` elements, rotated via their containers and translated outwards during animation.

## 4. Features
- Pure HTML/CSS
- CSS-only activation
- Star burst animation
- Radiating rays
- Smooth transitions
- Responsive layout
- Keyboard accessibility
- Focus-visible state
- Reduced-motion support
- No external dependencies

## 5. CSS Custom Properties

| Variable | Purpose |
| --- | --- |
| `--star-bg` | Demo background |
| `--star-surface` | Surface color |
| `--star-accent` | Star/ray accent |
| `--star-text` | Primary text color |
| `--star-muted` | Secondary text color |
| `--star-border` | Border color |
| `--star-shadow` | Container box shadow |
| `--star-glow` | Glow/shadow color for the star and rays |
| `--star-radius` | Container border radius |
| `--star-duration` | Animation duration |

## 6. Responsive Behavior
The component uses a fluid layout with `clamp()` for typography and flexible flexbox containers. The layout is optimized to look great on Desktop, Tablet, and Mobile devices. The star always remains centered and fully visible on small screens without horizontal scrolling.

## 7. Accessibility
- **Semantic Controls**: Uses a native checkbox and label for state management.
- **Keyboard Navigation**: The visually hidden checkbox remains focusable via the keyboard.
- **Visible Focus State**: When focused, the control displays a clear `outline` matching the accent color.
- **Sufficient Contrast**: Colors are chosen to provide good contrast against the dark background.
- **No Color-only Communication**: State changes are communicated via shape, position, and text, not just color.

## 8. Reduced Motion
The component respects the `prefers-reduced-motion: reduce` media query. When enabled, animations and transitions jump instantly to their end states (`0.01ms` duration). The activated state displays a statically expanded star with visible rays, ensuring the component remains functional and understandable without relying on motion.

## 9. Usage

```html
<input type="checkbox" id="star-toggle" class="star-toggle sr-only">
<label for="star-toggle" class="star-control">
  <span class="control-text">Activate Star Burst</span>
</label>

<div class="star-demo">
  <!-- Star elements here -->
</div>
```

*Note: JavaScript is completely unnecessary. All interactivity is handled by CSS.*

## 10. Browser Compatibility
This component uses modern CSS features such as:
- CSS Flexbox
- CSS custom properties (`:root`)
- CSS animations and keyframes
- `clip-path`
- `:checked` pseudo-class
- `:focus-visible` pseudo-class
- `prefers-reduced-motion` media query

Modern evergreen browsers (Chrome, Firefox, Safari, Edge) are recommended.
