# React Component: Language Selector Dropdown (#28040)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders an elegant internationalization (i18n) language selector dropdown. It features a physics-based dropdown entrance and a unique crossfade transition for the active flag icon.

## 📦 What's included?

- `LanguageSelector.jsx`: The core React component managing the open/closed state, active selection, and global click-outside listeners to close the dropdown automatically.
- `style.css`: The raw CSS file powering the dropdown scaling animation and the overlapping crossfade transition for the active flag.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Flag Crossfade Transition**: When a new language is selected, the old flag doesn't just instantly vanish. The component pre-renders all flags stacked on top of each other and uses CSS opacity transitions to gracefully crossfade between them.
- **Hardware Accelerated Dropdown**: The dropdown menu enters using a `transform: translateY() scale()` transition paired with a `cubic-bezier(0.4, 0, 0.2, 1)` curve for a snappy, native-feeling pop.
- **Click-Outside Detection**: Uses a `useRef` and a `mousedown` event listener to intelligently close the dropdown if the user clicks anywhere else on the page.
- **Accessible Selection**: Includes proper `aria-haspopup`, `aria-expanded`, and `aria-selected` roles for screen readers, plus a spring-animated checkmark icon on the active item.
- **Zero External Dependencies**: Built entirely with standard React and CSS.

## 🚀 How to use

1. Copy `LanguageSelector.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import LanguageSelector from './LanguageSelector';
import './style.css'; // Adjust path as needed

const App = () => {
  const supportedLanguages = [
    { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', name: 'Français', flagUrl: 'https://flagcdn.com/w40/fr.png' },
    { code: 'es', name: 'Español', flagUrl: 'https://flagcdn.com/w40/es.png' }
  ];

  const handleLanguageChange = (lang) => {
    // Integrate with your i18n library (react-i18next, next-intl, etc.)
    console.log("Switching language to:", lang.code);
  };

  return (
    <div className="container">
      <LanguageSelector 
        languages={supportedLanguages}
        defaultLanguageCode="en"
        onChange={handleLanguageChange}
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about removing jarring visual jumps. In standard React components, when state changes (like switching a language), the DOM instantly unmounts the old image and mounts a new one. This causes a split-second flicker, especially if the image isn't fully cached, and forces the browser to recalculate the layout.

This component solves that by rendering *all* flag images inside an `.ease-lang-flag-container` utilizing `position: absolute`. They are all already loaded in the DOM. When the active language state changes, React simply toggles an `.is-active` class. The EaseMotion CSS engine then takes over, crossfading the opacity and slightly scaling the image into place. The result is a buttery smooth transition that feels incredibly premium.
