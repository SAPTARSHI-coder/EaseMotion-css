# Combobox Autocomplete

## What does this do?

A filtered-list combobox (country search) implementing the ARIA Combobox
pattern with `aria-activedescendant`: arrow keys move a visual "active"
highlight through the filtered options while keyboard focus never leaves
the text input.

## How is it used?

```html
<input
  id="cba-input" role="combobox"
  aria-expanded="false" aria-controls="cba-listbox" aria-autocomplete="list"
  oninput="cbaFilter(this)" onkeydown="cbaKeydown(event)"
/>
<ul class="cba-listbox" id="cba-listbox" role="listbox" hidden></ul>
```

`cbaFilter` rebuilds the listbox from a prefix match on every keystroke;
`cbaKeydown` moves `cbaActiveIndex` on Arrow keys and sets
`aria-activedescendant` on the input to the currently-active option's id,
without ever calling `.focus()` on an option.

## Why is it useful?

A combobox's options list is easy to implement by actually moving DOM focus
into the listbox on arrow-key press — but that breaks the "single text
field with a dropdown" mental model: focus visibly leaves the input, screen
readers announce a context switch, and typing to continue filtering no
longer works without first tabbing back. `aria-activedescendant` is the
ARIA-sanctioned way around this: the input keeps real DOM focus the entire
time, and the input's `aria-activedescendant` attribute *tells* assistive
tech which option is conceptually active, without any focus move actually
happening. The visual highlight is a plain CSS class kept in sync with that
same active index — there's exactly one source of truth for "which option is
active," referenced by both the accessibility attribute and the visible
style.

Filtering by exact-prefix match (`indexOf(query) === 0`, not a general
substring search) keeps results predictable — a search for "In" only
matches countries starting with "In" (India, Indonesia), rather than also
surfacing an unrelated country that happens to contain "in" somewhere in the
middle of its name.
