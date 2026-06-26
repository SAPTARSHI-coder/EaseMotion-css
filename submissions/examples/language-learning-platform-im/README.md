# Language Learning Platform Landing Page

## What does this do?
A complete, production-quality EdTech SaaS landing page for **Lingora** (fictional) — all 7 required sections with realistic copy, animated language flags, a cycling hero tagline, FAQ accordion, pricing tiers, and a phone mockup app CTA.

## Sections included
1. **Hero** — animated cycling tagline, orbiting language flag cards, social proof avatar stack, streak card
2. **Features grid** — 6 feature cards (AI lessons, speaking practice, AI tutor, games, community, certificates) with `ease-hover-lift-shadow`
3. **Course catalog** — 6 languages with learner counts and animated fill bars, trending tag
4. **Pricing tiers** — Free / Premium / Teams with feature comparison lists and featured card highlight
5. **Testimonials** — 3 learner success stories with `ease-hover-glow` cards
6. **App download CTA** — phone mockup with lesson UI + App Store / Google Play buttons
7. **FAQ accordion** — 6 Q&As using native `<details>` / `<summary>` with animated `+` toggle

## EaseMotion CSS classes showcased
| Class | Where used |
|-------|-----------|
| `ease-fade-in` | Hero content, section headers, app CTA |
| `ease-slide-up` | All section content, staggered with delay utilities |
| `ease-delay-100/200/300/400` | Staggered card entrances throughout |
| `ease-hover-lift-shadow` | Feature cards, course cards, flag cards, app buttons |
| `ease-hover-bright` | Ghost buttons, nav CTA, course links |
| `ease-hover-glow` | Testimonial cards, pricing cards, streak card |
| `ease-card` | Feature cards, course cards, testimonials, streak card, pricing |

Scroll-triggered animations use `IntersectionObserver` adding `.lg-visible` to `ease-slide-up` / `ease-fade-in` elements. Hero tagline cycles every 2.5s with a fade-out / swap / fade-in transition.

## How to customize
1. Replace "Lingora" with your brand name
2. Update the cycling hero phrases array in the `<script>` tag
3. Swap course language flags and learner counts for your actual catalog
4. Update pricing and feature lists in the pricing section
5. Set your actual App Store / Google Play links on the download buttons
