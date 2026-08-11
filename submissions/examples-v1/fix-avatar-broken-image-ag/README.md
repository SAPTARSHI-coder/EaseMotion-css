# Fix ease-avatar Broken Image Fallback

## What does this do?
Adds a CSS `::after` pseudo-element that displays `data-initials` text
when the `<img>` fails to load (using `onerror` to add an `.error` class
that hides the broken img).

## How is it used?
```html
<div class="ease-avatar ease-avatar--blue" data-initials="AJ">
  <img src="photo.jpg" alt="Alice Johnson" onerror="this.classList.add('error')">
</div>
```

## Why is it useful?
Broken avatar images look unprofessional and confuse users. A styled
initials fallback provides a consistent, graceful degradation. Fixes: #35812
