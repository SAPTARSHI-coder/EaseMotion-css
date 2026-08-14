# Rapid Successive Animation Trigger Regression

A small regression demo for validating animation behavior when the same or different animation states are triggered repeatedly within a short period.

## Purpose

This submission covers the following scenarios from issue #73262:

* Multiple consecutive triggers
* Same animation triggered repeatedly
* Different animation triggers in sequence
* Rapid trigger → cancel → trigger
* Rapid trigger → restart
* Multiple interactions on the same animated element

## Files

* `demo.html` — standalone interactive regression demo
* `style.css` — styling for the demo
* `README.md` — documentation and test scenarios

## How to Run

No server or build step is required.

Open `demo.html` directly in a browser.

## Test Scenarios

### 1. Multiple Consecutive Triggers

Click **Trigger Animation** several times quickly.

Expected behavior:

* The element remains responsive.
* A new animation replaces the previous animation cleanly.
* No duplicated or stuck animation state appears.

### 2. Same Animation Repeatedly

Press the **T** key repeatedly.

Expected behavior:

* Each trigger starts a fresh animation.
* The element does not accumulate stale animation state.

### 3. Trigger → Cancel → Trigger

Use the following sequence:

1. Click **Trigger Animation**.
2. Click **Cancel**.
3. Immediately click **Trigger Animation** again.

Expected behavior:

* The cancelled animation does not interfere with the new animation.
* The new animation completes normally.

### 4. Trigger → Restart

Click **Restart** repeatedly.

Expected behavior:

* The animation restarts from a consistent initial state.
* No duplicate callbacks or unexpected visual state occurs.

### 5. Rapid Keyboard Transitions

Use:

* `T` — trigger animation
* `R` — restart animation
* `Escape` — cancel animation

Rapidly combine these keys to exercise successive state changes.

## Expected Result

Rapid animation operations should leave the element in a predictable state without duplicated callbacks, stale animation state, or interrupted animations affecting later triggers.

## Accessibility

The demo includes:

* Semantic buttons
* Keyboard controls
* Visible focus styles
* `aria-live` status updates
* `prefers-color-scheme` support

## Why This Fits EaseMotion CSS

The regression demo focuses on predictable animation behavior during repeated interactions while keeping the implementation lightweight and easy to inspect.

It can be opened directly in a browser without a build process or external dependencies.

## Related Issue

Closes #73262
