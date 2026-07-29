# Pure CSS 3D Mechanical Keyboard Simulator (Grid Architecture)

A mathematically precise 3D rendering of a 60% mechanical keyboard, built entirely without JavaScript, Canvas, or WebGL.

## 🚀 How it works

This component utilizes advanced CSS Grid/Flex layout capabilities to perfectly map over 60 individual keys spanning multiple rows and complex column gaps (e.g., Spacebar, Shift, Enter keys). 

Each key is constructed using a heavy combination of `transform-style: preserve-3d`, isometric `rotateX`/`rotateZ` perspectives, and multiple `box-shadow` layering techniques to simulate physical depth. It also incorporates native CSS `:active` and `:hover` pseudo-classes to trigger fluid, physical depression animations (key travel) and realistic shadow-casting when a user "types" on the keyboard.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. You can easily swap color themes by modifying the root variables like `--key-base-std` or `--board-bg`.

## ✨ Why it fits EaseMotion CSS

Building a highly complex, 60+ element interactive 3D layout traditionally requires heavy JavaScript or Canvas rendering. This submission acts as a masterclass in massive-scale CSS architecture and 3D state management. It provides a robust, scalable blueprint for the community on how to handle highly repetitive, complex UI structures cleanly through pure CSS variables and HTML.
