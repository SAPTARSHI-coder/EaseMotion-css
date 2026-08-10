# Z-Index &amp; Stacking Context

## Overview

Demonstrates how `z-index` controls the stacking order of positioned elements and how stacking contexts are created. Covers basic z-index values, the `auto` behavior, and how properties like `opacity` (less than 1) and `transform` create new stacking contexts that scope child z-index values.

## Key Concepts

- **Z-index values**: Higher values appear on top; `auto` (default) means no stacking context is created and the element stacks in DOM order.
- **Stacking context**: A group of elements that are stacked together. A new context is created by `position` (non-static) with a z-index, `opacity` less than 1, `transform`, `filter`, and several other properties.
- **Context scope**: Children within a stacking context are layered only inside that context — they cannot interleave with elements from other contexts, regardless of z-index.
- **Opacity &lt; 1**: Any element with `opacity` less than 1 becomes a stacking context root, trapping its children's z-indices.

## Usage

Open `demo.html` to see four overlapping squares demonstrating z-index ordering. The opacity section shows how two seemingly identical children with `z-index: 99` behave differently when one parent has reduced opacity. The transform section illustrates the same scoping behavior with `transform`.
