# Fix: Loader Components Reduced Motion Paused State

Resolves accessibility validation issues in `loaders.css` where loading spinners continue to spin infinitely under reduced motion profiles.

## What does this do?
- **Animation play-state suspension:** Suspends infinite rotation cycles under `prefers-reduced-motion: reduce` to prevent vestibular trigger discomfort.