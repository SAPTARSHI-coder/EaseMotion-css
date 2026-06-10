# Logical Properties (RTL Support) Architecture

## What does this do?
Proposes a massive, structural CSS migration away from physical CSS properties (like `margin-left`, `padding-right`, `border-left`) in favor of modern **Logical Properties** (`margin-inline-start`, `padding-inline-end`, `border-inline-start`). 

## How is it used?
By adopting logical properties globally across all core framework files, the library will instantly and automatically support Right-to-Left (RTL) languages like Arabic, Hebrew, and Persian out-of-the-box. Developers utilizing EaseMotion simply need to set `dir="rtl"` on their `<html>` or `<body>` tag, and all margins, paddings, absolute positioning, and floats will natively mirror themselves without requiring thousands of lines of heavy, duplicate `[dir="rtl"]` CSS overrides.

To enforce this architecture moving forward, we strongly propose adding the `stylelint-use-logical` plugin to the CI pipeline:
```json
"plugins": ["stylelint-use-logical"],
"rules": {
  "csstools/use-logical": true
}
```

## Why is it useful?
Currently, almost every component inside the `components/` directory (spanning `buttons.css`, `tooltips.css`, `sidebar.css`, and 10+ other core files) relies heavily on hardcoded, physical directions. This completely breaks the UI for RTL users, causing icons to overlap text, tooltips to spawn off-screen, and sidebars to deploy from the wrong side of the viewport. Attempting to manually fix this by writing `[dir="rtl"] .ease-btn { margin-right: ... margin-left: 0; }` across 10+ core files would massively bloat the CSS bundle. Adopting Logical Properties natively solves the problem, reduces CSS file size, and performs phenomenally better in all modern browsers.
