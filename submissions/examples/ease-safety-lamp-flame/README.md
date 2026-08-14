# Safety Lamp Flame Component (`ease-safety-lamp-flame`)

## Abstract

The `ease-safety-lamp-flame` component delivers a realistic, pure CSS animation simulating a classic miner's safety lamp flame responding to atmospheric gas changes. Built with responsive layered visual elements and hardware-accelerated CSS animations, it visually communicates status changes through dynamic flame morphing and color shifting.

## The Davy Lamp Metaphor

Historically, the Davy safety lamp was used in coal mines to detect flammable gases like methane (known as "firedamp"). In normal air, the lamp emits a standard yellow flame. When methane enters the chamber, a characteristic blue halo or "cap" forms above the flame, growing larger as gas concentration rises.

This component recreates that historical physical system into a modern CSS visual indicator using structural mapping:
- `__a` (Base Wick Glow): Represents the underlying wick foundation with an amber base illumination (`#b45309`).
- `__b` (Primary Yellow Flame): The vibrant body of the flame glowing yellow (`#fbbf24`), flickering continuously via rapid keyframe skew and scale transformations.
- `__c` (Inner White Core): The incandescent core (`#fffbeb`) vibrating slightly out of phase with the primary flame to generate depth and heat dynamics.
- `__d` (The Firedamp Blue Cap): The atmospheric indicator cap. It transitions from invisible (`opacity: 0`) to a translucent sky-blue halo (`rgba(56, 189, 248, 0.8)`), driven by the `ease-firedamp-detect` keyframe animation to simulate methane detection.

## CSS Compositing & Blend Modes

To achieve a convincing luminescent fire effect without bitmap assets, the component relies heavily on modern CSS compositing techniques:
- **`mix-blend-mode: screen`**: Applied across all flame span elements (`__a`, `__b`, `__c`, `__d`), allowing overlapping layers to additively blend light intensities, mirroring actual organic flame luminosity.
- **Layered `box-shadow`**: Configured with wide blur radii and inset halos on `__d` to form a soft, floating gaseous aura that expands seamlessly over the flame body.
- **Dynamic Keyframe Animation**: `@keyframes ease-flicker` simulates flame turbulence using light `scale` and `skew` adjustments, while `@keyframes ease-firedamp-detect` elongates the blue cap halo gradually using `scaleY(1.2)` to model real gas expansion inside the lamp bezel.
