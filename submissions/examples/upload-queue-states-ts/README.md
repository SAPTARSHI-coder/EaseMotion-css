# File Upload Queue States

**What does this do?** Displays uploading, complete, paused, and failed files in a compact queue.

**How is it used?** Apply a state class such as `uploading`, `complete`, `paused`, or `failed` to each `file` item and set `--progress` on its progress fill.

**Why is it useful?** It makes concurrent upload states scannable through labels, shapes, color, and restrained motion while handling long names and small screens.
