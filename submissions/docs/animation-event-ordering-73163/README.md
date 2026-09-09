# Animation Event Ordering Regression Test

## Overview

This submission adds regression coverage for animation lifecycle event ordering during rapid state changes.

The test focuses on:

- Animation start
- Animation restart
- Animation cancellation
- Rapid cancellation and restart
- Animation completion
- Duplicate or unexpected lifecycle events

## Test Scenarios

### 1. Normal Start

Start an animation and verify that `animationstart` occurs before `animationend`.

### 2. Restart

Restart an active animation and verify that lifecycle events remain consistent.

### 3. Cancellation

Cancel an active animation and verify that cancellation does not incorrectly produce a completion event.

### 4. Rapid Transition

Start, cancel, and restart an animation in quick succession.

The event log makes the lifecycle sequence visible so unexpected duplicate or out-of-order events can be identified.

### 5. Event Ordering

The expected lifecycle relationship is:

```text
start-request
animationstart
animationend

