# Contract Animation Safari Stutter Fix

This directory houses a reproduction demonstration and technical documentation addressing WebKit rendering stutters on Safari platforms during scale-down scaling (`contract`) effects.

## The Problem
On macOS and iOS WebKit engines, transitions involving composite properties like scale or sizing calculations can drop frames during complex rendering loops, causing the animation layout to jump or stutter.

## The Optimization Fix
To ensure perfectly smooth cross-browser processing without breaking the architecture core freeze rule, this project relies on hardware composite layer isolation tricks:
1. **`will-change: transform`**: Warm up Safari's graphics compositor ahead of interaction execution.
2. **`translateZ(0)`**: Force the layer layout allocation directly into device GPU rendering lanes.

## Setup Instructions
Open `demo.html` locally in any modern Chromium, Gecko, or WebKit browser setup to preview smooth layer transitions.