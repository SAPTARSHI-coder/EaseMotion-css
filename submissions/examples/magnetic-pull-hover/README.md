# ⚡ Animation: Magnetic Pull Hover (Proximity Proportional Aura)

### What does this do?
This enhancement sets up a dynamic proximity-aware tracking matrix around an interactive element. By tracking the cursor's location within a defined range (radial threshold), it automatically computes absolute distance offsets and scales an inverse exponential gravity vector using local `--ease-mx` and `--ease-my` tokens. This causes the element to smoothly lean and pull toward the cursor when it is nearby, before physical hover contact is made.

### How is it used?
Wrap your target element inside a sizing anchor shell to protect the document's flow container from structural layout shifts, and pass your preferred pull coefficient:

```html
<div class="magnetic-wrapper">
  <div class="magnetic-target" style="--ease-magnetic-strength: 0.45;">
    <span class="target-content">Proximity Target</span>
  </div>
</div>