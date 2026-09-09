# Prompt DNA

Prompt DNA is an interactive AI prompt analysis component that
visualizes the structural composition of a prompt as a genetic sequence.

Instead of treating a prompt as a block of text, the component breaks it
into structural "genes" that influence the reliability and predictability
of an AI response.

## Features

- Prompt structure visualization
- DNA-inspired interface
- Role gene
- Objective gene
- Context gene
- Constraints gene
- Examples gene
- Output Format gene
- Safety gene
- Gene confidence scores
- Healthy gene state
- Weak gene state
- Prompt Health score
- Warning counter
- Mutation counter
- Interactive gene selection
- Gene inspector
- Detected content preview
- Structural recommendations
- Mutation Scan
- Mutation timeline
- Prompt Repair
- Original sequence
- Optimized sequence
- Experimental sequence
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Files

```text
prompt-dna/
├── demo.html
├── style.css
└── README.md
```

## Prompt Genes

Prompt DNA analyzes seven conceptual structural components.

### Role

Defines the identity or perspective the model should use.

Example:

```text
You are an experienced AI engineering mentor.
```

### Objective

Defines what the model is expected to accomplish.

Example:

```text
Explain the concept clearly and provide practical examples.
```

### Context

Provides information required to understand the task.

Example:

```text
The learner already understands basic programming concepts.
```

### Constraints

Defines boundaries and restrictions.

Example:

```text
Keep the response concise and avoid unnecessary complexity.
```

### Examples

Provides concrete examples of desired behavior.

Examples are particularly useful for ambiguous formatting or behavior.

### Output Format

Defines the structure of the expected response.

Example:

```text
Return the explanation using headings, bullets and code blocks.
```

### Safety

Defines guardrails that prevent unwanted or unsafe behavior.

Example:

```text
Do not expose secrets or fabricate technical references.
```

## Prompt Health

Prompt Health is calculated from the confidence scores of the detected
genes.

The score provides a high-level indication of how structurally complete
the prompt is.

Possible states include:

```text
HEALTHY
WATCH
UNSTABLE
```

## Gene States

Each gene can have one of two primary states.

### HEALTHY

The component has strong evidence that the prompt contains the expected
structure.

### WEAK

The component detected incomplete, ambiguous or missing information.

## Mutation Scan

Mutation Scan simulates structural changes in the prompt.

This demonstrates how a prompt analysis system could detect degradation
in important instructions over time.

Examples include:

- Constraint weakening
- Example removal
- Formatting ambiguity
- Safety instruction degradation
- Role ambiguity

## Mutation Timeline

The timeline records structural changes detected during analysis.

Example events:

```text
Prompt sequence initialized
Constraint gene mutation detected
Example gene mutation detected
Prompt repair completed
```

## Prompt Repair

Prompt Repair improves the confidence of weak genes.

In a production implementation, this could be connected to an LLM-based
prompt optimizer capable of generating improved instructions.

Possible repair strategies include:

- Adding missing constraints
- Adding examples
- Clarifying objectives
- Strengthening output requirements
- Improving safety instructions
- Removing ambiguity

## Sequence Modes

The component includes three sequence modes.

### Original

Represents the currently analyzed prompt.

### Optimized

Represents a prompt that has been improved by an optimization process.

### Experimental

Represents an experimental prompt variation.

These modes can later be connected to actual prompt versioning systems.

## Potential Use Cases

Prompt DNA can be used in:

- Prompt engineering tools
- LLM development platforms
- AI evaluation systems
- Prompt optimization platforms
- AI agent development tools
- RAG applications
- AI observability platforms
- Prompt versioning systems
- Model testing dashboards
- AI developer tooling

## Design Philosophy

Prompts are often treated as plain text.

However, prompt reliability depends heavily on structure.

Prompt DNA makes that structure visible.

Instead of asking:

"Is this prompt good?"

the interface encourages a more useful question:

"Which structural component of this prompt is weak?"

## Technical Details

Built with:

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