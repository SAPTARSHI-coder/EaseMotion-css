# React Animate Wrapper Integration Tests

## Issue

Closes #69080

## Description

This submission provides regression-test coverage for the React `Animate` wrapper and its supported animation props.

## Covered Cases

* `type` applies the expected animation class.
* `duration` supports predefined and numeric values.
* `delay` applies the expected animation delay.
* `hover` enables the requested hover effect.
* `tag` renders the requested HTML element.
* `className` is merged with generated classes.
* Default prop values behave correctly.
* Multiple props work together without unexpected behavior.

## Expected Behavior

The `Animate` wrapper should render the requested element and apply the expected animation classes and animation-related properties for each supported prop.

## Scope

This contribution focuses on regression-test coverage for the React integration. It does not modify the existing `Animate` implementation.

## Verification

The accompanying demo provides a simple visual reference for the expected animation behavior and can be opened directly in a browser.
