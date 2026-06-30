# Button Loading Layout Component

A clean, accessible CSS loading button implementation that swaps label copy for a highly visible animated status indicator seamlessly.

## Issue Resolved

In standard CSS micro-interactions, adding a loading state pseudo-element directly to a `<button>` tag causes structural overlap where the initial text string remains readable behind the active loader.

This implementation decouples the button's layout tracking by nesting the string contents inside an explicit `.ease-btn-text` class block. When the parent component invokes `.ease-btn-loading`, the base string scales down structural alpha visibility constraints to ensure ideal color contrast requirements for assistive software.

## Key Technical Details

- **Zero Layout Drifting:** Utilizes modern CSS native `translate: -50% -50%` rules to fix center alignment on the absolute origin coordinate axis without conflicting with the rotation sequence.
- **Property Isolation:** The `@keyframes ease-kf-btn-spin` tracking timeline targets the standalone CSS `rotate` variable context to avoid jittering across hardware graphics pipelines.
