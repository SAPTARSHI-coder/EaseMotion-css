# Elastic Slide Stepper (Gaming Hub)

## What does this do?

This component provides a modern gaming-inspired multi-step progress indicator with an elastic animation effect. It is suitable for checkout flows, onboarding, game setup, account creation, or any multi-step interface where progress should be visually engaging.

## Features

- Elastic animation for active steps
- Animated progress connectors
- Gaming-inspired futuristic design
- Glassmorphism container
- Responsive layout
- Pure HTML & CSS
- No JavaScript required
- Supports `prefers-reduced-motion`
- Easy to customize using CSS variables

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<div class="ease-stepper">

    <div class="step active">
        <div class="circle">1</div>
        <span>Choose Game</span>
    </div>

    <div class="connector"></div>

    <div class="step">
        <div class="circle">2</div>
        <span>Customize</span>
    </div>

</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Responsive Behavior

- Desktop: horizontal stepper layout
- Mobile: vertical layout with animated connectors
- Automatically adapts to smaller screens

## Accessibility

- Supports `prefers-reduced-motion`
- High-contrast text
- Clear visual indication of active steps

## Customization

You can easily customize the appearance by editing the CSS variables:

```css
:root{
    --primary:#7c5cff;
    --secondary:#00d4ff;
    --bg:#0b1020;
    --panel:#131a2f;
}
```

## Use Cases

- Gaming checkout
- Tournament registration
- Character creation
- Multi-step forms
- Account onboarding
- Purchase workflow

## Browser Support

Works in all modern browsers supporting:

- CSS Flexbox
- CSS Animations
- CSS Variables
- Media Queries