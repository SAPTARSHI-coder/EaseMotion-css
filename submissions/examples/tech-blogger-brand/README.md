# Tech Blogger Personal Brand — EaseMotion CSS Showcase

A complete, copy-paste ready full-page site for a tech blogger's personal brand, built entirely with EaseMotion CSS classes. No custom keyframes. No build step. Open `demo.html` in any modern browser.

---

## 📁 Files

| File | Description |
|------|-------------|
| `demo.html` | Full single-page site with 8 required sections |
| `style.css` | Minimal page-specific overrides (input styling, tags, footer border) |
| `README.md` | This file — catalog of all EaseMotion classes used |

---

## 🎨 EaseMotion Classes Showcase

### Entrance Animations
| Class | Used In |
|-------|---------|
| `.ease-fade-in` | Navbar, topics section, newsletter CTA |
| `.ease-slide-up` | Hero text, section headings, cards, talks, projects |
| `.ease-delay-100` | Hero h1, first card in each row, first talk, first project |
| `.ease-delay-200` | Hero paragraph, second card, second talk, second project |
| `.ease-delay-300` | Hero buttons, third card, third talk, third project |
| `.ease-delay-400` | Hero stats row |

### Hover Animations
| Class | Used In |
|-------|---------|
| `.ease-hover-grow` | Navbar subscribe button, CTA buttons, project detail buttons |
| `.ease-hover-lift-shadow` | Blog cards, talk rows, project cards |
| `.ease-hover-underline` | Navbar links, footer links, "View all" link |
| `.ease-card-hover` | Blog post cards (combined with `.ease-hover-lift-shadow`) |

### Layout Utilities
| Class | Used In |
|-------|---------|
| `.ease-container` | All sections — max-width wrapper with padding |
| `.ease-flex` | Navbar, hero, stats, card footers, form, footer |
| `.ease-flex-col` | Hero, mobile layouts |
| `.ease-flex-row` | Desktop layouts (md+ breakpoint) |
| `.ease-flex-wrap` | Topics/tags row |
| `.ease-justify-between` | Navbar, section headers, footer |
| `.ease-justify-center` | Hero CTA buttons, newsletter form |
| `.ease-items-center` | Navbar, hero, stats, form |
| `.ease-items-start` | Talk rows |
| `.ease-gap-3` | Topic tags |
| `.ease-gap-4` | Navbar menu, hero buttons, footer links |
| `.ease-gap-6` | Blog grid, talk rows |
| `.ease-gap-8` | Footer columns |
| `.ease-gap-12` | Footer link groups |

### Grid Utilities
| Class | Used In |
|-------|---------|
| `.ease-grid` | Blog posts grid, about/projects layout |
| `.ease-grid-cols-1` | Mobile default |
| `.ease-sm-grid-cols-2` | Blog grid at 640px+ |
| `.ease-lg-grid-cols-3` | Blog grid at 1024px+; about/projects split |
| `.ease-lg-col-span-2` | About section (wider column) |

### Spacing Utilities
| Class | Used In |
|-------|---------|
| `.ease-padding-4` | Project cards |
| `.ease-padding-6` | Talk rows, about card |
| `.ease-padding-8` | Section wrappers |
| `.ease-padding-12` | Hero, newsletter CTA |
| `.ease-mt-8` | Sections after hero |
| `.ease-mb-8` | Section bottom margin |
| `.ease-mb-6` | Section headings |
| `.ease-mb-4` | Subheadings, paragraphs |
| `.ease-mt-1` | Stat labels, talk metadata |
| `.ease-mt-2` | Section subtitles |
| `.ease-mt-4` | Newsletter featured text |
| `.ease-mt-6` | About social links |
| `.ease-pt-8` | Footer bottom row |
| `.ease-py-4` | Navbar vertical padding |

