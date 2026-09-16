# 3D Biometric DNA Double Helix Loader Animation

A 3D double helix loader animation component built with pure CSS keyframe offsets, sine-wave node scaling, and z-index depth modulation.

## 1. What does this do?
This component renders an interactive 3D biometric DNA double helix whose nucleotide nodes and base-pair connectors orbit symmetrically with calculated negative animation delays (`animation-delay: calc(var(--i) * -0.24s)`), creating a seamless 3D rotational double helix structure.

## 2. How is it used?
Link `style.css` in your HTML document and structure your helix markup using `.helix-wrapper`, `.strand`, and indexed `.node` spans:

```html
<div class="helix-wrapper">
  <div class="strand strand-left">
    <span class="node" style="--i: 0;"></span>
    <span class="node" style="--i: 1;"></span>
  </div>
  <div class="helix-connectors">
    <span class="base-pair" style="--i: 0;"></span>
  </div>
  <div class="strand strand-right">
    <span class="node" style="--i: 0;"></span>
    <span class="node" style="--i: 1;"></span>
  </div>
</div>
```

## 3. Why is it useful?
- **Mathematical CSS Animation**: Leverages CSS custom property calculations for automated phase-shifting across strand nodes.
- **Biotech & HealthTech UI**: Ideal for bioinformatics dashboards, medical research platforms, biotech landing pages, and AI genomic portals.
- **Pure CSS 3D Depth**: Simulates authentic 3D spatial depth using `scale()` and `opacity` modulation without requiring heavy 3D WebGL libraries.
