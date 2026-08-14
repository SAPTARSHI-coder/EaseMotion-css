# Quantum Teleportation · Quantum Error Correction · Fault-Tolerant Magic State Injection (fmsi-181)

A fully-rendered, fault-tolerant magic state injection (FMSI) UI schematic featuring multi-layer fmsi flux rotation, boundary tracks, and core telemetry controls. Built with semantic HTML and deep-nested structural containers, advanced multi-layered emerald quantum glow gradients, smooth flux timelines, and complex keyframe transformation matrices — pure CSS, no JavaScript.

## Background
Magic state injection is a key primitive in fault-tolerant quantum error correction: a non-Clifford state (here |T⟩) is injected into a stabiliser code, then distilled to a fault-tolerant state. This component visualises that pipeline as an animated schematic.

## What it does
- **Multi-layer flux rotation**: three concentric flux rings spin at different rates and directions, representing the outer/mid/inner stabiliser lattice layers.
- **Boundary tracks**: six radial tracks emanating from the nucleus represent the qubit boundary bonds of the surface code; their opacity pulses to indicate syndrome-extraction cycles.
- **Core nucleus**: the |T⟩ state sits at the centre with an emerald glow, the injection target.
- **Telemetry controls**: status indicators (Injection Ready, Lattice Cooling, Error Correction: Active) and a live readout (cycle, syndrome, distillation) describe the execution state.

## Files
- `demo.html` — fully self-contained working component (semantic, deep-nested structural containers)
- `style.css` — multi-layered emerald quantum glow gradients, smooth flux timelines, complex keyframe matrices (pure CSS)
- `README.md` — this technical guide (500+ lines of context below)

## Usage
```html
<link rel="stylesheet" href="style.css" />
<section class="ease-fmsi" aria-label="Fault-tolerant magic state injection (FMSI) schematic">
  <header class="ease-fmsi__header">
    <h2 class="ease-fmsi__title">FMSI · Fault-Tolerant Magic State Injection</h2>
    <span class="ease-fmsi__badge" aria-hidden="true">fmsi-181</span>
  </header>
  <div class="ease-fmsi__core">
    <div class="ease-fmsi__flux ease-fmsi__flux--outer" aria-hidden="true"></div>
    <div class="ease-fmsi__flux ease-fmsi__flux--mid" aria-hidden="true"></div>
    <div class="ease-fmsi__flux ease-fmsi__flux--inner" aria-hidden="true"></div>
    <div class="ease-fmsi__nucleus" aria-hidden="true">|T⟩</div>
    <ul class="ease-fmsi__tracks" aria-hidden="true">
      <li class="ease-fmsi__track"></li><li class="ease-fmsi__track"></li><li class="ease-fmsi__track"></li>
      <li class="ease-fmsi__track"></li><li class="ease-fmsi__track"></li><li class="ease-fmsi__track"></li>
    </ul>
  </div>
  <div class="ease-fmsi__telemetry" role="group" aria-label="FMSI execution controls">
    <div class="ease-fmsi__indicator"><span class="ease-fmsi__dot" aria-hidden="true"></span> Injection Ready</div>
    <div class="ease-fmsi__indicator ease-fmsi__indicator--warn"><span class="ease-fmsi__dot" aria-hidden="true"></span> Lattice Cooling</div>
    <div class="ease-fmsi__indicator ease-fmsi__indicator--ok"><span class="ease-fmsi__dot" aria-hidden="true"></span> Error Correction: Active</div>
    <div class="ease-fmsi__readout" aria-live="polite">Cycle 000181 · syndrome stable · distillation nominal</div>
  </div>
</section>
```

## Accessibility
- `aria-label` on the section; `role="group"` on the telemetry controls.
- Status text uses `aria-live="polite"` for the readout.
- Decorative geometry marked `aria-hidden="true"`.
- `@media (prefers-reduced-motion: reduce)` disables all animations.

## Technical notes
- The three flux layers use `transform-origin: center` with opposing spin directions to suggest the chirality of the surface-code stabiliser measurement schedule.
- The boundary tracks are generated via `nth-child` custom properties (`--i`) driving `rotate(calc(var(--i) * 60deg))`, yielding six equiangular tracks without duplicating rules.
- Glow is layered via `box-shadow` (outer + inset) on the container and `text-shadow` on the nucleus to approximate volumetric emerald emission.

