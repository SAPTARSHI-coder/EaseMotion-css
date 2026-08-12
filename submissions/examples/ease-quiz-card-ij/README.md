# Quiz Card

A 3D flip card that reveals the answer on click, ideal for quiz or flashcard UIs.

## Features

- 3D flip animation using CSS `perspective` and `rotateY`
- Front (question) and back (answer) sides
- Customizable card background, border color, and flip duration
- Click to toggle flip state

## Usage

Toggle the `.flipped` class on `.flip-card` to trigger the flip animation.

```html
<div class="flip-card" id="flipCard">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Question</h2>
    </div>
    <div class="flip-card-back">
      <h3>Answer</h3>
    </div>
  </div>
</div>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--card-bg` | `#2d2d44` | Card background color |
| `--border-color` | `#4ecdc4` | Card border accent color |
| `--flip-duration` | `0.6s` | Flip animation duration |
