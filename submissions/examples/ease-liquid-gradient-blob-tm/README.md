# Liquid Gradient Blob

Closes #75009

Two overlapping conic-gradient blobs that morph their border-radius and rotate, creating a liquid metaball effect.

## Technique

Four `border-radius` keyframes at 25/50/75/100% with varying corner weights create the morph. Two conic gradients on different rotation speeds combined with `mix-blend-mode: screen` create the color blending.
