# Animated Cookie Consent Banner

A clean, modern, and fully responsive **Cookie Consent Banner** that gracefully slides into view and dismisses itself without jarring the user. This example demonstrates how to combine **EaseMotion CSS** for smooth entrances and attention-grabbing pulses with custom CSS for a seamless slide-out dismissal.

## 🚀 Features

- **Smooth Slide-Up Entrance**: Uses `ease-slide-in-up` to elegantly introduce the banner from the bottom of the screen.
- **Bouncy Cookie Icon**: The cookie emoji uses `ease-bounce-in` to playfully pop into view.
- **Staggered Content Reveal**: The title, text, and buttons fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Pulsing Call-to-Action**: The "Accept All" button uses `ease-pulse` to subtly draw the user's attention.
- **Graceful Dismissal**: Clicking any button triggers a custom CSS `slide-out-down` animation, smoothly fading and sliding the banner out of view before removing it from the DOM.
- **Interactive Hover States**: Uses `ease-hover-grow` on buttons for satisfying tactile feedback.
- **Fully Responsive**: On mobile devices, the banner stacks vertically, and the buttons expand to full width.

## 📂 File Structure

```text
submissions/examples/animated-cookie-consent-banner/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, dismissal animation, and responsive behavior
└── README.md    # Documentation