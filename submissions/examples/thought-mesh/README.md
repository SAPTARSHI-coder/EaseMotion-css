# 🕸️ Thought Mesh

A futuristic interactive AI reasoning visualization that represents
context, evidence, hypotheses, inferences and conclusions as a
dynamic reasoning mesh.

Thought Mesh is designed to feel more like a living cognitive system
than a traditional flowchart.

---

## ✨ Features

- Dynamic reasoning graph
- Interactive thought nodes
- Animated reasoning connections
- Confidence visualization
- Node inspection panel
- Evidence metadata
- Connection metadata
- Reasoning summaries
- Confidence threshold filtering
- Focused node selection
- Contradiction visualization
- Reasoning timeline
- RUN / PAUSE / RESET controls
- Animated reasoning particles
- Responsive layout
- Zero external JavaScript dependencies

---

## 🧠 Supported Node Types

The visualization supports several reasoning concepts:

| Type | Description |
|---|---|
| CONTEXT | Initial information |
| MEMORY | Previously stored information |
| EVIDENCE | Supporting observations |
| HYPOTHESIS | Proposed interpretation |
| SIGNAL | Detected information |
| INFERENCE | Derived information |
| SYNTHESIS | Combined reasoning |
| CONCLUSION | Final result |

---

## 📊 Node States

Each node can have a different reasoning state.

### DORMANT

The node exists in the graph but is not currently influencing the
reasoning process.

### ACTIVE

The node is currently participating in reasoning.

### CONFIDENT

The system considers the node highly reliable.

### DISCARDED

The node has been rejected by the reasoning process.

---

## ⚡ Interactions

### Select a Node

Click any reasoning node to inspect its metadata.

The inspector displays:

- Node type
- Confidence
- Status
- Evidence count
- Connections
- Reasoning explanation

---

### Confidence Threshold

Use the confidence slider to filter low-confidence reasoning nodes.

Nodes below the selected confidence threshold become visually muted.

---

### Focus Mode

Selecting a reasoning node highlights the selected thought and makes
its role in the mesh easier to understand.

---

### RUN

Starts reasoning animations.

---

### PAUSE

Freezes animated reasoning connections and particles.

---

### RESET

Restores the initial reasoning state.

---

## 🎨 Design

Thought Mesh uses a dark futuristic interface designed for AI,
developer tooling and data-intensive applications.

The visual language combines:

- Cognitive graph visualization
- Neural-network aesthetics
- Developer tooling
- Data visualization
- AI observability interfaces

---

## 📁 Files

```text
thought-mesh/
│
├── demo.html
├── style.css
└── README.md