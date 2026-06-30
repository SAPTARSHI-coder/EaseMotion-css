1. What does this do? Creates a fixed header that shrinks from a tall to compact state on scroll, with an optional reading progress bar beneath it.
2. How is it used? Use `.sticky-header` with `.sticky-header-logo` and `.sticky-header-nav`. The JS toggles `.sticky-header--compact` based on scroll position.
3. Why is it useful? A shrink-on-scroll header saves vertical space while keeping navigation accessible, and the progress bar gives users a sense of reading progress — all with smooth CSS transitions and RAF-throttled scroll handling.
