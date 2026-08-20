# Improve Marquee Demo Documentation

## Issue Description

This contribution improves the Marquee Demo documentation to make it more beginner-friendly and easier to understand.

### Changes Made

#### Demo 1

* Updated the title from:

  * `🎨 1. Basic Logo Strip`

* To:

  * `🎨 1. Basic Logo Strip (.ease-marquee)`

* Replaced the existing comment with:

  ```html
  <!-- Required duplicate items for seamless infinite scrolling -->
  ```

* Added explanatory notes describing:

  * Why marquee items are duplicated.
  * How the marquee structure works.
  * How seamless infinite scrolling is achieved.

#### Demo 2

Updated the labels to clearly indicate the utility classes being demonstrated:

* `Slow (40s):` → `Slow (40s) - .slow`
* `Fast (10s):` → `Fast (10s) - .fast`

## Why This Improvement?

These changes make the examples more self-explanatory and help developers quickly identify which classes control the marquee behavior.

Benefits:

* Better beginner experience.
* Easier understanding of marquee implementation.
* Clearer documentation of utility classes.
* Improved readability of examples.

## Files Modified

* `demo.html`

## Issue Reference

Closes #2691
