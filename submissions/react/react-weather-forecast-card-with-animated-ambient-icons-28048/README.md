# React Component: Weather Forecast Card with Animated Ambient Icons (#28048)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a dynamic weather card featuring pure CSS animated weather icons (sun, clouds, rain) that react to user hover states.

## 📦 What's included?

- `WeatherCard.jsx`: The React component that parses the weather string (e.g., "Sunny", "Rainy") and conditionally renders the correct CSS-built animated icon.
- `style.css`: The CSS stylesheet powering the dynamic gradient backgrounds, pure CSS weather icons (using pseudo-elements to build clouds and sun rays), and continuous ambient animations (floating, spinning, raining).
- `demo.html`: A self-contained browser demo running the React component to showcase three different weather states side-by-side.

## 🛠 Features

- **Pure CSS Weather Icons**: No external SVGs or image files are used. The sun, clouds, and raindrops are built entirely with CSS shapes and pseudo-elements (`::before`, `::after`), ensuring perfect scaling and color inheritance.
- **Ambient Idle Animations**: 
  - **Sunny**: Conic-gradient sun rays slowly rotate (`linear 12s`).
  - **Cloudy**: Front and back clouds float up and down out of phase (`ease-in-out`).
  - **Rainy**: CSS raindrops fall on a continuous infinite loop.
- **Interactive Hover Physics**: Hovering the card triggers a `translateY(-8px)` cubic-bezier lift. Additionally, it accelerates the internal ambient animations (e.g., the sun spins faster, the rain falls harder) and fades in a subtle background glow layer.
- **Staggered Forecast Entrance**: The 4-day forecast items slide up sequentially on load using inline `animationDelay`.

## 🚀 How to use

1. Copy `WeatherCard.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass a location, current temp/condition, and a forecast array.

```jsx
import React from 'react';
import WeatherCard from './WeatherCard';
import './style.css'; 

const Dashboard = () => {
  const forecast = [
    { day: 'Tue', temp: 68, condition: 'Sunny' },
    { day: 'Wed', temp: 65, condition: 'Cloudy' },
    { day: 'Thu', temp: 54, condition: 'Rainy' },
    { day: 'Fri', temp: 66, condition: 'Sunny' }
  ];

  return (
    <WeatherCard 
      location="San Francisco, CA" 
      currentTemp={72} 
      condition="Sunny" 
      forecast={forecast} 
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Static weather icons are functional but lack life. By building the icons entirely out of CSS and applying continuous, infinite keyframe animations, the UI feels like a living window to the outside world. Furthermore, the interactivity (hovering making the rain fall faster or the sun spin quicker) creates a playful, tactile connection between the user's cursor and the digital environment, a core tenet of the EaseMotion philosophy.
