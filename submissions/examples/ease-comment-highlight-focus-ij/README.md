# Comment Highlight Focus

**Issue:** #36564

Comment highlight on hover/focus effect. Comments gain a subtle border and background glow when hovered or focused via keyboard.

## CSS Custom Properties

| Variable            | Default             | Description                         |
|---------------------|---------------------|-------------------------------------|
| `--highlight-color` | `#89b4fa`           | Accent color for border/glow        |
| `--comment-bg`      | `#1e1e2e`           | Default comment background          |
| `--fade-duration`   | `0.25s`             | Duration of highlight transition    |
| `--border-color`    | `rgba(255,255,255,0.08)` | Default comment border         |

## Usage

Wrap each comment in an `<article class="comment" tabindex="0">` structure as shown in `demo.html`. The effect triggers on `:hover` and `:focus-within`.
