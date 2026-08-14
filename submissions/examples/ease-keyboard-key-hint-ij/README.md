# Keyboard Key Hint (#36768)

A keyboard shortcut hint with a press-down animation on click.

## CSS Variables

| Variable         | Default | Description                  |
|------------------|---------|------------------------------|
| `--key-bg`       | —       | Background of the key        |
| `--key-color`    | —       | Text color of the key        |
| `--key-border`   | —       | Border / shadow color        |
| `--press-duration` | 0.12s | Duration of the press animation |

## Behavior

Click any key to trigger a "press" animation — the key translates downward and its shadow shrinks, mimicking a physical key press. The release transition is twice as slow for a satisfying bounce-back.
