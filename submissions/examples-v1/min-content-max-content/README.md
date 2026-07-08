# min-content / max-content / fit-content

Demonstrates CSS intrinsic sizing keywords `min-content`, `max-content`, and `fit-content` on width. Each box shows how text content is sized — from shrinking to the longest word (`min-content`) to expanding to the full unwrapped line (`max-content`), with `fit-content` clamping between the two.

## Usage

Open `demo.html` in any modern browser. Resize the viewport to observe how each keyword responds to available space. The fit-content box respects parent width while min-content and max-content ignore it.

## Notes

- `min-content` uses the largest unbreakable word as the width floor.
- `max-content` prefers the full unwrapped text width, potentially overflowing.
- `fit-content` acts like `max-content` until the available width shrinks below it, then behaves like `min-content`.
- All examples use the dark theme (`#0a0f1e` background, `#e2e8f0` text).
