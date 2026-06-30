# Core Changes Proposal: Issue #20366

## Problem Description

Issue [#20366](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20366) reports that `npm run build:scss` produces an empty stylesheet.

**The bug** is in `scss/_index.scss`, the SCSS entry point:

```scss
@forward "variables";
@forward "mixins";
```

`@forward` only re-exports Sass modules (variables, mixins, functions) for use by other Sass files. It does **not** emit any CSS. Since the entry point contains nothing else, running:

```
sass scss/_index.scss dist/easemotion.scss.css
```

produces a file that is roughly **50 bytes** containing only a `sourceMappingURL` comment — no `.ease-btn`, no `.ease-card`, no framework styles at all.

## Proposed Fix

Add `@use` statements for the core and component CSS files to `scss/_index.scss`. In modern Dart Sass (the project uses `^1.77.0`), `@use` with a `.css` extension loads plain CSS files and includes their contents in the compiled output.

**Change `scss/_index.scss` from:**

```scss
@forward "variables";
@forward "mixins";
```

**To:**

```scss
@forward "variables";
@forward "mixins";

// Framework styles
@use "../core/variables.css";
@use "../core/base.css";
@use "../core/animations.css";
@use "../core/utilities.css";
@use "../components/ease-marquee.css";
@use "../components/buttons.css";
@use "../components/cards.css";
@use "../components/navbar.css";
@use "../components/masonry.css";
@use "../components/chip.css";
@use "../components/footer.css";
@use "../components/sidebar.css";
@use "../components/scroll-progress.css";
@use "../components/tabs.css";
@use "../components/badges.css";
@use "../components/loaders.css";
@use "../components/tooltips.css";
@use "../components/modals.css";
```

The import list follows the same order as `easemotion/all.css` to preserve cascade behavior. The `@forward` lines remain so downstream SCSS consumers can still access variables and mixins.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `scss/_index.scss` directly.

Fixes #20366
