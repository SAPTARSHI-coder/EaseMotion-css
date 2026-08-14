# Fix #10426: Dynamic Stagger Token

This submission fixes the hardcoded `animation-delay` values in `loaders.css` by extracting them into a custom property: `--ease-loader-stagger`.

## Usage
By default, `--ease-loader-stagger` is set to `0.2s`.
You can customize the stagger delay dynamically via CSS or JavaScript:

```css
.my-container {
  --ease-loader-stagger: 0.5s;
}
```

The 2nd and 3rd dots automatically multiply this base stagger.
