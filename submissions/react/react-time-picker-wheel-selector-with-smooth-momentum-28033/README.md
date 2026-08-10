# React Component: Time Picker Wheel Selector with Smooth Momentum (#28033)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an iOS-style 3D scrolling wheel picker for hours, minutes, and AM/PM, featuring native CSS scroll-snapping, perspective scaling, and dynamic opacity.

## 📦 What's included?

- `TimePicker.jsx`: The React component containing the container logic and the highly reusable `<Wheel>` sub-component which handles the scroll listener debounce, snapping math, and 3D inline style calculations.
- `style.css`: The CSS stylesheet powering the CSS scroll-snapping (`scroll-snap-type: y mandatory`), the gradient masking to fade out the top/bottom edges, and the 3D perspective context.
- `demo.html`: A self-contained browser demo running the React component to showcase the scrolling physics and the data output.

## 🛠 Features

- **Native Scroll Momentum**: Instead of relying on heavy JS drag libraries, this component leverages native CSS `overflow-y: scroll` and `scroll-snap-type: y mandatory`. This provides perfectly smooth, native device momentum and physics for free, while JS only listens to update state when scrolling settles.
- **Dynamic 3D Perspective**: As items scroll away from the center, the React component dynamically calculates their distance (`dist`) and applies inline CSS transforms (`rotateX` and `scale`) alongside opacity changes. This creates a cylindrical 3D visual effect within a flat container.
- **Click-to-Select**: Users can manually scroll the wheel, or they can simply click any visible number above or below the center. The container will smoothly auto-scroll that item into the active center strip.
- **Gradient Masking**: Uses `mask-image: linear-gradient` to smoothly fade the numbers into the background at the top and bottom of the picker, enhancing the cylindrical illusion.

## 🚀 How to use

1. Copy `TimePicker.jsx` into your React project.
2. Copy `style.css` and import it.
3. Handle the string output.

```jsx
import React, { useState } from 'react';
import TimePicker from './TimePicker';
import './style.css'; 

const AlarmSetting = () => {
  const [alarmTime, setAlarmTime] = useState("07:00 AM");

  return (
    <div>
      <TimePicker 
        initialTime="07:00 AM" 
        onChange={(newTime) => setAlarmTime(newTime)} 
      />
      <p>Alarm set for: {alarmTime}</p>
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Selecting time from a flat dropdown list is tedious. The "wheel" or "drum" interface is a classic physical metaphor that allows for rapid scrolling through large lists (like 60 minutes). By combining native CSS scroll-snapping for realistic physical momentum, with dynamic `rotateX` calculations to simulate depth, we turn a mundane form input into a highly tactile, satisfying micro-interaction.
