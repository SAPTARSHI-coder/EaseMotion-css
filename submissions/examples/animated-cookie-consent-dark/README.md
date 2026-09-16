# Animated Cookie Consent Banner (Dark Mode)

A zero-JavaScript, accessible cookie consent banner variant built using CSS variables, `:target` selectors, and EaseMotion design tokens.

## Features
- **Zero JS:** Uses CSS `:target` state handling for opening and closing transitions.
- **Dark Mode Native:** Leverages standard dark surfaces and accessible contrast ratios.
- **EaseMotion Tokens:** Animated with smooth spring-bounce transitions using custom timing tokens.
- **Responsive Layout:** Automatically rearranges stacked controls on mobile screens to inline elements on desktop viewports.
- **Accessibility:** Respects `prefers-reduced-motion` media queries by disabling sliding translate animations for users sensitive to motion.

## Usage
1. Include `style.css` in your project document.
2. Structure your HTML element with the class `.cookie-banner` and matching anchor link actions.
