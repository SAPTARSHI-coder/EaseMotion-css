# Ease Gyroscope Tilt

A smooth 3D tilt animation where an element reacts to the device gyroscope and rotates according to the phone's orientation.

## Features

- Real gyroscope support
- Smooth eased motion
- Desktop mouse fallback
- 3D perspective effect
- Mobile-friendly
- Pure HTML, CSS, JavaScript

## Files

```text
demo.html
style.css
README.md
```

## How It Works

### Mobile

Uses:

```javascript
deviceorientation;
```

to read:

- beta (front/back tilt)
- gamma (left/right tilt)

and converts them into:

```javascript
rotateX(...)
rotateY(...)
```

transformations.

### Desktop

Uses mouse position relative to the card:

```javascript
mousemove;
```

to simulate the same tilt effect.

## Permission Requirement

On iOS Safari, gyroscope access requires user permission.

The demo includes:

```javascript
DeviceOrientationEvent.requestPermission();
```

which is triggered by the button.

## Customization

### Maximum Tilt

```javascript
const maxTilt = 18;
```

Examples:

```javascript
const maxTilt = 10;
```

Subtle effect

```javascript
const maxTilt = 30;
```

Strong effect

### Transition Smoothness

```css
transition: transform 0.15s ease-out;
```

### Card Size

```css
width: 350px;
height: 450px;
```

## Run

Open:

```text
demo.html
```

on a mobile device for gyroscope support.

## Browser Support

- Chrome Android
- Safari iOS
- Edge Mobile
- Firefox Android (limited sensor support)
