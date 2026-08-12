# CSS Float Up Text Link

A duo of polished, interactive text link animations that playfully float upward upon hover, built entirely without JavaScript.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript event listeners.
- **Two Unique Variants**:
  - **Elevation Float**: A subtle `translateY` elevation paired with a dynamic `text-shadow` drop and an expanding pseudo-element underline. The use of a `cubic-bezier` timing function gives it a springy, physical feel.
  - **Roll Up Replacement**: A popular premium interaction where the original text translates up and out of view (`overflow: hidden`), while a colored clone (`content: attr(data-text)`) slides up from underneath, smoothly un-skewing itself into place.
- **Accessible**: Functions as semantic `<a>` tags with clear `outline` fallback handling for `:focus-visible` states. Respects user preferences by gracefully disabling all transform translations and skewing animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your navigation menus or inline text layouts.

**Variant 1: Simple Float**
```html
<a href="#" class="float-up-link">
  Float Up Link
</a>
```

**Variant 2: Roll Up**
```html
<a href="#" class="roll-up-link">
  <span class="link-text" data-text="Roll Up Link">Roll Up Link</span>
</a>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--link-color`: The primary link color (default: `#3b82f6`)
- `--link-hover`: The active hover color (default: `#2563eb`)
- `--shadow-color`: The color used for the elevation shadow (default: `rgba(59, 130, 246, 0.3)`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The `attr(data-text)` CSS function combined with `content` pseudo-elements is perfectly supported universally.
