# EaseMotion CSS — Text Overflow Utilities

This directory implements core utility classes for configuring CSS `text-overflow` parameters and WebKit multi-line line-clamp styles.

---

## What is Text Overflow?

The `text-overflow` property in CSS configures how text is rendered when it exceeds the horizontal boundaries of its containing box. It allows developers to clip the text, append a standard ellipsis (`...`), show custom truncation characters, or apply faded gradients.

> [!IMPORTANT]
> The `text-overflow` property only operates when the containing element has a constrained layout width and the following prerequisites are met:
>
> 1. `overflow: hidden` (or `scroll` / `auto`)
> 2. `white-space: nowrap` (or multi-line box limits)

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring text truncation layouts.

### 1. Single-Line Overflow Modes

| Utility Class           | Standard Class               | CSS Rule                   | Description                                                     |
| :---------------------- | :--------------------------- | :------------------------- | :-------------------------------------------------------------- |
| `.overflow-clip`        | `.text-overflow-clip`        | `text-overflow: clip;`     | Standard clipping: cuts characters off at the container border. |
| `.overflow-ellipsis`    | `.text-overflow-ellipsis`    | `text-overflow: ellipsis;` | Ellipsis truncation: appends "..." characters.                  |
| `.overflow-string-dot`  | `.text-overflow-string-dot`  | `text-overflow: '..';`     | Custom character: appends two dot characters.                   |
| `.overflow-string-dash` | `.text-overflow-string-dash` | `text-overflow: '--';`     | Custom character: appends two dash characters.                  |
| `.overflow-fade`        | `.text-overflow-fade`        | `text-overflow: fade;`     | Fades overflowing text at boundary margins (experimental).      |

### 2. Dual-Value Overflow (Scrollable Containers)

Configure truncation on both sides of scrollable text boxes simultaneously:

| Utility Class             | CSS Rule                            | Description                               |
| :------------------------ | :---------------------------------- | :---------------------------------------- |
| `.overflow-dual-clip`     | `text-overflow: clip clip;`         | Clips text at both scroll ends.           |
| `.overflow-dual-ellipsis` | `text-overflow: ellipsis ellipsis;` | Shows ellipses at both scroll ends.       |
| `.overflow-dual-fade`     | `text-overflow: fade fade;`         | Fades out characters at both scroll ends. |

### 3. Multi-Line Clamping

| Utility Class      | CSS Rule                     | Description                             |
| :----------------- | :--------------------------- | :-------------------------------------- |
| `.line-clamp-1`    | `-webkit-line-clamp: 1;`     | Restricts rendering to exactly 1 line.  |
| `.line-clamp-2`    | `-webkit-line-clamp: 2;`     | Restricts rendering to exactly 2 lines. |
| `.line-clamp-3`    | `-webkit-line-clamp: 3;`     | Restricts rendering to exactly 3 lines. |
| `.line-clamp-4`    | `-webkit-line-clamp: 4;`     | Restricts rendering to exactly 4 lines. |
| `.line-clamp-5`    | `-webkit-line-clamp: 5;`     | Restricts rendering to exactly 5 lines. |
| `.line-clamp-6`    | `-webkit-line-clamp: 6;`     | Restricts rendering to exactly 6 lines. |
| `.line-clamp-none` | `-webkit-line-clamp: unset;` | Disables multi-line clamping.           |

---

## Usage Examples

### 1. Standard Ellipsis Truncation

To truncate an overflowing single-line element with an ellipsis:

```html
<div class="truncate-nowrap overflow-ellipsis">
  This is a very long heading that will truncate with three dots if it exceeds
  width.
</div>
```

### 2. Multi-Line Card Descriptions

To truncate descriptions at a fixed line count inside a grid card:

```html
<div class="card">
  <h3 class="card-title">Product Name</h3>
  <p class="line-clamp-3">
    This description has multiple paragraphs or a very long story. It will
    automatically render up to exactly three lines before showing an ellipsis at
    the end, maintaining clean vertical heights in grid layouts.
  </p>
</div>
```

### 3. Scrollable Dual-value Containers

Perfect for tab navigation headers where elements scroll horizontally and you want visual hints at both ends:

```html
<nav class="truncate-scroll no-scrollbar overflow-dual-ellipsis">
  Tab 1 • Tab 2 • Tab 3 • Tab 4 • Tab 5 • Tab 6 • Tab 7 • Tab 8 • Tab 9
</nav>
```

---

## Layout Rules & Performance Best Practices

1. **Flex & Grid Child Truncation**: When placing a truncating element inside a CSS Flexbox or CSS Grid container, the child element might fail to truncate because its container defaults to `min-width: auto`. Solve this by setting `min-width: 0` on the parent flex/grid cell.
2. **Table Cell Truncation**: To truncate cell contents in HTML tables, you must apply `table-layout: fixed` on the `<table>` element and specify a width on the target column header.
3. **Line-Clamp Performance**: WebKit multi-line line clamping uses `-webkit-box-orient: vertical` which is highly optimized on mobile layouts. It prevents rendering layout calculations for parts of the text block that are clipped, improving paint times.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```
