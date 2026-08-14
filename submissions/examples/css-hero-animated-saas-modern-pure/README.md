# Animated Hero Section (SaaS Modern)

A premium, highly polished landing page Hero section featuring dark mode aesthetics, staggered entrance animations, and a floating glassmorphism dashboard mockup.

## Features
- **Staggered Entrance Animations**: Elements load in sequentially using CSS `@keyframes` and `animation-delay` utility classes (`delay-1`, `delay-2`, etc.), creating a highly engaging, professional first impression without Javascript.
- **Abstract Ambient Background**: Uses animated, heavily blurred CSS shapes (`filter: blur(100px)`) floating behind a subtle perspective grid mask (`mask-image: radial-gradient`) to create a deep, dynamic environment.
- **Glassmorphism Mockup**: Includes a CSS-only representation of a SaaS dashboard complete with traffic lights, a gradient skeleton bar chart, and a floating notification card that bob up and down (`@keyframes float-element`).
- **Premium Typography**: Styled using `Plus Jakarta Sans`, featuring a beautifully masked CSS text gradient (`-webkit-background-clip: text`) on the headline.
- **Responsive Grid**: Uses CSS Grid to automatically stack the content and the mockup vertically on tablets and mobile devices.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Plus Jakarta Sans` font family is loaded via your `<head>`.
