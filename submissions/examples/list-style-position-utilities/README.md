# Spacing: List Style Position Utilities

Logical CSS utilities controlling marker positioning relative to list element text blocks.

## What does this do?

It implements utility classes (`.lsp-inside` and `.lsp-outside`) that control whether list markers (bullets or numbers) render inside or outside the text content block.

## How is it used?

Add `.lsp-inside` or `.lsp-outside` directly to any `<ul>` or `<ol>` elements:

```html
<ul class="lsp-inside">
  <li>Point A</li>
  <li>Point B</li>
</ul>
```

## Why is it useful?

It provides list layout control directly in HTML without writing custom stylesheets. This helps maintain design system layout grids and keeps lists consistent across complex text articles.

---

## Overview

List elements default to browser-specific alignment configurations. By using list-style position utilities, developers can enforce clean grid boundaries (outside) or inline flowing text structures (inside) easily.

## Utility Class Table

| Class          | CSS Rules Applied               | Stacking / Flow Behavior                                                     |
| :------------- | :------------------------------ | :--------------------------------------------------------------------------- |
| `.lsp-inside`  | `list-style-position: inside;`  | Bullet/number sits inside the content block, text wraps underneath it.       |
| `.lsp-outside` | `list-style-position: outside;` | Bullet/number sits outside the content block, text wraps vertically aligned. |

## Usage Examples

### 1. Sequential Steps (Inside)

```html
<ol class="lsp-inside">
  <li>Enter credentials.</li>
  <li>Confirm security credentials and complete multi-factor auth setup.</li>
</ol>
```

### 2. Bulleted Lists (Outside)

```html
<ul class="lsp-outside">
  <li>Item A</li>
  <li>Item B (neatly aligned vertical boundary text block)</li>
</ul>
```

## Difference between Inside and Outside

- **`inside`**: The marker acts like an inline text element. If list content overflows onto a new line, the wrapped line starts directly below the marker. This is excellent for space-constrained blocks.
- **`outside`**: The marker sits completely outside the content boundaries. If list content overflows onto a new line, the wrapped line starts vertically aligned with the first character of the preceding line. This is the preferred typography layout for text-heavy content like articles.

## Browser Support Notes

`list-style-position` is a CSS Level 1 specification and has 100% universal support across all desktop, mobile, and legacy web browsers.

## Common Use Cases

- Navigation menus with list markers.
- Multi-step wizards and sequences.
- Structured blog articles and text layout panels.
- Content dropdown accordion bullet controls.
