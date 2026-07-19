# Paws & Progress — Pet Services Demo Page

A complete, copy-paste-ready landing page for a dog training business built exclusively with **EaseMotion CSS** utility classes.

## Live Preview

Open `demo.html` directly in any modern browser — no build step, no bundler, no dependencies.

---

## Sections Included

| Section | Description |
|---|---|
| **Navigation** | Sticky, blurred nav with animated logo and CTA button |
| **Hero** | Full-width two-column layout with dog imagery, animated headline, stats, and a floating credential badge |
| **Trust Bar** | Five credibility signals with staggered entrance animations |
| **Services** | Three service cards (Obedience, Puppy, Reactivity) + four add-on strips |
| **Trainer Credentials** | Bio + four credential items with icons |
| **Client Stories** | Five testimonials in a responsive grid |
| **Pricing Packages** | Three pricing tiers with featured card highlight |
| **Free Consult CTA** | Dark banner with shimmer headline and live availability indicator |
| **Footer** | Four-column footer with social links, nav columns, and contact info |

---

## EaseMotion Classes Showcased

### Entrance Animations
| Class | Where Used |
|---|---|
| `.ease-fade-in` | Nav bar, hero eyebrow, stats row |
| `.ease-slide-up` | Hero heading, description, CTA buttons |
| `.ease-slide-in-left` | Trainer photo pane |
| `.ease-slide-in-right` | Trainer bio + credentials |
| `.ease-zoom-in` | Hero image wrapper |
| `.ease-blur-to-focus` | Available for hero text variant |
| `.ease-bounce-in` | Floating hero credential badge |

### Delay Helpers (Stagger)
| Class | Where Used |
|---|---|
| `.ease-delay-100` | Hero heading |
| `.ease-delay-200` | Hero description / hero image |
| `.ease-delay-300` | Hero CTA buttons |
| `.ease-delay-500` | Stats row |
| `.ease-delay-600` | Floating hero badge |

### Looping Animations
| Class | Where Used |
|---|---|
| `.ease-float` | Trainer section floating review badge |
| `.ease-pulse` | Available on skeleton elements |
| `.ease-ping` | Live availability dot indicator in hero and CTA |
| `.ease-gradient-rotation` | (base of `.ease-gradient-text-animated`) |

### Text & Gradient Utilities
| Class | Where Used |
|---|---|
| `.ease-gradient-text-animated` | Hero `thrive.` headline word |
| `.ease-shimmer-text` | CTA banner headline second line |
| `.ease-gradient-text` | Available variant |

### Hover Interactions
| Class | Where Used |
|---|---|
| `.ease-hover-grow` | Hero CTA buttons, pricing CTA link |
| `.ease-hover-lift` | Trust-bar items, add-on strips, nav CTA |
| `.ease-hover-lift-shadow` | Hero description block, CTA buttons |
| `.ease-card-lift` | All service cards, testimonial cards, pricing cards |
| `.ease-hover-shimmer` | Service cards, testimonial cards, pricing cards, hero image |
| `.ease-hover-glow` | Trainer photo, social link icons |
| `.ease-hover-underline` | Nav links, inline text links, footer links |
| `.ease-hover-bounce-text` | Nav logo |
| `.ease-squish-button` | Phone CTA in consultation banner |

### Shimmer / Skeleton
| Class | Where Used |
|---|---|
| `.ease-shimmer-sweep` | Animated overlay on hero image |

### Scroll Reveal (IntersectionObserver)
| Class | Where Used |
|---|---|
| `.ease-reveal` | Every below-fold element |
| `.ease-reveal-up` | Trust bar items, section headers, service cards |
| `.ease-reveal-left` | Trainer photo |
| `.ease-reveal-right` | Trainer bio |
| `.ease-reveal-scale` | Consultation CTA banner |
| `.ease-reveal-delay-1` through `.ease-reveal-delay-5` | Staggered cards and trust items |
| `.ease-reveal-active` | Added by JS `IntersectionObserver` to trigger transition |

### Layout Utilities
| Class | Where Used |
|---|---|
| `.ease-container` | All section content wrappers |
| `.ease-flex`, `.ease-flex-col`, `.ease-flex-row`, `.ease-flex-wrap` | Nav, hero, stats, buttons, reviewer rows |
| `.ease-inline-flex` | Button and hstack elements |
| `.ease-grid`, `.ease-grid-cols-2`, `.ease-grid-cols-3` | Services, testimonials, pricing, footer |
| `.ease-grid-auto` | Responsive auto-fit fallback |
| `.ease-center` | Ping dot centering |
| `.ease-hstack`, `.ease-hstack-sm` | Button groups, footer bottom links, nav |
| `.ease-stack`, `.ease-stack-sm`, `.ease-stack-lg` | Credential items, card content |
| `.ease-items-center`, `.ease-items-start`, `.ease-items-end` | Various flex containers |
| `.ease-justify-center`, `.ease-justify-between`, `.ease-justify-start` | Various flex containers |
| `.ease-flex-1`, `.ease-flex-none` | Add-on strip items |
| `.ease-col-full` | Available for full-width grid items |

