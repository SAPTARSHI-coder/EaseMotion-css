# Copy-to-Clipboard Component with Morphing Check Pulse

An intuitive micro-interaction utility built for **EaseMotion CSS** that visually morphs an active utility element upon successful completion of clipboard data copies.

## 🚀 Component Advantages
- **Fluid Morph States:** Uses CSS scaling keyframes to transition the standard action sheets icon cleanly into a success confirmation checkmark.
- **Micro-Impact Physics:** Includes an implicit elastic overshoot timing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to make the success trigger look snappy and premium.
- **Minimal Main Thread Scripting:** Uses only JavaScript to access native browser background processes (`navigator.clipboard`), keeping layout alterations pure CSS.

## 📂 Submission Directory Layout
```text
submissions/examples/copy-to-clipboard-btn/
├── demo.html   # Sandbox code frame workspace with sample copy target text
├── style.css   # Implementation of transition logic, structural button tokens, and pulse mechanics
└── README.md   # Setup documentation and guidance manually