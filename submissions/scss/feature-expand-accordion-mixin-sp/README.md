# Expand Accordion Mixin

## Description

`ease-expand-accordion-mixin-sp` is a beginner-friendly SCSS mixin that adds a smooth expand / collapse animation to accordion panels. It uses CSS Grid (`0fr` → `1fr`) for accurate height transitions, plus a light scale-and-fade motion for polish. An optional exit class supports collapse animations when a panel closes.

## Why it is useful

- Smooth expand without guessing `max-height` values
- Works with semantic `<details>` / `aria-expanded` patterns
- One `@include` for reusable accordion motion across a project
- Built-in `prefers-reduced-motion` support

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `0.5s` | Length of the expand / exit animation |
| `$easing` | Timing-Function | `cubic-bezier(0.4, 0, 0.2, 1)` | Motion easing curve |

## Usage

```scss
@use 'path/to/expand-accordion' as *;

.my-element {
  @include ease-expand-accordion-mixin-sp(0.5s);
}
```

### HTML (accessible pattern)

```html
<details class="ease-expand-accordion-item-sp">
  <summary>Section title</summary>
  <div class="my-element">
    <div>
      Accordion body content goes here.
    </div>
  </div>
</details>
```

Or toggle with classes / ARIA:

```html
<button type="button" aria-expanded="false" aria-controls="panel-1">Toggle</button>
<div
  id="panel-1"
  class="my-element"
  role="region"
  aria-labelledby="heading-1"
>
  <div>Panel content</div>
</div>
```

```js
// Open
panel.classList.add('ease-expand-accordion-open-sp');
button.setAttribute('aria-expanded', 'true');

// Exit / collapse
panel.classList.remove('ease-expand-accordion-open-sp');
panel.classList.add('ease-expand-accordion-exiting-sp');
button.setAttribute('aria-expanded', 'false');
```

## Accessibility

- Prefer semantic markup (`<details>` / `<summary>`, or `button` + `aria-expanded` + `aria-controls`)
- Keep focusable controls keyboard-operable
- Under `prefers-reduced-motion: reduce`, animations and transitions are disabled; the panel still opens and closes instantly so content remains usable

## Files

```
submissions/scss/feature-expand-accordion-mixin-sp/
├── _expand-accordion.scss
└── README.md
```
