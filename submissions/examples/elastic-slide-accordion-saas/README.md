# Elastic-Slide Accordion — SaaS Showcase

A CSS-only accordion with an elastic slide animation. Panels stretch open with a springy cubic-bezier timing function that overshoots slightly before settling.

## How It Works

Hidden checkbox inputs control each panel. When checked, the panel's `max-height` transitions from 0 to 200px using `cubic-bezier(0.34, 1.56, 0.64, 1)`. The overshoot in the timing curve creates the elastic feel — the content stretches past its target before snapping back. The plus icon rotates into an X at the same elastic rate.

## Customization

- Change `--esa-accent` for a different highlight color
- Adjust the cubic-bezier values for more or less spring
- Modify `max-height` to accommodate longer content
- The gap and border-radius can be tuned for different densities

## Notes

- Pure CSS, no JavaScript
- `prefers-reduced-motion` disables the elastic transitions
- Works with any number of panels
- Responsive across all viewport sizes
