# React Next.js Timeline Showcase

## Description
A Next.js App Router compatible React component showcasing a beautiful, animated vertical timeline. It is designed to act as a hybrid Server/Client showcase for EaseMotion CSS. By leveraging static CSS utility classes (`ease-fade-in`, `ease-slide-down`), this component demonstrates that server-rendered layouts can achieve native 60fps animations out-of-the-box, experiencing absolutely zero Cumulative Layout Shift (CLS) when React hydration occurs.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `data` | `array` | (Optional) Array of timeline node objects. Format: `{ id: number, title: string, description: string, icon: ReactNode }`. If omitted, default showcase data is used. |

## Next.js Integration Guide

To truly witness the zero-CLS Server-Side Rendering (SSR) capabilities, we recommend loading this component natively in a Next.js App Router `page.tsx`. 

### Setup Instructions
1. Place this component inside your Next.js `/src/app/components/` folder.
2. Ensure you have `easemotion.css` imported globally in your `layout.tsx` or `globals.css`.
3. Render it inside an `async` Server Component to simulate server data fetching.

### Usage Example (`page.tsx`)

```tsx
import React from 'react';
import NextjsTimelineShowcase from './components/NextjsTimelineShowcase';

// Simulate a database fetch on the server side
async function fetchTimelineData() {
  return [
    { id: 1, title: 'Server Rendered', description: 'This content was generated purely on the server.', icon: '🖥️' },
    { id: 2, title: 'Zero JS Execution', description: 'CSS utilities handle animations before JS even loads.', icon: '⚡' },
    { id: 3, title: 'Hydrated Interactive State', description: 'Click any node to see React client state take over flawlessly.', icon: '💧' },
  ];
}

export default async function Page() {
  const data = await fetchTimelineData();

  return (
    <main>
      <NextjsTimelineShowcase data={data} />
    </main>
  );
}
```

## Features & EaseMotion Integration
- **`"use client"` directive**: Internally handles the `isExpanded` interactive state, proving that EaseMotion plays perfectly with React 18 hydration.
- **`ease-fade-in` & `ease-slide-down`**: Applied heavily for initial load structural animations. Because they are static CSS classes, the browser renders the motion *while* the page is downloading, masking any loading delays natively.
- **`ease-hover-lift`**: Used on individual timeline nodes to provide tactile micro-interactions as users scan the timeline.
- **Zero CLS Guarantee**: Since all layout shifts are defined via CSS `transform` and `opacity` keyframes, the Next.js `<img>` tags and text blocks do not unexpectedly jump or resize upon hydration.
