# Scale-Hover Pricing Table

A complete glassmorphism pricing-table showcase created for **EaseMotion CSS issue #64352**.

## Concept

The component explores a subtle scale-based interaction for pricing cards. When a user hovers a card, or focuses an element inside it with a keyboard, the active card grows slightly and lifts from the surrounding layout. The visual change is intentionally restrained so neighboring cards remain visible while the selected option becomes easier to identify.

The example is built entirely with HTML and CSS. It does not require a JavaScript runtime, UI framework, build step, icon package, or external animation library.

## Files

```text
64352-scale-hover-pricing-table/
├── demo.html
├── style.css
└── README.md
```

### `demo.html`

The HTML contains a complete showcase page rather than an isolated card. It includes a navigation bar, hero introduction, service statistics, the three pricing plans, an interaction explanation, and a footer. The pricing section uses semantic `<section>`, `<article>`, `<h2>`, `<h3>`, `<ul>`, and `<a>` elements.

Each card is also keyboard focusable so the main interaction can be evaluated without a mouse. The featured Pro card receives a visual ribbon while retaining the same underlying markup pattern as the other plans.

### `style.css`

The stylesheet contains the complete visual system and motion implementation. CSS custom properties are used for colors, borders, radii, timing, and easing. The pricing cards use translucent backgrounds, borders, layered gradients, backdrop blur, shadows, and pseudo-elements to create the glassmorphism appearance.

The primary interaction is:

```css
.plan:hover,
.plan:focus-visible,
.plan:focus-within {
  transform: scale(1.055) translateY(-6px);
}
```

The transform is paired with a border and shadow transition. This creates depth without changing the document layout or causing neighboring content to reflow.

## Features

- Pure HTML5 and CSS3.
- No JavaScript dependency.
- Three complete pricing tiers.
- Featured-plan treatment.
- Responsive desktop, tablet, and mobile layouts.
- Glassmorphism surfaces with layered lighting.
- Scale-hover animation using GPU-friendly transforms.
- Keyboard-friendly focus interaction.
- Visible `:focus-visible` outlines.
- Animated decorative background elements.
- Reduced-motion support.
- CSS custom properties for easy customization.
- Semantic pricing content.
- Responsive typography using `clamp()`.
- Mobile navigation and content spacing adjustments.

## Motion behavior

The main animation uses `transform: scale()` rather than width, height, margin, or padding changes. This avoids forcing the browser to recalculate the surrounding layout while the pointer moves between cards.

The card is scaled by approximately five percent and translated upward by a few pixels. The combination makes the active card appear to move closer to the viewer. A stronger shadow and slightly brighter border reinforce the same state.

The pseudo-element glow also becomes visible during the active state. Because the glow is rendered by a pseudo-element and blurred, it does not add additional markup to the component.

Decorative hero elements use lightweight keyframe animations to provide ambient movement. These animations are independent from the pricing interaction and can be disabled by the user's reduced-motion preference.

## Accessibility

The demo includes several accessibility considerations:

1. The document declares its language with `lang="en"`.
2. The viewport metadata supports mobile browsers.
3. The pricing cards use semantic headings and lists.
4. Cards are keyboard focusable.
5. Interactive links have visible focus indicators.
6. The navigation includes an accessible label.
7. Decorative visual elements are hidden from assistive technology with `aria-hidden`.
8. `prefers-reduced-motion: reduce` disables the scale and ambient animations.
9. Text remains readable over the translucent surfaces.
10. The interaction does not rely exclusively on color.

## Responsive behavior

### Desktop

Three cards are displayed in a horizontal grid. The active card scales above its neighbors and receives a stronger shadow. The hero uses a two-column layout with a decorative visual panel.

### Tablet

The page narrows its maximum width, reduces card spacing, and simplifies the hero proportions. Typography continues to use fluid sizing.

### Mobile

The pricing cards become a single vertical column. Hero content is stacked, statistics become a two-column grid, and card padding is reduced to preserve usable space on narrow screens.

## Customization

The most important design tokens live at the top of `style.css`:

| Variable | Purpose |
| --- | --- |
| `--bg` | Main page background |
| `--surface` | Default translucent surface |
| `--surface-strong` | Stronger surface variation |
| `--line` | Default border color |
| `--line-active` | Hover/focus border |
| `--text` | Primary text |
| `--muted` | Secondary text |
| `--accent` | Primary purple accent |
| `--accent-2` | Secondary cyan accent |
| `--success` | Feature check color |
| `--radius-lg` | Large card radius |
| `--radius-md` | Small control radius |
| `--ease` | Motion easing curve |
| `--speed` | Interaction duration |

To make the interaction stronger, adjust the scale value in the `.plan:hover` rule. A value around `1.03` creates a very subtle effect, while values around `1.06` make the active card more prominent.

Avoid very large scale values because they can cause neighboring cards to overlap excessively on smaller screens.

## Browser support

The component uses widely supported CSS features including Grid, Flexbox, transitions, transforms, gradients, pseudo-elements, media queries, and `prefers-reduced-motion`. Backdrop blur is progressive enhancement: browsers without it still receive translucent cards, borders, and shadows.

## Design notes

The interaction is deliberately based on a single visual idea: **selection through depth**. The card does not change its content when hovered. Instead, it becomes slightly larger, brighter, and closer to the viewer. This keeps the animation predictable and avoids distracting motion while browsing pricing information.

The implementation follows the requirements in issue #64352: a dedicated feature folder, `demo.html`, `style.css`, and `README.md`; pure HTML/CSS; smooth transitions and keyframe animation; responsive behavior; and reduced-motion support.
