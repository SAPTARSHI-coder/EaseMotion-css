# Saiga

A pure CSS/HTML saiga antelope on the Central Asian steppe, with the extraordinary nose that defines it.

## What it shows

The saiga looks like an antelope that has been fitted with the wrong nose, and the nose is the whole story.

It is a soft, inflatable, downward-pointing **proboscis**, oversized out of all proportion to the head, with the nostrils opening downward rather than forward. It is a piece of environmental engineering for one of the harshest ranges any large mammal occupies, and it does two opposite jobs across the year:

- **In summer**, the herds raise enormous dust clouds crossing the dry steppe. The nose is a **filter**: the convoluted internal passages trap airborne dust before it reaches the lungs.
- **In winter**, the same steppe drops to **−40°C**. Now the nose is a **heat exchanger**: it warms and humidifies each freezing breath before it hits the lungs, and reclaims heat and moisture on the way back out.

The saiga is also a survivor and a warning. It lived alongside mammoths, and in 2015 a bacterial outbreak killed roughly **200,000 of them, more than half the world population, in a few weeks**. It has recovered since, which is rare enough to be worth noting.

## How it is built

- **The nose is genuinely oversized, and it is checked.** The browser check measures the proboscis against the skull: **35px tall against a 34px skull, a ratio of 1.03**. The nose is as tall as the entire rest of the head. On any normal antelope this would be absurd, which is exactly the point, so the drawing had to commit to it rather than hint at it.
- **It points down, verified.** The check confirms the nose's bounding box extends **below the eye line**. A forward-pointing muzzle would be the wrong animal; the saiga's nostrils open downward.
- **The filter is shown working**: dust motes drift in on the wind and **vanish at the nostrils**, on a loop, because trapping dust before the lungs is the nose's summer job.
- **The nostrils flare on the intake**: a `scaleX` keyframe on each nostril, offset slightly so they are not in lockstep.
- **Ringed amber horns**: the male's translucent, ridged horns via a `repeating-linear-gradient` over an amber base.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and hides the drifting dust, leaving the animal standing.

## Files

- `demo.html` - markup
- `style.css` - the whole component
