# Changelog Template & Examples

Use this template when creating new changelog entries for EaseMotion CSS releases.

---

## Template (Copy & Paste)

```markdown
## [v#.#.#] — YYYY-MM-DD

### ✨ Added

#### Category Name
- New feature or utility
- Another new item

### 🔄 Changed

- What changed about existing features

### 🐛 Fixed

- Bug that was fixed

### ⚠️ Deprecated

- Feature being phased out — use X instead (removal: vX.X.X)
```

---

## Example 1: Minor Release (New Features)

```markdown
## [v1.1.0] — 2026-06-15

### ✨ Added

#### Typography Utilities
- `.ease-tracking-tight` — Condensed letter spacing (-0.025em)
- `.ease-tracking-normal` — Default letter spacing (0em)
- `.ease-tracking-wide` — Wide letter spacing (0.05em)
- `.ease-tracking-widest` — Extra wide letter spacing (0.1em)

#### Documentation
- `docs/css-variable-theming.md` — Complete guide to theming via CSS variables
- `docs/typography-guide.md` — Best practices for text styling

#### Theme System
- Support for light/dark mode switching with CSS variable overrides
- Theme tokens for custom branding

### 🔄 Changed

- Improved `.ease-btn-hover` animation performance by 25%
- Updated default color palette for better WCAG AA contrast

### 🐛 Fixed

- Fixed `.ease-card-glass` not rendering correctly on Firefox 118+
```

---

## Example 2: Patch Release (Bug Fixes Only)

```markdown
## [v1.0.1] — 2026-05-20

### 🐛 Fixed

- Fixed `.ease-hover-lift` shadow clipping on iOS Safari
- Corrected z-index stacking for modal dialogs
- Fixed typo in `ease-flex-items-center` class name documentation
```

---

## Example 3: Major Release (Breaking Changes)

```markdown
## [v2.0.0] — 2026-12-01

### ✨ Added

- New component system with scoped styles
- CSS containment for performance optimization
- Native container queries support

### 🔄 Changed

- **BREAKING:** Removed all `ease-old-*` deprecated classes
- Restructured variable naming: `--ease-spacing-*` → `--ease-space-*`
- Updated color scale from 50-900 to new 10-1000 system

### ⚠️ Deprecated

- `.ease-legacy-button` — Use `.ease-btn` instead

### Migration Guide

If upgrading from v1.x:

1. Replace all `.ease-old-*` classes with new equivalents (see docs)
2. Update CSS variable references to new naming scheme
3. Test color values on your site (new scale may require adjustment)
```

---

## Example 4: Contribution Proposal

When submitting a PR, add this to your description:

```markdown
## Changelog Proposal

**Type of change:** New utility

### Proposed Entry:

#### ✨ Added
- `.ease-text-stroke` utility for text outline effects
- Support for stroke width, color, and transparency via CSS variables

**Files changed:**
- `components/text-effects.css`
- `docs/text-effects-guide.md`

---

*Maintainer will finalize this entry in the CHANGELOG.md for the next release.*
```

---

## Common Patterns

### When describing utilities:

```markdown
- `.ease-tracking-tight` — Condensed letter spacing (-0.025em)
  - Use for bold headlines, modern branding
  - Mobile-friendly; scales automatically
```

### When describing components:

```markdown
- Enhanced `.ease-card` system with 4 new variants (glass, flat, bordered, raised)
  - Includes interactive demo in examples/card-showcase.html
  - Full TypeScript types for React integration
```

### When describing performance improvements:

```markdown
- Reduced CSS bundle size by 15% through variable consolidation
  - `easemotion.css`: 45KB → 38KB (minified)
  - No visual or functional changes
```

### When describing bug fixes:

```markdown
- Fixed `.ease-hover-grow` not working on SVG elements
  - Added `transform-origin: center` for proper scaling
  - Tested on Safari 14+, Firefox 115+, Chrome 120+
```

### When deprecating features:

```markdown
- `.ease-btn-old` — Migrate to `.ease-btn` with `.ease-btn-primary` variant
  - Old class will be removed in v2.0.0
  - See migration guide in docs/v2-upgrade.md
  - Equivalent functionality is 100% available
```

---

## Do's and Don'ts

### ✅ DO

- Use clear, descriptive language
- Group related items under category headers
- Include technical details when helpful (file names, values)
- Provide migration guidance for deprecated features
- Use consistent formatting across all entries

### ❌ DON'T

- Use slang or informal language
- Write single-sentence entries for complex features
- Forget to include dates
- Mix unrelated changes in one bullet point
- Use abbreviations without explanation

---

## Quick Checklist for Maintainers

Before publishing a release:

- [ ] All entries categorized (Added / Changed / Fixed / Deprecated)
- [ ] Version number follows Semantic Versioning
- [ ] Release date in YYYY-MM-DD format
- [ ] All class/file names in backticks
- [ ] Breaking changes clearly documented
- [ ] Deprecated items have removal timeline
- [ ] Links to related PRs/issues included where helpful
- [ ] Proofread for typos and clarity
- [ ] Entry placed at top of CHANGELOG.md (most recent first)

---

## Tips for Writing Great Changelog Entries

1. **For Users:** Focus on impact — what changed for them?
2. **For Developers:** Include technical details — what changed in the code?
3. **For Maintainers:** Link to PRs/issues for reference and tracking
4. **Be Specific:** Instead of "Improved animations," say "Reduced fade-in animation from 300ms to 200ms"
5. **Be Honest:** Include breaking changes upfront with migration paths

---

## File References

- 📄 [CHANGELOG_STANDARD.md](./CHANGELOG_STANDARD.md) — Full format specification
- 📄 [../../CHANGELOG.md](../../CHANGELOG.md) — Main project changelog
- 📄 [../../CONTRIBUTING.md](../../CONTRIBUTING.md) — Contribution guidelines
