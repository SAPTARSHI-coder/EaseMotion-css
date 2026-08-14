# Distributed Lease Safety Monitor

A CSS-only systems monitor showing why leases alone cannot prevent stale work
and how monotonically increasing fencing tokens protect a storage boundary.

## Features

- Compare overlapping lease holders with a single fenced writer.
- Visualize clock skew, lease windows, token history, and write outcomes.
- Show token `#1841` rejected after token `#1842` becomes authoritative.
- Track active owners, blocked writes, and ownership confidence together.
- Use a keyboard-accessible checkbox without JavaScript.
- Support narrow viewports and reduced-motion preferences.

## Run

Open `demo.html`, then enable **Fencing tokens** in the header.

## Files

- `demo.html` defines the lease timeline and safety ledger.
- `style.css` implements all interaction, visualization, and responsive states.
- `README.md` documents the example.

No external assets, frameworks, dependencies, or build step are required.
