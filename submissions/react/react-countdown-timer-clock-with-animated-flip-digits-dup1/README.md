# React Countdown Timer Clock with Animated Flip Digits

## Overview

A reusable React countdown timer component that counts down from a given time, displays the remaining time in **MM:SS** format, and uses EaseMotion CSS utility classes to animate the timer digits.

---

## Features

* ⏱️ Countdown timer
* 🕒 Displays time in **MM:SS** format
* ✨ EaseMotion CSS animations
* ⚛️ Built using React Hooks
* 🚫 No external dependencies

---

## Installation

Copy the `CountdownTimer.jsx` component into your React project.

```jsx
import CountdownTimer from "./CountdownTimer";
```

---

## Usage

```jsx
function App() {
  return (
    <div>
      <CountdownTimer />
    </div>
  );
}

export default App;
```

---

## Props

This component currently does not require any props.

| Prop | Type | Description       |
| ---- | ---- | ----------------- |
| None | -    | No props required |

---

## React Concepts Used

### 1. useState()

```jsx
const [seconds, setSeconds] = useState(60);
```

* Stores the remaining countdown time.
* Whenever `setSeconds()` is called, React automatically updates the UI.

---

### 2. useEffect()

```jsx
useEffect(() => {
    ...
}, []);
```

* Runs after the component is rendered.
* Starts the timer when the component loads.
* Clears the timer when the component is removed to prevent memory leaks.

---

### 3. setInterval()

```jsx
setInterval(() => {
    ...
}, 1000);
```

* Executes code every 1000 milliseconds (1 second).
* Used to decrease the countdown every second.

---

### 4. Math.floor()

```jsx
Math.floor(seconds / 60)
```

Converts total seconds into minutes.

Example:

* 90 seconds → 1 minute
* 125 seconds → 2 minutes

---

### 5. Modulus Operator (%)

```jsx
seconds % 60
```

Calculates the remaining seconds after removing complete minutes.

Example:

* 125 % 60 = 5

Output:

```
02:05
```

---

### 6. String().padStart()

```jsx
String(min).padStart(2, "0")
```

Always displays two digits.

Examples:

```
5  → 05
9  → 09
12 → 12
```

---

### 7. Conditional Rendering

```jsx
{seconds === 0 && <h2>Time's Up!</h2>}
```

Displays the message only when the countdown reaches zero.

---

## EaseMotion Classes Used

* `ease-fade-in`

---

## Folder Structure

```
react-countdown-timer-clock-with-animated-flip-digits/
├── CountdownTimer.jsx
└── README.md
```
