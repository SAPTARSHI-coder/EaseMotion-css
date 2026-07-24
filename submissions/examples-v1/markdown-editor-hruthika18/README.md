# Markdown Editor (`ease-md-editor`)

A responsive markdown editor with a formatting toolbar, live preview, and
dark mode — built in plain HTML/CSS/vanilla JS with no external
dependencies (no markdown library, no build step).

## What it does

- **Formatting toolbar**: Bold, Italic, Heading, Quote, Inline code, Link,
  Bulleted list — each wraps or prefixes the current textarea selection.
- **Live preview**: The right pane re-renders on every keystroke using a
  small built-in markdown-to-HTML converter (headings, bold/italic, inline
  code, links, blockquotes, bulleted lists, paragraphs).
- **View switching**: `Split` / `Edit` / `Preview` buttons toggle which
  pane(s) are visible — useful on narrow screens where side-by-side isn't
  practical.
- **Responsive layout**: Side-by-side panes on desktop; below 640px the
  editor shows one pane at a time based on the active view mode.
- **Dark mode**: A toggle button switches the whole editor's theme via a
  `data-ease-md-theme` attribute and CSS custom properties — no page
  reload, no separate stylesheet.
- **Smooth transitions**: Pane backgrounds, toolbar, and buttons transition
  on theme/view changes; disabled automatically under
  `prefers-reduced-motion: reduce`.

## Usage

Include all three files and initialize automatically — no manual JS setup
required, the script auto-discovers any `[data-ease-md-editor]` element on
the page:

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-md-editor" data-ease-md-editor>
  <div class="ease-md-editor__toolbar" role="toolbar" aria-label="Formatting toolbar">
    <button type="button" class="ease-md-editor__btn" data-md-action="bold">B</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="italic">I</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="heading">H</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="quote">"</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="code">&lt;/&gt;</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="link">Link</button>
    <button type="button" class="ease-md-editor__btn" data-md-action="list">List</button>

    <span class="ease-md-editor__spacer"></span>

    <button type="button" class="ease-md-editor__btn ease-md-editor__btn--view" data-md-view="split" aria-pressed="true">Split</button>
    <button type="button" class="ease-md-editor__btn ease-md-editor__btn--view" data-md-view="edit" aria-pressed="false">Edit</button>
    <button type="button" class="ease-md-editor__btn ease-md-editor__btn--view" data-md-view="preview" aria-pressed="false">Preview</button>

    <button type="button" class="ease-md-editor__btn ease-md-editor__btn--theme" data-md-theme-toggle>&#9789;</button>
  </div>

  <div class="ease-md-editor__body" data-md-body>
    <textarea class="ease-md-editor__pane ease-md-editor__pane--input" data-md-input spellcheck="false"></textarea>
    <div class="ease-md-editor__pane ease-md-editor__pane--preview" data-md-preview></div>
  </div>
</div>

<script src="script.js"></script>
```

### Configuration via CSS custom properties

| Property | Default | Description |
|---|---|---|
| `--ease-md-radius` | `12px` | Outer border radius |
| `--ease-md-height` | `420px` | Height of the editor body |
| `--ease-md-transition` | `0.25s ease` | Transition speed for theme/view changes |
| `--ease-md-accent` | `#5b6cff` (light) / `#8b98ff` (dark) | Link color, active toolbar button, focus ring |

Override on `.ease-md-editor` to retheme or resize an instance:

```css
.ease-md-editor {
  --ease-md-height: 600px;
  --ease-md-accent: #e0526b;
}
```

### Markdown subset supported

`#`, `##`, `###` headings · `**bold**` · `*italic*` · `` `inline code` ``
· `[text](url)` links · `> blockquote` · `- ` / `* ` bulleted lists ·
paragraphs. This is intentionally a small, dependency-free subset rather
than full CommonMark — enough for docs snippets, comments, and notes.

## Why it fits EaseMotion CSS

It's a larger, self-contained UI pattern (toolbar + dual-pane layout +
theme toggle) that's still zero-dependency and framework-agnostic — same
philosophy as the framework's smaller components, just assembled into a
complete editor. Markdown editors are a common need in docs sites, blogs,
and internal tools, and this gives EaseMotion CSS users a drop-in option
instead of reaching for a heavier third-party editor library.

## Accessibility notes

- Toolbar uses `role="toolbar"` with `aria-label`, and each button has an
  `aria-label` / `title`.
- View-mode buttons expose their state via `aria-pressed`.
- The theme toggle and all formatting buttons are standard `<button>`
  elements, so they're keyboard-operable and focusable by default; visible
  focus rings are provided via `:focus-visible`.
- Links generated in the preview open with `rel="noopener noreferrer"`.

## Browser support

Uses standard CSS custom properties, CSS Grid, `:focus-visible`, and
`data-*` attribute selectors, plus vanilla JS (`textarea` selection APIs,
`classList`/`dataset`) — no vendor prefixes needed for current evergreen
browsers (Chrome, Edge, Firefox, Safari).
