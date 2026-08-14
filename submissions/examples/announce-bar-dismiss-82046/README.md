# Announce Bar Dismiss Local Storage Flag

A responsive announcement-bar testing example created for issue #82046.

## Overview

This example demonstrates how an announcement bar can persist its
dismissed state using browser `localStorage`.

The audit verifies that:

- The announcement is visible when no dismissal flag exists.
- Dismissing the announcement stores the expected flag.
- A stored dismissal flag hides the announcement.
- The stored state survives re-initialization.
- Only the expected `"true"` value counts as dismissed.
- Invalid storage values do not hide the announcement.
- Empty storage values do not count as dismissed.
- Clearing the flag restores the announcement.

## Storage Key

The example uses:

```text
announce-bar-dismissed