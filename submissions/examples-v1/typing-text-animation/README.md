# Typing Text Animation

A CSS-only typing text animation that reveals text character-by-character using CSS keyframes and the `steps()` timing function.

## Features

* Pure CSS (No JavaScript)
* Character-by-character typing effect
* Blinking cursor animation
* Configurable typing speed using `--typing-speed`
* Configurable character count using `--typing-chars`
* Right-to-left (RTL) text support
* Lightweight and reusable

## Usage

```html
<div class="typing-cursor">
  <span
    class="typing-text"
    style="--typing-speed:0.1s; --typing-chars:18;"
  >
    Hello EaseMotion!
  </span>
</div>
```

## CSS Variables

| Variable         | Description          | Default |
| ---------------- | -------------------- | ------- |
| `--typing-speed` | Time per character   | `0.1s`  |
| `--typing-chars` | Number of characters | `20`    |

## Included Examples

* Default typing
* Fast typing
* Slow typing
* RTL typing

## Browser Support

Works in all modern browsers supporting:

* CSS Keyframes
* CSS Variables
* CSS steps()
* CSS Animations

```
```
