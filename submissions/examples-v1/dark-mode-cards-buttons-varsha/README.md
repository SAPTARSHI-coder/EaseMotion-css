# Dark Mode Cards & Buttons

## What does this do?
Adds automatic dark-mode styling for card and button components using `prefers-color-scheme: dark`.

## How is it used?
```html
<div class="card-varsha card-shadow-varsha">
  <button class="btn-primary-varsha">Primary</button>
  <button class="btn-outline-varsha">Outline</button>
  <button class="btn-ghost-varsha">Ghost</button>
</div>
```
No extra class needed — styling switches automatically based on the user's OS/browser theme preference.

## Why is it useful?
EaseMotion's card and button components currently only ship light-theme styling. Many users browse with dark mode enabled system-wide, and without this, cards/buttons look inconsistent or harsh against a dark page background.
