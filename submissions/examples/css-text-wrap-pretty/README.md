# CSS Text Wrapping Typography — `text-wrap`, `orphans`, `hyphenate-limit-chars`, `initial-letter`

A production-ready demonstration of **modern CSS typography features** — eliminate orphans, balance headlines, control hyphenation, and create native drop caps. All pure CSS, zero JavaScript.

## Features Demonstrated

| Feature | What It Does |
|---------|-------------|
| `text-wrap: pretty` | Prevents single-word orphans on the last line of a paragraph; higher-quality line-breaking |
| `text-wrap: balance` | Evenly distributes words across lines so each has roughly equal width (headlines only) |
| `orphans` / `widows` | Sets minimum lines at the bottom/top of columns or pages |
| `hyphenate-limit-chars` | Controls minimum characters before/after the hyphenation break |
| `initial-letter` | Native drop caps — first letter spans multiple lines without fragile float hacks |

## Demo Sections

### `text-wrap: pretty` vs `normal`
- Side-by-side comparison using identical serif paragraph text
- `text-wrap: normal` leaves a single-word orphan; `text-wrap: pretty` ensures at least 2 words on the last line

### `orphans` & `widows`
- Two-column layout demonstrating orphan control
- Default (`orphans: 1`) leaves single lines at column breaks
- `orphans: 3` / `widows: 2` ensures minimum line counts at column edges

### `text-wrap: balance`
- Side-by-side headline comparison — same text, different wrapping
- Balanced headline looks intentional and professional; unbalanced looks accidental

### Smart Hyphenation
- Narrow 160px columns comparing default hyphenation vs `hyphenate-limit-chars: 6 3 3`
- Default can create awkward 2-character fragments; smart limits ensure readable breaks

### Native Drop Caps
- Three variations: `initial-letter: 3`, `initial-letter: 3 2`, `initial-letter: 4`
- Serif font with colored initial letters
- No float hacks, no manual sizing — pure CSS

## Accessibility

- Semantic HTML landmarks
- All comparisons use identical content for fair evaluation
- Serif font for typography demos (distinct from UI sans-serif)
- Skip-to-content link
- `prefers-contrast`, `forced-colors`, `prefers-reduced-motion` support

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `text-wrap: pretty` | Paragraph orphan prevention |
| `text-wrap: balance` | Headline balancing |
| `orphans` / `widows` | Column-break line control |
| `hyphens: auto` | Browser-native hyphenation |
| `hyphenate-limit-chars` | Hyphenation quality control |
| `initial-letter` | Native drop caps |
| `::first-letter` | Drop cap target |
| `column-count` / `column-gap` / `column-rule` | Multi-column orphan demos |
| `oklch()` | Design tokens |

## Browser Support

| Feature | Chrome | Firefox | Safari |
|---------|--------|---------|--------|
| `text-wrap: pretty` | 117+ | — | 17.4+ |
| `text-wrap: balance` | 114+ | 121+ | 17.4+ |
| `orphans` / `widows` | 25+ | All | All |
| `hyphenate-limit-chars` | 109+ | — | — |
| `initial-letter` | 110+ | — | 9.0+ |

All features degrade gracefully — unsupported browsers simply get default text wrapping with no layout breakage.

## Zero JavaScript

**Zero JavaScript.** Every typographic improvement is pure CSS.

## Files

- `demo.html` — Semantic HTML with side-by-side comparisons
- `style.css` — Production-ready stylesheet
- `README.md` — This documentation
