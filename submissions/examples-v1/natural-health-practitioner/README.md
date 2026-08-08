# Natural Health Practitioner — Full Page Site

A complete, copy-paste ready full-page website for a natural health practitioner built using EaseMotion CSS classes. Opens directly in the browser with no build step required.

## Structure

```
natural-health-practitioner/
├── demo.html    — full single-page site
├── style.css    — layout, theming, responsive styles
└── README.md
```

## Sections

| Section | Description |
|---|---|
| Navigation | Fixed nav with mobile hamburger menu |
| Hero | Headline, description, CTAs, trust signals |
| Services | 6 service cards (Nutrition, Herbal, Lifestyle, Testing, Supplements, 12-Week Reset) |
| About | Practitioner bio, credentials, stats |
| Testimonials | 3 patient stories with avatars |
| Discovery Call CTA | Full-width CTA with dark background |
| Blog/Resources | 3 article cards with tags |
| Appointment Form | Full intake form with dropdowns |
| Footer | 4-column footer with links |

## EaseMotion CSS Classes Used

| Class | Usage |
|---|---|
| `ease-fade-in` | Nav, eyebrows, descriptions, trust signals |
| `ease-slide-up` | Headings, service cards, blog cards, form |
| `ease-zoom-in` | About badge, CTA card |
| `ease-delay-100` through `ease-delay-500` | Staggered entrance timing |

## How It Works

Scroll-triggered entrance animations are powered by a lightweight IntersectionObserver script that adds `.visible` to `.scroll-hidden` elements as they enter the viewport. EaseMotion classes are applied throughout for consistent animation behaviour.

## Design Tokens

- **Display font:** Cormorant Garamond (serif, editorial)
- **Body font:** Inter
- **Palette:** sage green, warm cream, dark bark brown, gold accent
- **Aesthetic:** Holistic, natural, warm, clinical-but-approachable

## Features

- Pure HTML & CSS — no framework, no build step
- Fully responsive (mobile, tablet, desktop)
- Mobile hamburger navigation
- Scroll-triggered entrance animations
- Hover lift on all cards
- Accessible focus states on all form inputs
- Respects `prefers-reduced-motion`
- Realistic placeholder content throughout

## Use Cases

- Natural health practitioner websites
- Nutritionist / herbalist portfolios
- Wellness coach landing pages
- Functional medicine practitioner sites