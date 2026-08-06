# Shallow Equality Helper for Map and Set Objects

This submission addresses issue **#12943**, where the internal shallow equality helper fails to correctly compare `Map` and `Set` objects, leading to false positives (infinite render loops or missed updates).

## Problem

The original shallow equality check only handled arrays and plain objects. When state properties included `Map` or `Set` objects:
- It either returned `false` (triggering infinite re-renders because `Map === Map` is compared by reference, even if their contents are identical).
- Or failed to detect differences when mutated, resulting in missed UI updates.

## Solution

We introduce an updated `shallowEqual` helper that explicitly checks for `Map` and `Set` types:
- **Set comparison**: Verifies equal size and that every element in Set A exists in Set B.
- **Map comparison**: Verifies equal size and that every key-value pair in Map A matches Map B using `Object.is`.
- **Fallback**: Standard shallow comparison of object properties and array elements.
