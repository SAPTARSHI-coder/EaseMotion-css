# Personalized Pharmacogenomics Drug Design Hub — Showcase (Phase #843)

A fully isolated, 60fps HTML/CSS UI showcase built for **#28391**, demonstrating
a precision-medicine dashboard that matches drugs to a patient's genomic
profile, calculates adjusted dosages, checks interaction risk, and generates
a clinician-ready report.

Zero external JavaScript dependencies — the small in-file script only handles
scroll-triggered animations (`IntersectionObserver`) and smooth nav scrolling,
all vanilla DOM APIs.

## 🎨 Theme

Futuristic biotech / dark-mode — deep navy background, cyan + violet + pink
gradient accents, DNA helix motif, glowing panels. Chosen to visually reflect
genomic/precision-medicine subject matter while staying legible and accessible.

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Title, tagline, animated count-up stats (match accuracy, gene markers tracked, drug profiles) |
| **Genome Marker Map** | Animated DNA helix + gene marker cards (CYP2D6, CYP2C19, VKORC1, TPMT) with animated fill bars showing metabolizer status |
| **Drug Compatibility Matching** | Card grid with animated conic-gradient match rings (94%, 61%, 38%) and status tags |
| **Dosage Calculator** | Animated radial progress ring showing genotype-adjusted dosage breakdown |
| **Drug Interaction Checker** | Paired drug list with animated risk-level connector lines (dashed/solid, color-coded) |
| **Patient Report Summary** | Auto-generated summary card with a styled "Download Report" CTA |

## ✨ Animation Techniques Used

- **Scroll-triggered reveals** via `IntersectionObserver` — sections fade + slide into view once, no re-triggering (no leaked observers — each is `unobserve`'d after firing).
- **Count-up numbers** animated with `requestAnimationFrame`, respecting decimal vs. integer targets.
- **CSS-only DNA helix** — two vertical strands with offset `animation-delay` create a wave illusion; rungs pulse in sequence.
- **Conic-gradient rings** for match percentage and dosage visualization — pure CSS, no canvas/SVG.
- **Repeating-gradient "flow" lines** for interaction connectors, animated via `background-position`.
- All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` for a consistent, smooth "ease" feel across the whole showcase.

## 📱 Responsive Behavior

- Nav links collapse on mobile (`≤768px`) to keep the header clean.
- Genome panel and dosage panel switch from two-column to stacked single-column layouts.
- Marker cards reflow from a 3-column grid to a stacked layout with left-aligned text.

## 🧪 How to View

Simply open `demo.html` in any modern browser — no build step, no dependencies, no server required. Scroll down to trigger the section animations.

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Full single-page showcase markup + minimal vanilla JS for scroll animations |
| `style.css` | All styling, custom properties, keyframe animations, and responsive rules |
| `README.md` | This file |

## 🔗 Related Issue

Closes #28391 (Phase #843 UI Design & Animation Showcase)