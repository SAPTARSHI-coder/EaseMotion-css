# Pure CSS 3D Perspective Device Mockups

## Description
This submission resolves Issue #68992 by providing pure CSS wrappers to simulate iPhone and MacBook devices. This eliminates the need to load heavy PNG mockups for framing screenshots, significantly improving load times and offering dynamic styling capabilities.

## Features
- **Pure CSS Construction**: Built completely with `border`, `border-radius`, and `box-shadow`.
- **Dynamic Notch / Island**: Includes a `.ease-device-notch` positioned natively on the phone.
- **3D Transforms**: Uses `rotateX` and `rotateY` alongside `preserve-3d` to present the devices in a modern, skewed "premium presentation" perspective.
- **Responsive**: The laptop mockup resizes responsively on smaller screens.

## Usage
Wrap your content (images, iframes, or HTML) inside the `.ease-device-screen` container.

```html
<div class="ease-device-wrapper">
  
  <!-- Phone Layout -->
  <div class="ease-device-phone">
    <div class="ease-device-notch"></div>
    <div class="ease-device-screen">
      <img src="mobile-screenshot.jpg" alt="App Screen">
    </div>
  </div>

  <!-- Laptop Layout -->
  <div class="ease-device-laptop">
    <div class="ease-device-screen">
      <img src="desktop-screenshot.jpg" alt="Web Screen">
    </div>
  </div>

</div>
```
