# Smooth Scroll & Hover Motion Utility

A lightweight, reusable SCSS utility for the **EaseMotion CSS** design system. Provides mixins for custom scrollbar styling and common hover interaction effects (lift, glow, underline).

## Files

- `_smooth-scroll-and-hover-motion-utility.scss` — the mixin partial
- `main.scss` — example usage / compiles to style.css
- `style.css` — compiled CSS output
- `demo.html` — live demo page

## Mixins

### `smooth-scrollbar($thumb-color, $track-color, $width, $radius)`

Styles the scrollbar track and thumb, cross-browser (WebKit + Firefox).

| Param | Default | Description |
|---|---|---|
| `$thumb-color` | `#6c63ff` | Scrollbar thumb color |
| `$track-color` | `#f1f1f1` | Scrollbar track color |
| `$width` | `8px` | Scrollbar width/height |
| `$radius` | `10px` | Border radius of thumb & track |

```scss
.sidebar {
  @include smooth-scrollbar(#ff6b6b, #f5f5f5, 6px, 8px);
}
```

### `hover-lift($distance, $duration)`

Lifts an element up on hover with a soft shadow.

| Param | Default | Description |
|---|---|---|
| `$distance` | `5px` | How far the element moves up |
| `$duration` | `0.25s` | Transition speed |

```scss
.card {
  @include hover-lift(6px, 0.3s);
}
```

### `hover-glow($color, $spread)`

Adds a soft glow shadow around an element on hover.

| Param | Default | Description |
|---|---|---|
| `$color` | `#6c63ff` | Glow color |
| `$spread` | `12px` | Glow spread radius |

```scss
.btn {
  @include hover-glow(#00c9a7, 14px);
}
```

### `hover-underline($color, $height, $duration)`

Animated underline that grows left-to-right on hover.

| Param | Default | Description |
|---|---|---|
| `$color` | `#6c63ff` | Underline color |
| `$height` | `2px` | Underline thickness |
| `$duration` | `0.3s` | Animation speed |

```scss
.nav-link {
  @include hover-underline(#ff6b6b);
}
```

## Usage

```scss
@import 'smooth-scroll-and-hover-motion-utility';

.my-element {
  @include smooth-scrollbar();
  @include hover-lift();
}
```

## Compiling

```bash
sass main.scss style.css
```

## Demo

Open `demo.html` in a browser to see all mixins in action.

## Browser Support

- Scrollbar styling: Chrome, Safari, Edge (`::-webkit-scrollbar`), Firefox (`scrollbar-width`/`scrollbar-color`)
- Hover effects: all modern browsers
