# build-contributor-wall.py Cross-Platform Path Fix

## What does this do?

It fixes the Windows path crash bug in `scripts/build-contributor-wall.py` by resolving the system's temporary directory in a cross-platform manner using Python's standard `tempfile` and `os` modules.

## How is it used?

It is a fix for the contributor wall builder script. The path resolution is updated as follows:

```python
import os
import tempfile

INPUT = os.path.join(tempfile.gettempdir(), "contributors.json")
```

## Why is it useful?

This allows the script to be executed successfully on both Windows and Unix systems, ensuring compatibility for developers running the contributor wall update tasks locally.
