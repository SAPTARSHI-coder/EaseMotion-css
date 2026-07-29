# CSS Class Name Audit

## What does it do?
A bash script that scans all submission `style.css` files for duplicate CSS class names across different folders — no dependencies required.

## Features
- Scans every `style.css` under `submissions/`
- Extracts all class selectors
- Flags class names defined in multiple folders
- CI-friendly: exits 0 if clean, 1 if duplicates found

## Usage
```bash
bash submissions/examples/css-class-audit/audit-classes.sh
```

## Why This Matters
With hundreds of CSS examples, the same class name can appear in different folders. This doesn't affect the core library, but users who copy multiple demos into a single project may encounter style conflicts from duplicate class definitions.

## Browser Support
N/A — this is a bash script, not a browser demo.

## Tech Stack
- Bash script, no dependencies
- HTML/CSS demo page explains the tool
