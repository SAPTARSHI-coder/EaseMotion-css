# Motion Time Machine

Relates to feature request **#41587**.

## 1. What does this do?

Introduces a Motion Time Machine that acts as version control for animation development. The tool records every change made to an animation's parameters (classes, duration, easing). Developers can scrub through previous versions, compare changes, restore an earlier motion state with one click, and export the entire version history as JSON or text.

## 2. Why is this useful for EaseMotion CSS?

Animations are often tweaked dozens of times before they feel right. Once a change is made, it's difficult to remember what the previous version looked like. A Motion Time Machine provides version history specifically for motion design, making experimentation safe while encouraging iteration without losing previous work.

## 3. How it Works

1. **State Tracking**: The editor captures the current state of an animation (EaseMotion classes, duration in ms, and easing function).
2. **Commit Revisions**: Pressing "Save Revision" pushes the current state to a history array and auto-generates a commit message describing what changed (e.g., "Duration: 350ms" or "Added ease-scale").
3. **Timeline Scrubbing**: A visual timeline displays all past revisions. Clicking "Restore" on a past revision reverts the editor inputs and the live animation target back to that exact state.
4. **Export Engine**: Generates a human-readable text dump or JSON representation of the entire animation journey.

## 4. Example Output (matches the issue's snippet exactly)

**HTML Snippet**
```html
<div class="ease-card ease-fade-up">
  Motion History Demo
</div>
```

**Exported CSS / History Snippet**
```css
/* Example History */

Revision #1
Duration: 250ms

Revision #2
Duration: 350ms

Revision #3
Added ease-scale

Revision #4
Changed easing ease-in-out
```

## 5. Features Included

- **Animation Editor**: Live inputs for classes, duration, and easing.
- **Auto-Diffing**: Automatically generates readable commit messages by comparing the current state to the previous state.
- **Interactive Timeline**: A vertical Git-like timeline showing past, current, and future (undone) states.
- **Simulation Mode**: A "Simulate Edits" button that programmatically executes a sequence of tweaks to quickly demonstrate the timeline filling up (matching the issue's example history exactly).
- **History Export**: Generates the exact text snippet requested in the feature issue.
