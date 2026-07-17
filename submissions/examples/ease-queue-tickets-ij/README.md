# Queue Tickets

Tickets that slide into a queue list with a smooth entrance animation, simulating a help desk or support queue.

## Features

- Slide-in animation from the right
- Striped left border accent per ticket
- Dynamic ticket creation and numbering
- Customizable ticket background, stripe color, and slide duration

## Usage

Add new `.ticket` elements to the `.queue-list` container. Each ticket animates in automatically via the `ticketSlideIn` keyframe.

```html
<div class="queue-list">
  <div class="ticket">
    <span class="ticket-number">#1</span>
    <span class="ticket-name">Alice</span>
    <span class="ticket-status">Waiting</span>
  </div>
</div>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--ticket-bg` | `#2d2d44` | Ticket background color |
| `--stripe-color` | `#4ecdc4` | Left border accent color |
| `--slide-duration` | `0.4s` | Slide-in animation duration |
