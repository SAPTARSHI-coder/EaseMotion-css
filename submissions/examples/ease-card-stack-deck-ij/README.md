# Card Stack Deck

Stacked card deck that fans out on hover. Cards spread with rotation and translation offsets via `--cs-i` index and `--cs-fan` state variable.

## Features

- Cards stack by default
- Fan out on hover with rotation
- Staggered Y offsets per card via `--cs-i`
- Color per card via `--cs-bg`
- Smooth cubic-bezier transitions

## Usage

Set `--cs-i` (index) and `--cs-bg` (color) on each `.cs-card`. Hover `.cs-deck` to trigger the fan transform.
