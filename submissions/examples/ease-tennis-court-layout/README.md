# EaseMotion Tennis Court Layout Component

A pure CSS, proportionally accurate tennis court layout. Perfect for sports analytics dashboards, match trackers, and game summary UI components.

## 🌟 Features

* **Proportionally Accurate:** Uses strict CSS percentages to ensure the court retains exact real-world dimensions (36x78 aspect ratio) no matter the screen size.
* **Interactive Zones:** Every distinct section of the court (Alleys, Ad/Deuce Courts, Backcourts) acts as an independent hover zone. Perfect for mapping shot data.
* **Pure CSS Animation:** Includes a seamless, infinite keyframe animation of a tennis ball tracking a realistic rally trajectory (complete with simulated Z-axis bouncing via `transform: scale` and dynamic `box-shadow`).
* **Zero JavaScript:** The entire layout and line-drawing logic is handled using CSS Flexbox and border collapsing.

## 🛠️ Usage

1. Copy the `.ease-tennis-court-layout` HTML block from `demo.html`.
2. Include the corresponding CSS from `style.css`.
3. Wrap it in your own dashboard or analytics UI.

## 🎨 Customization (CSS Variables)

You can easily theme the court to match different tournament styles (e.g., Clay, Grass, Hardcourt) by adjusting the variables at the top of the CSS file:

```css
:root {
  --court-outer-bg: #166534; /* Change to #b45309 for Clay */
  --court-inner-bg: #1e40af; /* Change to #166534 for Grass */
  --court-line-color: #ffffff;
  --court-line-width: 3px;
  --court-hover-bg: rgba(255, 255, 255, 0.25);
}