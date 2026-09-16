# Migration Guide: HTML to React `<Animate>` Wrapper

If you are migrating an existing project from plain HTML/vanilla JavaScript to a React architecture, this guide will help you transition your EaseMotion CSS classes to the official React `<Animate>` wrapper.

## Why Migrate?

While you can technically still use raw CSS strings in React (e.g., `className="ease-animate-fade-in"`), migrating to the `<Animate>` wrapper provides several benefits:
1. **Type Safety**: IDE IntelliSense warns you if you mistype an animation token.
2. **Dynamic Prop Handling**: Passing `delay={200}` automatically maps to inline `style={{ animationDelay: '200ms' }}`, removing the need for messy string concatenations.
3. **Cleaner JSX**: Keeps your `className` props clean for layout logic (Tailwind, CSS Modules) while offloading animation logic to the wrapper's declarative API.

## 1. Basic Entrance Animations

### Before (Plain HTML)
```html
<div class="ease-animate-slide-up ease-duration-slow">
  <h2>Welcome to the dashboard</h2>
</div>
```

### After (React Wrapper)
```jsx
import { Animate } from 'easemotion-react';

<Animate type="slide-up" duration="slow">
  <h2>Welcome to the dashboard</h2>
</Animate>
```
*Note: The wrapper defaults to rendering a `<div>`. Use the `tag` prop to change this.*

## 2. Micro-Interactions (Hover States)

### Before (Plain HTML)
```html
<button class="my-btn ease-hover-glow ease-hover-lift">
  Submit
</button>
```

### After (React Wrapper)
```jsx
import { Animate } from 'easemotion-react';

<Animate tag="button" className="my-btn" hover="glow">
  Submit
</Animate>
```
*Note: If you need multiple hover effects simultaneously (e.g., lift + glow), you currently must pass one via the `hover` prop and append the other to the `className` string, or build a custom wrapper.*

## 3. Dynamic Delays & Durations

In vanilla HTML, if you needed a non-standard duration or delay, you had to inject an inline style attribute.

### Before (Plain HTML)
```html
<ul class="list">
  <li class="ease-animate-fade-in" style="animation-delay: 100ms;">Item 1</li>
  <li class="ease-animate-fade-in" style="animation-delay: 200ms;">Item 2</li>
  <li class="ease-animate-fade-in" style="animation-delay: 300ms;">Item 3</li>
</ul>
```

### After (React Wrapper)
```jsx
import { Animate } from 'easemotion-react';

<ul className="list">
  {items.map((item, index) => (
    <Animate 
      key={item.id} 
      tag="li" 
      type="fade-in" 
      delay={(index + 1) * 100} // Dynamically calculates 100, 200, 300
    >
      {item.name}
    </Animate>
  ))}
</ul>
```
*Note: The `delay` and `duration` props accept raw JavaScript numbers and automatically append the `ms` suffix for the inline style injection.*

## Summary

Migrating is mostly a process of finding `.ease-*` classes and moving them into the corresponding `<Animate>` props (`type`, `duration`, `hover`). 
