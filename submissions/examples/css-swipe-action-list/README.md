# CSS Swipe Action List

A pure CSS implementation of the classic mobile "swipe-to-reveal" list item interaction, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management, gesture detection, or animations).
- **Native Mobile Feel**: Unlike JS-based drag implementations which often feel clunky or fight against the browser, this implementation relies entirely on native browser scrolling physics (momentum, rubber-banding). It feels 100% native on iOS and Android.
- **Pure CSS Mechanics (Scroll Snapping)**: 
- The core trick utilizes CSS Scroll Snapping.
- The `.swipe-scroll-wrapper` is set to `overflow-x: auto;` and `scroll-snap-type: x mandatory;`. It acts as a horizontal track.
- Inside the track, the foreground `.swipe-content` takes up `100%` of the visible width, and the background `.swipe-actions` container takes up a fixed width (e.g., `160px` for two buttons).
- The foreground has `scroll-snap-align: start;` (the resting state).
- The actions container has `scroll-snap-align: end;` (the swiped state).
- As the user swipes left, the container scrolls horizontally. When they release their finger, native CSS scroll snapping forces the container to snap cleanly to either the fully closed or fully open position.
- **Accessibility**: 
- Because this relies on native scrolling rather than CSS `transform` animations triggered by arbitrary events, it naturally respects `prefers-reduced-motion` without needing custom media queries. The browser handles the scroll rendering according to the user's OS-level preferences.
- Scrollbars are hidden via `::-webkit-scrollbar { display: none; }` and `-ms-overflow-style: none;` to maintain the illusion of a swipeable element rather than a scrollable div.

## Usage
Open `demo.html` in your browser. You will see a mock email inbox inside a mobile device frame. 
- **On Mobile/Touch**: Simply swipe left on any list item to reveal the Archive and Delete action buttons underneath. It will snap open. Swipe right to close it.
- **On Desktop (Mouse/Trackpad)**: Hold `Shift` and scroll down on your mouse wheel (or perform a two-finger horizontal swipe on a trackpad) while hovering over a list item.

## Files
- `demo.html`: The HTML structure for the inbox list, detailing the wrapper necessary for the horizontal scroll track.
- `style.css`: The styling, email UI design tokens, and the crucial `scroll-snap` logic that powers the gesture mechanics.
