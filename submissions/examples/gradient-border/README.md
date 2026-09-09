# ease-gradient-border

Animated gradient border using CSS pseudo-element with conic-gradient and @property rotation. Zero JavaScript required.

## Usage

    <!-- Static gradient border -->
    <div class="ease-gradient-border ease-gradient-border-ocean">Card content</div>

    <!-- Spinning animated border -->
    <div class="ease-gradient-border ease-gradient-border-spin ease-gradient-border-fire">Spinning!</div>

## Variants

| Class | Description |
|---|---|
| ease-gradient-border | Base static gradient border |
| ease-gradient-border-spin | Continuously spinning gradient border |
| ease-gradient-border-hover | Spins only on hover |
| ease-gradient-border-rainbow | Rainbow color scheme |
| ease-gradient-border-ocean | Ocean blue color scheme |
| ease-gradient-border-fire | Fire orange/red color scheme |
| ease-gradient-border-purple | Purple color scheme |
| ease-gradient-border-neon | Neon cyan/pink color scheme |
| ease-gradient-border-sm | 1px border width |
| ease-gradient-border-lg | 4px border width |
| ease-gradient-border-xl | 6px border width |
| ease-gradient-border-fast | 1.5s spin duration |
| ease-gradient-border-slow | 6s spin duration |
| ease-gradient-border-dark | Dark background variant |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| --ease-gb-width | 2px | Border thickness |
| --ease-gb-radius | 12px | Border radius |
| --ease-gb-padding | 1.5rem | Inner padding |
| --ease-gb-bg | #fff | Inner background color |

## Notes

- Requires @property support for spin animation (Chrome 85+, Edge 85+, Safari 16.4+)
- Static gradient border works in all modern browsers
- Combine color scheme + border width + speed variants freely
- Use ease-gradient-border-dark for dark-themed cards with neon borders

## Submission

- **Author:** sudha09-git
- **Issue:** #3863
- **Files:** style.css, demo.html
