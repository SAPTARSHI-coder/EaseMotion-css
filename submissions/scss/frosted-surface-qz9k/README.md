# frosted-surface-qz9k

A lightweight frosted-glass mixin tuned for small floating UI chrome (a
toolbar, a floating pill, a sticky mini-header) — a lighter blur and a
subtle hairline border, distinct from a heavier full-panel glass treatment
suited to large translucent surfaces.

## Usage

```scss
@use 'frosted-surface' as *;

.floating-toolbar {
  @include frosted-surface;
  border-radius: 0.6rem;
  padding: 0.5rem 0.8rem;
}
```

| Param | Default | Description |
|---|---|---|
| `$tint` | `rgba(255, 255, 255, 0.65)` | Translucent background when blur is supported. |
| `$opaque-fallback` | `#f5f6f8` | Solid background otherwise. |
| `$blur` | `8px` | Blur radius — deliberately lighter than a full-panel glass effect. |
| `$border` | `rgba(255, 255, 255, 0.5)` | Border colour when blur is supported. |

## Why is it useful?

A single "glass panel" treatment tuned for large surfaces (a modal, a card)
tends to look wrong when applied to small floating chrome at the same blur
strength — a strong blur radius that reads as an elegant frosted backdrop
behind a big dialog can make a small floating toolbar's edges look soft and
indistinct against a busy background, since there's less surface area for
the blur to establish a clear "this is a distinct layer" boundary. This
mixin uses a lighter `8px` default blur plus `saturate(160%)` (boosting
colour vibrancy slightly, which is what makes small frosted chrome read as
crisp rather than washed-out) and a visible hairline border for edge
definition — parameters tuned specifically for small, compact surfaces
rather than reusing large-panel defaults at a smaller size.

Like other translucency mixins in this set, it sets an opaque
`$opaque-fallback` unconditionally and only switches to the translucent
`$tint` inside `@supports`, so engines without `backdrop-filter` support get
a solid, readable surface instead of a low-opacity wash with unpredictable
contrast against whatever's behind it. The `forced-colors` branch forces
solid system colours, since blur effects are typically suppressed there
regardless.

## Choosing between frosted-surface and a heavier panel treatment

The two aren't interchangeable — they're tuned for different surface
sizes and contexts:

```scss
// Small, floating, needs to stay legible over varied content underneath:
.mini-toolbar { @include frosted-surface; }
.floating-search-bar { @include frosted-surface($blur: 6px); }

// Large, usually over a single controlled background (a hero image, a
// dedicated backdrop scrim), where a stronger blur reads as intentional
// depth rather than as blurring away legibility:
.modal-panel { /* heavier glass treatment, higher blur, larger radius */ }
```

Using the small-surface mixin on a large panel tends to under-blur (not
enough separation from a busy background behind a big surface), while
using a heavy panel treatment on small chrome over-blurs it into
illegibility — picking the mixin scaled to the surface size matters more
than it might first appear.

## Layering multiple frosted elements

Stacking two frosted-surface elements (a floating toolbar sitting above a
frosted header, for instance) compounds their blur visually, which can
read as an intentional layered-glass effect or as visual noise depending
on spacing — if stacking is intentional, consider reducing `$blur` on the
inner element specifically so the combined effect doesn't over-blur
whatever content sits furthest behind both layers.

## Print

`backdrop-filter` and translucent backgrounds generally aren't meaningful
in print output; pairing this mixin with `safe-print-qz9k`'s
background-stripping `@media print` rule ensures a frosted surface
prints as plain, ink-conserving black text on white rather than
attempting to render a blur effect that print media can't represent.
