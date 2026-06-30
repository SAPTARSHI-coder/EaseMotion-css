# ease-breadcrumb-collapse

## What does it do?

When a breadcrumb path is too long, middle items collapse into an animated ellipsis that expands on click — pure CSS, no JavaScript.

## Features

- Collapsed state shows `...` as a clickable label
- Click expands to show full path with smooth slide-down
- Uses checkbox hack (`:checked`) for toggle interaction
- Common deep-navigation UI pattern

## Usage

```html
<input type="checkbox" id="bc-toggle" hidden />
<label for="bc-toggle">...</label>
<div class="collapsed-items">
  <!-- hidden breadcrumb items -->
</div>
```

```css
.collapsed-items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

#bc-toggle:checked ~ .collapsed-items {
  max-height: 200px;
}
```

## Browser Support

- `:checked` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
