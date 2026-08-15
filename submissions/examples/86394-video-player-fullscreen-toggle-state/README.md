# Video Player — Fullscreen Toggle State

## Overview

This submission demonstrates a simple Video Player fullscreen toggle state
using pure HTML, CSS, and JavaScript.

A focused Vitest unit specification validates the state transition logic,
including normal toggles, repeated toggles, boundary conditions, and invalid
inputs.

## State Model

The fullscreen state is represented by a boolean:

```text
false → not fullscreen
true  → fullscreen