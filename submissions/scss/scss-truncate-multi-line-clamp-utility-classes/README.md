# Truncate Multi-Line Clamp Utility Classes
Reusable SCSS mixin and utility classes for truncating text after a specific number of lines, with an ellipsis (…) at the cutoff.
---
## Features
- Configurable line-clamp mixin
- Pre-generated utility classes (`.u-truncate-1` to `.u-truncate-6`)
- WebKit fallback via `-webkit-line-clamp`
- No JavaScript required
---
## Included Mixin

### `truncate-lines()`
Clamps text to a given number of lines.
```scss
.card__description {
  @include truncate-lines(2);
}
```
---
## Parameters
| Mixin | Parameters |
|-------|------------|
| `truncate-lines()` | lines (default: 3) |
---
## Utility Classes
Pre-generated classes for quick use without writing SCSS:
```html
<p class="u-truncate-3">
  This paragraph clamps to exactly three lines, with an ellipsis
  appended if the text overflows...
</p>
```
---
## Example
```scss
.card__title {
  @include truncate-lines(1);
}
.card__excerpt {
  @include truncate-lines(3);
}
```
---
## CSS Compilation Result
Example output for `.u-truncate-3`:
```css
.u-truncate-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
---
## Notes
- Relies on `line-clamp` / `-webkit-line-clamp`, supported in all major modern browsers.
- No changes are made to the EaseMotion CSS core framework.