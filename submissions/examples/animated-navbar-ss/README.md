# Animated Glass Navbar

A premium responsive glassmorphism navigation bar built using pure HTML and CSS.

## ✨ Features

- Glassmorphism navbar design
- Responsive navigation
- CSS-only typewriter effect
- Navbar fade-in animation
- Logo entrance animation
- Staggered navigation link animation
- Animated green glow around logo
- Animated aurora background
- Animated navigation underline
- CSS-only mobile hamburger menu
- Hamburger to close icon animation
- Mobile menu slide/fade animation
- CTA hover and click animation
- Responsive layout
- Accessibility support with `prefers-reduced-motion`
- No JavaScript required

## 🛠️ Technologies

- HTML5
- CSS3
- CSS Animations
- CSS Transitions
- Flexbox
- Media Queries
- Backdrop Filter
- Glassmorphism

## 🎨 Animation Details

### Navbar Entrance

When the page loads, the navbar smoothly fades in and slides down.

### Logo Animation

The EaseMotion logo enters from the left while the green logo circle continuously glows.

### Navigation Links

Navigation links appear one after another using staggered CSS animation delays.

### Typewriter Effect

The hero heading uses a CSS-only typewriter effect using:

- `width`
- `overflow: hidden`
- `white-space: nowrap`
- `steps()`
- `border-right`

No JavaScript is required.

### Mobile Navigation

The mobile menu is controlled using a hidden checkbox and CSS:

```css
#menu-toggle:checked ~ .nav-links {
    display: flex;
}