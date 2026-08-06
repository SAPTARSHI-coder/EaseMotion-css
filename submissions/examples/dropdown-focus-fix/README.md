# Fix: ease-dropdown focus ring clipping

Fixes #59759

## Problem
Focus ring was getting clipped when `.ease-dropdown` was inside a container with `overflow: hidden` or `overflow: auto`.

## Solution
Replaced outline with an inset `box-shadow`, which stays within the element's bounding box and respects `border-radius`, so it never gets clipped by parent overflow.

## How to test
Open `demo.html`, press Tab to focus the button inside the overflow-hidden wrapper, and confirm the ring is fully visible.