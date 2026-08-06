# Component Manifest JSON Generator

## Overview

This utility automatically scans the project folders and generates a single `components.json` manifest.

## Features

- Scans `components/`
- Scans `submissions/`
- Detects available CSS files
- Generates a structured JSON manifest
- Lightweight Node.js implementation

## Usage

```bash
node manifest-generator.js
```

Output:

```json
[
  {
    "name": "accordion",
    "category": "components",
    "hasCSS": true
  }
]
```

## Why?

Maintains a single source of truth for all available EaseMotion CSS components.