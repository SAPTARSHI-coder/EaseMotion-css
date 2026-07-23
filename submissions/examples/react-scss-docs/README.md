# Architectural Map: React & SCSS Folder Track

This onboarding guide provides a clear visual map of how the React structural components and SCSS styles correlate across the EaseMotion CSS project ecosystem, addressing issue #40016.

---

## 🗺️ Project Architecture Map

```text
root/
│
├── core/                        # Core Engine Logic (Protected)
│   └── runtime.js               # MutationObserver Runtime
│
├── packages/
│   ├── react/                   # React Wrapper Modules
│   │   ├── src/
│   │   │   ├── hooks/           # Custom React hooks (e.g., useEaseMotion)
│   │   │   └── components/      # Higher-Order Animation wrappers
│   │   └── package.json
│   │
│   └── scss/                    # Component & Utility Styling Architecture
│       ├── core/                # Keyframe generation & core mixins
│       ├── components/          # Specific layout style layers (tabs, modals)
│       └── easemotion.scss      # Main compilation entry point
│
└── submissions/                 # Community Submissions Pipeline (Open Access)
    └── examples/                # Add new feature sandboxes here