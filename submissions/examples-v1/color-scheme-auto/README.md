# Prefers Color Scheme Auto-Detection

This submission fixes Issue #39534 by adding `@media (prefers-color-scheme)` support.  
The demo now respects the OS-level dark/light preference on first load.

## Usage

```css
@media (prefers-color-scheme: dark) {
  body { background: #121212; color: #f1f1f1; }
}
