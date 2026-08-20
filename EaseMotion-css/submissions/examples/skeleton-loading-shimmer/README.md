# Skeleton Loading Shimmer

## What does this do?
Renders animated placeholder blocks (circle, text lines) with a moving shimmer
gradient to indicate content is loading, replacing blank space or a spinner.

## How is it used?
Add .skeleton to any block-level element plus a shape modifier
(.skeleton-circle for avatars, .skeleton-line for text) and a width
utility class if needed. Swap the skeleton markup for real content once data
arrives.

## Why is it useful?
- Zero JavaScript, zero dependencies — pure CSS animation
- Improves perceived performance on slow network/API calls
- Reusable across cards, lists, tables, and profile sections
- Matches EaseMotion's animation-first, human-readable philosophy