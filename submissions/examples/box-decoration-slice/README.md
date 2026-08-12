# box-decoration-slice

Demonstrates `box-decoration-slice` — comparing `slice` (default) vs `clone` behavior on inline elements that wrap across multiple lines.

## Usage

Apply `class="box-slice"` for default slicing (background/border only on line fragments), or `class="box-clone"` to clone decorations across each wrapped line. Padding, border, and background are applied per fragment.

## Browser Support

`box-decoration-slice` is supported in Chrome 92+, Firefox 102+, Edge 92+, Safari 15.4+. No prefix needed. The `clone` value is less commonly used but widely supported in modern browsers.
