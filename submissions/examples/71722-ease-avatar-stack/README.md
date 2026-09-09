# Overlapping Avatar Stack Component (`ease-avatar-stack`)

A pure HTML + Vanilla CSS reusable avatar stack component featuring overlapping avatar positioning (`margin-left: -0.85rem`), CSS hover & focus-within expansion interactions, extra-user count indicator (`.ease-avatar-more`), 3 responsive size variants (`.ease-avatar-stack-sm`, `-md`, `-lg`), dark/light theme adaptation, and reduced motion fallbacks.

## Features

- **Pure HTML + CSS**: 100% responsive avatar stack component without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Clean Overlapping Layout**: Avatars overlap cleanly using negative margins and high-contrast ring borders (`border: 3px solid var(--avatar-border)`).
- **CSS Hover & Keyboard Focus Expansion**: Hovering (`:hover`) or tabbing (`:focus-within`) smoothly separates/expands overlapping avatars so individual users become clearly distinguishable.
- **Extra-User Count Indicator**: Includes a reusable `.ease-avatar-more` count bubble (e.g., `+4`, `+12`) matching the stack's styling and readable at all sizes.
- **3 Size Variants**:
  - Small Stack (`.ease-avatar-stack-sm`) &rarr; `34px`
  - Medium Stack (Default `.ease-avatar-stack-md`) &rarr; `48px`
  - Large Stack (`.ease-avatar-stack-lg`) &rarr; `60px`
- **100% Accessible**: Built with semantic `<button>` elements, meaningful `alt` & `aria-label` descriptors, and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none; transform: none;`).
- **Theme Adaptability & Motion Controls**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-avatar-stack" aria-label="Collaborators stack, 5 members">
  <button type="button" class="ease-avatar" aria-label="Sarah Jenkins">
    <svg class="avatar-img" viewBox="0 0 100 100">...</svg>
  </button>
  <button type="button" class="ease-avatar" aria-label="Alex Rivera">
    <svg class="avatar-img" viewBox="0 0 100 100">...</svg>
  </button>
  <button
    type="button"
    class="ease-avatar ease-avatar-initials"
    aria-label="Marcus Vance"
  >
    <span class="initials-text">MV</span>
  </button>
  <button
    type="button"
    class="ease-avatar ease-avatar-more"
    aria-label="4 more members"
  >
    <span class="more-count">+4</span>
  </button>
</div>
```

### Customization Variables

```css
.ease-avatar-stack {
  --avatar-size: 52px;
  --avatar-border: #ffffff;
  --avatar-ring-color: #0284c7;
  --avatar-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71722-ease-avatar-stack/demo.html) directly in any modern web browser to interact with the avatar stack component offline.
