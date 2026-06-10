# Core Changes — Issue #4584: ease-wave listed in README but missing modular file and usage docs

## Overview
The README feature table lists `ease-wave` as one of the "20+ animation classes", but there is no `easemotion/wave.css` modular file and no usage documentation for `.ease-wave` anywhere in the README or examples.

## Problem
1. **Missing modular file**: `easemotion/wave.css` does not exist. Users following the README's modular import section cannot import wave independently.
2. **Undocumented**: The README never shows how to use `.ease-wave`, what it does, or how to customize it.
3. **Not in `easemotion/all.css`**: The wave animation is only available through the full `core/animations.css` bundle import.

## Fix
1. **Create `easemotion/wave.css`** (provided in `style.css` of this submission)
2. **Update README modular imports table**: add row for `easemotion/wave.css`
3. **Update README usage examples**: add `.ease-wave` demo with HTML snippet
4. **Optionally add to `easemotion/all.css`**: `@import "./wave.css"`

## Affected Files
- `easemotion/wave.css` — **create** (new)
- `README.md` — add modular import entry + usage example
- `easemotion/all.css` — optionally add `@import "./wave.css"`

## Labels
- `documentation`, `enhancement`, `GSSoC-26`
