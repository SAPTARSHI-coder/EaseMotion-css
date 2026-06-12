# Fix: Modal Z-Index Token

## Problem
Hardcoded z-index 1000 clashes with navbars and sticky elements.

## Fix
Replaced with `var(--ease-z-modal, 1000)` and added z-index scale tokens for navbar, modal, and tooltip layers.