# Markdown Editor (`ease-markdown-editor-hr18`)

A responsive Markdown editor UI with a formatting toolbar, live preview,
and dark mode, built for issue
[#49546](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/49546).

## What it does

A two-pane editor: a plain `<textarea>` on the left for Markdown source, and
a live-rendered preview pane on the right that updates on every keystroke.
A formatting toolbar (Bold, Italic, Heading, Link, Inline code, Blockquote,
Bulleted list, Numbered list) inserts or wraps the current selection with
the right Markdown syntax instead of requiring it to be typed by hand.

Markdown is parsed by a small, dependency-free renderer included directly
in `demo.html` — headings, bold/italic, inline code, fenced code blocks,
blockquotes, links, ordered/unordered lists, horizontal rules, and
paragraphs. It's a deliberate subset, not a full CommonMark
implementation, sized for a lightweight docs/notes/comment editor rather
than arbitrary Markdown documents.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN — including no Markdown
parsing library.

## Usage

Type Markdown in the left pane; the right pane updates live. Use the
toolbar to insert formatting — with text selected, most buttons wrap the
selection (e.g. select a word and click **B** to bold it); without a
selection, they insert placeholder text you can type over. Toggle **Dark
mode** in the header, and on narrow screens the two panes collapse into
**Edit** / **Preview** tabs instead of a side-by-side split.

## Accessibility notes

- Every toolbar button is a real `<button>` with an `aria-label`
  describing its action (e.g. "Bold", "Bulleted list"), so icon-only
  controls are still announced correctly.
- The preview pane has `aria-live="polite"`, so screen reader users get a
  reasonable indication that content updated as they type, without being
  interrupted on every keystroke the way `aria-live="assertive"` would.
- The mobile Edit/Preview switcher uses proper `role="tablist"` /
  `role="tab"` semantics with `aria-selected` state.
- Toolbar formatting works entirely through native `<textarea>` selection
  APIs (`selectionStart`/`selectionEnd`/`setSelectionRange`), so it's
  usable with a keyboard alone, not just a mouse.
- The theme toggle uses `aria-pressed` to announce its current state.

## Responsiveness

Above `760px`, the editor and preview panes sit side by side. Below that,
they stack and are switched between with the Edit/Preview tabs in the
toolbar, so neither pane is ever squeezed into an unreadable column on a
phone.

## Why this fits EaseMotion CSS

It's a self-contained, reusable UI component — exactly what the issue
asks for — built with plain HTML/CSS/vanilla JS and zero dependencies,
including for the Markdown parsing itself, consistent with the framework's
zero-dependency philosophy. The preview pane's update and the dark-mode
toggle both use small CSS transitions, matching EaseMotion's animation-
first character rather than updating instantly and jarringly.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
