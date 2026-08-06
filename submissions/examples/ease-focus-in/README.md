# ease-focus-in

A smooth entrance animation that brings elements into view by transitioning from a blurred state to sharp focus.

## Features

- Blur to focus effect
- Opacity fade-in
- Smooth ease-out timing
- Configurable blur amount using CSS variables

## Usage

```html
<div class="ease-focus-in">
  Content
</div>
```

## CSS Variables

```css
:root {
  --ease-blur-start: 20px;
}
```

## Animation Flow

```text
blur(20px) + opacity(0)
          ↓
blur(0) + opacity(1)
```

## Use Cases

- Hero content
- Cards
- Modals
- Landing pages
- Feature highlights
