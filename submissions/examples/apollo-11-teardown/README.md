# Pure CSS Apollo 11 Saturn V Rocket Teardown Simulator

A massively complex, scientifically accurate 3D interactive aerospace visualization built entirely without Canvas, WebGL, or JavaScript.

## 🚀 How it works

This component serves as an extreme architectural masterclass in DOM-based 3D geometric construction. The Saturn V rocket is natively rendered in 3D space by calculating the precise extrusion matrices for 5 independent cylindrical modules (Stage 1, Stage 2, Stage 3, Command Service Module, and the Launch Escape System). Each module is physically constructed using 20 distinct DOM faces mapped perfectly in a 360-degree circle via `rotateY` and `translateZ`.

Furthermore, it functions as an interactive aerospace teardown sequence. By clicking native CSS checkboxes linked via sibling combinators, the user can trigger sequential "Stage Separations". The engine evaluates the CSS state machine and executes complex `translateY` hardware-accelerated animations, causing the giant 3D rocket to physically decouple in space, revealing the glowing F-1 and J-2 engines hidden internally.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. Use the interactive HUD to jettison the stages sequentially.

## ✨ Why it fits EaseMotion CSS

Complex volumetric cylinder generation and 3D object explosion/teardown mechanics are traditionally handled exclusively by JavaScript frameworks like Three.js. This submission pushes the extreme limits of CSS as a 3D rendering and state engine. It provides the EaseMotion community with an elite `level:advanced` blueprint on how to construct complex multi-faced 3D cylinders natively, handle complex Z-index depth sorting for intersecting volumetric objects, and trigger cascading sequence animations based entirely on native CSS state changes.