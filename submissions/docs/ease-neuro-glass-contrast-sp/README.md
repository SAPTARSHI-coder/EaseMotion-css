# Neumorphic + Glass Combo Contrast Fail Board

An accessibility documentation showcase that measures **WCAG contrast failures** when stacking `ease-card-neumorphic`, `ease-card-glass`, and glow hover on a **light soft-UI** stage — then documents safer combo patterns.

> Submission track: `submissions/docs/ease-neuro-glass-contrast-sp/`  
> Contributor suffix: `sp`  
> Related issue: [#47558](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47558)

---

## What does this do?

EaseMotion ships soft-UI card modifiers that look great alone. Stacking them on a light background is a common accident:

| Utility | Soft-UI effect |
|---------|----------------|
| `ease-card-neumorphic` | Soft tint + dual shadows |
| `ease-card-glass` | Translucent white + blur |
| `ease-card-glow` / `ease-hover-glow` | Primary glow bloom on hover |

Together they wash out muted, lavender, and meta text — a **light soft-UI** contrast problem, distinct from dark glass + glow audits.

This board:

- Reproduces failing neuro + glass + glow stacks
- Labels approximate contrast ratios (relative luminance)
- Shows safer combos (one surface, solid ink, glow without glass)
- Provides copy-friendly pairing rules — without editing core

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from the jsDelivr CDN).
2. Review the **Fail board** on the soft pastel stage (hover cards to see glow).
3. Compare the **Safer combos** panel.
4. Read the measured FG/BG table (AA threshold ≥ 4.5:1 for normal text).
5. Copy a safer pairing snippet from the patterns section.

### Preferred patterns

```html
<!-- One soft surface + dark text tokens -->
<article class="ease-card ease-card-neumorphic">
  <h3 class="ease-card-title">Title</h3>
  <p>Body copy…</p>
</article>
```

```html
<!-- Glass shell + opaque ink panel (project CSS) -->
<article class="ease-card ease-card-glass">
  <div class="ink-panel">Readable body…</div>
</article>
```

## Why is it useful?

- Makes light soft-UI contrast fails visible and measurable
- Teaches “pick one surface utility” instead of stacking all three
- Keeps remediation project-local during the core freeze
- Complements (does not duplicate) dark glass / button contrast labs

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Fail/safer boards, ratio table, pairing snippets |
| `style.css` | Soft stage + intentional fail text colors + ink panel helper |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-neuro-glass-contrast-sp/`
- No changes to `core/`, `components/`, workflows, or existing files
- Uses the official CDN bundle; no framework source copied
- Folder name includes unique contributor suffix `-sp`
- Respects `prefers-reduced-motion` for local hover transitions
