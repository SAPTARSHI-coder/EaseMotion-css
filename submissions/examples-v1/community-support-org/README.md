# Community Support Organization — EaseMotion Demo

A full-page single-file website for **PrideBridge Community**, a fictional LGBTQ+ support organization, built entirely using EaseMotion CSS classes. Opens directly in a browser — no build step required.

---

## Sections Included

| Section | Description |
|---|---|
| **Hero** | Inclusive, warm full-viewport hero with floating decorative icons and a pride gradient |
| **Services** | 6 service cards (Counseling, Housing, Legal Aid, Youth Programs, Health & Wellness, Crisis Support) |
| **Coming Out Resources** | 5 resource cards with guides, hotlines, and peer support group schedules |
| **Volunteer Opportunities** | 6 volunteer role cards with tags (Remote / In-Person / Flexible) |
| **Donate CTA** | Full-width call-to-action with monthly and one-time donation buttons |
| **Events Calendar** | 4 event cards with date badges, locations, and RSVP buttons |
| **Community Stories** | 4 testimonial cards with avatars, star ratings, and narrative quotes |
| **Footer** | 4-column footer with brand, quick links, contact info, and hours |

---

## EaseMotion Classes Showcased

### Utility Classes

| Class | Usage |
|---|---|
| `ease-container` | Max-width centered container for section content |
| `ease-grid` | Grid display wrapper |
| `ease-grid-auto` | Auto-fit responsive grid |
| `ease-grid-cols-2` | 2-column grid (resources section) |
| `ease-grid-cols-4` | 4-column grid (footer) |
| `ease-gap-6` / `ease-gap-8` | Grid and flex gaps |
| `ease-stack-sm` | Vertical flex stack with small gap |
| `ease-stack-xl` | Vertical flex stack with extra-large gap |
| `ease-hstack-sm` | Horizontal flex stack with small gap |
| `ease-flex` | Display flex |
| `ease-flex-col` | Flex column direction |
| `ease-flex-wrap` | Flex wrap |
| `ease-items-center` | Align items center |
| `ease-justify-center` | Justify content center |
| `ease-justify-between` | Justify content space-between |
| `ease-text-center` | Text align center |
| `ease-text-xs` / `ease-text-sm` / `ease-text-lg` / `ease-text-xl` | Font size utilities |
| `ease-font-bold` / `ease-font-regular` / `ease-font-medium` / `ease-font-semibold` | Font weight utilities |
| `ease-text-primary` | Primary color text |
| `ease-text-muted` | Muted color text |
| `ease-text-white` | White text |
| `ease-bg-neutral` | Neutral background |
| `ease-bg-surface` | Surface background |
| `ease-rounded-full` | Full border radius |
| `ease-rounded-sm` / `ease-rounded-md` / `ease-rounded-lg` | Border radius utilities |
| `ease-shadow-lg` / `ease-shadow-xl` | Shadow depth |
| `ease-mx-auto` | Horizontal auto margin |
| `ease-opacity-0` / `ease-opacity-25` / `ease-opacity-50` / `ease-opacity-75` / `ease-opacity-100` | Opacity levels |
| `ease-sr-only` | Screen-reader only |
| `ease-hidden` | Display none |
| `ease-block` | Display block |
| `ease-inline-block` | Display inline-block |
| `ease-inline-flex` | Display inline-flex |
| `ease-cursor-pointer` | Pointer cursor |
| `ease-mask-radial` | Radial mask image |
| `ease-backdrop-blur` / `ease-backdrop-blur-sm` | Backdrop blur filters |
| `ease-overflow-hidden` | Overflow hidden |
| `ease-relative` / `ease-absolute` / `ease-sticky` | Positioning |
| `ease-w-full` / `ease-h-full` / `ease-h-screen` | Width/Height utilities |

### Animation Classes

| Class | Usage |
|---|---|
| `ease-fade-in` | Entrance fade-in on hero badge and buttons |
| `ease-slide-up` | Entrance slide-up on hero heading and paragraph |
| `ease-slide-in-from-top` | Entrance slide-in from top on pride bar |
| `ease-float` | Continuous floating animation on hero decorative icons |
| `ease-bounce-in` | Bounce entrance on donate heart icon |
| `ease-delay-150` / `ease-delay-300` | Animation delay helpers |

### Hover Interaction Classes

| Class | Usage |
|---|---|
| `ease-hover-underline` | Animated underline on nav links, footer links, and "Learn more" links |
| `ease-hover-glow` | Glow effect on hero buttons, footer social icons, and "View Full Calendar" button |
| `ease-hover-pulse-glow` | Combined pulse + glow on "Donate Monthly" button |
| `ease-hover-grow` | (Used in card patterns throughout) |
| `ease-hover-lift-shadow` | Card lift with shadow depth |

### Component Classes

| Class | Usage |
|---|---|
| `ease-btn` | Base button styling |
| `ease-btn-primary` | Primary button variant |
| `ease-btn-outline` | Outline button variant |
| `ease-card` | Base card component |
| `ease-card-hover` | Card with hover lift effect |
| `ease-card-horizontal` | Horizontal card layout (used in events) |
| `ease-card-title` | Card title styling |
| `ease-card-footer` | Card footer section |
| `ease-navbar-glass` | Glassmorphism navbar |
| `ease-navbar-glass-sticky` | Sticky navbar modifier |
| `ease-navbar-glass-blur` | Enhanced blur navbar modifier |
| `ease-navbar-brand` | Navbar brand text |
| `ease-navbar-menu` | Navbar menu wrapper |
| `ease-navbar-item` | Navbar link item |
| `ease-decorative` | Decorative elements |

### Scroll Reveal Classes

| Class | Usage |
|---|---|
| `ease-reveal` | Base scroll reveal (invisible until scrolled into view) |
| `ease-reveal-fade` | Fade-in on scroll |
| `ease-reveal-up` | Slide up on scroll |
| `ease-reveal-left` | Slide left on scroll |
| `ease-reveal-right` | Slide right on scroll |
| `ease-reveal-scale` | Scale entrance on scroll |
| `ease-reveal-delay-1` through `ease-reveal-delay-5` | Staggered delay for reveal animations |

---

## File Structure

```
submissions/examples/community-support-org/
├── demo.html      # Single-file website (open in browser)
└── README.md      # This file
```

---

## How to Use

1. Open `demo.html` directly in any modern browser.
2. The page links to `../../../easemotion.css` from the project root — ensure the relative path resolves correctly, or copy the file and adjust the path.
3. Scroll through sections to see entrance animations triggered by IntersectionObserver.
4. Hover over cards, buttons, and links to see interaction effects.

---

## Design Notes

- **Pride-forward aesthetic** with custom gradient overrides on CSS variables
- **Fully responsive** via EaseMotion's built-in `ease-grid-auto` and responsive breakpoints
- **Accessible** — respects `prefers-reduced-motion` via EaseMotion's built-in media query
- **No custom keyframes** — all animations use existing `ease-*` classes
- **Realistic placeholder content** with meaningful copy about LGBTQ+ community services
- **Dark mode compatible** via EaseMotion's built-in `prefers-color-scheme: dark` support