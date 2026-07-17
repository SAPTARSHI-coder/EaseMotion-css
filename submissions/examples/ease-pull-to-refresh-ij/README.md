# Pull to Refresh

A pull-to-refresh gesture component with visual pull indicator, spinner animation at threshold, and content refresh with fade transition.

## Features

- Mouse and touch drag support via JS
- Pull indicator translates proportionally via `--ptr-pull`
- Spinner rotation tied to pull progress via `--ptr-progress`
- Continuous spin animation past threshold
- Content fades and resets on refresh
- Multiple list examples with reset button
- Customizable via `:root` CSS custom properties

## Usage

Add `.ptr-scroll > .ptr-pull-indicator > .ptr-spinner` markup inside a card. JS sets `--ptr-pull` (px) on indicator and `--ptr-progress` (0–1) on spinner. CSS uses `transform: translateY()` and `transform: rotate()` respectively.

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ptr-duration` | `0.3s` | Transition duration |
| `--ptr-indicator-color` | `#64748b` | Pull label text color |
| `--ptr-spinner-color` | `#8b5cf6` | Spinner accent color |
| `--ptr-bg` | `#0f172a` | Page background |
| `--ptr-text-color` | `#e2e8f0` | Text color |
