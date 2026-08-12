# Live Search Filter

Real-time search filter with animated item transitions and highlighted match text.

## Features

- Instant filtering as user types
- Items fade/slide in/out with opacity, max-height, and transform
- Matching text highlighted within results
- Clear button to reset search
- No-results state with contextual message
- Item count display

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lsf-duration` | 0.25s | Transition duration |
| `--lsf-input-bg` | #1e293b | Input background |
| `--lsf-input-focus` | #6366f1 | Input focus border |
| `--lsf-item-bg` | #0f172a | Item background |
| `--lsf-highlight-color` | #fbbf24 | Highlight span background |
| `--lsf-radius` | 12px | Border radius |

## Usage

Include `style.css` and `demo.html`. Add `.lsf-item` elements with a `data-term` attribute. The JS filters on input, wraps matching text in `<span class="lsf-highlight">`, and toggles `.lsf-hidden` for non-matching items.
