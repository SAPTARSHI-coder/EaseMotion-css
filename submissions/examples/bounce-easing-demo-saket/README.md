# Bounce Easing Parser Demo

## Overview

This submission demonstrates the `bounce` naming ambiguity in the EaseMotion
CSS motion parser.

The token `bounce` is documented both as:

- an animation name
- an easing alias

This creates an ambiguity when `bounce` appears after another animation.

## Demonstrated Cases

### 1. Bounce as an animation

The `bounce` animation should continue to work when used by itself.

### 2. Bounce as an easing alias

The documented `bounce` easing should be distinguishable when it appears
after another animation, such as:

```text
fade-in bounce