# Bug 4 Fix: Inline Code Snippet Wrapping

## Overview
Prevents inline code blocks containing hyphens from breaking across multiple lines.

## Changes
1. Targeted the `.inline-code` blocks inside description text.
2. Applied `white-space: nowrap` so the browser treats the snippet as a single unbreakable word.
3. Added `word-break: keep-all` as a fallback for strict environments.
4. This ensures the background color renders as a single contiguous pill shape.    