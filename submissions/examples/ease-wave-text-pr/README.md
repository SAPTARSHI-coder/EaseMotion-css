# Animation: ease-wave-text

### What does this do?
Animates text string fragments letter-by-letter in a cascading sinusoidal wave loop using automated sequential animation delays.

### How is it used?
Wrap text characters inside `span` components containing an sequential inline style configuration property (`--ease-wave-index`), and apply `.ease-wave-text` to the outer container.

### Why is it useful?
It creates high-end kinetic typography entirely inside native browser painting layers using zero-dependency mathematical delays (`calc()`), keeping bundles ultra-lightweight.