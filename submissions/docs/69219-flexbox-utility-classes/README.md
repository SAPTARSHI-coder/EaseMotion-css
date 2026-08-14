# Flexbox Utility Classes Test

## Overview

This submission provides a visual reference for the EaseMotion flexbox utility classes covered by issue #69219.

The demo covers:

* `ease-flex`
* `ease-flex-wrap`
* `ease-flex-nowrap`
* `ease-flex-wrap-reverse`
* `ease-items-center`
* `ease-justify-between`
* `ease-self-start`
* `ease-self-center`
* `ease-self-end`

## Purpose

The purpose of this submission is to make the expected Flexbox behavior of the utility classes easy to verify and provide a clear reference for regression testing.

## Expected CSS Behavior

| Utility                  | Expected Declaration             |
| ------------------------ | -------------------------------- |
| `ease-flex`              | `display: flex`                  |
| `ease-flex-wrap`         | `flex-wrap: wrap`                |
| `ease-flex-nowrap`       | `flex-wrap: nowrap`              |
| `ease-flex-wrap-reverse` | `flex-wrap: wrap-reverse`        |
| `ease-items-center`      | `align-items: center`            |
| `ease-justify-between`   | `justify-content: space-between` |
| `ease-self-start`        | `align-self: flex-start`         |
| `ease-self-center`       | `align-self: center`             |
| `ease-self-end`          | `align-self: flex-end`           |

## Usage

Apply a utility class directly to an element:

```html
<div class="ease-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Utilities can also be combined:

```html
<div class="ease-flex ease-items-center ease-justify-between">
  <div>Start</div>
  <div>End</div>
</div>
```

## Verification

Open `demo.html` directly in a browser and verify that each utility produces the expected Flexbox behavior.

The test coverage should confirm that each utility generates its intended declaration without changing unrelated Flexbox properties.

## Scope

This submission focuses on regression coverage for the existing flexbox utility classes. It does not modify the existing `core/` or `components/` implementation.

## Related Issue

Closes #69219
