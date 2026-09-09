# Context Lens

Context Lens is an interactive visualization for understanding how
different sources consume an AI model's context window.

Instead of presenting context usage as a simple progress bar, the
component visualizes context as a layered lens containing system
instructions, memory, retrieval results, tools, conversation history
and output reservation.

## Features

- Context window visualization
- Layered context segments
- Context token usage
- Context capacity
- Remaining token capacity
- Context utilization percentage
- Context health indicator
- OPTIMAL state
- BUSY state
- CRITICAL state
- Context inspector
- Segment selection
- Token distribution
- Priority visualization
- Compression state
- Context pinning
- Compression simulation
- Context budget slider
- Dynamic utilization calculations
- Critical usage warning
- Context reset
- Animated context flow
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Files

```text
context-lens/
├── demo.html
├── style.css
└── README.md
```

## Context Sources

The demo contains six context sources:

### System

Core model instructions, behavioral constraints and output rules.

### Memory

Persistent information that can help the model maintain continuity
between interactions.

### Retrieval

External knowledge retrieved for the current request.

### Tools

Tool definitions, schemas and recent execution information.

### Conversation

Recent conversation history.

### Output

Reserved context capacity for generating the next response.

## Context Health

Context Lens automatically calculates context utilization.

### OPTIMAL

The model is using less than 65% of its available context.

### BUSY

The model is using between 65% and 85% of its available context.

### CRITICAL

The model is using more than 85% of its available context.

A warning is displayed when the context enters the critical state.

## Context Inspector

Click any context segment or legend item to inspect it.

The inspector displays:

- Context type
- Context name
- Description
- Token usage
- Percentage share
- Priority
- Compression state
- Priority score

## Context Pinning

The selected context can be pinned.

Pinned context is treated as protected information during simulated
compression.

This interaction can be adapted to represent:

- pinned memories
- system instructions
- important documents
- protected retrieval results
- high-priority agent state

## Compression

The `Compress Context` action simulates context optimization.

The demo reduces the token usage of lower-priority sources such as:

- Retrieval
- Conversation

The operation can be reversed using `Restore Context`.

In a real application this could represent:

- summarization
- semantic compression
- conversation truncation
- retrieval filtering
- duplicate removal
- memory pruning

## Context Budget

The context budget slider changes the available context capacity.

Supported range:

```text
8K → 32K
```

The visualization automatically recalculates:

- Capacity
- Remaining tokens
- Utilization
- Health state
- Center utilization

## Example Context

The default context contains approximately:

| Source | Tokens |
|---|---:|
| System | 1,800 |
| Memory | 2,400 |
| Retrieval | 5,200 |
| Tools | 1,600 |
| Conversation | 4,200 |
| Output | 1,800 |

Total active context:

```text
17,000 tokens
```

Default context capacity:

```text
32,768 tokens
```

## Potential Use Cases

Context Lens can be used for:

- LLM playgrounds
- RAG applications
- AI agent interfaces
- Prompt engineering tools
- Context-window debugging
- LLM observability dashboards
- AI development environments
- Memory management interfaces
- Retrieval optimization tools
- Token budgeting tools
- Agent orchestration platforms

## Design Concept

Most context-window interfaces represent usage with a simple bar.

Context Lens treats the context window as a living composition.

Different information sources have different importance, compression
behavior and roles in the model's execution.

The visual representation makes it easier to understand where the
available context is being consumed.

## Technical Details

Built using:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside `demo.html`.

## Browser Support

Designed for modern:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.