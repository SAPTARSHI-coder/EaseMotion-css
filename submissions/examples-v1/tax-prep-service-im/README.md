# Tax Preparation Service Landing Page

## What does this do?
A complete, production-quality tax preparation service landing page for **ClearPath Tax** (fictional) — all 8 required sections with realistic copy, flat-fee pricing, a working appointment form, and a professional navy/green aesthetic that conveys trustworthiness and authority.

## Sections included
1. **Hero** — tax season CTA tag, bold heading, trust signal strip (Google rating, IRS auth, encryption), mock filed return card with refund amounts
2. **Services** — 6 services (Individual, Small Business, Estate & Trust, Amended Returns, IRS Audit Defense, Expat Tax) with feature lists
3. **Why Choose Us** — 6 trust signal cards (CPA credentials, IRS e-file authorization, accuracy guarantee, bank-level security, client count, year-round support)
4. **Process Timeline** — 4-step process (Book → Upload → Prepare → Review & File) with time estimates
5. **Pricing Packages** — 3 tiers (Essential $199 / Professional $349 / Business from $699) with featured card highlight
6. **Reviews** — 3 client testimonials with overall 4.9/5 rating badge
7. **Appointment Booking Form** — full form with name, email, phone, situation selector, time preference, notes; animated submit button
8. **Footer** — credentials badges (IRS Authorized, AICPA, BBB A+), 4-column links, legal disclaimer

## EaseMotion CSS classes used
| Class | Where used |
|-------|-----------|
| `ease-fade-in` | Hero content, section headers, booking section |
| `ease-slide-up` | All section content, staggered via `ease-delay-1/2/3/4` |
| `ease-delay-1/2/3/4` | Staggered card and hero text entrances |
| `ease-hover-lift-shadow` | Service cards, trust cards, pricing cards, timeline cards, stat pills, buttons |
| `ease-hover-bright` | Ghost buttons, nav CTA, service links |
| `ease-hover-glow` | Why-choose-us trust cards, review cards, hero doc card |
| `ease-card` | All cards throughout |

All animations use only `ease-*` classes — no custom `@keyframes` in this file.

## Requirements compliance
- ✅ Single `demo.html` — opens directly in browser, no build step
- ✅ Uses only existing `ease-*` classes for animations/interactions
- ✅ Fully responsive (mobile grid collapses, nav links hide, form rows stack)
- ✅ Entrance animations + hover interactions throughout
- ✅ Realistic placeholder content — no lorem ipsum anywhere
- ✅ `README.md` listing EaseMotion classes showcased

## How to customize
1. Replace "ClearPath Tax" with your firm name
2. Update phone/email/location in the footer
3. Adjust pricing tiers and feature lists
4. Wire the booking form to Calendly, Formspree, or your own backend
5. Replace review avatars with real client photos
