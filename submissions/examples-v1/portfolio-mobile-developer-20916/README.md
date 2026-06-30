# Portfolio: Mobile App Developer (`portfolio-mobile-developer-20916`)

This proposal provides a complete, copy-paste ready portfolio template designed for an iOS, Android, or Cross-Platform (Flutter/React Native) Mobile Engineer, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A mobile developer's portfolio should reflect modern mobile design guidelines (like Apple's Human Interface Guidelines or Google's Material Design). This template achieves an "App-Showcase" aesthetic using generous white space, soft drop shadows, heavily rounded corners, vibrant gradients, and clean `Inter` typography.

The layout includes:
- A floating "Pill" navigation bar simulating a dynamic island or modern app tab bar.
- A Hero section featuring a pure CSS Phone Mockup. The screen contains a CSS-only automated carousel (`.ease-carousel-slide`) cycling through different app screens (Fintech, Fitness, Social).
- A "Featured Apps" grid resembling App Store cards, complete with ratings and a slick CSS hover reveal that slides up a subtle mockup of the app.
- An "Impact / Stats" section with large typography for download counts and crash-free rates.
- A "Skills & Ecosystem" section showcasing proficiency with iOS/Swift and Android/Kotlin using animated progress bars (`.ease-fill-bar`), alongside decorative CSS UI elements (widgets and notifications).
- A clean, highly visible Contact CTA.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` "spring" timings tailored for mobile UI feels:
- `.ease-carousel-slide` (Animates a wide flex container inside the phone frame to cycle through app screens automatically).
- `.ease-float` (Used on the phone mockup and decorative floating UI elements to give them depth).
- `.ease-fill-bar` (Animates the skill percentage bars using a horizontal translation).
- `.ease-scale-in` (Creates a pop-in effect for the Contact CTA).
- *Custom Interactions*: The App Store cards use `.group-hover` utilities to trigger a springy upward translation on the card itself, while simultaneously sliding up a hidden mockup element from the bottom edge of the card (`.group-hover-translate-y-0`).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the soft UI palette and borders to the pure CSS phone mockup and precise spring hover states. The standard `ease-*` interaction classes are attached directly to HTML elements. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-mobile-developer-20916/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20916
