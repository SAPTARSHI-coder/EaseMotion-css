# Expandable Card Grid

An interactive dashboard grid where selecting a card expands its column to reveal supporting content.

## Features

- Uses CSS grid fraction transitions for smooth horizontal expansion.
- Radio inputs preserve selection state without JavaScript.
- Summary copy fades in only for the selected card on desktop.
- Mobile layout stacks cards and keeps all summaries visible.
- Includes keyboard focus and reduced-motion handling.

## Usage

Open `demo.html` and select any card. The grid uses `.ease-expand-grid` plus `.ease-expand-card` labels connected to hidden radio inputs.
