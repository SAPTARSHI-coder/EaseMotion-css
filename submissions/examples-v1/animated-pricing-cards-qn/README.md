# Animated Pricing Cards

## Description

A modern, responsive pricing cards component with smooth animations and hover effects. It features three pricing tiers (Basic, Pro, Enterprise) with a highlighted "Popular" card that stands out with a gradient background and animated badge. Each card includes staggered fade-in animations for features, animated checkmarks, and smooth hover lift effects. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure for three pricing cards with headers, feature lists, and CTA buttons.
- `style.css`: Contains the card styling, gradient backgrounds, hover effects, staggered animations, and responsive design.

## How to use

1. Open `demo.html` in your browser to see the animated pricing cards.
2. Copy the HTML and CSS into your project.
3. Wrap your pricing cards inside a `.pricing-grid-qn` container.
4. **Customization:**
   - **Colors:** Change the gradient colors in `.pricing-card-qn.popular-qn` and the button colors in `.pricing-btn-qn`.
   - **Popular Card:** Add or remove the `.popular-qn` class to highlight different tiers.
   - **Animation Speed:** Adjust the `animation-delay` values to change the staggered timing.
   - **Features:** Add or remove `.feature-item-qn` list items. For disabled features, add the `.disabled-qn` class.
   - **Badge Text:** Change the text inside `.popular-badge-qn`.

## Features

- **Staggered Animations:** Cards and features appear in sequence for a polished load experience
- **Hover Lift Effect:** Cards smoothly lift on hover with enhanced shadows
- **Popular Card Highlight:** Gradient background with scaled size and animated bouncing badge
- **Animated Checkmarks:** Icons pop in with a bouncy scale effect
- **Disabled Features:** Visual indication of unavailable features with strikethrough
- **Fully Responsive:** Adapts from 3-column grid to single column on mobile
- **Accessible:** Proper semantic HTML with good contrast ratios

## Customizing for Your Brand

- Change the primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Adjust the badge color: `background: #f39c12`
- Modify the button hover color: `background: #5568d3`
- Update the checkmark color: `color: #27ae60`

## Use Cases

- SaaS pricing pages
- Subscription service tiers
- Product comparison tables
- Membership plans
- Service packages
