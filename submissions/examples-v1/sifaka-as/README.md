# Sifaka

A pure CSS/HTML Verreaux's sifaka crossing open ground the only way it can: upright, feet together, bounding sideways.

## What it shows

A sifaka is a lemur built entirely for the vertical. Its legs are far longer than its arms, and its whole body is engineered to cling to a trunk and then launch to the next one, sometimes ten metres away, steering in mid-air and landing feet-first.

That specialisation has a cost. On the ground it **cannot walk on all fours** the way most primates do, because its arms are simply too short to reach. So when it has to cross a gap between trees, it does the thing it has become famous for: it stands **fully upright**, holds its **feet together**, throws its **arms out for balance**, and **bounds sideways** in a series of two-footed hops. Tourists call it the "dancing sifaka", and it is one of the strangest gaits in the animal kingdom, a direct consequence of a body that was never meant to touch the floor.

The name is onomatopoeic. It comes from the *shif-auk* alarm call the animal makes.

## How it is built

- **The gait is verified against all three of its defining features.** The browser check measures the bound off its paused timeline and confirms:
  - **Sideways**: 120px of horizontal travel across the ground.
  - **A real airborne phase**: the body rises 54px off the ground at mid-hop, so it genuinely leaps rather than shuffling.
  - **Feet together**: the two feet stay 14px apart, a single launch unit rather than a stride.
- **Legs longer than arms, checked.** The measured leg is 41px against a 29px arm. That ratio is *why* the animal cannot walk, so it is built in and confirmed rather than implied.
- **Upright and leaning.** The body holds vertical and leans into the direction of travel on each bound, righting itself on landing, which is the posture that makes it look like dancing.
- **The launch is a spring**: the legs coil with `scaleY(0.7)` and extend to `scaleY(1.1)` at the push-off, and the dust kicks up on the landing frame.
- **Field marks of Verreaux's sifaka**: white body, a bare **black face** under a **white fur cap**, and the long thickly-furred tail. Spiny "octopus trees" of the Madagascar spiny forest stand behind.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and hides the dust, leaving the sifaka standing upright.

## Files

- `demo.html` - markup
- `style.css` - the whole component
