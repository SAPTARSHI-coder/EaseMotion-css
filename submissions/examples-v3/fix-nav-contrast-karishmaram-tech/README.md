# Navigation Link High Visual Contrast Fix

Addresses issue #39415 regarding weak accessibility visibility states for active UI components placed against dark layouts.

## 🛠️ The Fix
Instead of relying solely on a subtle text color shade shift, this correction enforces a **multi-indicator alignment architecture**:
1. **Background Capsule Tint**: Employs an explicit primary accent alpha layer (`rgba(99, 102, 241, 0.12)`) via `--link-active-bg`.
2. **Underline Accent Anchor**: Uses an explicit pseudo-element border indicator block to provide definitive structural feedback independent of color perception.
3. **Weight Modulation**: Adjusts font weight to `600` on active nodes to guarantee immediate scannability.

Meets standard accessibility target requirements without introducing third-party script overhead.
