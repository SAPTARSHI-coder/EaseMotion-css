# ease-avatar

Pure CSS avatar component for EaseMotion CSS with status indicators, groups, badges, tooltips, and skeleton loading. No JavaScript required.

## Features

- **7 size variants** — XS (1.5rem) to 2XL (7rem) with proportional font scaling
- **3 shape variants** — Circle, rounded square, square
- **5 status indicators** — Online, offline, away, busy, DND with color coding
- **4 status positions** — Bottom-right (default), top-right, top-left, bottom-left
- **Status pulse animation** — Pulsing ring for online/attention states
- **Border variants** — Primary colored ring and thin neutral border
- **Avatar groups** — Overlapping stacks with hover expansion, tight/loose spacing
- **Group counter** — `+N` overflow counter for limited displays
- **Hover zoom** — Spring physics scale effect on individual or group
- **Notification badges** — Numeric badges at 4 corner positions
- **CSS-only tooltips** — `data-tooltip` attribute with `::after` pseudo-element
- **Story rings** — Instagram-style gradient rings (unseen) and neutral rings (seen)
- **Skeleton loading** — Animated shimmer for loading states
- **Accessible** — `focus-visible`, keyboard navigation, `prefers-reduced-motion`
- **Zero JavaScript** — All styling, animation, and interaction is CSS-only

## Usage

### Basic Initials Avatar

```html
&lt;div class="ease-avatar ease-avatar-md"&gt;AB&lt;/div&gt;