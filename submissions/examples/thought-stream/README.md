# Thought Stream

Thought Stream is an interactive AI execution timeline that
visualizes the stages an AI agent goes through while processing a
request.

Instead of exposing users to raw execution logs, Thought Stream
presents the execution path as a structured and inspectable
timeline.

## Features

- AI execution timeline
- Step-by-step visualization
- Stage numbering
- Execution status
- Active stage highlighting
- Expandable execution details
- Duration information
- Token usage
- Confidence scores
- Tool execution information
- Technical execution metadata
- Overall execution progress
- Total token count
- Total execution time
- Final confidence
- Replay Trace interaction
- Sequential replay animation
- Compact View
- Expanded View
- Execution signal visualization
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Files

```text
thought-stream/
├── demo.html
├── style.css
└── README.md
```

## Execution Stages

The demo contains eight example stages:

1. User Input
2. Intent Detection
3. Context Retrieval
4. Reasoning
5. Tool Selection
6. Tool Execution
7. Synthesis
8. Final Response

These stages can be replaced or extended depending on the
architecture of the AI system.

## Statuses

### COMPLETE

The stage finished successfully.

### ACTIVE

The stage is currently being executed.

### WAITING

The stage is waiting for a previous stage to finish.

### FAILED

The stage encountered an error.

## Interactions

### Expand / Collapse

Click a stage card to expand or collapse its execution details.

Expanded stages can expose:

- Duration
- Token usage
- Confidence
- Technical metadata
- Tool information

### Stage Selection

Selecting a stage updates the Trace Inspector.

The inspector displays:

- Step number
- Step name
- Status
- Duration
- Tokens
- Confidence

### Replay Trace

Click `Replay Trace` to replay the execution sequence.

The replay:

1. Starts at the first stage.
2. Highlights each stage.
3. Updates the selected stage.
4. Updates execution progress.
5. Displays the current stage.
6. Continues until the final stage.
7. Displays a completion notification.

### Compact View

Compact View removes expanded execution details and reduces the
visual density of the timeline.

This is useful when monitoring long traces containing many stages.

## Custom Stages

Stages can be added directly using HTML.

Example:

```html
<article
  class="thought active"
  data-index="6"
  data-status="ACTIVE"
  data-name="Tool Execution"
>
```

The JavaScript automatically reads the stage metadata and updates
the inspector.

## Potential Use Cases

Thought Stream can be used for:

- AI agent monitoring
- LLM observability
- RAG pipelines
- AI debugging tools
- Agent orchestration platforms
- Tool-calling interfaces
- AI development environments
- Prompt debugging
- Model evaluation
- Inference monitoring
- Workflow automation
- AI research dashboards

## Design Concept

Traditional AI execution interfaces often expose raw logs.

Thought Stream treats an execution trace as a narrative.

Each stage becomes a distinct point in the agent's journey while
metadata remains accessible without overwhelming the primary view.

This creates a balance between:

- Human-readable execution
- Technical observability
- Debugging information
- Visual hierarchy

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