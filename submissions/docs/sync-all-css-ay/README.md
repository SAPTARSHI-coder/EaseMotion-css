# Sync `easemotion/all.css` with `easemotion.css` — Fix Reference

Documents the exact import diff between `easemotion.css` and `easemotion/all.css`
and provides a corrected import list for the maintainer to review and integrate.

## What does this do?

`easemotion/all.css` is missing **19 component imports** that are present in the
primary `easemotion.css` bundle. This submission documents every missing import,
demonstrates the gap with a visual comparison page, and proposes the corrected
import list for the maintainer to apply to `easemotion/all.css`.

## How is it used?

After the maintainer integrates the fix, both entry points will behave identically:

```html
<!-- Primary bundle (already complete) -->
<link rel="stylesheet" href="easemotion.css" />

<!-- Alternate modular entry point (should match after fix) -->
<link rel="stylesheet" href="easemotion/all.css" />
```

The corrected import order for `easemotion/all.css`
(see `style.css` in this submission for the full annotated reference):

```css
/* Core */
@import "./variables.css";
@import "../core/base.css";
@import "../core/animations.css";
@import "../core/utilities.css";
@import "../components/ease-marquee.css";

/* Components currently present in all.css */
@import "../components/buttons.css";
@import "../components/cards.css";
@import "../components/navbar.css";
@import "../components/masonry.css";
@import "../components/chip.css";
@import "../components/footer.css";
@import "../components/sidebar.css";
@import "../components/scroll-progress.css";
@import "../components/tabs.css";
@import "../components/badges.css";
@import "../components/loaders.css";
@import "../components/tooltips.css";
@import "../components/modals.css";

/* Missing imports — must be added to easemotion/all.css */
@import "../components/command-palette.css";
@import "../components/announce-bar.css";
@import "../components/avatar.css";
@import "../components/breadcrumb.css";
@import "../components/btn-magnetic.css";
@import "../components/compare-table.css";
@import "../components/connection-status.css";
@import "../components/fab.css";
@import "../components/kbd.css";
@import "../components/pagination.css";
@import "../components/password-strength.css";
@import "../components/progress.css";
@import "../components/read-more.css";
@import "../components/scroll-gallery.css";
@import "../components/skeleton.css";
@import "../components/tag.css";
@import "../components/toast.css";
@import "../components/view-transitions.css";
@import "../components/forms.css";
```

## Why is it useful?

`easemotion/all.css` is used as an alternative full-bundle entry point.
When it is out of sync with `easemotion.css`, users who import it receive
a silently incomplete stylesheet — no error, just missing styles.

Keeping both entry points synchronized ensures:

- **Consistency** — users get the same component coverage regardless of
  which entry point they choose.
- **Trust** — silent style regressions erode confidence in the framework.
- **Maintainability** — a single canonical import list makes future audits trivial.

This submission intentionally does **not** edit `easemotion/all.css` directly,
in compliance with the current core-freeze policy. The corrected import list in
`style.css` serves as the maintainer reference.
