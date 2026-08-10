# Line Number Animate (#36775)

Code-style lines that reveal line numbers with a staggered counting animation on hover.

## CSS Custom Properties

| Property          | Default   | Description               |
|-------------------|-----------|---------------------------|
| `--number-color`  | `#7aa2f7` | Line number color         |
| `--bg-color`      | `#1a1a1a` | Card background color     |
| `--count-duration`| `0.3s`    | Per-line animation speed  |
| `--stagger-delay` | `0.05s`   | Delay between lines       |

## Usage

```html
<div class="ease-line-number">
  <div class="code-line" style="--line: 1">your code</div>
  <div class="code-line" style="--line: 2">more code</div>
</div>
```

Each `.code-line` needs a `--line` custom property set to its index for stagger timing.
