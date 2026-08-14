# React Component: Tag Input Cloud with Smooth Removable Motion (#28042)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders an interactive, multi-select tag input field. It features satisfying, physics-based CSS keyframe animations for adding and removing tags.

## 📦 What's included?

- `TagInput.jsx`: The core React component handling state, keyboard events (Enter/Backspace to add/remove), and orchestration of CSS animation classes.
- `style.css`: The raw CSS file powering the layout, focus states, and the crucial `easeTagEnter` and `easeTagRemove` keyframe animations.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Spring-like Entrance**: New tags "pop" in with a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` scaling animation.
- **Smooth Layout Collapse**: When a tag is removed, it doesn't just disappear instantly (which jars the layout). It scales down and simultaneously shrinks its margins/padding to 0, allowing surrounding tags and the input field to glide smoothly into the newly empty space.
- **Keyboard Accessible**: Add tags by pressing `Enter` or `,`. Remove the last tag by pressing `Backspace` while the input is empty.
- **Click-to-Focus**: Clicking anywhere inside the container focuses the hidden input field seamlessly.
- **Zero External Dependencies**: Built entirely with standard React and CSS.

## 🚀 How to use

1. Copy `TagInput.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React, { useState } from 'react';
import TagInput from './TagInput';
import './style.css'; // Adjust path as needed

const App = () => {
  const [tags, setTags] = useState(['UX', 'Design', 'Development']);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
    console.log("Current tags:", newTags);
  };

  return (
    <div className="container">
      <TagInput 
        initialTags={tags} 
        placeholder="Add skills..."
        onChange={handleTagsChange} 
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes that elements leaving the screen are just as important as elements entering the screen. 

In standard React tag inputs, calling `setTags(tags.filter(...))` immediately removes the DOM node. This causes the remaining tags and the text cursor to instantly teleport to fill the gap, creating a harsh layout shift. 

This component solves that by orchestrating a two-step removal process. First, React applies an `.ease-tag-removing` class. CSS takes over, playing a highly tuned `@keyframes` animation that scales the element down while animating its `margin`, `padding`, and `max-width` to zero. This allows the CSS Flexbox engine to smoothly glide the remaining items together over 300ms. Only after the CSS animation completes does React actually unmount the node. The result is a premium, polished micro-interaction.
