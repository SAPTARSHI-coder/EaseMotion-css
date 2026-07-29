# React Tooltip – Elastic Slide (Cyberpunk Neon)

A reusable React Tooltip component featuring an Elastic Slide animation inspired by Cyberpunk Neon UI.

## Features

- Elastic Slide animation
- Cyberpunk neon styling
- Lightweight
- Easy to customize
- Supports multiple positions
- Uses EaseMotion animation utility class

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | "Cyberpunk Tooltip" | Tooltip content |
| position | string | "top" | top, bottom, left, right |
| children | ReactNode | Required | Target element |

---

## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";

function App() {
  return (
    <ReactTooltip
      text="Launch Sequence Ready!"
      position="top"
    >
      <button>Hover Me</button>
    </ReactTooltip>
  );
}

export default App;
```

---

## Folder Structure

```
submissions/
└── react/
    └── react-tooltip-elastic-slide-cyberpunk/
        ├── ReactTooltip.jsx
        ├── style.css
        └── README.md
```

---

## Customization

- Change neon colors in `style.css`.
- Modify animation duration.
- Add additional tooltip themes.
- Extend positions or arrow styles.

## License

MIT