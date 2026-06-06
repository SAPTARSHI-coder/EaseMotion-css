# Changelog Standard Format Guide

## Overview

This document defines the standard changelog format for EaseMotion CSS. All releases must follow this structure to ensure consistency, clarity, and ease of maintenance for both maintainers and contributors.

The changelog format is inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with EaseMotion-specific conventions.

---

## Changelog Structure

Each release entry follows this standard structure:

```markdown
## [version] — YYYY-MM-DD

### Added
- List of new features, utilities, components, or documentation

### Changed
- List of changes to existing functionality or behavior

### Fixed
- List of bug fixes

### Deprecated
- List of features or utilities that are no longer recommended
```

---

## Format Rules

### 1. **Version Number**

- Format: `[v#.#.#]` using [Semantic Versioning](https://semver.org/)
- Examples: `[v1.0.0]`, `[v1.1.0]`, `[v2.0.0-beta.1]`

### 2. **Release Date**

- Format: `YYYY-MM-DD` (ISO 8601)
- Always follow version with an em-dash: `## [v1.0.0] — 2026-03-29`

### 3. **Section Headers**

- Use level 3 headings: `### Added`, `### Changed`, `### Fixed`, `### Deprecated`
- Only include sections that have entries (omit empty sections)
- Use this order: Added → Changed → Fixed → Deprecated

### 4. **Entry Format**

**Simple Entry:**
```markdown
- Brief description of the change
```

**Grouped Entry (for multiple related items):**
```markdown
### Added

#### Category Name
- First item in category
- Second item in category

#### Another Category
- Item description
```

**Entry with Technical Details:**
```markdown
- Feature name — Description with context
  - Technical note or sub-item
  - Link to related file or PR if relevant
```

### 5. **Formatting Best Practices**

| Element | Format | Example |
|---------|--------|---------|
| Class names | Backticks | `` `.ease-btn` `` |
| File paths | Backticks | `` `core/variables.css` `` |
| CSS properties | Backticks | `` `letter-spacing` `` |
| Links | Markdown links | `[Link text](url)` |
| Optional sections | Omit if empty | Don't add `### Added` if nothing added |

### 6. **Emoji Usage** (Optional but Recommended)

Use emojis sparingly at the section level for visual clarity:

```markdown
### ✨ Added
### 🔄 Changed  
### 🐛 Fixed
### ⚠️ Deprecated
```

---

## Section Guidelines

### Added
Features, utilities, components, or documentation that are new.

**Examples:**
```markdown
### Added

- `.ease-tracking-tight` utility for condensed letter spacing
- `docs/css-variable-theming.md` documentation guide
- Support for theme-switching via CSS variables
```

### Changed
Updates to existing features, improvements, behavior modifications, or performance enhancements.

**Examples:**
```markdown
### Changed

- Updated `.ease-btn-primary` hover effect for better contrast
- Improved animation timing on `.ease-fade-in` (150ms → 200ms)
- Refactored shadow utilities to use CSS variables
```

### Fixed
Bug fixes and corrections.

**Examples:**
```markdown
### Fixed

- Fixed `.ease-hover-shimmer` not working on Safari
- Corrected z-index stacking context for modal overlays
- Fixed typo in `.ease-flex-items-center` documentation
```

### Deprecated
Features marked for removal in future versions. Include replacement instructions.

**Examples:**
```markdown
### Deprecated

- `.ease-btn-old` — Use `.ease-btn-primary` instead (will be removed in v2.0.0)
- `--ease-old-color-primary` variable — Rename to `--ease-color-primary` (will be removed in v2.0.0)
```

---

## Version Numbering Guide

Follow [Semantic Versioning](https://semver.org/):

| Change Type | Version Update | Example |
|-------------|----------------|---------|
| Breaking changes | Major | v1.0.0 → v2.0.0 |
| New features (backward compatible) | Minor | v1.0.0 → v1.1.0 |
| Bug fixes (backward compatible) | Patch | v1.0.0 → v1.0.1 |
| Pre-release versions | Add suffix | v1.0.0-beta.1, v1.0.0-rc.1 |

---

## Example: Complete Release Entry

```markdown
## [v1.2.0] — 2026-06-15

### ✨ Added

#### Typography Utilities
- `.ease-tracking-tight` — Condensed letter spacing (-0.025em)
- `.ease-tracking-normal` — Default letter spacing (0em)
- `.ease-tracking-wide` — Wide letter spacing (0.05em)
- `.ease-tracking-widest` — Extra wide letter spacing (0.1em)

#### Documentation
- `docs/css-variable-theming.md` — Guide for overriding CSS variables
- `docs/typography-guide.md` — Best practices for typography

### 🔄 Changed

- Updated `core/variables.css` to include new typography tokens
- Improved animation performance on mobile devices by 20%
- Restructured component documentation for better discoverability

### 🐛 Fixed

- Fixed `.ease-hover-lift` shadow not rendering correctly on iOS
- Corrected accessibility contrast on `.ease-btn-warning` variant
- Resolved CSS cascade issue with nested card shadows

### ⚠️ Deprecated

- `.ease-old-spacing-utility` — Use `.ease-space-*` utilities instead (removal in v2.0.0)

---

## When to Release

- **Patch (v#.#.x)** — 1-2 bug fixes, no new features
- **Minor (v#.x.0)** — 3+ new features, improvements, backward compatible
- **Major (v#.0.0)** — Breaking changes, significant refactors, new direction

---

## How Maintainers Should Use This

1. **Before each release:**
   - Review all merged PRs and commits since last release
   - Categorize changes into Added / Changed / Fixed / Deprecated
   - Add version number and release date
   - Update the main `CHANGELOG.md` at the project root

2. **PR/Issue Tracking:**
   - Link related GitHub issues/PRs in entries if helpful
   - Use consistent terminology across all releases
   - Keep entries concise but descriptive

3. **Backward Compatibility:**
   - Document breaking changes clearly in Major version updates
   - Always provide migration guidance in Deprecated sections
   - Mark removal timeline (e.g., "will be removed in v2.0.0")

---

## Example Changelog for Contributors

When submitting a PR, contributors can propose changelog entries by adding to their PR description:

```markdown
## Changelog Entry (for maintainer)

### ✨ Added
- `.ease-gradient-text` utility for text gradient effects
- Support for custom gradient stops via CSS variables

### 📝 Files
- `components/text-effects.css`
- `docs/gradient-guide.md`
```

---

## File Structure

```
CHANGELOG.md (project root)
├── Latest release at top
├── Previous releases below in reverse chronological order
└── Maintains full history
```

---

## Migration Path for Existing Entries

All existing `CHANGELOG.md` entries should be reformatted to follow this standard:

- ❌ **Old:** Unstructured paragraphs
- ✅ **New:** Organized by Added / Changed / Fixed / Deprecated

---

## References

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/)
- [EaseMotion CONTRIBUTING.md](../../CONTRIBUTING.md)
- [EaseMotion Submissions Guide](../README.md)
