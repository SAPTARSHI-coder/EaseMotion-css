# CSS Quest Reward Reveal

A pure CSS chest-opening animation that reveals a quest reward badge when the chest is hovered or focused.

## Features

- Pure HTML and CSS
- No JavaScript
- Chest opening animation
- Reward badge reveal effect
- Glow effect
- Keyboard accessible
- Responsive layout
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Add the reward component:

```html
<button class="reward-chest" type="button" aria-label="Open quest reward chest">
    <span class="reward-glow" aria-hidden="true"></span>

    <span class="chest-lid" aria-hidden="true"></span>

    <span class="chest-body" aria-hidden="true">
        <span class="chest-lock"></span>
    </span>

    <span class="reward-badge" aria-hidden="true">
        <span class="reward-star">★</span>
        <span class="reward-text">REWARD</span>
    </span>
</button>
```

The chest opens when the user hovers over it or focuses it using the keyboard.

## Customization

The main colors and animation speed can be changed using CSS custom properties:

```css
:root {
    --gold-dark: #a8550a;
    --gold: #f59e0b;
    --gold-light: #fde68a;
    --animation-speed: 0.65s;
}
```

For example, change the animation speed:

```css
:root {
    --animation-speed: 1s;
}
```

## Accessibility

The chest uses a semantic `<button>` element, allowing keyboard users to focus and interact with the component.

Reduced-motion preferences are also supported:

```css
@media (prefers-reduced-motion: reduce) {
    .chest-lid,
    .reward-badge,
    .reward-glow {
        transition: none;
    }
}
```

## Demo

Open `demo.html` directly in a browser to view the animation.

## Browser Tested

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example provides a reusable game-style reward interaction using only HTML and CSS. The chest opening, reward reveal, and glow effects demonstrate smooth CSS motion without JavaScript or external libraries.

## Files

- `demo.html` — HTML demonstration
- `style.css` — CSS animation and styling
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.