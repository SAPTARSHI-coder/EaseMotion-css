# ease-font-display — Font Display & Optimization Utility Classes

## What does this do?

Controls font rendering behavior via `font-display`, `font-smoothing`, and `text-rendering` for better typography and performance.

## How is it used?

```html
<p class="ease-font-display-swap">Swap fallback font while loading</p>
<p class="ease-font-smooth">Smooth antialiased text</p>
<p class="ease-text-optimize-legibility">Better kerning and ligatures</p>
```

### Classes

| Class                            | Property                                                                     | Use Case                  |
| -------------------------------- | ---------------------------------------------------------------------------- | ------------------------- |
| `.ease-font-display-auto`        | `font-display: auto`                                                         | Browser default           |
| `.ease-font-display-swap`        | `font-display: swap`                                                         | Show fallback immediately |
| `.ease-font-display-block`       | `font-display: block`                                                        | Invisible until loaded    |
| `.ease-font-display-fallback`    | `font-display: fallback`                                                     | Brief block then swap     |
| `.ease-font-display-optional`    | `font-display: optional`                                                     | Only if cached            |
| `.ease-font-smooth`              | `-webkit-font-smoothing: antialiased` + `-moz-osx-font-smoothing: grayscale` | Smoother text             |
| `.ease-font-smooth-subpixel`     | `-webkit-font-smoothing: subpixel-antialiased`                               | Subpixel rendering        |
| `.ease-text-optimize-legibility` | `text-rendering: optimizeLegibility`                                         | Better kerning            |
| `.ease-text-optimize-speed`      | `text-rendering: optimizeSpeed`                                              | Faster rendering          |
| `.ease-text-geometric-precision` | `text-rendering: geometricPrecision`                                         | Precise geometry          |
