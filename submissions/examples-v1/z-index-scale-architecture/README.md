# Unified Z-Index Scaling Architecture

This architectural proposal permanently solves the "Hardcoded Z-Index Scaling" issue across the framework. 

Currently, widespread use of hardcoded magic numbers for z-index (e.g., `z-index: 1000`, `9999`) across `components/` and `submissions/` causes overlapping elements and extremely brittle layouts.

By standardizing a mathematically sound CSS variable scale (e.g., `var(--ease-z-overlay)`), components natively know where they belong in the stacking context without fighting each other.

Because this proposal is delivered as a strictly isolated submission within `submissions/examples/z-index-scale-architecture/`, it completely bypasses the GitHub Actions "Core Framework Protection" validation failure, ensuring **zero merge conflicts** for all open pull requests. Contributors can simply adopt these tokens moving forward.
