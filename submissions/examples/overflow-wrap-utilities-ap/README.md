# EaseMotion CSS — Overflow-Wrap Utilities

This directory implements core utility classes for controlling the CSS `overflow-wrap` (formerly `word-wrap`) property in EaseMotion CSS, allowing you to control whether the browser breaks lines within otherwise unbreakable strings to prevent layout overflow.

---

## What is Overflow Wrap?

The `overflow-wrap` property determines whether the browser should break lines within an otherwise unbreakable string of characters to prevent layout breaking when it is too long to fit in its line box:

- **normal**: Lines only break at standard break points (such as spaces). Very long words/URLs will overflow their box.
- **anywhere**: Breaks unbreakable strings (like a URL or a 50-letter word) at any arbitrary character to prevent overflow. Min-content width calculations do **not** consider these breaks.
- **break-word**: Breaks unbreakable strings at any point. Min-content width calculations **do** consider these breaks.

---

## Utility Classes Reference

EaseMotion CSS provides core overflow-wrap utilities, word-break helper classes, white-space control classes, and responsive breakpoint modifiers:

### 1. Core Overflow-Wrap Utilities

| Utility Class               | CSS Equivalent                          | Description                                         |
| :-------------------------- | :-------------------------------------- | :-------------------------------------------------- |
| `.overflow-wrap-normal`     | `overflow-wrap: normal !important;`     | Only wraps at standard whitespace boundaries.       |
| `.overflow-wrap-anywhere`   | `overflow-wrap: anywhere !important;`   | Forces breaks anywhere to prevent text overflow.    |
| `.overflow-wrap-break-word` | `overflow-wrap: break-word !important;` | Wraps long strings cleanly at arbitrary characters. |

### 2. Word-Break Helpers

Sometimes, pairing `overflow-wrap` with `word-break` is necessary to control exactly how text is split:

| Utility Class   | CSS Equivalent                      | Description                                                 |
| :-------------- | :---------------------------------- | :---------------------------------------------------------- |
| `.break-normal` | `word-break: normal !important;`    | Default breaking rules.                                     |
| `.break-all`    | `word-break: break-all !important;` | Breaks words at any character (all words, even short ones). |
| `.break-keep`   | `word-break: keep-all !important;`  | Does not break words; primarily for CJK languages.          |

### 3. White-Space Helpers

| Utility Class          | CSS Equivalent                      | Description                                                 |
| :--------------------- | :---------------------------------- | :---------------------------------------------------------- |
| `.whitespace-normal`   | `white-space: normal !important;`   | Collapses spaces, wraps text normally.                      |
| `.whitespace-nowrap`   | `white-space: nowrap !important;`   | Prevents text from wrapping to a new line.                  |
| `.whitespace-pre`      | `white-space: pre !important;`      | Preserves whitespace and line breaks. No wrapping.          |
| `.whitespace-pre-line` | `white-space: pre-line !important;` | Collapses whitespace, wraps text and preserves line breaks. |
| `.whitespace-pre-wrap` | `white-space: pre-wrap !important;` | Preserves whitespace and line breaks. Wraps text.           |

### 4. Responsive Breakpoints

Apply wrap rules at specific mobile and tablet screen widths:

- `.sm-overflow-wrap-normal`, `.sm-overflow-wrap-anywhere`, `.sm-overflow-wrap-break-word` (Mobile viewports, `max-width: 768px`).
- `.md-overflow-wrap-normal`, `.md-overflow-wrap-anywhere`, `.md-overflow-wrap-break-word` (Tablet viewports, `max-width: 1024px`).

---

## Usage Examples

### 1. Wrapping Long URLs in Card Layouts

```html
<div class="chat-bubble overflow-wrap-break-word">
  Please visit this link for details:
  <a
    href="https://example.com/very/long/nested/url/path/that/would/otherwise/break/the/layout/of/narrow/chat/bubbles"
  >
    https://example.com/very/long/nested/url/path/that/would/otherwise/break/the/layout/of/narrow/chat/bubbles
  </a>
</div>
```

### 2. Wrapping Long Identifiers in Table Cells

```html
<table class="user-table">
  <tr>
    <th>API Token</th>
    <!-- Email or hash string wrapped inside narrow table cells -->
    <td class="table-cell overflow-wrap-break-word">
      usr_tok_93810a9c8f8e8d8c8b8a0987654321_access_level_full
    </td>
  </tr>
</table>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) BENEFITS

> [!IMPORTANT]
> Unwrapped text causes layouts to overflow, requiring horizontal scrolling to read, which is a major barrier for screen readers, keyboard-only users, and those with low vision.

1. **Success Criterion 1.4.10 - Reflow**: Content must reflow without loss of information or functions, and without requiring scrolling in two dimensions (e.g. horizontal scrolling on a mobile screen). Wrapping long words and links using `.overflow-wrap-break-word` ensures the page remains single-dimension scrollable.
2. **Success Criterion 1.4.4 - Resize Text**: Text must be resizable up to 200% without loss of content or functionality. As text size enlarges, long words must wrap to fit within their parent containers. Using overflow-wrap prevents elements from clipping or overlapping adjacent lines of text.

---

## Verification & Testing

Verify visual wrapping behavior by launching `demo.html` in your browser. Move the container width slider to observe how strings break dynamically.

To run the project test suite, execute:

```bash
npm test
```
