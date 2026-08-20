# Smooth Select Dropdown

## What does this do?

The Smooth Select Dropdown adds a pure HTML/CSS select-style menu that expands with a smooth height transition and polished option states.

## How is it used?

Place the dropdown in a form or settings area and include the local stylesheet:

```html
<details class="smooth-select">
  <summary>
    <span class="select-label">Choose destination</span>
    <span class="select-value">Aurora Studio</span>
    <span class="select-arrow" aria-hidden="true"></span>
  </summary>

  <ul class="select-options" aria-label="Destination options">
    <li><a href="#aurora">Aurora Studio</a></li>
    <li><a href="#cascade">Cascade Lab</a></li>
    <li><a href="#harbor">Harbor Console</a></li>
  </ul>
</details>
```

## Why is it useful?

It gives EaseMotion CSS users a compact select-style pattern that feels smooth and modern while staying dependency-free, responsive, keyboard-friendly, dark-mode compatible, and respectful of reduced-motion preferences.
