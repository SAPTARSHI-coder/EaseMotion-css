# Cross-Device Motion Adaptation System

A professional frontend adaptation engine that dynamically monitors and adjusts animation behavior based on screen sizes, hardware refresh rates, device power tiers, accessibility preferences, and rendering constraints.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This dashboard is an interactive engineering console to analyze, simulate, and optimize how transitions and animations scale across different hardware profiles and user preferences:
- **Device Capability Detector**: Emulates performance profiles (High, Medium, Low power/mobile) and displays detected screen dimensions and pointer interactions.
- **Adaptive Animation Engine**: Dynamically recalculates CSS transition speed constants (`--ease-speed-fast`, `--ease-speed-medium`, `--ease-speed-slow`), travel offsets (translate distances), and scaling factors depending on device conditions.
- **Refresh Rate Visualizer**: Simulates rendering physics under 30Hz (low-end/throttled), 60Hz (standard), 90Hz (mid-tier), and 120Hz (high-end gaming/flagship) refresh rate budgets, showing frame budget timelines.
- **Battery Saver Motion Mode**: Simulates low-power states by dynamically stripping heavy looping animations and reducing coordinates ranges.
- **Accessibility Motion Adapter**: Listens to system preferences and emulates vestibular-safe overrides (caps motion translates, defaults to simple fades).
- **Responsive Preview Frames**: Provides interactive Desktop, Tablet, and Mobile viewport mocks showing real-time rendering shifts.
- **Adaptive CSS Generator**: Compiles optimized, media-query-aware CSS custom properties that developers can copy and drop into their production stylesheets.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in any web browser.
2. Select a target simulator profile (e.g. **Desktop (High-End)**, **Tablet (Mid-Power)**, **Mobile (Battery Saver)**, or **Accessibility Mode**).
3. Switch refresh rate limits (30Hz to 120Hz) and click **"Simulate Frame Rate"** to inspect frame budget timelines.
4. Interact with the live elements in the device frame mockups (Desktop, Tablet, Mobile) to observe how hover and entrance animations automatically scale their speed and travel distances.
5. Click **"Copy Adaptive CSS"** to copy the generated responsive stylesheets containing media-queries and reduced-motion fallbacks.

### 3. Why is it useful?
In production frontend development, animations designed on high-end 120Hz developer machines often lag, stutter, or consume excessive battery on lower-end mobile devices, and they can cause discomfort for users with vestibular disorders. This tool solves this by providing a unified workspace to visualize adaptive constraints, stress-test refresh rates, and export media-query-based style variables that maintain 60FPS fluid rendering and safety compliance on any screen or device.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & Vanilla CSS3**: Custom grid layout, glassmorphic card containers, emulated browser frames, and visual gauges.
- **Math Solver & Physics Rendering**: Canvas-based frame-timer simulation plotting frame budgets and delta variances.
- **Dynamic CSS Variable Binding**: Integrates directly with EaseMotion CSS tokens to scale velocities, delays, and transforms responsively.
- **Accessibility**: Emulates full OS level media-query integrations for `prefers-reduced-motion`.
