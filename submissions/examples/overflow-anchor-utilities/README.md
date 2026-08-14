# Scroll Position Overflow Anchor Utilities

An isolated scroll layout utility package adding `.ease-overflow-anchor-auto` and `.ease-overflow-anchor-none` classes under issue #13840. These utilities manage layout stabilization during asynchronous content injection loops.

## Functional Mechanics

- **The Problem:** When building modern interfaces with scrolling feeds (e.g., streaming chats, comment boards, infinite timelines), dynamic elements often load asynchronously above the user's current reading viewport line. This forces the scroll bar position to snap out of place, pushing the content down and disrupting the reading experience.
- **The Solution:** Applying `.ease-overflow-anchor-auto` triggers the browser's built-in scroll positioning protection algorithm, forcing the user-agent view context to track focal points cleanly. Alternatively, `.ease-overflow-anchor-none` intentionally breaks this lock when programmatic overrides or manual viewport resizing scripts need full layout repositioning freedom.

## Usage Layout Structure
```html

<div class="scroll-feed-container ease-overflow-anchor-auto">
  
  <div class="post-item">Feed Content Block</div>
</div>
```

Closes #13840
