# Next.js Integration Template and Example App

## Description
A complete, self-contained Next.js integration template housed entirely within the `submissions/` directory. This example app demonstrates the recommended project structure, global stylesheet configuration, layout bindings, and Server-Side Rendering (SSR) compatibility for using EaseMotion CSS classes smoothly in a modern React and Next.js App Router environment.

---

## What does this do?
This template serves as a production-ready reference for developers looking to integrate EaseMotion CSS into a Next.js App Router application. It demonstrates how to apply animation-first classes natively, override design token variables, and implement client-side interactive overlays (modals and dynamic lists) while avoiding hydration mismatches and Cumulative Layout Shift (CLS).

---

## Why is this useful for EaseMotion CSS?
While standard documentation explains basic React setup, integrating CSS frameworks into Next.js introduces specific challenges:
- **Global Stylesheet Imports**: How to configure global entry styles to prevent CLS during initial page downloads.
- **SSR/Hydration Safety**: How to handle dynamic DOM elements (like modals and portals) in Client Components without causing React hydration mismatches.
- **Design Token Customization**: Displaying how to extend or customize EaseMotion design variables directly inside Next.js global styles.
- **App Router Separation**: Visualizing clean separation of Server Components and interactive Client Components.

---

## Project Structure
```
submissions/react/nextjs-integration-template-em/
├── README.md                      # This documentation guide
├── NextjsIntegrationTemplate.jsx   # Main entry showcase page (Client Component)
├── style.css                      # Scoped styles for the showcase layout
├── package.json                   # Project dependencies and script runner
├── next.config.mjs                # Next.js configuration
├── .gitignore                     # Git ignore rules for build cache/node_modules
├── app/
│   ├── layout.jsx                 # App Router layout importing easemotion.css
│   ├── page.jsx                   # Page entry rendering the template
│   └── globals.css                # Global styles and design token overrides
└── components/
    ├── AnimatedCard.jsx           # Card component using hover-lift effects
    ├── MotionDialog.jsx           # Portal modal using modal overlays
    └── TransitionList.jsx         # Dynamic list with entrance animations
```

---

## Next.js Integration Guide

### 1. Global Stylesheet Setup
To utilize EaseMotion CSS, import it globally in your Root Layout file (`app/layout.jsx`). This makes it available across all pages, ensuring transitions are pre-loaded to prevent Cumulative Layout Shift (CLS).

```jsx
// app/layout.jsx
import React from 'react';
import './globals.css';
import 'easemotion-css/easemotion.css'; // Global EaseMotion CSS import

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 2. Customizing Design Tokens
You can override EaseMotion's variables globally inside your main stylesheet (`app/globals.css`). Simply target the `:root` pseudo-class (or specific theme selectors) and define your overrides:

```css
/* app/globals.css */
:root {
  /* Override EaseMotion variables */
  --ease-color-primary: #0ea5e9;       /* Change primary theme color */
  --ease-color-secondary: #d946ef;     /* Change secondary color */
  --ease-font-family: 'Plus Jakarta Sans', sans-serif;
}
```

### 3. Hydration-Safe Dynamic Components
For components rendering outside standard page flow (like portals or overlays), you must verify the component has hydrated on the client before rendering. This avoids React trees mismatching:

```jsx
"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function MotionDialog({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="ease-modal-overlay is-active">
      <div className="ease-modal">{children}</div>
    </div>,
    document.body
  );
}
```

---

## How to Run the Example App Locally

### 1. Navigate to the template directory
From the root of the repository, navigate into the template folder:
```bash
cd submissions/react/nextjs-integration-template-em
```

### 2. Install dependencies
Install Next.js and React dependencies:
```bash
npm install
```

### 3. Run the development server
Start the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive template in action.

### 4. Build for production
Build the production bundle to verify compilation and SSR stability:
```bash
npm run build
```
