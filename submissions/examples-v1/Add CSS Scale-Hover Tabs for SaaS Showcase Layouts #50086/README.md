# CSS Scale-Hover Tabs for SaaS Showcase Layouts

A pure CSS, fully responsive, and keyboard-accessible tabs component tailored for modern SaaS (Software as a Service) marketing pages and product showcases. It features a playful, bouncy "Scale-Hover" interaction alongside a smooth scale-in panel entrance.

## Features

- **Zero JavaScript**: Employs the HTML radio button hack combined with sibling combinators (`~`, `+`) for perfect state management.
- **Scale-Hover Interaction**: When a user hovers over the tab labels, they pop out with a subtle scaling effect (`transform: scale()`) driven by a bouncy `cubic-bezier` easing.
- **Scale-Active Panel Transition**: As panels switch, they transition from a slightly shrunken state to full size, creating an engaging pop-in entrance effect.
- **SaaS Aesthetics**: Adheres to modern SaaS design principles, using clean pill-shaped tabs, crisp shadows (`box-shadow`), vibrant indigo accents, and a fluid grid layout for showcasing features and mockups.
- **Accessible**: Uses visually hidden `.sr-only` radio buttons, meaning standard keyboard navigation (`Tab`, `Arrow Keys`) remains entirely intact and focus rings are displayed properly.

## Customization

The scale factors and animation timings can be easily modified using the CSS variables located at the top of `style.css`:

```css
:root {
  /* Scale-Hover Interaction Parameters */
  --scale-hover-factor: 1.08;
  --scale-active-entrance: 0.92;
  --scale-duration: 0.5s;
  --scale-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  --fade-duration: 0.35s;
  
  /* SaaS Theme Palette */
  --saas-primary: #4f46e5;
  ...
}
```

## How to use

Open `demo.html` in any modern web browser. Interact with the tabs via mouse hover, click, or by tabbing through with your keyboard.
