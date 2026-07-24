# Colugo

A pure CSS/HTML colugo gliding between two trees on the largest gliding membrane of any mammal.

## What it shows

The colugo, or "flying lemur", neither flies nor is a lemur. But it is the most committed glider among mammals, and the reason is the completeness of its wing.

Most gliding mammals stretch a membrane between the front and back legs and leave it at that. The colugo's **patagium encloses almost the entire animal**. It runs from the side of the neck out along the arms to the **very tips of the fingers**, continues down the flanks to the toes, and then keeps going to wrap **all the way to the tip of the tail**. Even the spaces between the fingers and toes are webbed. No other mammal encloses the tail in its gliding membrane.

The payoff is a very shallow glide. A colugo can cross **over 100 metres between trees and lose only a handful of metres of height**, which for an animal that cannot climb well (its feet are built for gliding, not gripping) is the difference between reaching the next tree and not.

It carries its single young in the membrane too, folded into a pouch, gliding with the baby aboard.

## How it is built

- **The tail is inside the wing, and it is checked.** The membrane is a single `clip-path` polygon whose lower vertices reach past the tail. The browser check confirms the tail element's bounding box sits **entirely within the patagium's**. That enclosure is the colugo's one unique anatomical trait, so it is the thing worth verifying rather than the general wing shape.
- **The glide is shallow, and it is measured.** The `soarK` keyframe carries the animal across the gap. Sampling its paused timeline start to end: **192px of horizontal travel against 114px of drop**, a 1.68:1 ratio, and it genuinely loses height rather than floating level. A steep drop would be the wrong animal; a huge membrane buys a shallow descent.
- **The limbs are the wing's corners**: four spread limbs whose tips land at the outer vertices of the membrane polygon, because in the colugo the fingertips and toe-tips *are* the edge of the wing.
- **Struts under the skin**: a `repeating-conic-gradient` fanning from the neck gives the taut-membrane-over-spread-limbs look.
- **Big forward eyes**, because the colugo is nocturnal and glides by binocular vision in the dark.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the glide and the star twinkle, leaving the animal spread mid-air.

## Files

- `demo.html` - markup
- `style.css` - the whole component
