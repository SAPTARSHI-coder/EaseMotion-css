# ease-scroll-progress

A thin fixed bar at the top of the page that fills left-to-right based on scroll position.

## Usage
1. Include `style.css`.
2. Add markup as the first element in `<body>`:
```html
   <div class="scroll-progress-bar">
     <div class="fill" id="progressFill"></div>
   </div>
```
3. Attach the scroll listener from `demo.html` to compute and set `.fill`'s width.

## Customization
- `height` on `.scroll-progress-bar`: bar thickness.
- Gradient colors on `.fill`.
- `transition: width 0.1s linear` on `.fill`: smooths rapid scroll jumps slightly; remove for instant 1:1 tracking.

## Notes
- Progress percentage is `scrollY / (scrollHeight - innerHeight) * 100`, i.e. how far through the *scrollable* range the user is, not raw pixel position.
- `{ passive: true }` on the scroll listener avoids blocking scroll performance.
- CSS handles the visual fill and smoothing transition; JS only computes and sets the percentage.