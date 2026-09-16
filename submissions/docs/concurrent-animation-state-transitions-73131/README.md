# Concurrent Animation State Transitions

Regression test submission for issue #73131.

## Purpose

This submission covers animation state transitions that happen in quick
succession.

The scenarios represented by this test submission are:

1. Start → pause → resume
2. Start → cancel → restart
3. Start → reverse → restart
4. Multiple rapid state changes
5. Completion during another state transition
6. Repeated transitions on the same element

## Test Goals

The regression coverage is intended to verify that:

- animation state remains consistent during transitions
- restarting an animation does not leave stale visual state
- cancellation can be followed by a clean restart
- direction changes do not create unexpected state
- rapid transitions remain visually stable
- completion does not interfere with another state change
- repeated transitions remain predictable

## Files

```text
concurrent-animation-state-transitions-73131/
├── demo.html
├── style.css
└── README.md