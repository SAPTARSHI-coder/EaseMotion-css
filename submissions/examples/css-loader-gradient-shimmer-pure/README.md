# CSS Loader: Gradient Shimmer

A skeleton-style loader utilizing an oversized, animated background gradient to simulate a reflective light sweeping across the element.

## Features
- Pure CSS and HTML implementation without any JavaScript or complex DOM manipulation.
- **Component Architecture**: 
  - **The Skeleton Layout**: The loader is built as a mock UI card, featuring an avatar circle, title lines, and body paragraph lines. This represents content that is about to load.
  - **The Oversized Gradient**: Every skeleton element receives the `.shimmer` class. This class applies a `linear-gradient` background featuring three color stops (Base Color -> Highlight Color -> Base Color). 
  - **The Background Sizing Trick**: The crucial technique is setting `background-size: 200% 100%`. This makes the gradient twice as wide as the element itself, meaning half of the gradient is always overflowing invisibly off the edges.
  - **The Shimmer Sweep**: The `@keyframes shimmer-sweep` animation continuously shifts the `background-position` from `-100% 0` to `100% 0`. Because the gradient is oversized and the start/end colors match, this sweeping motion loops seamlessly, creating the illusion of a bright reflection passing over a physical surface.
  - **Text Shimmering**: The "Fetching Data..." text utilizes `-webkit-background-clip: text` alongside the same shimmer animation, proving the technique works on typography as well as block elements.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the skeleton base and highlight colors from bright grays to deep slates to match the active OS environment.
- Fully accessible semantic structure. The decorative skeleton card is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the gradient sweep, locking the elements into a static, legible placeholder state for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the gradient shimmer skeleton loader.

## Files
- `demo.html`: The HTML structure defining the mock UI card and text.
- `style.css`: The styling, the oversized `background-size` logic, and the `background-position` sweep keyframes.
