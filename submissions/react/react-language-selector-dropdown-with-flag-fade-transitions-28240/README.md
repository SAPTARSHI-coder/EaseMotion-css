# React Component: Language Selector Dropdown with Flag Fade Transitions (#28240)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a premium, highly-interactive dropdown menu specifically tailored for language/locale selection, featuring staggered list entrances and CSS-driven flag fade-in animations on selection change.

## 📦 What's included?

- `LanguageSelector.jsx`: The React component that manages the open/closed state, handles the "click outside" dismissal logic, and maps the language data arrays into a staggered DOM structure.
- `style.css`: The CSS stylesheet powering the dropdown's `cubic-bezier` spring entrance, the staggered staggered list item reveals, and the `key`-triggered flag fade animation.
- `demo.html`: A self-contained browser demo running the React component inside a mock navigation bar to showcase the dropdown behavior.

## 🛠 Features

- **Flag Fade & Slide (`easeFlagFade`)**: When the user selects a new language, the component relies on a React `key` change trick on the trigger's flag `<span>` to force a re-mount. This triggers a crisp CSS `@keyframes` fade-and-slide up, providing immediate physical feedback that the language has changed.
- **Staggered Menu Reveal**: When the dropdown opens, the menu itself scales in from the top right anchor point. Simultaneously, the `<li>` options stagger their entrance (sliding in from the right and fading up) by utilizing a dynamic React inline `transitionDelay` based on their index.
- **Micro-Interactions**: The trigger button features an active `transform: scale(0.97)` click-push effect and a chevron that rotates smoothly on a spring curve.
- **Accessibility Ready**: Built with `aria-haspopup`, `aria-expanded`, `role="listbox"`, and `role="option"` attributes.

## 🚀 How to use

1. Copy `LanguageSelector.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of language objects to the component.

```jsx
import React from 'react';
import LanguageSelector from './LanguageSelector';
import './style.css'; 

const Navbar = () => {
  const supportedLocales = [
    { code: 'en', name: 'English (US)', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <nav>
      <LanguageSelector 
        languages={supportedLocales} 
        defaultLanguage="en" 
      />
    </nav>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making standard UI elements feel like physical mechanisms. 

A standard `<select>` dropdown is abrupt and lifeless. By adding a scaling `transform-origin: top right` to the menu container, the dropdown feels like it's physically unfurling from the trigger button. By utilizing a staggered transition delay on the menu items, the eyes are guided naturally down the list. Finally, the use of a remounting `@keyframes` animation on the selected flag makes the act of switching languages feel tactile and responsive.
