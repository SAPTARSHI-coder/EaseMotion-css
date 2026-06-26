# List Group Component

## What does this do?
Adds a list group component to EaseMotion CSS — displays lists of items with optional badges, icons, active states, and disabled states. Includes variants for flush (borderless), numbered (with CSS counters), and actionable list groups with staggered entrance animations.

## How is it used?
Open `demo.html` directly in a browser. The page demonstrates all list group variants with interactive hover effects and entrance animations powered by EaseMotion CSS utility classes.

## Why is it useful?
List groups are essential for categorization menus, settings pages, directory listings, and feature lists. This component provides a consistent, accessible, and animated list group pattern that integrates with existing EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`, etc.).

## Proposed Classes
| Class | Purpose |
|-------|---------|
| `.ease-list-group` | Container for the list group |
| `.ease-list-group-item` | Individual list item |
| `.ease-list-group-active` | Active/selected state with primary accent |
| `.ease-list-group-disabled` | Disabled state with muted styling |
| `.ease-list-group-flush` | Borderless variant (no outer border) |
| `.ease-list-group-numbered` | Auto-numbered items via CSS counters |
| `.ease-list-group-icon` | Icon slot within list items |

## Sections
| Section | Content |
|---------|---------|
| **Basic List Group** | Simple bordered list items with icons |
| **Active & Disabled States** | Interactive states demonstration |
| **Flush List Group** | Borderless variant sits flush with parent |
| **Numbered List Group** | Auto-numbered circles using `counter-reset` |
| **With Badges** | Items with notification count badges |
| **Actionable List Group** | Hover-highlighted clickable items |

Fixes #22853
