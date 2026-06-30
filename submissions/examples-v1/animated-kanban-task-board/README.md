# Animated Kanban Task Board

An interactive, premium Kanban task board with glassmorphic columns, column hover offsets, card elevation jumps, pulsing priority tags, and detailed metadata displays. Inspired by productivity platforms like Trello, Jira, Linear, ClickUp, Asana, and Notion.

## What does this do?

This component provides a full workflow overview board featuring:

- **Column Hover Offset**: Elevates workflow columns slightly (`translateY(-2px)`) and highlights borders on hover.
- **Card Hover Elevation**: Lifts task cards (`translateY(-6px)`) and casts an ambient priority-based shadow.
- **Staggered Card Load-in**: Animates cards sliding up on initial page load.
- **Pulsing Priority Badges**: Animates badges with color-coded pulsing glows (`high` red, `medium` amber, `low` green).
- **Physical Grab Squeezes**: Scales down cards (`scale(0.98)`) and switches cursor icons to `grabbing` on click hold.
- **Overlapping Avatar Stack**: Renders assignees in a compact, expanding stack.
- **Shimmer Sheen Reflection**: Sweeps a soft gloss sheet across the card face on hover.

## How is it used?

Integrate the board markup inside your dashboard layout:

```html
<div class="kanban-board">
  <div class="column">
    <h3>To Do</h3>

    <div class="task-card">
      <span class="priority high">High</span>
      <h4>Design Dashboard Layout</h4>
      <p>Create the initial dashboard wireframes.</p>
    </div>
  </div>
</div>
```

## Why is it useful?

Kanban boards are central to SaaS workspace layouts. This board:

1. **Creates board-level feedback**: Improves context recognition by styling active columns and cards.
2. **Details card metadata**: Packs priorities, comments, due dates, label tags, and assignees into a neat visual footprint.
3. **Pure CSS implementation**: Operates completely without scripts or external image dependencies.

## Tech Stack

- HTML5
- CSS3 (Vanilla Custom Properties, Grid, Flexbox, Keyframes)
- Inline SVGs (No external image network requests required)

## Preview

To see the board in action:

1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-kanban-task-board/demo.html) directly in any modern web browser.
2. Hover over columns and cards to test out translations and sparkles.

## Contribution Notes

- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
