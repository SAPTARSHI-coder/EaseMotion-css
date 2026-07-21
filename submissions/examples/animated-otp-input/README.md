# Animated OTP Input / Verification Code

A clean, modern, and fully responsive **OTP Input Component** perfect for two-factor authentication, phone verification, and secure logins. This example demonstrates how to combine **EaseMotion CSS** for staggered input box entrances, smooth focus transitions, and a bouncy success animation to create a polished, user-friendly verification experience.

## 🚀 Features

- **Staggered Input Entrances**: Each input box fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a smooth cascading load effect.
- **Smooth Focus Transitions**: Inputs feature a glowing border and subtle lift effect when focused using CSS transitions.
- **Auto-Advance Focus**: JavaScript automatically moves focus to the next input when a digit is entered.
- **Backspace Navigation**: Pressing backspace on an empty input moves focus to the previous input.
- **Paste Support**: Pasting a full code automatically fills all input boxes.
- **Error Shake Animation**: Incorrect verification triggers a shake animation on all inputs.
- **Countdown Timer**: A 30-second countdown timer with a pulsing "Resend Code" link when expired.
- **Bouncy Success State**: A success overlay with a bouncy checkmark using `ease-bounce-in` appears upon successful verification.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted input sizing.

## 📂 File Structure

```text
submissions/examples/animated-otp-input/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for input styling, focus states, and responsive behavior
└── README.md    # Documentation