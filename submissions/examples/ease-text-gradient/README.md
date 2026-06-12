# ease-text-gradient

Applies a gradient fill to text using `background-clip: text`.
Fully customizable via CSS variables.

## Usage

```html
<!-- Default gradient -->
<h1 class="ease-text-gradient">Gradient Text</h1>

<!-- Custom colors -->
<h1
  class="ease-text-gradient"
  style="--ease-gradient-from: #f97316; --ease-gradient-to: #eab308;"
>
  Custom Gradient
</h1>
```

## CSS Output

```css
.ease-text-gradient {
  --ease-gradient-from: #6366f1;
  --ease-gradient-to: #ec4899;
  background: linear-gradient(
    to right,
    var(--ease-gradient-from),
    var(--ease-gradient-to)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

## Use Case

Hero headings, section titles, and any text that needs visual emphasis.
Override `--ease-gradient-from` and `--ease-gradient-to` for custom colors.
`-webkit-background-clip` included for Safari compatibility.
