# View Transitions Keyframe Prefix Fix — Issue #40209

## What does it do?

Renames the keyframes in `components/view-transitions.css` from generic `view-*` names to the framework convention `ease-kf-*`, preventing naming collisions in consumer projects.

## How is it used?

Replace the contents of `components/view-transitions.css` with the updated version shown in `demo.html`. The keyframe names change from:

| Old | New |
|---|---|
| `view-fade-out` | `ease-kf-view-fade-out` |
| `view-fade-in` | `ease-kf-view-fade-in` |
| `view-scale-out` | `ease-kf-view-scale-out` |
| `view-scale-in` | `ease-kf-view-scale-in` |

Also update any `animation-name:` references throughout the codebase.

## Why is it useful?

The `ease-kf-*` prefix convention ensures framework keyframes never collide with user-defined keyframes. This is the same pattern used in `core/animations.css` and documented in the contribution guidelines.
