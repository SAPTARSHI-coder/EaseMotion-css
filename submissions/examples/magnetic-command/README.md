# Magnetic Command

Magnetic Command is an interactive physics-inspired workspace where
task cards behave like magnetic objects.

Instead of using a traditional Kanban layout, tasks react to the
user's cursor and can be physically repositioned around the workspace.

## Features

- Magnetic cursor interaction
- Interactive task cards
- Drag-and-drop positioning
- Cursor field visualization
- Active task selection
- Task information panel
- Priority indicators
- Progress indicators
- Animated magnetic core
- Grid-based workspace
- Responsive design
- Vanilla JavaScript
- No external dependencies
- No separate JavaScript file

## How It Works

The workspace calculates the distance between the cursor and every task
card.

When a card enters the magnetic radius, its position receives a small
translation based on the direction and strength of the magnetic field.

The closer the card is to the field center, the stronger the visual
movement becomes.

Conceptually:

```text
distance → magnetic strength → card displacement