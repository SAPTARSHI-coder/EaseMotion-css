# CSS Loader State Transition Validation

A self-contained test demo for validating CSS loader behavior during normal and
rapid state transitions.

## Purpose

This submission validates the following transition sequence:

idle → loading → cancel → loading → complete → reset

The test focuses on detecting inconsistent loader behavior when multiple state
changes happen in a short period.

## What Is Validated

The demo checks:

- Correct loader state after every transition
- Only one state class is active at a time
- Previous state classes are removed correctly
- Each state transition produces exactly one event
- Loading animation starts and stops correctly
- Cancelled states do not leave stale animations
- Reset returns the loader to its initial state
- Rapid transitions end in the expected final state

## Supported States

| State | Expected Behavior |
| --- | --- |
| `idle` | Loader is inactive |
| `loading` | Loader animation is active |
| `cancelled` | Animation is stopped and loader is marked cancelled |
| `complete` | Animation is stopped and completion state is shown |
| `reset` | Loader returns to its initial state |

## Test Scenarios

### 1. Normal Transition

```text
idle → loading → complete → reset