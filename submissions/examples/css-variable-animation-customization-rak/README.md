# CSS Variable Animation Customization

## What it does

Adds CSS custom properties (`--em-duration`, `--em-delay`, `--em-easing`, `--em-iteration`) that control an animation's timing. The animation reads its values from these variables, so you can change how it behaves by overriding a variable instead of editing the keyframes or writing a new rule.

## How to use it

Add the `em-animate` class to any element to run the animation with the default timing:

```html
<div class="card em-animate">Hello</div>
```

To change the timing, override a variable on that element (or any parent):

```css
.card--slow {
  --em-duration: 1.2s;
}

.card--bouncy {
  --em-easing: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

```html
<div class="card em-animate card--slow">Slower</div>
<div class="card em-animate card--bouncy">Bouncy</div>
```

`demo.html` shows six cards using the same animation with different variable values.

## Why it is useful

It keeps timing configuration in one place and lets the same animation be reused with different speeds, delays, and easing without duplicating keyframes. This fits EaseMotion's goal of readable, reusable motion utilities that stay easy to customize.
