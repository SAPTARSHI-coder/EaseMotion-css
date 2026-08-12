# Developer Portfolio — Single Page

## What does this do?
A complete, production-quality developer portfolio for **Priya Nair** (fictional) — all 7 required sections with realistic copy, a live typewriter effect, animated skill bars, an experience timeline, a GitHub contribution calendar mockup, blog previews, and a contact form with animated submit feedback. Dark code-aesthetic, purple/indigo accent, monospace details.

## Sections included
1. **Hero** — typewriter cycling text, floating avatar with gradient ring, open-to-work status indicator, social links
2. **About + Skills** — bio with quick facts, animated fill skill bars (triggered by IntersectionObserver), tech tag cloud
3. **Projects grid** — 4 projects with emoji icons, GitHub/live links, realistic descriptions, tech stack tags
4. **Experience timeline** — 4 roles (Vercel → Stripe → Loom → Google internship) with vertical line indicator
5. **GitHub stats** — stat numbers + procedurally generated contribution calendar grid (364 cells)
6. **Blog / Writing** — 3 real-sounding article previews with topic tags and read time
7. **Contact form** — email/name/subject/message fields, animated "Sending..." → "✓ Sent!" button state

## EaseMotion CSS classes showcased
| Class | Where used |
|-------|-----------|
| `ease-fade-in` | Hero content, section labels, contact wrap |
| `ease-slide-up` | All section content, staggered with delay utilities |
| `ease-delay-100/200/300/400` | Staggered card/timeline entrances |
| `ease-hover-lift-shadow` | Project cards, blog cards, buttons |
| `ease-hover-bright` | Nav CTA, ghost buttons, social links, blog read links |
| `ease-hover-glow` | Timeline entries, stats card, contact form |
| `ease-card` | Project cards, blog cards, timeline entries, stats/form |

## Notable animations
- **Typewriter** — JS character-by-character type + delete loop with configurable phrases array
- **Skill bars** — fill from 0% to target width with bounce easing, triggered on scroll into view
- **Floating avatar** — subtle `translateY` float loop (`pf-float` keyframe)
- **GitHub calendar** — 364 `div` cells with randomised purple intensity levels, generated on load
- **Form button** — "Send Message" → "Sending..." → "✓ Sent!" state transition with green colour swap

## How to customize
1. Replace all "Priya Nair" / "PN" / "priya@example.com" references
2. Update the `phrases` array in the `<script>` for your own typewriter text
3. Adjust `data-width` values on `.pf-skill-fill` elements for your own skill levels
4. Replace project cards with your actual projects
5. Replace timeline entries with your actual experience
6. Wire the contact form to Formspree, Netlify Forms, or your own endpoint
