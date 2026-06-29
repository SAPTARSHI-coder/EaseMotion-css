# zindex-flicker-fix

Standalone fix for [Issue 9219](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/9219). Uses isolation: isolate and 	ransform: translateZ(0) to force a stable stacking context, preventing layout flickers when animating overlapping elements.
