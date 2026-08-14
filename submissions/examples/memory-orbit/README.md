# Memory Orbit

Memory Orbit is an interactive contextual-memory visualization
component that represents information as objects orbiting around a
central memory core.

It provides a creative alternative to conventional memory lists,
context cards, and tag-based interfaces.

## Features

- Central memory core
- Multiple orbital rings
- Eight contextual memories
- Animated orbital environment
- Memory hover previews
- Interactive memory selection
- Dynamic memory inspector
- Importance meter
- Freshness meter
- Memory category
- Memory ID generation
- Memory signal visualization
- Recall interaction
- Clear Selection interaction
- Responsive layout
- Vanilla JavaScript
- No external dependencies

## Files

```text
memory-orbit/
├── demo.html
├── style.css
└── README.md
```

## Interactions

### Hover

Hover over a memory object to display a compact preview.

### Select

Click a memory to update the Memory Inspector.

The inspector displays:

- Memory title
- Category
- Description
- Importance
- Freshness
- Memory ID
- Current status

### Recall Memory

Clicking `Recall Memory` simulates retrieving the selected memory
and displays a confirmation message.

### Clear Selection

Restores the default memory state.

## Memory Data

Memory objects use HTML data attributes.

Example:

```html
<button
  class="memory"
  data-title="Project Architecture"
  data-category="PROJECT"
  data-importance="94"
  data-freshness="91"
  data-description="The current application uses a modular architecture."
>
```

This makes the component easy to connect to real memory or context
data later.

## Use Cases

Memory Orbit can be adapted for:

- AI memory systems
- Personal AI assistants
- Knowledge management
- Context-aware interfaces
- Note-taking applications
- Knowledge graphs
- User preference systems
- Project context management
- Long-term memory visualization
- Recommendation systems

## Design Philosophy

Memory Orbit treats contextual information as something that exists
around a central context rather than as a flat list.

The central core represents the current context while the surrounding
objects represent memories that can be recalled when needed.

The distance from the core can also be adapted to represent memory
priority, relevance, or retrieval probability.

## Technical Details

Built with:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside `demo.html`.

## Browser Support

Designed for:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.