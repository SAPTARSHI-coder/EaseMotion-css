# Bug Fix: Sidebar CSS Conflicts

## Issue

The stylesheet contained a redundant media query block at the bottom targeting `.sidebar.active`, which conflicted with the main `.docs-sidebar` block higher up in the file. This caused dead code and animation failures when JavaScript attempted to open the mobile menu.

## Solution

1. Deleted the redundant `.sidebar` media query block entirely.
2. Centralized all mobile positioning, box-shadows, and `transform: translateX` logic into the primary `.docs-sidebar` media query.
3. Standardized the active state to strictly use the `.open` class.
