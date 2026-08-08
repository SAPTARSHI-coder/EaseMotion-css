# Bombardier Beetle

A pure CSS/HTML bombardier beetle turning its rear turret on a frog and firing boiling quinones at it.

## What it shows

The beetle carries a working chemical weapon, and the interesting parts are the engineering, not the chemistry.

**It stores the reagents apart.** Hydroquinones in one sac, hydrogen peroxide in another. Both are stable and the beetle is in no danger from either.

**The reaction happens in a chamber, on demand.** Squeeze the reagents into a thick-walled vestibule lined with catalase and peroxidase, and the peroxide decomposes explosively. The mixture reaches **100°C** and blows itself out of the beetle.

**The spray is pulsed, not sprayed.** This is the part people get wrong. High-speed film shows a train of **roughly 500 discrete explosions per second**. Each blast raises the chamber pressure enough to slam its own inlet valve shut, the chamber empties, the pressure drops, the valve reopens, and it fires again. It is a pulse jet, and the pulsing is what keeps the beetle from cooking itself: each explosion is over before the heat can conduct back.

**And it aims.** The turret swivels, and the beetle can put the jet almost anywhere, including forward over its own back.

## How it is built

- **500 Hz is the real number, and it is measured.** The 18 pulses fire on `animation-delay: calc(var(--i) * 0.002s)`. The browser check reads the resolved delays and reports a step of **0.002s, exactly 500 Hz**, with the whole train lasting **34ms**. A first pass ran at 250 Hz while the caption claimed five hundred a second, so the timing was corrected rather than the caption softened.
- **Discrete, not continuous.** The jet is 18 separate elements that each pop and fade. There is no gradient stream anywhere in it, because a stream would be the wrong picture of the animal.
- **The chemistry is staged in order**: the reservoir visibly empties at 38-44%, the chamber flashes at 46%, and the pulses leave from 46%. Cause before effect.
- **The turret aims** on its own keyframe, swinging round before the blast rather than firing wherever it happened to be pointing.
- **The frog commits and regrets it**: the tongue extends, the blast lands, and it recoils backwards.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the turret aimed with the pulse train laid out, so the mechanism still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
