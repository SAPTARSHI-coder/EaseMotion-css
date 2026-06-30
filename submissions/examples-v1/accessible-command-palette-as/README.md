# Accessible Command Palette (-as)

## What does this do?

A `Ctrl`/`Cmd`+`K` command palette (the "spotlight" pattern from editors and modern apps) that filters as you type, is fully keyboard driven, traps and restores focus, and is built to the WAI-ARIA combobox + listbox specification - with a pure-CSS entrance animation that respects `prefers-reduced-motion`. No frameworks, no dependencies.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<button type="button" class="ease-cmdk__trigger" aria-haspopup="dialog">
  Open command palette <span class="ease-cmdk__kbd">Ctrl K</span>
</button>

<div
  class="ease-cmdk"
  id="ease-cmdk"
  role="dialog"
  aria-modal="true"
  aria-label="Command palette"
  hidden
>
  <div class="ease-cmdk__panel">
    <input
      id="ease-cmdk-input"
      class="ease-cmdk__input"
      type="text"
      role="combobox"
      aria-expanded="true"
      aria-controls="ease-cmdk-list"
      aria-autocomplete="list"
      autocomplete="off"
    />
    <ul
      id="ease-cmdk-list"
      class="ease-cmdk__list"
      role="listbox"
      aria-label="Commands"
    >
      <li
        id="ease-cmd-0"
        role="option"
        class="ease-cmdk__option"
        data-label="New file"
        aria-selected="false"
      >
        New file
      </li>
      <!-- ...more options... -->
    </ul>
    <p class="ease-cmdk__empty" hidden>No commands found</p>
  </div>
</div>
```

The small inline script wires up the behaviour; see `demo.html`.

## Keyboard model

| Key                   | Action                                   |
| --------------------- | ---------------------------------------- |
| `Ctrl`/`Cmd` + `K`    | Open / close the palette                 |
| Type                  | Filter commands                          |
| `Down` / `Up`         | Move the active command (wraps)          |
| `Home` / `End`        | First / last command                     |
| `Enter`               | Run the active command                   |
| `Esc`                 | Close                                    |
| `Tab` / `Shift`+`Tab` | Cycles focus within the dialog (trapped) |

## Accessibility notes

- Implements the [ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/): focus stays on the `role="combobox"` input, while the highlighted result is tracked with `aria-activedescendant` pointing at the `role="option"` whose `aria-selected` is `true`. The visual highlight is driven by that same `aria-selected`, so what sighted users see always matches what assistive tech announces.
- `role="dialog"` + `aria-modal="true"`, focus moved to the input on open, **focus trapped** while open, and focus **restored** to the trigger on close.
- The active option is kept in view with `scrollIntoView({ block: "nearest" })`.
- The entrance animation uses only `transform`/`opacity` and is disabled under `prefers-reduced-motion`.

## Why is it useful?

The command palette is a high-value power-user pattern, but it is genuinely hard to get right: most implementations break keyboard navigation, leak focus to the page behind, or never announce the highlighted item. This submission is a correct, dependency-free reference that an app can drop in and trust. It fits EaseMotion's animation-first, beginner-friendly, zero-dependency philosophy while raising the bar on accessibility.

## Browser support

Works in all current browsers. `:focus-visible` and `scrollIntoView` options degrade gracefully on older engines (you still get focus styling and navigation, just without the refinement).
