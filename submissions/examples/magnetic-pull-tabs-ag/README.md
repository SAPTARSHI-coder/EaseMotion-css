CSS Magnetic Pull Tabs for Portfolios
A pure CSS animated tab navigation component utilizing the classic "Radio Checkbox Hack" to manage state entirely without JavaScript. It features a smooth, elastic "Magnetic Pull" transition driven by custom cubic-bezier math, perfectly suited for Creative Portfolio interfaces.

Core Features
Zero JavaScript: State management is handled completely via hidden <input type="radio"> elements and CSS general sibling combinators (~).
Magnetic Snap Physics: Uses cubic-bezier(0.68, -0.55, 0.26, 1.55) to create an elastic, spring-like magnetic pull when the background glider moves between tabs.
Keyboard Accessible: Includes tabindex="0" on labels and :focus-visible outlines, ensuring keyboard users can navigate seamlessly.
CSS Custom Properties: Fully customizable via :root variables to tweak timing, easing, and tension scale factors.

Implementation Details
The .ease-tab-input radio buttons must sit at the same structural level as the .ease-tabs-nav and .ease-tabs-content-wrapper for the sibling selectors to work.
The .ease-magnetic-glider moves its position based on which radio input is :checked using transform: translateX().
Content panels are toggled using display: block and animated in via @keyframes when their respective radio button is active.
