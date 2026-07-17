# Vestibular Disorder-Safe Animation Guide

A documentation-style page explaining vestibular disorders, which CSS animation patterns pose risks (large parallax, spinning, zooming), and how `prefers-reduced-motion` provides safe alternatives per WCAG guidelines.

## What this covers
- Overview of vestibular disorders and their prevalence
- High-risk animation patterns with visual examples
- Safe `prefers-reduced-motion` fallbacks with code samples
- WCAG 2.3.3 citations and accessibility research references

## How it works
Each risky animation is shown alongside a reduced-motion safe alternative. The demo includes the `@media (prefers-reduced-motion: reduce)` queries that disable or replace high-risk animations. The user's own OS setting controls which version they see.
