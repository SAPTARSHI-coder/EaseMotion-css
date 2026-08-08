# Code-Inline CSS Logical Properties (i18n / RTL)

## Description
This PR modernizes the `code-inline` component by replacing physical CSS properties (like `margin-left`, `padding-top`, `width`) with **CSS Logical Properties** (like `margin-inline-start`, `padding-block-start`, `inline-size`).

This architectural shift ensures the component automatically and flawlessly mirrors its layout when rendered in Right-to-Left (RTL) contexts (such as Arabic or Hebrew websites) or vertical writing modes (like Japanese), completely eliminating the need for `[dir="rtl"]` override stylesheets.

## Key Logical Properties Used
- `inline-size` / `block-size` (Replaces `width` / `height`)
- `padding-inline` / `padding-block` (Replaces `padding-left/right` / `padding-top/bottom`)
- `margin-inline-start/end` (Replaces `margin-left/right`)
- `border-inline-start` (Replaces `border-left` in LTR, but applies to the right in RTL).
- `inset-inline-end` (Replaces `right` for absolute positioning in LTR).

## Changes
- `style.css`: 100% logical properties. No physical directions used.
- `demo.html`: A side-by-side demonstration proving the exact same CSS class automatically mirrors itself perfectly when placed inside a `<div dir="rtl">` container.
- `README.md`: Explains the accessibility and internationalization benefits.
\nFixes #56814\n