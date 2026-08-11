# Comment Reply Chain

An interactive comment thread with expand/collapse reply chains and slide-in animation for new replies.

## Features

- Nested replies indented using `--comment-indent` custom property
- "Show replies" toggle smoothly reveals hidden replies with max-height + opacity transition
- "Reply" button appends a new nested reply with a slide-in animation
- All animations driven by the `--comment-duration` custom property

## CSS Custom Properties

| Property                | Default   | Description                    |
| ----------------------- | --------- | ------------------------------ |
| `--comment-duration`    | `0.35s`   | Duration of expand/collapse    |
| `--comment-bg`          | `#f9fafb` | Comment background color       |
| `--comment-border`      | `#e5e7eb` | Comment border color           |
| `--comment-text-color`  | `#1f2937` | Text color                     |
| `--comment-indent`      | `1.5rem`  | Indent per nesting level       |
