# Energy Charge

1. What does this do? The element builds up glowing energy with progressively intensifying box-shadow (blue → purple → gold) over 2 seconds, synchronized with a meter that fills from 0-100%. The bolt icon pulses faster as charge builds, and the glow shifts color as it reaches maximum power.

2. How is it used? Click "Charge" to start `@keyframes charge-glow` (progressing shadow intensity with 4 stages), `@keyframes meter-fill` (width 0%→100%), and a JS interval that updates a percentage display in sync with the animation. Upon reaching 100%, the card transitions to a "full" state with golden glow.

3. Why is it useful? Charging/buildup animations are essential for game UIs (charge attacks, spell casting, power meters) and any interface requiring anticipation before a release moment. The progressive glow + meter combo gives clear feedback on charge level and creates satisfying anticipation.
