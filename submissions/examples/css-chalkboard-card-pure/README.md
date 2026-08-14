# CSS Chalkboard Card

A realistic chalkboard aesthetic built with CSS gradients, text-shadow smudging, and decorative pure CSS doodles.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Wood Frame**: The `.chalkboard-card` uses thick solid borders for the wood frame. It utilizes a `repeating-linear-gradient` with low opacity to simulate a subtle wood grain texture, and inset shadows to create depth.
  - **The Slate Surface**: The `.board-surface` uses a dark slate background combined with radial gradients and a fine repeating-linear-gradient to create a noisy, uneven chalkboard texture.
  - **Erased Chalk Smudges**: To make the board look used, a `.chalk-smudges` layer is absolutely positioned over the surface. It uses several large, faint `radial-gradient` definitions (e.g., `rgba(255, 255, 255, 0.05)`) placed irregularly to simulate wiped chalk dust.
  - **Chalk Typography & Doodles**: The text uses the Google Font 'Fredericka the Great' which naturally looks like a rough sketch. A faint white `text-shadow` is applied to simulate chalk dust falling off the letters. Additionally, pure CSS shapes (using the classic CSS border triangle trick) are used to draw decorative elements like stars and underlines.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), subtly darkening the slate and wood colors for high contrast environments.
- Fully accessible semantic structure. The decorative CSS doodles are marked with `aria-hidden="true"`, and the entire card provides a high-level `aria-label` for screen reader context.

## Usage
Open `demo.html` in your browser to view the chalkboard daily special menu.

## Files
- `demo.html`: The HTML structure defining the chalkboard container and the menu list.
- `style.css`: The styling, the radial gradient smudges, and the CSS shape doodles.