### Spacing
| Class | Where Used |
|---|---|
| `.ease-gap-2` through `.ease-gap-12` | Grid and flex gap throughout |
| `.ease-padding-*`, `.ease-px-*`, `.ease-py-*` | Buttons, cards, nav |
| `.ease-mb-4`, `.ease-mt-4`, `.ease-my-4`, `.ease-my-8` | Section spacing |
| `.ease-mx-auto` | Centered text elements |

### Typography
| Class | Where Used |
|---|---|
| `.ease-text-xs` through `.ease-text-4xl` | Scale throughout page |
| `.ease-text-center`, `.ease-text-left` | Section headers, hero |
| `.ease-font-medium`, `.ease-font-semibold`, `.ease-font-bold` | Nav, tags, labels |
| `.ease-uppercase` | Eyebrow labels |
| `.ease-text-balance` | CTA heading for good line breaks |
| `.ease-truncate` | Available on card descriptions |

### Colour & Surface
| Class | Where Used |
|---|---|
| `.ease-text-primary`, `.ease-text-muted`, `.ease-text-white` | Body text hierarchy |
| `.ease-bg-primary`, `.ease-bg-surface`, `.ease-bg-neutral`, `.ease-bg-white` | Section backgrounds |

### Border & Shape
| Class | Where Used |
|---|---|
| `.ease-border`, `.ease-border-2`, `.ease-border-primary` | Cards, service cards |
| `.ease-rounded`, `.ease-rounded-lg`, `.ease-rounded-xl`, `.ease-rounded-full` | Cards, buttons, badges, avatars |

### Shadow
| Class | Where Used |
|---|---|
| `.ease-shadow`, `.ease-shadow-lg`, `.ease-shadow-xl` | Cards, hero badge, featured pricing |

### Misc Utilities
| Class | Where Used |
|---|---|
| `.ease-sticky` | Navigation |
| `.ease-relative`, `.ease-absolute` | Hero image, floating badge, ping dot |
| `.ease-overflow-hidden` | Hero image, trainer image |
| `.ease-w-full` | Full-width pricing buttons |
| `.ease-h-full`, `.ease-h-screen` | Image placeholders, hero |
| `.ease-object-cover`, `.ease-object-center` | Image elements |
| `.ease-aspect-square`, `.ease-aspect-video` | Available for image slots |
| `.ease-backdrop-blur` | Nav bar glass effect |
| `.ease-isolate` | Hero image (stacking context for shimmer) |
| `.ease-pointer-events-none` | Shimmer overlay layer |
| `.ease-select-none` | Logo text |
| `.ease-cursor-pointer` | Interactive elements |
| `.ease-badge-info`, `.ease-badge-warning` | Service card "Most popular" tag |
| `.ease-opacity-0`, `.ease-opacity-50` | Animation start states |

### Duration
| Class | Where Used |
|---|---|
| `.ease-duration-fast`, `.ease-duration-medium`, `.ease-duration-slow` | Available for overrides |

---

## Responsive Behaviour

| Breakpoint | Layout change |
|---|---|
| Default (mobile) | Single column hero, stacked trainer section, single-col footer |
| `≥ 768px` (tablet) | Two-column hero + trainer grid; two-column footer |
| `≥ 1024px` (desktop) | Three-column service / testimonial / pricing grids |

The `@media (prefers-reduced-motion: reduce)` rule in EaseMotion's spec is respected — all animations collapse to 0.01ms and transitions are disabled for users who prefer it.

---

## File Structure

```
submissions/examples/pet-services/
├── demo.html   ← single file, open directly in browser
└── README.md   ← this file
```

---

## Notes

- All imagery is handled via CSS emoji placeholders (no external image dependencies). Replace the `.dog-img-placeholder` and `.trainer-img-placeholder` divs with `<img>` tags pointing to real photos.
- The scroll-reveal behaviour uses a small vanilla `IntersectionObserver` script (18 lines, no dependencies) included at the bottom of `demo.html`, consistent with EaseMotion's `core/reveal.js` integration pattern.
- Google Fonts (`Playfair Display` + `Inter`) are loaded from the CDN. Remove for offline use and substitute system fonts.