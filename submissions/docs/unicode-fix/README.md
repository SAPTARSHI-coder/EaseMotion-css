# Unicode Character Encoding Fix

**Fixes:** #2854

## Problem
Literal character `✦` in CSS was causing potential rendering issues ("garbage text") in misconfigured build pipelines or non-UTF-8 environments.

## Fix
Replaced the literal character with the standard Unicode escape sequence `\2726`. This ensures consistent rendering across all environments and build tools.