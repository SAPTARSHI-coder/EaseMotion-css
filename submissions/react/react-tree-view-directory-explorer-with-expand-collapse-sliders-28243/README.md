# React Component: Tree View Directory Explorer with Expand/Collapse Sliders (#28243)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a recursive, infinitely-nestable file/folder directory tree with high-performance CSS height transitions and visual hierarchy dashed lines.

## 📦 What's included?

- `TreeView.jsx`: The recursive React component that takes a nested JSON object and renders it into a directory structure, managing DOM measurement tricks to animate CSS heights from `0px` to `auto`.
- `style.css`: The CSS stylesheet powering the chevron rotation spring, the folder icon color transitions, and the nested dashed hierarchy lines.
- `demo.html`: A self-contained browser demo running the React component to showcase the smooth accordion-style expansion.

## 🛠 Features

- **Fluid Height Transitions**: Animating `height: auto` in CSS is notoriously difficult. This component uses a custom React Hook/Effect combo with `requestAnimationFrame` to measure the exact `scrollHeight` of the child DOM, transition to that specific pixel height, and then release it back to `auto`. This allows deeply nested folders to push the parent's height dynamically.
- **Physical Icons**: The folder SVG icon responds to its state physically. When closed, it is grey. When opened, it fills with a soft blue tint and the chevron arrow rotates 90 degrees using a `cubic-bezier` spring, making the folder feel like it's physically opening.
- **Recursive Rendering**: The `TreeNode` component calls itself, meaning it supports infinite depth without hardcoding logic. It passes down a `level` prop to calculate exact pixel padding for indentation.
- **Hierarchy Guides**: A subtle dashed line connects child nodes to their parent, improving readability in deeply nested structures.

## 🚀 How to use

1. Copy `TreeView.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass a nested JSON array to the component.

```jsx
import React from 'react';
import TreeView from './TreeView';
import './style.css'; 

const Explorer = () => {
  const fileSystem = [
    {
      name: "src",
      defaultOpen: true, // Optionally start opened
      children: [
        { name: "App.js" },
        {
          name: "utils",
          children: [
            { name: "math.js" }
          ]
        }
      ]
    },
    { name: "package.json" }
  ];

  return <TreeView data={fileSystem} />;
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability. 

Standard HTML details/summary tree views snap open and shut instantly, breaking user orientation. By carefully measuring DOM heights and applying a `0.3s cubic-bezier(0.4, 0, 0.2, 1)` transition, the folders physically slide open, pushing content down smoothly. The rotation of the chevron arrow and the color shift of the folder icon provide immediate, satisfying micro-feedback to the user's click.
