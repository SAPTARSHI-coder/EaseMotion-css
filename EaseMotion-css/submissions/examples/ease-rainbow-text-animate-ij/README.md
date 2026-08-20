# Rainbow Text Animation (`ease-rainbow-text-animate-ij`)

Animated text that cycles through rainbow colors using a scrolling CSS gradient with `background-clip: text`. Part of the EaseMotion CSS submissions.

## Features

- Smooth scrolling rainbow gradient across text
- Speed control slider
- Play / Pause toggle via `animation-play-state`
- Uses `background-clip: text` for the letter-shaped gradient mask

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rta-duration` | `0.3s` | Transition duration for UI controls |
| `--rta-speed` | `3s` | Duration of one full gradient scroll cycle |
| `--rta-gradient-size` | `200%` | Width of the gradient background relative to the element |

## Usage

Open `demo.html` in any modern browser. Adjust the speed slider or click Pause to freeze the animation.
