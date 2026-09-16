# Memory Trace

Memory Trace is an interactive AI memory visualization component
designed to demonstrate how an intelligent system can store, retrieve,
strengthen and forget information.

Instead of representing memory as a conventional list, the component
renders memories as spatial cognitive traces.

## Features

- Interactive memory field
- Memory nodes
- Memory strength visualization
- Semantic memories
- Episodic memories
- Preference memories
- Task memories
- Recall simulation
- Recall matching
- Memory inspector
- Memory relevance
- Memory recency
- Recall probability
- Memory age
- Memory timestamps
- Memory pinning
- Memory decay
- Weak-memory cleanup
- Configurable cleanup threshold
- Memory activity timeline
- Memory statistics
- Recall animation
- Memory particles
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Memory Types

### Semantic

Represents stable factual or conceptual knowledge.

Examples:

```text
Programming knowledge
Project interests
Technical concepts
```

### Episodic

Represents events or previous interactions.

Examples:

```text
Previous meeting
Past conversation
Previous task
```

### Preference

Represents behavioral or personalization preferences.

Examples:

```text
UI preference
Writing preference
Coding preference
```

### Task

Represents information related to an active task or workflow.

Examples:

```text
Resume update
Component workflow
Current project
```

## Memory Model

Each memory contains several properties:

```text
Strength
Recency
Relevance
Recall Probability
Age
```

These properties determine how likely the memory is to be retrieved.

A production implementation could use a scoring function such as:

```text
Recall Score =
    relevance × 0.45
  + recency × 0.30
  + strength × 0.25
```

The component currently uses simplified simulated values.

## Recall

The Recall Memory action simulates a semantic retrieval process.

When recall is triggered:

1. Memories are ranked by relevance.
2. The strongest matches are selected.
3. Matching memories receive a visual pulse.
4. The top memory becomes selected.
5. Recency and recall probability are updated.
6. A recall event is added to the activity timeline.

## Memory Decay

Memory strength can decrease over time.

The Decay action simulates this behavior by reducing the selected
memory's strength.

Example:

```text
87%
 ↓
75%
```

Pinned memories are protected from simulated decay.

## Pinning

Pinned memories are treated as high-value memories.

A pinned memory:

- Cannot be reduced through the manual decay action.
- Cannot be removed by weak-memory cleanup.

This can represent important long-term information in a production
memory system.

## Weak Memory Cleanup

The cleanup threshold controls which memories can be removed.

For example:

```text
Threshold = 30%

Memory A → 82% → retained
Memory B → 54% → retained
Memory C → 22% → removed
```

Pinned memories are always preserved.

## Memory Inspector

Selecting a memory opens its detailed inspector.

The inspector provides:

- Memory type
- Memory strength
- Recency
- Relevance
- Recall probability
- Age
- Content
- Created timestamp
- Last accessed timestamp

This allows developers to understand why a particular memory may or
may not be retrieved.

## Memory Field

The central field represents the system's long-term memory space.

Memory nodes are spatially distributed rather than presented as a
traditional table.

This makes it possible to visualize:

- Memory clusters
- Memory density
- Strong memories
- Weak memories
- Memory categories
- Retrieval activity

## Potential Production Architecture

Memory Trace can be connected to a real AI memory system.

A production implementation could contain:

```text
User Query
     ↓
Embedding
     ↓
Vector Search
     ↓
Relevance Ranking
     ↓
Memory Decay
     ↓
Memory Selection
     ↓
LLM Context
```

The frontend component could consume events from that system.

## Example Memory Object

```json
{
  "id": "memory_001",
  "type": "preference",
  "content": "User prefers concise technical explanations.",
  "strength": 0.87,
  "recency": 0.92,
  "relevance": 0.96,
  "recall_probability": 0.89,
  "created_at": "2026-08-06T14:32:00Z",
  "last_accessed_at": "2026-08-10T11:42:00Z",
  "pinned": false
}
```

## Use Cases

Memory Trace can be used for:

- AI assistants
- Personalization systems
- Long-term memory interfaces
- RAG systems
- Agent memory systems
- Conversational AI
- AI debugging tools
- LLM observability
- Memory evaluation
- Context management systems

## Design Philosophy

AI memory is usually hidden from users and developers.

This component makes that hidden layer visible.

Instead of asking:

> Why did the model remember this?

developers can inspect:

```text
Strength
Recency
Relevance
Recall probability
Last access
```

This makes memory behavior easier to understand and debug.

## Technical Details

Built with:

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
memory-trace/
├── demo.html
├── style.css
└── README.md
```

## Future Improvements

Potential extensions include:

- Real vector embeddings
- Similarity score visualization
- Memory clustering
- Vector-space projection
- Automatic decay scheduling
- Memory consolidation
- Duplicate memory detection
- Memory conflict detection
- LLM-powered memory summarization
- Semantic memory graphs
- PostgreSQL/pgvector integration
- Chroma integration
- Qdrant integration
- Pinecone integration
- Real-time memory streams

## License

Use and modify this component according to the license of the
parent component library.