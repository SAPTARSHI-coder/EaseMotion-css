# Hamburger Cross Icon

A pure CSS hamburger menu icon that animates into an X (close) icon on click. Built with EaseMotion CSS custom properties for full theming control.

## Features

- Three-line hamburger morphs to X via `transform: rotate` + `translate`
- Middle line fades and scales out when active
- Multiple size/color variants (small, default, large, inverse)
- Interactive toggle-all and reset-all controls

## Custom Properties

| Property                        | Default  | Description              |
| ------------------------------- | -------- | ------------------------ |
| `--hamburger-duration`          | `0.35s`  | Animation duration       |
| `--hamburger-line-color`        | `#1a1a2e`| Line colour              |
| `--hamburger-line-thickness`    | `3px`    | Line thickness           |
| `--hamburger-width`             | `28px`   | Line width               |
| `--hamburger-gap`               | `8px`    | Space between lines      |

## Usage

```html
<link rel="stylesheet" href="style.css">

<button class="hamburger" aria-label="Toggle menu">
  <span></span><span></span><span></span>
</button>
```

Toggle via JavaScript:

```js
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
});
```
