# Ease Banner

A lightweight top-of-page announcement/banner component built with pure HTML and CSS.

## Features

- CSS-only implementation
- Slide-down entrance animation
- Responsive design
- Dismissible variant
- No JavaScript required

## Components

### ease-banner

Basic announcement banner displayed at the top of the page.

### ease-banner-dismissible

Dismissible version using the checkbox + label pattern.

## Usage

```html
<div class="ease-banner">
    Welcome to EaseMotion CSS!
</div>
```

### Dismissible Variant

```html
<input type="checkbox" id="dismiss-banner" hidden>

<div class="ease-banner ease-banner-dismissible">
    Banner Content
    <label for="dismiss-banner">&times;</label>
</div>
```

## License

MIT