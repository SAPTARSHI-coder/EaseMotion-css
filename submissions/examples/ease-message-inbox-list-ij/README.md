# Message Inbox List — Swipe to Archive

**Component:** message-inbox-list  
**Issue:** [#36814](https://github.com/EaseMotion-css/EaseMotion-css/issues/36814)

A dark-themed message inbox list where each item reveals an archive action on swipe (or click). Built with a card layout for clean visual separation.

## CSS Variables

| Variable          | Default   | Description                 |
|-------------------|-----------|-----------------------------|
| `--inbox-bg`      | `#1a1a2e` | Card background             |
| `--message-bg`    | `#16213e` | Individual message row bg   |
| `--swipe-color`   | `#e94560` | Accent / archive color      |
| `--swipe-duration`| `0.35s`   | Animation speed             |

## Behaviour

- **Swipe left** on a message row to archive it (the row slides out).
- **Click the 📦 button** as an alternative archive action.
- Archived items animate out and become non-interactive.
- Tab-indexed rows are keyboard-accessible.
