# Two-Phase Commit Recovery Console

A CSS-only distributed transaction console showing recovery after a
coordinator crash leaves all participants in the prepared state.

## Features

- Compare an in-doubt transaction with its recovered committed state.
- Visualize the durable commit record, decision replay, and acknowledgements.
- Track held locks, participant votes, phase progress, and recovery time.
- Demonstrate why prepared participants require the coordinator's decision.
- Use a keyboard-accessible checkbox without JavaScript.
- Support narrow screens and reduced-motion preferences.

## Run

Open `demo.html`, then activate **Decision replay** in the header.

## Files

- `demo.html` defines the recovery topology.
- `style.css` implements all interaction and responsive states.
- `README.md` documents the example.

No external assets, frameworks, dependencies, or build step are required.
