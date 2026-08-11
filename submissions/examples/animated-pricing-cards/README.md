# Animated Pricing Cards

A clean, modern, and fully responsive **Pricing Cards Component** with smooth hover effects, a popular plan highlight, and a monthly/yearly billing toggle. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances, feature list animations, and interactive hover states to create a compelling pricing page.

## 🚀 Features

- **Staggered Card Entrances**: Each pricing card fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Popular Plan Highlight**: The recommended plan is visually distinguished with a border, shadow, scale transform, and a bouncy "Most Popular" badge using `ease-bounce-in`.
- **Interactive Hover States**: Cards lift on hover with enhanced shadows and accent borders using `ease-hover-grow`.
- **Staggered Feature List**: Each feature item slides in from the left using `ease-fade-in-left` with staggered delays.
- **Billing Toggle**: Smooth toggle switch between monthly and yearly pricing with active state indicators.
- **Check/Cross Icons**: Color-coded icons for included and excluded features.
- **Responsive Design**: Cards stack vertically on mobile, and the popular card's scale effect is removed for better mobile UX.
- **Accessible Markup**: Uses semantic HTML and proper button elements.

## 📂 File Structure

```text
submissions/examples/animated-pricing-cards/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, toggle, and responsive behavior
└── README.md    # Documentation