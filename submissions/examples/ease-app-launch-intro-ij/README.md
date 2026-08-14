# App Launch Intro

> An app splash / intro screen with logo animation, loading bar, tagline reveal, and smooth transition to main content. Built with CSS custom properties and JavaScript.

## Features

- Logo scales and fades in on load
- Loading bar fills progressively over 3.5s
- Tagline appears with staggered delay
- Skip button to bypass intro
- Smooth fade + translate transition to main content

## Usage

Include the stylesheet and HTML structure. The intro overlay automatically plays on load.

```html
<link rel="stylesheet" href="style.css" />
```

```html
<div class="ali-intro" id="intro">...</div>
<main class="ali-main" id="mainContent">...</main>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ali-duration` | `3.5s` | Total intro duration |
| `--ali-bg` | `#0f0f1a` | Intro background color |
| `--ali-logo-color` | `#6c63ff` | Logo icon color |
| `--ali-text-color` | `#ffffff` | Text color |
| `--ali-accent` | `#6c63ff` | Loading bar accent color |

## Browser Support

Chrome, Firefox, Safari, Edge — any browser supporting CSS `transition`, `transform`, and `opacity`.

## License

MIT
