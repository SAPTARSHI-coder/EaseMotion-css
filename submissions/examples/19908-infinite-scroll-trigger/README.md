# Infinite Scroll Trigger Component

An interactive demo showing a sentinel element at the bottom of a list that triggers a simulated content load when entering the viewport, utilizing `IntersectionObserver` and EaseMotion CSS fade-in animations.

## Files Included

- `demo.html` - Feed layout, sentinel element, status panel, and IntersectionObserver script.
- `style.css` - Custom glassmorphic cards, layouts, status indicator, and `.ease-loader-spinner` rotation animation.
- `README.md` - Documentation and instructions.

## EaseMotion CSS Classes Showcased

- `.ease-fade-in` - Smoothens the entry of newly loaded cards and messages.

## Usage

1. Open `demo.html` directly in any modern browser.
2. Scroll down the feed list.
3. Observe the `.ease-loader-spinner` loading spinner appearing as the sentinel enters the viewport.
4. Once items are loaded after a short delay, the loader disappears and new cards slide in.
5. The status panel updates to show "Loading new items..." and increments the item counter.

Closes #19908
