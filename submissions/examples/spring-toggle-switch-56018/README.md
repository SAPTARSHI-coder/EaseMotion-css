# Spring-Animated Toggle Switch

## What does this do?
A highly polished, iOS-style toggle switch that uses a hidden checkbox (`<input type="checkbox">`) and the adjacent sibling selector (`+`) to animate the knob. It uses a custom `cubic-bezier` timing function to give the toggle a realistic, springy bounce when clicked.

## How is it used?
```html
<label class="ease-toggle-container">
    <input type="checkbox" class="ease-toggle-input">
    <div class="ease-toggle-switch"></div>
</label>
```

## Why does it fit EaseMotion CSS?
It adheres to strict HTML accessibility standards by utilizing native `<input>` semantics while completely overriding the visual presentation with pure CSS. The `cubic-bezier` transition adds a delightful, tactile bounce without a single line of JavaScript.

## Tech Stack
- HTML
- CSS (No JavaScript)
