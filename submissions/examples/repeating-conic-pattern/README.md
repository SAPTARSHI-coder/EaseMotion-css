# Repeating Conic Pattern Gallery

A visual gallery demonstrating various patterns created with CSS `repeating-conic-gradient`. Includes checkerboard, starburst, radar sweep, color wheel, and target ring patterns with different angles and color stop configurations.

## Pattern Techniques

Each pattern uses `repeating-conic-gradient` combined with `background-size` to tile angular gradients. The `from` keyword rotates the starting angle, while percentage color stops control the width of each stripe. Patterns like the 4-point starburst use `25%` stops to create four alternating wedges, and radar sweeps use narrow `5%` stops for a scan-line effect.

## Usage

Open `demo.html` in any modern browser. The gallery is fully self-contained — no external dependencies. Patterns are isolated in individual `.pattern-box` elements with a labeled card layout. Customize colors, angles, or tile sizes by editing the `background` property on any pattern class in `style.css`.
