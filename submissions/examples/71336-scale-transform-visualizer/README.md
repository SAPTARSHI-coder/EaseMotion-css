# CSS Scale Transform Visualizer

An interactive visualizer demonstrating the CSS:

```css
transform: scale();

property using a simple and beginner-friendly interface.

The component lets users compare an element's original size with multiple scale values and replay the scale animation.

✨ Features
Interactive transform: scale() demonstration
Preset values:
0.5
1
1.5
2
Fine-grained range control from 0.5 to 2
Current scale value displayed live
Replay animation button
Original-size reference box
Responsive layout
Keyboard-accessible controls
Visible keyboard focus states
Reduced-motion support
No external libraries
No animation framework
🧩 How It Works

The central visual element uses:

transform: scale(1.5);

Changing the value updates the rendered size of the element while its transform origin remains centered.

JavaScript is only used for:

Reading the selected scale value
Updating the UI
Synchronizing the controls
Restarting the CSS animation

The actual visual scaling is handled by CSS.

🎛️ Controls
Preset Buttons

The visualizer includes four ready-to-use scale presets:

0.5×  → Half size
1×    → Original size
1.5×  → Large
2×    → Double size
Fine Control

A range input allows users to select scale values between:

0.5 → 2

with 0.1 increments.

Replay

The Replay Animation button restarts the scale transition for the selected value.

♿ Accessibility

The component provides:

Native button controls
Keyboard navigation
aria-pressed state for active presets
aria-live output for scale updates
Visible :focus-visible states
Reduced-motion support
📱 Responsive

The visualizer adapts to:

Desktop screens
Tablets
Mobile devices

The control grid changes layout at smaller breakpoints.

⚡ Performance

The implementation uses CSS transforms for the visual scaling effect.