### Typography Utilities
| Class | Used In |
|-------|---------|
| `.ease-text-4xl` | Hero heading |
| `.ease-text-3xl` | Section headings |
| `.ease-text-2xl` | Stat numbers, talk month |
| `.ease-text-xl` | Talk titles, sidebar heading |
| `.ease-text-lg` | Card titles, navbar brand |
| `.ease-text-base` | Newsletter input |
| `.ease-text-sm` | Metadata, tags, footer links, descriptions |
| `.ease-text-xs` | Dates, featured text, copyright |
| `.ease-font-bold` | Headings, stat numbers, brand |
| `.ease-font-semibold` | Card titles, CTA button, sidebar heading |
| `.ease-font-medium` | Navbar links, tag text |
| `.ease-font-mono` | Version text, dates, star counts |
| `.ease-text-primary` | Brand, stat numbers, accent text |
| `.ease-text-muted` | Descriptions, metadata, labels |
| `.ease-text-white` | Newsletter heading |
| `.ease-text-gradient-flow` | Hero heading accent span |
| `.ease-truncate-3` | Card descriptions (3-line clamp) |

### Color & Background Utilities
| Class | Used In |
|-------|---------|
| `.ease-bg-primary` | Newsletter CTA background |
| `.ease-bg-white` | Newsletter subscribe button |

### Border & Radius Utilities
| Class | Used In |
|-------|---------|
| `.ease-border` | Talk rows, project cards, about card |
| `.ease-border-2` | Topics section |
| `.ease-border-t` | Footer top separator |
| `.ease-rounded` | Badges |
| `.ease-rounded-lg` | Topics section, talk rows, about card, project cards |
| `.ease-rounded-xl` | Newsletter CTA |
| `.ease-rounded-full` | Input, subscribe button |

### Shadow Utilities
| Class | Used In |
|-------|---------|
| `.ease-card-shadow` | Blog cards |
| `.ease-shadow-none` | — (available, not used) |

### Component Classes
| Class | Used In |
|-------|---------|
| `.ease-navbar-glass` | Navbar |
| `.ease-navbar-glass-sticky` | Sticky navbar behavior |
| `.ease-navbar-brand` | Logo text |
| `.ease-navbar-menu` | Nav links container |
| `.ease-navbar-item` | Individual nav links |
| `.ease-btn` | All buttons |
| `.ease-btn-primary` | Subscribe, Read Latest |
| `.ease-btn-outline` | GitHub, Details, Watch, Slides |
| `.ease-btn-lg` | Hero buttons, newsletter button |
| `.ease-btn-sm` | Navbar subscribe, talk buttons |
| `.ease-btn-pill` | All pill-shaped buttons |
| `.ease-card` | Blog post cards |
| `.ease-card-header` | Card top section |
| `.ease-card-title` | Card heading |
| `.ease-card-body` | Card description |
| `.ease-card-footer` | Card tags row |
| `.ease-input` | Newsletter email input |
| `.ease-input-lg` | Larger input variant |
| `.ease-badge-info` | "Open Source" hero badge |
| `.ease-badge-warning` | "TypeScript" hero badge |

### Custom Properties Used
| Variable | Context |
|----------|---------|
| `--ease-color-primary` | Brand color, buttons, accents |
| `--ease-color-neutral-100` | Tag backgrounds |
| `--ease-color-neutral-200` | Footer border |
| `--ease-color-neutral-700` | Tag text, descriptions |
| `--ease-space-*` | All spacing values |
| `--ease-radius-*` | All border radius values |
| `--ease-speed-fast` | Tag transitions |
| `--ease-ease` | Default easing curve |

---

## 🚀 How to Run

1. Copy all three files into `submissions/examples/tech-blogger-brand/`
2. Open `demo.html` directly in a browser
3. Or serve locally: `npx serve .` or `python -m http.server 8080`

No build step. No dependencies beyond the EaseMotion CSS CDN link.

---

## 📱 Responsive Behavior

| Breakpoint | Layout Changes |
|------------|----------------|
| &lt; 640px | Single column everything, stacked hero, mobile nav |
| 640px+ | Blog grid → 2 columns |
| 768px+ | Talk rows → horizontal layout |
| 1024px+ | Blog grid → 3 columns; About/Projects → sidebar split |

---

## ♿ Accessibility

- Semantic HTML (`&lt;nav&gt;`, `&lt;section&gt;`, `&lt;article&gt;`, `&lt;footer&gt;`, `aria-label`)
- Focus-visible styles inherited from EaseMotion base
- `prefers-reduced-motion` respected via EaseMotion core
- Sufficient color contrast on all text

---

## 📝 Content

All placeholder content is realistic and specific — no lorem ipsum. Names, dates, project stats, and talk titles are fictional but believable.

---

Built for EaseMotion CSS Issue #24650 — GSSoC 2026