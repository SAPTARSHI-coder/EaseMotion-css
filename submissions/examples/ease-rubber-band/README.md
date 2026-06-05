# Ease Rubber Band Animation

## What does this do?

Creates a rubber-band animation that stretches horizontally while compressing vertically, then reverses the motion before returning to its original size.

---

## How is it used?

Apply the animation class to any element:

```html
<div class="ease-rubber-band">
    Animated Element
</div>
```

The animation can also be triggered through an active state:

```css
.rubber-btn:active {
    animation: rubber-band 0.8s ease;
}
```

---

## Why is it useful?

This animation demonstrates the classic squash-and-stretch principle used in motion design and UI animation.

Benefits include:

* Provides satisfying interaction feedback
* Makes buttons and cards feel more responsive
* Demonstrates elastic motion behavior
* Improves visual engagement without being distracting
* Can be used on buttons, cards, icons, and interactive controls

---

## Features

* Rubber-band stretch effect
* Squash-and-stretch animation principle
* Active-state trigger support
* Class-based trigger support
* Responsive demo page
* Keyboard focus styling
* Self-contained HTML/CSS/JS example
