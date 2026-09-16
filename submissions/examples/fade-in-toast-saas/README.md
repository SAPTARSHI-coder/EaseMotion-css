Fade-In Toast

A SaaS-style toast notification: click a trigger and it fades and slides in, holds for a few seconds, then fades itself back out — no JavaScript, no timers. A close button lets you dismiss it early. Four status variants included (success, error, warning, info).

Files
File	Purpose
demo.html	Four trigger buttons + the toast viewport
style.css	The lifecycle animation, tokens, and toast styling
README.md	This file
Markup
html
<input type="checkbox" id="toast-success-toggle" class="toast-toggle">
<label for="toast-success-toggle" class="trigger-btn">Show success toast</label>

<div class="toast-viewport">
  <div class="toast toast-success">
    <span class="toast-icon">&check;</span>
    <div class="toast-body">
      <p class="toast-title">Changes saved</p>
      <p class="toast-text">Your workspace settings were updated.</p>
    </div>
    <label for="toast-success-toggle" class="toast-close">&times;</label>
  </div>
</div>

Each toast has its own hidden checkbox. Two different labels point at the same checkbox: the trigger button (turns it on) and the toast's own close control (turns it back off). The checkbox and the toast don't need to be next to each other in the markup — the toast only needs to come after its checkbox somewhere in the document, so .toast-viewport can sit anywhere convenient (the demo puts it right before </body>).

How the auto-dismissing lifecycle works

The toast starts display: none. Checking its box does two things at once:

css
#toast-success-toggle:checked ~ .toast-viewport .toast-success {
  display: flex;
  animation: tn-lifecycle
    calc(var(--tn-duration-in) + var(--tn-hold) + var(--tn-duration-out))
    var(--tn-ease) forwards;
}

Switching display from none to flex is what restarts the CSS animation — that's the mechanism, not a JavaScript timer. The single tn-lifecycle keyframe animation handles the entire visible lifespan in one pass:

css
@keyframes tn-lifecycle {
  0%   { opacity: 0; transform: translateY(16px) scale(0.96); }
  9%   { opacity: 1; transform: translateY(0) scale(1); }      /* fully faded in */
  88%  { opacity: 1; transform: translateY(0) scale(1); }      /* holds here */
  100% { opacity: 0; transform: translateY(8px) scale(0.98); } /* auto fade-out */
}

The percentages are fixed proportions of the total animation duration, which is computed from three separate tokens (calc(--tn-duration-in + --tn-hold + --tn-duration-out)) — so changing any one of them retunes the whole lifecycle without needing to hand-recalculate the keyframe percentages yourself.

Manual dismiss (clicking the &times;) simply unchecks the box, which snaps display straight back to none — instant, not animated. That's a deliberate trade-off for staying JS-free: animating a manual close differently from the automatic one would need a script to detect which kind of dismissal happened. In practice an instant manual close reads as responsive rather than abrupt.

CSS custom properties
Property	Default	Controls
--tn-duration-in	380ms	Fade/slide-in length
--tn-hold	3200ms	How long the toast stays fully visible
--tn-duration-out	420ms	Auto fade-out length
--tn-ease	cubic-bezier(0.16, 1, 0.3, 1)	Easing curve for the whole lifecycle
Status variants

.toast-success, .toast-error, .toast-warning, and .toast-info each set a left accent border and icon color from their own token (--tn-success, --tn-error, --tn-warning, --tn-info). Add a new variant by pairing a new modifier class with a new color token — no changes to the lifecycle animation needed.

Accessibility
Respects prefers-reduced-motion: reduce in a way that's more than cosmetic: the animation (and therefore the automatic timeout) is removed entirely, and the toast simply stays visible at full opacity until manually dismissed. Auto-expiring content is a real barrier for anyone who needs more time to read it (WCAG 2.2.1, Timing Adjustable), so reduced motion here also means "don't take this away from me before I'm done reading it," not just "don't animate it."
The close control is a real, focusable <label for="...">, and the trigger buttons get a visible :focus-visible outline via the sibling checkbox's focus state.
.toast-viewport carries role="region" with an aria-label, so assistive tech has a named landmark for where notifications appear.
Responsive behavior

Below 480px the viewport spans the full width (minus a small margin) instead of being a fixed 320px box pinned to the corner, and the trigger buttons stack vertically.

Browser support

Uses only display, transform, opacity, CSS custom properties, and standard keyframe animations — supported everywhere current, no fallback needed.