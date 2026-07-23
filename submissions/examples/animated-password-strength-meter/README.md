# Animated Password Strength Meter

A clean, modern, and fully responsive **Password Strength Meter** that provides real-time, animated feedback as users type. This example demonstrates how to combine **EaseMotion CSS** for smooth segment filling, color transitions, and bouncy checkmarks to create an engaging, interactive security feature for signup forms.

## 🚀 Features

- **Segmented Strength Bar**: 4 distinct segments that fill up and change color (Red → Orange → Blue → Green) as the password gets stronger.
- **Bouncy Checkmarks**: When a password requirement is met, the checkmark pops in using `ease-bounce-in` for satisfying confirmation.
- **Smooth Color Transitions**: The strength text and segments smoothly transition colors using CSS transitions.
- **Password Visibility Toggle**: An eye icon button using `ease-hover-grow` to show/hide the password.
- **Dynamic Submit Button**: The "Create Account" button remains disabled (and visually faded) until all 4 requirements are met.
- **Accessible**: Uses `aria-describedby` to link the input to the strength meter, and `aria-label` on the toggle button.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted padding and font sizes.

## 📂 File Structure

```text
submissions/examples/animated-password-strength-meter/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for meter segments, transitions, and responsive behavior
└── README.md    # Documentation