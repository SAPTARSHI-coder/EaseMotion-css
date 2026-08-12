# Ticket Fold

An interactive ticket / voucher component with fold and tear-off perforation animations.

## Features

- Ticket unfolds from a compressed folded state using `scaleY` and `rotateX`
- Click the stub to tear it off with a sliding animation
- Perforated separation line between stub and main ticket
- Simulated barcode on the stub
- Reset button to restore the ticket

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--tf-duration` | `0.6s` | Duration of fold/unfold and tear animations |
| `--tf-ticket-bg` | `#ffffff` | Ticket background color |
| `--tf-text-color` | `#2d3436` | Text color on the ticket |
| `--tf-accent` | `#e17055` | Accent color for labels and buttons |
| `--tf-shadow` | `rgba(0,0,0,0.18)` | Ticket box shadow color |
| `--tf-radius` | `14px` | Border radius of the ticket |

## Usage

Open `demo.html`. Click the ticket or the "Unfold" button to fold/unfold it. Click the left stub to tear it off.
