# Dark Mode Heading Contrast Fix

This directory houses a standalone component fix demonstrating how to safely decouple headings (`h1`-`h6`) and table headers (`th`) from hardcoded color states.

## Resolution
By explicitly mapping structural headers to fluid context tokens (`var(--ease-color-text)`), typographic hierarchies remain dynamic across dark mode layers.