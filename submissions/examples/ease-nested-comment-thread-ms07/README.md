# Nested Comment Thread

A threaded discussion component with collapsible reply groups and a
staggered fade-in entrance. Collapse/expand is built on native
`<details>`/`<summary>`, so it's fully keyboard accessible out of the
box — no JavaScript needed for either the entrance animation or the
expand/collapse interaction.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Staggered fade-in entrance (`ease-comment-in`), delayed per comment
     via the `--ease-i` custom property, same pattern used across
     EaseMotion's other staggered examples
- ✅ Collapsible reply threads using native `<details>`/`<summary>` —
     inherits full keyboard support (`Tab` + `Enter`/`Space`) and correct
     `aria-expanded` semantics from the browser, with zero custom JS
- ✅ Animated toggle arrow that rotates based on the `[open]` state
- ✅ Unlimited nesting depth, with a connecting vertical line per level
- ✅ Works with or without replies — a comment with no nested thread
     renders identically to one that has it
- ✅ Timing, stagger, indent, and accent color exposed as CSS custom
     properties
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies (avatars are CSS-only initials)

## Files

```
ease-nested-comment-thread-ms07/
├── demo.html   # Standalone demo: 3-level nested thread + a leaf comment
├── style.css   # Component styles and the entrance keyframe
└── README.md   # This file
```

## Usage

Include `style.css`, then build the thread as a nested list. Each
comment is an `<li class="ease-comment">`; a comment with replies wraps
its nested `<ul>` in a `<details class="ease-comment__thread">`:

```html
<ul class="ease-comment-thread">

  <li class="ease-comment" style="--ease-i: 0;">
    <div class="ease-comment__row">
      <div class="ease-comment__avatar" style="--ease-avatar-color: #4285f4;" aria-hidden="true">AR</div>
      <div class="ease-comment__body">
        <div class="ease-comment__header">
          <span class="ease-comment__author">Aarav Rao</span>
          <span class="ease-comment__time">2h ago</span>
        </div>
        <p class="ease-comment__text">Great point!</p>
        <div class="ease-comment__actions">
          <button class="ease-comment__action" type="button">Reply</button>
          <button class="ease-comment__action" type="button">❤ 14</button>
        </div>
      </div>
    </div>

    <details class="ease-comment__thread" open>
      <summary class="ease-comment__toggle">
        <span class="ease-comment__toggle-icon" aria-hidden="true"></span>
        1 reply
      </summary>

      <ul class="ease-comment-thread ease-comment-thread--nested">
        <li class="ease-comment" style="--ease-i: 0;">
          ...
        </li>
      </ul>
    </details>
  </li>

</ul>
```

- `--ease-i` on each `<li class="ease-comment">` controls its position
  in the staggered entrance — reset it to `0` at the start of each
  nesting level, as shown above.
- `--ease-avatar-color` (optional, per comment) tints that comment's
  initials avatar; it falls back to `--ease-accent` if omitted.
- Add or remove the `open` attribute on `<details>` to control whether a
  thread starts expanded or collapsed by default.
- Nesting is unlimited — just repeat the `<details>` + nested
  `ease-comment-thread--nested` pattern inside any reply.

## Customization

All motion and layout values are CSS custom properties, overridable
globally on `:root`:

| Variable            | Default                              | Description                                |
|-----------------------|------------------------------------------|-------------------------------------------------|
| `--ease-duration`    | `500ms`                                 | Duration of each comment's entrance animation    |
| `--ease-easing`      | `cubic-bezier(0.16, 1, 0.3, 1)`          | Entrance easing curve                            |
| `--ease-stagger`     | `100ms`                                 | Delay added per comment, multiplied by `--ease-i`|
| `--ease-distance`    | `16px`                                  | Vertical distance each comment slides in from    |
| `--ease-indent`      | `44px`                                  | Left indent applied to each nested reply level   |
| `--ease-accent`      | `#4285f4`                               | Toggle icon, link hover, and default avatar color|
| `--ease-border`      | `#e5e7eb`                               | Comment card and thread connector line color     |

## Accessibility

- Reply threads use native `<details>`/`<summary>`, which the browser
  automatically exposes with correct `aria-expanded` state and full
  keyboard support — no custom ARIA or JavaScript required.
- Comments are structured as a semantic `<ul>`/`<li>` list, reflecting
  the actual hierarchy of the discussion for screen readers.
- Avatars are decorative CSS-generated initials marked `aria-hidden="true"`,
  since the author's name is already available as visible, readable text.
- Action buttons (`Reply`, like count) are real `<button>` elements with
  visible `:focus-visible` outlines.
- The staggered entrance is a one-time animation, not a looping or
  attention-grabbing motion, and is disabled entirely under
  `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, and native
`<details>`/`<summary>` — no vendor prefixes required for modern
browsers (Safari's default disclosure marker is hidden via
`::-webkit-details-marker` in favor of the custom triangle icon).

## Checklist

- [x] Uses EaseMotion CSS conventions (`ease-*` classes and keyframes)
- [x] Works without JavaScript (pure CSS)
- [x] Includes a live demo in `demo.html`
- [x] Includes `README.md`
- [x] Responsive and accessible