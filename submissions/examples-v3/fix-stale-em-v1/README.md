# Demo: Fix Stale Generated Animation Classes (#40059)

### What this demonstrates
This submission provides a reproduction sandbox and a verified fix for issue #40059, where updating or removing the `em` attribute on an element leaves behind stale generated `_em_*` classes.

### Why it matters
In dynamic UIs where attributes change frequently, these classes accumulate, causing unexpected animation rendering due to CSS specificity order conflicts. 

### The Solution
Inside the reproduction script, we demonstrate how adding a targeted cleanup phase that filters and removes older `_em_*` prefixes entirely fixes the issue while preserving standard user utility classes.