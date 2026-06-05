# ease-hover-reveal-text — Hidden text slides up on hover

## What does this do?

A pure CSS hover effect where hidden text slides up from below a wrapper element on parent hover. Uses `overflow: hidden` on the wrapper and `translateY(100%)` → `translateY(0)` on the child.

## The technique

```css
.parent {
  overflow: hidden;
}

.ease-hover-reveal-text {
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0, 0, 0.2, 1);
}

.parent:hover .ease-hover-reveal-text {
  transform: translateY(0);
}
```

## How is it used?

```html
<div class="parent">
  <p>Visible heading</p>
  <span class="ease-hover-reveal-text">Hidden text slides up on hover</span>
</div>
```

## Demo variants included

- **Card caption** — gradient card with title + reveal description
- **Button subtitle** — action buttons with secondary text that appears on hover
- **Image overlay caption** — image with overlay caption that reveals details

## CSS concepts used

- `overflow: hidden` to clip the hidden content
- `translateY(100%)` to push text below the wrapper
- `cubic-bezier(0, 0, 0.2, 1)` for smooth ease-out transition
- `:hover` parent selector to trigger the child transform

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom reveal-specific styles.
