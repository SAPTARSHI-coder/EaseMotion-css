# File Dropzone Drag Over Class Toggle Test

## Overview

Edge case Vitest coverage for the File Dropzone drag-over state.

## Covered Cases

- dragenter adds class
- dragover adds class
- dragleave removes class
- drop removes class
- repeated dragover doesn't duplicate class
- dragleave without dragover
- drop without dragover
- preserves existing classes

## Files

- demo.html
- style.css
- file-dropzone.test.js

Run:

```bash
vitest
```