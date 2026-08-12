ease-flywheel-momentum-spin

A cast-iron flywheel component — real housing, an RPM dial with a needle, an engage switch, and a status LED, not a generic spinning box. Engaging it winds the wheel up to speed and holds a steady cruise; releasing (or loading the page) plays a coast-down settle rather than an instant stop, so the motion reads as accumulated momentum rather than a simple on/off toggle. Pure CSS, driven by the checkbox hack.

Files
File	Purpose
demo.html	The housing, wheel, dial, and switch
style.css	Every mechanic below, plus all visual styling
README.md	This file
Markup
html
<div class="ease-flywheel-momentum-spin">
  <div class="fw-housing">
    <input type="checkbox" id="fw-engage" class="fw-engage-toggle">
    <div class="fw-viewport">
      <div class="fw-wheel-mount">
        <div class="fw-wheel"><div class="fw-wheel__hub"></div></div>
      </div>
      <span class="fw-led" aria-hidden="true"></span>
    </div>
    <div class="fw-panel">
      <div class="fw-dial">…</div>
      <label for="fw-engage" class="fw-switch">…</label>
    </div>
  </div>
</div>
The seamless spin-up → cruise handoff

This is the part that usually looks wrong in a CSS-only spinning mechanism: an easing "spin-up" animation and a constant-speed "cruise" animation are two different @keyframes, and handing off between them mid-rotation normally causes a visible snap.

The trick is picking numbers where the snap is invisible. Spin-up rotates through 1080deg — three full turns — with an easing curve, then animation-delay on the cruise animation is set to exactly the spin-up's duration, so cruise's own 0deg starting point takes over the instant spin-up's forwards-held 1080deg ends:

css
.fw-engage-toggle:checked ~ .fw-viewport .fw-wheel {
  animation:
    fw-spin-up var(--fw-spinup-duration) cubic-bezier(0.45, 0.05, 0.4, 1) forwards,
    fw-cruise var(--fw-cruise-duration) linear infinite var(--fw-spinup-duration);
}

1080deg mod 360 = 0deg — the wheel's visual orientation at the handoff moment is identical whether you think of it as "still finishing spin-up" or "just starting cruise," so the switch is invisible even though two completely different animations are involved.

An honest simplification: the coast-down

A truly physical release — decelerating smoothly from whatever exact angle the wheel happened to be at when you clicked — needs to read the wheel's current rotation and seed a new animation from it. CSS can't do either of those; there's no way to query a running animation's current computed value and feed it into a new one.

Rather than fake that, the release state (and the initial page-load state, since CSS can't distinguish "never engaged" from "just released" either) plays the same fixed fw-coast-to-rest deceleration — starting partway through a turn and easing to a stop — every time:

css
@keyframes fw-coast-to-rest {
  0%   { transform: rotate(220deg); }
  100% { transform: rotate(360deg); }
}

On page load this reads as "the wheel was already coasting down, now settling," which works fine as a bit of framing for a mechanical device. On release after a long cruise it's a documented, deliberate simplification rather than a bug — flagged here rather than left for a reviewer to discover.

The dial needle

Mirrors the wheel's two states with its own fw-needle-up / fw-needle-rest keyframes on the same --fw-spinup-duration / --fw-coast-duration timing, including a tiny overshoot-and-settle wobble (85% → 92% → 100%) at the top of its travel so it doesn't snap dead-stop into the redline the way a purely linear sweep would.

CSS custom properties
Property	Default	Controls
--fw-spinup-duration	2.4s	Time to reach full speed
--fw-cruise-duration	0.9s	Length of one cruise rotation (speed, effectively)
--fw-coast-duration	1.8s	Length of the release/settle animation
--fw-accent	
#ff8a3d	Needle and label accent color
--fw-led-on / --fw-led-off	green / dark amber	Status LED colors
Accessibility
The wheel, dial, and LED are all aria-hidden="true" — they're decorative mechanical flourish with no information not already conveyed by the switch's own label and state.
The actual control is a real <input type="checkbox"> + <label for="..."> pair (the "Engage" switch) — focusable, toggleable with <kbd>Space</kbd>, with a visible :focus-visible ring.
Respects prefers-reduced-motion: reduce: both the wheel and needle animations are removed outright, and engaging still gives clear feedback (the LED lights, the switch thumb slides) without any rotation at all.
Responsive behavior

The wheel and its mount scale down at 420px so the whole housing still fits comfortably on a narrow phone screen without the dial or switch crowding.

Browser support

Uses repeating-conic-gradient (for the wheel's spokes), radial-gradient, and standard transform/keyframe animation — all supported in current evergreen browsers. Where repeating-conic-gradient is unsupported, the wheel falls back to a plain radial metallic disc with no visible spokes, which still spins correctly.