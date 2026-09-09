# Thought Mosaic

Thought Mosaic is an interactive AI context-assembly component that
visualizes how different pieces of context contribute to a synthesized
answer.

Instead of presenting retrieved documents, memories, constraints, and
intent as a traditional list, Thought Mosaic turns them into connected
context fragments surrounding the final answer.

## Concept

An AI system may construct an answer using:

```text
Memory
   +
Retrieval
   +
Evidence
   +
User Intent
   +
Constraints
   +
Conversation History
   ↓
Synthesized Answer
```

Thought Mosaic visualizes this process as a contextual graph.

## Features

- Context assembly visualization
- Central synthesized answer
- Interactive context tiles
- Context relevance scores
- Context confidence
- Context source
- Context status
- Context weighting
- Context inspector
- Context summaries
- Reasoning pipeline
- Collect stage
- Filter stage
- Weigh stage
- Synthesize stage
- Context coverage score
- Final answer confidence
- Source count
- Assembly activity stream
- Rebuild Thought interaction
- Animated context reconstruction
- Responsive layout
- Vanilla JavaScript
- No external JavaScript dependencies

## Context Types

The demo includes several types of context.

### Memory

Represents previously stored user preferences or relevant long-term
information.

```text
MEMORY
User Preference
94% relevance
```

### Retrieval

Represents information retrieved from a knowledge source.

```text
RETRIEVAL
Documentation
89% relevance
```

### Evidence

Represents supporting evidence used to strengthen the answer.

```text
EVIDENCE
API Example
82% relevance
```

### Constraint

Represents explicit requirements from the current request.

```text
CONSTRAINT
User Requirement
96% relevance
```

### Intent

Represents the inferred objective of the user.

```text
INTENT
Explain Clearly
91% relevance
```

### History

Represents previous conversational context.

```text
HISTORY
Previous Query
74% relevance
```

## Visual Model

The component represents the reasoning system as:

```text
                RETRIEVAL
                    │
                    │
        MEMORY ─────┼───── INTENT
                    │
                    ▼
             ┌─────────────┐
             │   ANSWER    │
             │  SYNTHESIS  │
             └─────────────┘
                    ▲
                    │
          EVIDENCE ─┼─ CONSTRAINT
                    │
                  HISTORY
```

The connections represent contextual influence.

## Relevance

Every context fragment contains a relevance score.

Example:

```text
Memory             94%
Retrieval          89%
Evidence           82%
Constraint         96%
Intent             91%
History            74%
```

The relevance value can represent any ranking mechanism used by the
application.

Possible implementations include:

- Embedding similarity
- RAG retrieval scores
- Cross-encoder scores
- Attention weights
- Custom ranking models
- Hybrid retrieval scores

## Context Inspector

Clicking a context tile updates the inspector.

The inspector displays:

```text
Context Type
Context Name
Relevance
Source
Confidence
Status
Weight
Summary
```

This allows users to inspect exactly why a context fragment is part of
the answer.

## Reasoning Pipeline

The component contains four reasoning stages:

```text
COLLECT
   ↓
FILTER
   ↓
WEIGH
   ↓
SYNTHESIZE
```

These stages can map to a real AI pipeline.

### COLLECT

Gather candidate context.

Possible sources:

- Vector database
- User memory
- Conversation history
- Search engine
- Knowledge graph
- External APIs

### FILTER

Remove irrelevant context.

Possible mechanisms:

- Similarity threshold
- Metadata filtering
- Re-ranking
- Deduplication
- Safety filtering

### WEIGH

Assign importance to remaining context.

Possible mechanisms:

- Relevance score
- Confidence
- Source quality
- Recency
- User priority

### SYNTHESIZE

Combine the selected context into the final response.

## Rebuild Thought

The `Rebuild Thought` button simulates another reasoning pass.

The interaction:

1. Animates context tiles.
2. Animates context connections.
3. Changes relevance values.
4. Recalculates coverage.
5. Updates answer confidence.
6. Adds an event to the activity stream.
7. Displays a completion notification.

In a production system this interaction could trigger a new
retrieval/re-ranking/inference pipeline.

## Production Architecture

Thought Mosaic could sit on top of a RAG architecture:

```text
                 USER QUERY
                     │
                     ▼
               Intent Parser
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
      User Memory          Vector Search
          │                     │
          └──────────┬──────────┘
                     ▼
                 Re-ranker
                     │
                     ▼
              Context Filter
                     │
                     ▼
               LLM / Agent
                     │
                     ▼
              Thought Mosaic
                     │
                     ▼
              Final Answer
```

## Example Backend Response

A backend could return:

```json
{
  "answer": "The synthesized response...",
  "confidence": 0.932,
  "coverage": 0.87,
  "contexts": [
    {
      "type": "MEMORY",
      "name": "User Preference",
      "relevance": 0.94,
      "confidence": 0.97,
      "source": "USER_MEMORY",
      "status": "INCLUDED",
      "weight": "HIGH"
    },
    {
      "type": "RETRIEVAL",
      "name": "Documentation",
      "relevance": 0.89,
      "confidence": 0.94,
      "source": "KNOWLEDGE_BASE",
      "status": "INCLUDED",
      "weight": "HIGH"
    }
  ]
}
```

The frontend can transform this response into the mosaic.

## Potential Use Cases

Thought Mosaic can be used for:

- RAG interfaces
- AI assistants
- Agent systems
- Search systems
- Knowledge assistants
- AI explainability
- Context debugging
- Prompt orchestration
- Enterprise copilots
- Research assistants
- Recommendation systems
- Retrieval pipelines

## Why This Component?

Traditional RAG interfaces often expose context as:

```text
Sources:
1. Documentation
2. Previous conversation
3. Knowledge base
4. User memory
```

Thought Mosaic makes the relationship between those sources and the
final answer visible.

It answers:

```text
What context was collected?
        ↓
What context was considered relevant?
        ↓
What context influenced the answer?
        ↓
How strongly did each context contribute?
        ↓
What was finally synthesized?
```

## Future Improvements

Possible extensions include:

- Real vector similarity visualization
- RAG document previews
- Token contribution visualization
- Context conflict detection
- Context freshness indicators
- Source reliability scoring
- Context deduplication
- Counterfactual context removal
- "What if this context was removed?"
- Context version history
- Prompt inspection
- Agent tool-call integration
- Knowledge graph integration
- Streaming context retrieval
- Real-time reasoning stages

## Technical Details

Built using:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside:

```text
demo.html
```

## File Structure

```text
thought-mosaic/
├── demo.html
├── style.css
└── README.md
```

## License

Use and modify this component according to the license of the parent
component library.