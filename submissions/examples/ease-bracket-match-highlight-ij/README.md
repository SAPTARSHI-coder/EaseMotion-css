# ease-bracket-match-highlight

Bracket/parenthesis pair matching highlight. Wraps an opening bracket, its content, and its closing bracket, and highlights the entire pair with a glowing border and scaled-up bracket characters on `:hover`, `:focus-visible`, or `.active`.

## HTML Structure

```html
<span class="ease-bracket-match-highlight">
  <span class="open">[</span>content<span class="close">]</span>
</span>
```

Child elements with classes `open` and `close` receive the animated style.

## CSS Variables

| Variable          | Default                    | Description                                    |
|-------------------|----------------------------|------------------------------------------------|
| `--match-color`   | `#00b894`                  | Color for the bracket characters and glow      |
| `--highlight-bg`  | `rgba(0,184,148,0.12)`     | Background highlight behind the matched pair   |
| `--bracket-size`  | `1.2rem`                   | Font size of the bracket characters            |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<span class="ease-bracket-match-highlight" tabindex="0"
      style="--match-color: #6c5ce7; --highlight-bg: rgba(108,92,231,0.1);">
  <span class="open">(</span>content<span class="close">)</span>
</span>
```

Toggle the `.active` class to trigger the pulsing glow animation. `:hover` and `:focus-visible` also activate the highlight.
