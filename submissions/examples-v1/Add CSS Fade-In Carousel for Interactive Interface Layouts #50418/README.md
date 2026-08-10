# CSS Fade-In Carousel (Interactive Interface)

A pure CSS animated Carousel component showcasing a smooth **Fade-In & Rise** interaction transition. This layout is tailored for an **Interactive Interface**, mimicking the aesthetic of modern SaaS onboarding wizards, feature showcases, or highly polished dashboards.

This component relies purely on HTML structure and CSS variables, offering advanced UI mechanics without a single line of JavaScript.

## Features
- **Pure CSS State Management:** Utilizes the radio-button state hack (`:checked`) to control active slides and transition logic.
- **Fade & Rise Transition:** Instead of horizontally sliding, items are absolute-positioned on top of each other. Inactive items fade to `0` opacity while dropping down slightly. As an item becomes active, it elegantly fades in while rising up (`translateY`) to its final position, creating a very dynamic reveal.
- **Interactive Micro-Animations:** Features staggered entry animations internally. When a slide becomes active, the glowing visual element inside it springs into view with a playful bouncy easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Glassmorphism Design:** Uses `backdrop-filter: blur`, subtle translucent borders, and radial background gradients to create a premium "glass" aesthetic commonly found in modern interactive interfaces.
- **Dynamic Progress Controls:** The navigation dots are replaced with expanding progress bars that physically grow in width when selected, providing excellent tactile feedback.
- **Keyboard Accessible:** Navigation is accessible via keyboard arrow keys (Tab into the carousel and use arrows). Active keyboard focus applies a prominent outline to the corresponding progress bar.

## Usage
Simply load `demo.html` into your web browser. 
To implement this in your project, copy the HTML structure inside `.carousel-wrapper` and the associated CSS logic.

### Configurable CSS Properties
You can adjust the core motion "physics" by modifying these properties at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.8s;
    --carousel-easing: cubic-bezier(0.16, 1, 0.3, 1);
    
    /* Animation Offsets for the 'Fade & Rise' effect */
    --carousel-scale-inactive: 0.95;
    --carousel-y-inactive: 30px; /* Adjust the depth of the drop-down before fade */
    --carousel-opacity-inactive: 0;
}
```
