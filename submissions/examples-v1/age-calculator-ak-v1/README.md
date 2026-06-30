# ⏳ EaseMotion CSS — High-Precision Age Calculator

A professional-grade, interactive calendar calculation dashboard that maps exact temporal metrics in real time. Features atomic layout blocks alongside a high-fidelity terminal readout displaying live tracking parameters down to the absolute second. Engineered with full system **Light and Dark theme persistence**.

---

## 🚀 Key Features

- ⏱️ **Zero-Latency State Updates:** Leverages highly optimized `setInterval` frames rendering live DOM metric updates directly to the viewport.
- 📊 **Anti-Jitter Numeric Matrix:** Numbers utilize standard `tabular-nums` CSS formatting constraints, stopping elements from shifting or vibrating spatially when value scales refresh.
- 🎨 **Bespoke UI Elements:** Overhauled using high-contrast slate architectures, custom hidden date anchors, and integrated terminal design wrappers.
- 🌓 **State-Aware Themes:** Built completely with semantic CSS property tokens that transition seamlessly between rich, dark developer surfaces and deep, paper-white contrast arrays.

---

## 🛠️ Framework Design Architecture

All primary custom properties are grouped inside the `data-theme` scope parameters to maintain structural clean-coding integrity.

```css
/* Token configuration maps for EaseMotion framework distribution */
:root[data-theme="dark"] {
  --bg-main: #0b0f19;
  --card-bg: #111827;
  --card-border: #1f2937;
  --accent: #6366f1;
  --text-primary: #f9fafb;
  --terminal-bg: #030712;
}

:root[data-theme="light"] {
  --bg-main: #f8fafc;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --accent: #4f46e5;
  --text-primary: #0f172a;
  --terminal-bg: #0f172a;
}
```
