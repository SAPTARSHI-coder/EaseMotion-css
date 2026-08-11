# Upload Bounce

1. What does this do? An upload status indicator featuring an upward arrow that bounces continuously with a `translateY` animation, emphasizing upward direction. A progress bar wiggles beneath to show active upload progress. Includes a "complete" variant.

2. How is it used? Add an `.upload-card` with `.arrow-up` (CSS triangle via borders), `.upload-tray`, and `.upload-bar` elements. The arrow bounce is driven by `@keyframes arrow-bounce`. The progress bar width oscillates via `@keyframes progress-wiggle`.

3. Why is it useful? Upload status is a common UI pattern in file uploads, media sharing, and data export flows. The bouncing arrow gives clear directional feedback while the progress bar shows the upload state.
