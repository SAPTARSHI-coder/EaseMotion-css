# Global Keyboard Focus Ring Management

## What does this do?
A base layer utility class that hides the default outline for mouse users
while always showing a clean, themed focus ring for keyboard users, using
the `:focus-visible` technique. Also maintains visibility in Windows
High Contrast mode.

## How is it used?

```html
<button class="ease-focusable">Click me</button>
<a href="#" class="ease-focusable">Link</a>
<input class="ease-focusable" type="text" />
```

Customize via CSS tokens:

```css
.my-element {
  --ease-focus-ring-color: #10b981;
  --ease-focus-ring-offset: 4px;
  --ease-focus-ring-radius: 999px;
}
```

Available tokens: `--ease-focus-ring-color`, `--ease-focus-ring-offset`,
`--ease-focus-ring-radius`, `--ease-focus-ring-width`.

## Why is it useful?
Many component demos remove the default focus outline for aesthetics
without adding `:focus-visible` replacements, leaving keyboard users with
no visual feedback. This utility fixes that gap, hides the ring for mouse
users, shows it for keyboard users, and respects forced-colors mode.
Pure CSS, no JS required.