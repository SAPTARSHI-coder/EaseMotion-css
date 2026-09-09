# Memory Shard

Memory Shard is an experimental interactive interface for exploring fragmented information.

Instead of displaying information as conventional cards, the component represents a damaged memory as a collection of independent shards.

Users can inspect individual fragments and progressively reconstruct the entire memory.

---

## Concept

The interface is based around a simple idea:

> Information can survive even when its structure is broken.

The central object represents a corrupted memory.

Each shard contains one piece of information.

As shards are reconstructed, the overall memory gradually becomes complete.

---

## Features

- 10 interactive memory shards
- Irregular shard geometry
- Hover inspection
- Click reconstruction
- Keyboard accessibility
- Dynamic reconstruction percentage
- Dynamic archive state
- Fragment inspector
- Reconstruction preview
- Restore All
- Reset Memory
- Responsive layout
- Reduced-motion support
- No external dependencies

---

## Memory States

The component has three primary states.

### Fragmented

```text
0% — 39%