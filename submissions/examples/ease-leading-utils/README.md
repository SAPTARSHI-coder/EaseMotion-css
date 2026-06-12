# ease-leading-utils

Submission proposing `.ease-leading-tight`, `.ease-leading-normal`, and `.ease-leading-loose` utility classes that expose line-height design tokens for per-element typography overrides.

## Class Reference

| Class                  | Token                   | Default Value | Best Used For                    |
| ---------------------- | ----------------------- | ------------- | -------------------------------- |
| `.ease-leading-tight`  | `--ease-leading-tight`  | 1.25          | Display headings, compact UI     |
| `.ease-leading-normal` | `--ease-leading-normal` | 1.5           | Body text, general content       |
| `.ease-leading-loose`  | `--ease-leading-loose`  | 1.875         | Long-form reading, accessibility |

## Example

```html
<article class="ease-card">
  <h2 class="ease-leading-tight">Release notes</h2>
  <p class="ease-leading-normal">
    Version 1.0 adds animation utilities, semantic color tokens, and
  </p>
</article>
```

## Base typography override

`core/base.css` applies default line-height using these tokens globally. The utility classes override that base value at the element level, so a heading inside a loose body container can still use `.ease-leading-tight` without custom CSS.
