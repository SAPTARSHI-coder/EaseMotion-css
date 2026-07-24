# CSS Horizontal Roll Tabs - Marketing Aesthetic

A sleek, pure CSS tab component utilizing a smooth horizontal sliding ("roll") indicator and translating content panels. Designed specifically to complement modern Marketing Landing Page aesthetics.

## Features

- **Pure CSS**: Zero JavaScript required. Tab state is managed entirely via visually hidden radio buttons and the `:checked` pseudo-class.
- **Horizontal Roll Indicator**: Features an animated, pill-shaped active tab indicator that smoothly slides between tabs using a bouncy cubic-bezier transition.
- **Rolling Panels**: Tab content slides in horizontally with a fade, creating a polished, app-like experience.
- **Marketing Landing Page Aesthetics**: Styled with bold typography, high-contrast primary colors (indigo), rounded pill shapes, soft drop shadows, and clean off-white backgrounds.
- **Accessible & Usable**: Radio inputs are visually hidden using the accessible `clip` technique (not `display: none`), meaning keyboard navigation (Tab and Arrow Keys) works perfectly. Focused tabs display a clear focus ring.
- **Responsive**: Content panels gracefully collapse into a stacked layout on mobile devices.
- **CSS Mockups**: Includes pure CSS layout mockups in the panels to demonstrate placeholder images/illustrations.

## Custom Properties

Easily customize the feel of the component by tweaking the CSS variables found in the `:root` block of `style.css`:

```css
:root {
  /* Horizontal Roll Animation Parameters */
  --roll-duration: 0.65s;
  --roll-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elastic roll effect */
  
  --panel-duration: 0.5s;
  --panel-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --panel-translate-x: 60px;
  
  /* Marketing Aesthetic Colors */
  --accent-color: #4F46E5;
  --bg-color: #F8FAFC;
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in a web browser to interact with the tabs. Copy the HTML structure and CSS variables into your own marketing projects as needed!
