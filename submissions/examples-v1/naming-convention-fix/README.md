# Naming Convention Guide

**Fixes:** Issue #8389

## Problem

Four different naming styles appeared simultaneously across GSSoC
contributions:

```css
.em-fade-in       { }   /* contributor A */
.animation-fadeIn { }   /* contributor B */
.ease_slide_up    { }   /* contributor C */
.slideUpAnim      { }   /* contributor D */
```

No documented convention existed in `CONTRIBUTING.md`.

## Canonical Patterns

| Construct | Pattern | Example |
|---|---|---|
| Utility class | `.ease-{effect}-{variant}` | `.ease-fade-in` |
| Keyframe | `ease-kf-{effect}` | `ease-kf-fade-in` |
| Modifier class | `.ease-{effect}-{modifier}` | `.ease-tada-fast` |
| CSS token | `--ease-{category}-{name}` | `--ease-color-primary` |

## Rules

### Utility Classes — `.ease-{effect}-{variant}`
- All lowercase, hyphen-separated
- No camelCase, underscores, or short prefixes
- Variant is optional — only when it changes behaviour

### Keyframes — `ease-kf-{effect}`
- `ease-kf-` prefix is mandatory
- Prevents collision with Animate.css, Bootstrap etc.
- All lowercase, hyphen-separated

### Modifier Classes — `.ease-{effect}-{modifier}`
- Same prefix as parent class
- Modifier describes the change: `fast`, `slow`, `loop`, `hover`

### CSS Tokens — `--ease-{category}-{name}`
- Category groups tokens: `color`, `duration`, `timing`, `radius`, `shadow`, `space`
- All lowercase, hyphen-separated

## Anti-Pattern Cheat Sheet

| Style | Example | Why wrong |
|---|---|---|
| camelCase | `.easeFadeIn` | CSS convention is hyphens |
| PascalCase | `@keyframes FadeIn` | Library collision risk |
| Underscores | `.ease_fade_in` | CSS convention is hyphens |
| Short prefix `em-` | `.em-fade` | Ambiguous — `em` is a CSS unit |
| No prefix | `.fade-in` | Global namespace collision |
| Wrong prefix | `.anim-slide` | Not EaseMotion namespace |
| Mixed case | `.animation-fadeIn` | Inconsistent |

## Existing Inconsistencies — Follow-up Audit

Found during this audit — needs a separate breaking-change PR:

| Current | Should be |
|---|---|
| `@keyframes fadeIn` | `@keyframes ease-kf-fade-in` |
| `@keyframes slideUp` | `@keyframes ease-kf-slide-up` |
| `.em-bounce` | `.ease-bounce` |
| `.animation-fade` | `.ease-fade-in` |

## Acceptance Criteria

- [x] Class pattern `.ease-{effect}-{variant}` documented
- [x] Keyframe pattern `ease-kf-{effect}` documented
- [x] Modifier pattern `.ease-{effect}-{modifier}` documented
- [x] Token pattern `--ease-{category}-{name}` documented
- [x] Anti-patterns listed clearly
- [x] Existing inconsistencies audited as follow-up
- [x] Zero changes to any CSS or JS files
- [x] Demo and style.css provided per contribution policy