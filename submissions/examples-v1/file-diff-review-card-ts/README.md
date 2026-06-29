# File Diff Review Card with Add and Remove Line Motion

## What does this do?

This example presents a compact code diff card with animated added and removed lines.

## How is it used?

Wrap diff lines in state classes:

```html
<pre class="diff-lines"><code>
<span class="diff-remove">- color: #777;</span>
<span class="diff-add">+ color: var(--ease-color-muted);</span>
</code></pre>
```

## Why is it useful?

Code review, changelog, and developer-tool interfaces often need to show small diffs without loading a full editor. This pattern keeps the diff readable while adding subtle motion to changed lines.

## Features

- Added and removed line states
- Review status pill
- File metadata row
- Horizontal overflow for small screens
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11121
- All files are scoped to this submission folder
- No framework source files are modified
