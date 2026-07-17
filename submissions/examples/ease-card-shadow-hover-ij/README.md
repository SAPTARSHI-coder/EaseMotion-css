# Card Shadow Hover

A CSS card component where shadow depth increases on hover, creating a lifting effect.

## Features

- Smooth shadow transition on hover
- Card lifts with `translateY` for a physical depth effect
- Customizable via CSS custom properties

## Usage

```html
<div class="card-container">
  <div class="card">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>
```

## CSS Custom Properties

| Property                | Default                       | Description              |
| ----------------------- | ----------------------------- | ------------------------ |
| `--card-sh-duration`    | `0.35s`                       | Transition duration      |
| `--card-sh-bg`          | `#ffffff`                     | Card background color    |
| `--card-sh-shadow-rest` | `0 4px 12px rgba(0,0,0,0.1)` | Resting box-shadow       |
| `--card-sh-shadow-hover`| `0 20px 40px rgba(0,0,0,0.2)`| Hover box-shadow         |
| `--card-sh-radius`      | `16px`                        | Border-radius            |
| `--card-sh-translate`   | `-8px`                        | Hover translateY value   |
