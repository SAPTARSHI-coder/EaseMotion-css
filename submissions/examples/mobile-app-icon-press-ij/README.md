# Mobile App Icon Press

1. What does this do? A grid of app icons that scale down to 0.92 on press (`:active` pseudo-class). The release transition uses a spring-like cubic-bezier for a fast spring-back effect. Each icon has a unique color set via the `--icon-color` CSS variable.

2. How is it used? Add `.app-icon` buttons with an inner `.icon-bg` colored by `--icon-color`. The `:active` state triggers `scale(0.92)` with a near-instant linear transition. The normal state transitions back with `cubic-bezier(0.34, 1.56, 0.64, 1)` for the spring-back feel.

3. Why is it useful? This mimics the native iOS home screen icon press effect. It provides tactile-like feedback for touch interactions, making the UI feel more responsive and polished without any JavaScript.
