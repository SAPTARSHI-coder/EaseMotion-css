Neumorphic Toggle Switches

Soft, extruded toggle switches built entirely from paired box-shadow highlights and shadows — the "soft UI" look. State (on/off, hover, focus, disabled) is driven entirely by CSS on a hidden checkbox. No JavaScript.

demo.html shows the switch in a real settings-panel context (label + description + toggle, the way it'd actually ship), plus a grid of size and accent-color variants.

Files
File	Purpose
demo.html	Settings panel demo + size/color variant grid
style.css	All styling, tokens, and the neumorphic shadow system
README.md	This file
Why a light theme

Neumorphism only reads correctly when the shadow color and the surface color are close in value — the illusion depends on subtle light/dark shadow pairs against a mid-tone background. On a near-black surface (like EaseMotion's usual dark showcase palette) that contrast disappears, so this component uses its own light palette (--nm-bg, --nm-surface, --nm-shadow-dark, --nm-shadow-light). Everything else — the checkbox hack, the accent system, the size tokens — still follows the same conventions as the rest of the library.

Markup
html
<label class="nm-toggle">
  <input type="checkbox" class="nm-toggle-input">
  <span class="nm-toggle-track">
    <span class="nm-toggle-thumb"></span>
  </span>
</label>

The <input> is the real, focusable control — hidden visually with a clip-based technique (not display: none), so it stays reachable and toggleable from the keyboard. <label> wraps everything, so clicking anywhere on the switch toggles it without any for/id pairing required.

How the shadow illusion works

Off (track): an inset dark shadow toward the light source and an inset light shadow away from it — reads as a groove pressed into the surface.

css
.nm-toggle-track {
  box-shadow:
    inset 4px 4px 8px var(--nm-shadow-dark),
    inset -4px -4px 8px var(--nm-shadow-light);
}

Off (thumb): the same pairing without inset — reads as a disc sitting proud of the surface, the physical opposite of the track it's in.

On: the track flattens into a tinted, slightly recessed groove instead (so it still reads as a channel, now "active"), the thumb slides across via transform: translateX(), turns white, and picks up an accent-colored glow ring so the on-state is unambiguous even for someone who can't distinguish the track's color shift.

css
.nm-toggle-input:checked ~ .nm-toggle-track .nm-toggle-thumb {
  transform: translateX(calc(var(--nm-toggle-w) - var(--nm-toggle-h)));
  box-shadow: 2px 2px 5px rgba(0,0,0,0.25), 0 0 0 6px rgba(108,92,231,0.16);
}

Pressing the switch (:active) briefly widens the thumb by 4px, a small squash cue that makes the interaction feel physical.

CSS custom properties
Property	Default	Controls
--nm-toggle-w / --nm-toggle-h	58px / 32px	Track dimensions
--nm-thumb-size	24px	Thumb diameter
--nm-duration	260ms	Transition length for the slide/shadow change
--nm-ease	cubic-bezier(0.2, 0.8, 0.2, 1)	Easing curve
--nm-accent / --nm-accent-strong	purple pair	On-state color
--nm-shadow-dark / --nm-shadow-light	—	The two shadow colors the whole effect is built from
Variants
Size — add .nm-toggle-sm or .nm-toggle-lg alongside .nm-toggle; each just overrides the three geometry tokens, so the shadow math and slide distance recalculate automatically.
Accent color — add .nm-toggle-accent-warn for the amber on-state shown in the "Location access" row; duplicate that block with a new class and new --nm-warn-style variables to add further accents.
Disabled — add the disabled attribute to the <input>. The track drops to 55% opacity and the cursor switches to not-allowed on both the track and (via :has(), with no functional loss if unsupported) the label itself.
Accessibility
The checkbox is real and stays in the tab order — reachable with <kbd>Tab</kbd>, toggled with <kbd>Space</kbd>, exactly like a native <input type="checkbox">, because it is one.
.nm-toggle-input:focus-visible ~ .nm-toggle-track draws a visible outline on the track when the hidden input has keyboard focus, so focus is never invisible just because the control itself is.
Every toggle in the settings panel is paired with a real <label for="..."> carrying its name, plus a <p> description — the accessible name is never carried by color or position alone.
The on-state is signaled by position, color, and a glow ring — not color change alone — so it still reads for color-vision-deficient users.
Respects prefers-reduced-motion: reduce by collapsing all transitions to 1ms.
Responsive behavior

The variant grid drops from three columns to two at 560px, and the settings panel's inner padding tightens slightly so labels don't crowd the toggle on narrow viewports.

Browser support

Uses CSS custom properties, box-shadow, and standard transitions — supported everywhere current. The one modern-only touch is :has() on the disabled-cursor rule, which is purely cosmetic and has no effect on function if unsupported.