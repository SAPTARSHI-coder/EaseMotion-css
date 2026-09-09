# Law Firm Landing Page

## What does this do?
A complete, production-quality law firm landing page for **Hargrove & Merritt LLP** (fictional) — all 7 required sections with realistic copy, an animated count-up stats section, consultation form, and a conservative navy/gold color scheme.

## Sections included
1. **Hero** — trust bar (AV Rating, awards), headline with gold italic accent, firm stats with count-up numbers, free consultation CTA
2. **Practice Areas** — 6 practice area cards (Personal Injury, Corporate, Real Estate, Family Law, Criminal Defense, Employment) with `ease-hover-lift-shadow`
3. **Attorney Profiles** — 3 attorneys with credentials, experience years, and education badges
4. **Case Results / Stats** — animated count-up numbers (JS `IntersectionObserver` triggered), plus 3 landmark verdict cards
5. **Client Testimonials** — 3 client quotes with `ease-hover-glow`
6. **Free Consultation Form** — full form with name/email/phone/practice area/description fields + guarantee list
7. **Office Locations** — 3 office cards (New York, Washington D.C., Los Angeles) with hours

## EaseMotion CSS classes showcased
| Class | Where used |
|-------|-----------|
| `ease-fade-in` | Hero content, section headers, consult section |
| `ease-slide-up` | All section content, staggered with delay utilities |
| `ease-delay-100/200/300/400` | Staggered card entrances throughout |
| `ease-hover-lift-shadow` | Practice cards, verdict cards, location cards, CTA buttons |
| `ease-hover-bright` | Ghost buttons, nav CTA, practice links |
| `ease-hover-glow` | Attorney cards, testimonials, consultation form |
| `ease-card` | All cards throughout |

## Notable features
- **Animated count-up** — stats animate from 0 to their target values when scrolled into view using `IntersectionObserver` + an ease-out-cubic JS animation
- **Sticky nav** — transitions from transparent to solid navy on scroll
- **Georgian serif font** — headings use Georgia for the authoritative legal aesthetic; body/UI uses Inter
- **Responsive** — mobile/tablet/desktop layouts throughout

## How to customize
1. Replace "Hargrove & Merritt LLP" with your firm name
2. Update attorney profiles with real bios and photos (replace `.lf-attorney-photo` initials with `<img>`)
3. Replace verdict amounts with actual case results
4. Update office addresses and hours
5. Wire the form to your preferred backend (Netlify Forms, Formspree, etc.)
