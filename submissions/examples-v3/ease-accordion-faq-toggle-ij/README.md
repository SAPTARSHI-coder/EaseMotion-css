# EaseMotion Accordion FAQ Toggle

A clean FAQ accordion component built with EaseMotion CSS principles. Features animated +/- toggle icons, single-open accordion behavior, and smooth max-height transitions.

## Usage

Include `style.css` in your project and ensure the HTML structure matches `demo.html`. The Inter font is loaded via Google Fonts.

### Customization

Override these CSS custom properties in your stylesheet:

| Variable | Default | Description |
|---|---|---|
| `--acc-faq-duration` | `0.3s` | Transition duration for toggle and content |
| `--acc-faq-header-bg` | `#f8f9fa` | Header background color |
| `--acc-faq-header-hover-bg` | `#e9ecef` | Header background on hover |
| `--acc-faq-content-bg` | `#ffffff` | Content panel background |
| `--acc-faq-icon-color` | `#6c757d` | Toggle icon color |
| `--acc-faq-border-color` | `#dee2e6` | Border color between items |

### JavaScript

The accordion uses vanilla JS to toggle the `.active` class on `.faq-item` elements. Only one item remains open at a time.