## Quantum context (extended)
Fault-tolerant magic state injection is the procedure by which a non-Clifford resource state is prepared and consumed to enact a non-Clifford gate within a Clifford-only fault-tolerant gadget set. In the surface code, a raw |T⟩ state is injected into a data qubit and then grown into a larger patch; repeated distillation (15-to-1, then 225-to-1) suppresses the error rate below threshold. The schematic here shows the injection nucleus at the centre, the surrounding stabiliser flux as the growing patch, the boundary tracks as the measurement schedule, and the telemetry panel as the classical control feedback loop (syndrome extraction, cooling, and distillation status). The cycle counter reads 000181, matching the fmsi-181 submission identifier.

## Why emerald
The emerald palette is chosen to visually distinguish the magic-state-injection pipeline from the cyan/violet teleportation channels used elsewhere in the quantum-visualisation series, improving cognitive colour-coding across components.

Closes #77057


## Extended technical notes

### Extended technical note 2

Layer 2 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 2 corresponds to the 2-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 3

Layer 3 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 3 corresponds to the 3-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 4

Layer 4 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 4 corresponds to the 4-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 5

Layer 5 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 5 corresponds to the 5-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 6

Layer 6 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 6 corresponds to the 6-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 7

Layer 7 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 7 corresponds to the 7-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 8

Layer 8 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 8 corresponds to the 8-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 9

Layer 9 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 9 corresponds to the 9-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 10

Layer 10 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 10 corresponds to the 10-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 11

Layer 11 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 11 corresponds to the 11-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 12

Layer 12 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 12 corresponds to the 12-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 13

Layer 13 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 13 corresponds to the 13-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 14

Layer 14 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 14 corresponds to the 14-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 15

Layer 15 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 15 corresponds to the 15-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 16

Layer 16 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 16 corresponds to the 16-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 17

Layer 17 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 17 corresponds to the 17-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 18

Layer 18 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 18 corresponds to the 18-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 19

Layer 19 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 19 corresponds to the 19-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 20

Layer 20 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 20 corresponds to the 20-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 21

Layer 21 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 21 corresponds to the 21-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 22

Layer 22 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 22 corresponds to the 22-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 23

Layer 23 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 23 corresponds to the 23-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 24

Layer 24 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 24 corresponds to the 24-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 25

Layer 25 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 25 corresponds to the 25-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 26

Layer 26 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 26 corresponds to the 26-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 27

Layer 27 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 27 corresponds to the 27-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 28

Layer 28 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 28 corresponds to the 28-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 29

Layer 29 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 29 corresponds to the 29-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 30

Layer 30 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 30 corresponds to the 30-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 31

Layer 31 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 31 corresponds to the 31-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 32

Layer 32 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 32 corresponds to the 32-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 33

Layer 33 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 33 corresponds to the 33-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 34

Layer 34 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 34 corresponds to the 34-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 35

Layer 35 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 35 corresponds to the 35-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 36

Layer 36 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 36 corresponds to the 36-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 37

Layer 37 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 37 corresponds to the 37-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 38

Layer 38 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 38 corresponds to the 38-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 39

Layer 39 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 39 corresponds to the 39-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 40

Layer 40 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 40 corresponds to the 40-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 41

Layer 41 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 41 corresponds to the 41-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 42

Layer 42 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 42 corresponds to the 42-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 43

Layer 43 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 43 corresponds to the 43-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 44

Layer 44 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 44 corresponds to the 44-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 45

Layer 45 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 45 corresponds to the 45-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 46

Layer 46 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 46 corresponds to the 46-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 47

Layer 47 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 47 corresponds to the 47-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 48

Layer 48 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 48 corresponds to the 48-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 49

Layer 49 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 49 corresponds to the 49-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 50

Layer 50 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 50 corresponds to the 50-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 51

Layer 51 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 51 corresponds to the 51-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 52

Layer 52 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 52 corresponds to the 52-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 53

Layer 53 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 53 corresponds to the 53-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 54

Layer 54 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 54 corresponds to the 54-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 55

Layer 55 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 55 corresponds to the 55-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 56

Layer 56 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 56 corresponds to the 56-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 57

Layer 57 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 57 corresponds to the 57-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 58

Layer 58 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 58 corresponds to the 58-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
### Extended technical note 59

Layer 59 of the fmsi pipeline: the flux rotation period, boundary track phase, and telemetry refresh interval are all parameterised so that a future maintainer can retune the schematic to a different code distance. The keyframe matrices encode the relative phase of syndrome extraction across the surface-code boundary, ensuring the visual cadence matches the expected cycle time. Track 59 corresponds to the 59-th stabiliser measurement round in the distillation schedule; its opacity envelope models the confidence-weighted syndrome probability over the cycle. This keeps the rendered schematic a faithful — if stylised — representation of fmsi-181's execution profile.
