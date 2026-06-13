# Core Changes — Issue #5215: Inconsistent Layout for ease-hover-bounce-text

## Overview

The `ease-hover-bounce-text` demo in the Hover Animations section is displayed differently from neighboring hover animation examples.

## Problem

Current markup:

```html
<div class="ease-hover-bounce-text">Bounce!</div>
```

Unlike the surrounding hover animation demos, this example is not displayed inside the standard card-style container, creating an inconsistent visual layout.

## Fix

Update the demo to use the same card-style structure as neighboring hover animation examples while preserving the bounce effect.

Example:

```html
<div class="anim-box ease-hover-bounce-text">↕</div>
```

## Affected Files

* `docs/demo.html`

## Labels

* bug
* animation
* GSSoC-26
