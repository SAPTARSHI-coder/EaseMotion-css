# ease-gradient-text — Text Gradient Utility

## What does this do?

Applies a gradient fill to text using `background-clip: text` and `-webkit-text-fill-color: transparent`. Works with any CSS gradient — use the class with EaseMotion gradient utilities or a custom `background`.

## How is it used?

```html
<h2 class="ease-gradient-text" style="background: linear-gradient(135deg, #6c63ff, #ec4899);">
  Gradient Heading
</h2>
```

### Predefined Gradients

```html
<h2 class="ease-gradient-text ease-gradient-primary">Primary gradient</h2>
<h2 class="ease-gradient-text ease-gradient-sunset">Sunset gradient</h2>
<h2 class="ease-gradient-text ease-gradient-ocean">Ocean gradient</h2>
<h2 class="ease-gradient-text ease-gradient-forest">Forest gradient</h2>
```

### Classes

| Class | Description |
|---|---|
| `.ease-gradient-text` | Core class: clips background to text |
| `.ease-gradient-primary` | Brand gradient (#6c63ff → #8b5cf6) |
| `.ease-gradient-sunset` | Warm sunset (#f59e0b → #ec4899) |
| `.ease-gradient-ocean` | Blue/teal (#3b82f6 → #06b6d4) |
| `.ease-gradient-forest` | Green/emerald (#10b981 → #34d399) |
| `.ease-gradient-fire` | Red/orange (#ef4444 → #f97316) |
| `.ease-gradient-midnight` | Deep indigo (#4338ca → #6366f1) |
| `.ease-gradient-aurora` | Cyan/purple (#06b6d4 → #8b5cf6) |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-gradient-text-bg` | *(inherited)* | Override gradient on `.ease-gradient-text` |
