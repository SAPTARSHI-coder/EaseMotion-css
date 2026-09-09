# 🪐 Orbit Queue

Orbit Queue is a futuristic interactive visualization for
priority-based task scheduling.

Instead of representing a queue as a traditional list, tasks orbit
around a central processor according to their priority and execution
state.

---

## ✨ Features

- Orbital task visualization
- Central processor representation
- Priority-based orbital distances
- Animated task movement
- Task selection
- Task inspector
- Task metadata
- Priority visualization
- Running task animation
- Blocked task state
- Failed task state
- Queue statistics
- Scheduler event stream
- Task filtering
- START / PAUSE / DRAIN controls
- Worker indicators
- Resource usage visualization
- Responsive layout
- Vanilla JavaScript
- Zero external dependencies

---

## 🛰️ Task Priorities

| Priority | Description |
|---|---|
| CRITICAL | Requires immediate processing |
| HIGH | High scheduling priority |
| NORMAL | Standard priority |
| LOW | Background priority |

Priority is represented visually through the task's orbital position
and styling.

---

## ⚙️ Task States

| State | Description |
|---|---|
| QUEUED | Waiting for an available worker |
| RUNNING | Currently being processed |
| BLOCKED | Waiting for another dependency |
| COMPLETED | Successfully processed |
| FAILED | Processing failed |

---

## 🧭 Interaction

### Select Task

Click a task in the orbital field.

The inspector displays:

- Task ID
- Task name
- Priority
- State
- Worker
- Queue time
- Runtime
- Retry count
- Resource usage

---

### Filters

Use the filters to isolate:

- All tasks
- Running tasks
- Blocked tasks
- Failed tasks

---

### START

Starts the orbital scheduler animation.

---

### PAUSE

Freezes task movement.

---

### DRAIN

Progressively removes queued tasks from the visible scheduler.

---

## 📊 Scheduler Metrics

The component displays:

- Queued tasks
- Running tasks
- Completed tasks
- Average queue wait time

These metrics can be connected to real scheduler telemetry in a
production implementation.

---

## 🎨 Design

Orbit Queue combines:

- Space/orbital visualization
- Distributed systems
- Queue scheduling
- Developer tooling
- Real-time monitoring

The result is a visual alternative to traditional job queue
interfaces.

---

## 📁 Structure

```text
orbit-queue/
│
├── demo.html
├── style.css
└── README.md