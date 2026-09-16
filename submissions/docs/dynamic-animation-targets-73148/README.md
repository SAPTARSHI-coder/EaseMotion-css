# Dynamic Animation Target Regression

Regression test submission for issue #73148.

## Purpose

This submission covers animation behavior for elements that are dynamically
created, removed, replaced, or reattached to the DOM.

## Regression Scenarios

The demo provides four scenarios:

1. Dynamic animation target creation
2. Active animation target removal
3. Animation target replacement
4. Reattachment of the same DOM element

## Test Goals

The regression scenarios verify that:

- newly created elements can receive animation behavior
- removing an active target does not leave visible or stale state
- replacing a target creates a clean animation state
- reattaching an existing element restores predictable behavior
- repeated DOM changes do not cause unexpected animation behavior

## Running the Demo

Open `demo.html` directly in a browser.

No server or build process is required.

## Test Cases

### 1. Create Target

Click **Create Target**.

Expected result:

- a new target is inserted into the stage
- the target starts its animation
- no stale animation state is visible

### 2. Remove Target

Click **Remove Target** while the target exists.

Expected result:

- the target is removed from the DOM
- no broken layout remains
- the page continues working normally

### 3. Replace Target

Click **Replace Target**.

Expected result:

- the existing target is replaced
- the replacement receives a fresh animation
- the previous element does not affect the replacement

### 4. Reattach Target

Click **Reattach Target**.

Expected result:

- the target is temporarily removed
- the same element is attached again
- its animation can run after reattachment

### 5. Reset

Click **Reset** to restore a fresh target and repeat the scenarios.

## Browser Coverage

The demo can be checked in:

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

The demo includes `prefers-reduced-motion` support so that users who prefer
reduced motion are not exposed to the animated transitions.

## Scope

All submission files are isolated under `submissions/`.

No changes are made to:

- `core/`
- `components/`
- existing animation implementations

## Related Issue

#73148

## Expected Result

Dynamic DOM operations should not result in stale, broken, or inconsistent
animation behavior.