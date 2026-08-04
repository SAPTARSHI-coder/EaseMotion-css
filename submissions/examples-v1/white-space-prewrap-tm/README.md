# White-Space Control Utilities

This playground showcases text layout and token structure behaviors using the native CSS `white-space` property variations within **EaseMotion**.

## Behavior Comparison Model
- **`.em-ws-normal`**: Collapses whitespace sequences, handles carriage returns as single breaks, and wraps content natively.
- **`.em-ws-nowrap`**: Standard collapse engine, but eliminates line-breaks across the entire inline layout boundary.
- **`.em-ws-pre`**: Retains whitespace and structural line-breaks exactly as formatted, without wrapping content.
- **`.em-ws-pre-wrap`**: Retains whitespaces and explicit line-breaks while enabling responsive wrapping at container boundaries.
- **`.em-ws-pre-line`**: Collapses multi-character spaces into single strings, but respects explicit user line-breaks.

## Folder Mapping
- `demo.html` - Visual showcase layout cards.
- `style.css` - Structural wrapper attributes.
- `README.md` - Technical behavior index.