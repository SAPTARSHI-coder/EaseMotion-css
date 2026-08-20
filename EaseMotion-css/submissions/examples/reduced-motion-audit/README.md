# Prefers Reduced Motion Audit

### What does this do?
This submission provides explicit, targeted `@media (prefers-reduced-motion: reduce)` overrides for all motion-heavy animation and hover classes in `core/animations.css`, replacing the global `*` wildcard override.

### How is it used?
The maintainer should replace the wildcard rule (lines 634-643 in `core/animations.css`) with the contents of `style.css`.
The provided `demo.html` includes a Javascript toggle to easily emulate the media query so the maintainer can test the fallbacks instantly in the browser.

### Why is it useful?
Using `*` to force `animation-duration: 0.01ms` is an accessibility anti-pattern because it kills *all* transitions on a webpage, including harmless color/opacity transitions. This submission ensures that `EaseMotion CSS` respects the user's OS settings by stripping nausea-inducing motion (`transform`, `translate`, `scale`) while elegantly falling back to opacity fades (`ease-kf-fade-in` / `ease-kf-fade-out`) where applicable. This provides a vastly superior user experience for those with motion sensitivity.
