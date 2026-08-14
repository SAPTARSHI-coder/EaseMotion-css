# Cross-Browser Animation Lifecycle Regression Tests

Regression-test submission for EaseMotion CSS Issue #72975.

## Purpose

This submission provides a browser-based regression suite for checking
animation lifecycle behavior.

The suite focuses on the following lifecycle stages:

1. Initialization
2. Execution
3. Interruption
4. Restart
5. Completion
6. Cleanup

The goal is to make animation behavior easier to verify across different
browser environments.

## Files

```text
cross-browser-animation-lifecycle-72975/
├── demo.html
├── style.css
└── README.md