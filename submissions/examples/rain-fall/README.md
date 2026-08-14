# Rain Fall Effect

**What is it?**
A rainy night scene with 30 raindrops falling at varying speeds, creating a realistic downpour effect.

**How it works**
Each `.raindrop` is a thin gradient div that falls via the `rainfall` keyframe. Custom properties control height (`--h`), duration (`--d`), and delay (`--del`). The drops have slight horizontal drift for realism.

**Why this approach**
Pure CSS raindrops with gradient tails and staggered timing create an atmospheric rain effect without JavaScript or canvas.
