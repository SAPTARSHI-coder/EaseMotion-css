# React Component: Feedback Sentiment Emoji Picker with Hover Bounce (#28039)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an interactive 5-scale sentiment rating widget (angry to excited), complete with satisfying physics-based hover bounces and sibling-dimming focus effects.

## 📦 What's included?

- `EmojiPicker.jsx`: The React component managing state, mapping over the emoji array, and handling the selection callback payload.
- `style.css`: The CSS stylesheet powering the staggered entrance, the `cubic-bezier` hover bounces, the continuous active pulse, and the `:has()` sibling dimming logic.
- `demo.html`: A self-contained browser demo running the React component to showcase the interactions and the data payload emission.

## 🛠 Features

- **Compound Hover Physics**: When a user hovers a button, three things happen simultaneously using `cubic-bezier(0.34, 1.56, 0.64, 1)`:
  1. The button container slightly lifts (`translateY(-4px)`).
  2. The emoji character inside scales up and bounces higher (`scale(1.3) translateY(-4px)`).
  3. The hidden text label slides down from behind the button and fades in.
- **Active State Pulsing**: When an emoji is clicked, it locks into an elevated state with a blue halo ring, and begins a gentle, infinite CSS keyframe pulse (`scale(1.4)` to `scale(1.3)`) to clearly indicate the active selection.
- **Sibling Dimming**: Utilizing the modern CSS `:has()` selector (`.ease-emoji-list:has(.is-selected)`), the component automatically dims (opacity) and grayscales unselected sibling emojis once a choice has been made, bringing maximum focus to the user's choice.
- **Accessible Structure**: Implements `role="radiogroup"` and `role="radio"` with `aria-checked` states for screen readers.

## 🚀 How to use

1. Copy `EmojiPicker.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass a question prompt and a callback to receive the selection data.

```jsx
import React from 'react';
import EmojiPicker from './EmojiPicker';
import './style.css'; 

const SurveyPage = () => {
  const handleFeedback = (data) => {
    console.log("User selected:", data.id, data.label, data.emoji);
    // e.g. { id: 'excellent', label: 'Excellent', emoji: '🤩' }
  };

  return (
    <EmojiPicker 
      question="How satisfied are you with our service?" 
      onSelect={handleFeedback} 
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Asking for feedback is a high-friction task for users. By adding playful, bouncy physics to the emojis, the interaction feels less like a chore and more like a game. The staggered entrance cascade makes the widget feel lightweight, while the compound hover scale (the emoji popping out of its container) creates a sense of tactile depth that standard flat buttons lack.
