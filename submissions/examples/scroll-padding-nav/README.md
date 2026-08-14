# scroll-padding-top for Fixed Nav Anchors

## Feature Overview
The `scroll-padding-top` CSS property (part of the CSS Scroll Snap module) defines the scroll offset applied when a scroll target is navigated to via anchor links. This demo shows:
- A **fixed 60px navigation bar** at the top of the viewport
- Five content sections with anchor links in the nav
- `scroll-padding-top: 70px` to offset anchor targets below the fixed nav
- A **toggle button** to dynamically enable/disable `scroll-padding-top` for a side-by-side comparison

Without scroll-padding, clicking a nav link scrolls the section heading behind the fixed nav bar. With scroll-padding, the heading appears below the nav with 10px breathing room.

## Usage
Open `demo.html` and click the section links in the fixed nav bar. Use the toggle buttons to turn `scroll-padding-top` on and off — the difference is immediately visible: with padding OFF, section headings are hidden under the nav; with padding ON, they appear correctly positioned below it. Resize the viewport to confirm the responsive behavior works at all widths.

## Browser Support
- `scroll-padding-top` — Chrome 69+, Edge 79+, Firefox 68+, Safari 14.1+, Opera 56+
- The property applies to the scroll container (`html` element in this demo)
- The toggle uses inline `style.scrollPaddingTop` via JavaScript — same property, so support matches the CSS version
- In older browsers, anchor scrolling still works but without the offset — content may be slightly hidden behind the nav, which is a graceful degradation (user can still scroll manually)
