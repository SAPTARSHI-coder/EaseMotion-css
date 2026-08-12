# Before-and-After Image Comparison Component

A pure CSS solution for displaying side-by-side or interactive overlay comparisons of two images. Ideal for showcasing transformations, edits, or redesigns.

## Features

- **Pure HTML/CSS:** Leverages the native CSS `resize` property for the interactive overlay variant, completely eliminating the need for JavaScript event listeners.
- **Two Layout Variants:**
  - Overlay slider comparison
  - Side-by-side card comparison
- **Responsive:** Adapts to mobile and tablet screen sizes fluidly.
- **Light & Dark Mode:** Native `@media (prefers-color-scheme: dark)` styling for surrounding UI elements.

## Usage

Simply copy the HTML structure and link the `style.css` file.

**Note on Overlay Variant:** For the CSS `resize: horizontal` to work correctly and reveal the background image properly without squishing the foreground image, ensure both images have the same fixed aspect ratio, and the `img` tags have a fixed width equivalent to their container's maximum width, combined with `object-fit: cover`.

## File Structure

- `demo.html`: Contains example markup demonstrating both variations.
- `style.css`: Core styles for layout, custom handles, labels, and responsive sizing.
