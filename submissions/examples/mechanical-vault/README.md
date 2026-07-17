# Pure CSS Mechanical 3D Combination Vault

An insanely complex, fully interactive 3D mechanical bank vault built entirely without JavaScript.

## 🚀 How it works

This component serves as an extreme masterclass in CSS state-machines and 3D geometric construction. The vault door features 3 interactive Combination Dials. Each dial is a true 3D physical object—a 10-sided Decagon—constructed by mathematically calculating the `rotateX` and `translateZ` extrusion for 30 distinct DOM faces. 

Furthermore, the vault acts as a native CSS Password Validator. By mapping a vast matrix of 30 hidden radio buttons to the 3 dials, users can "spin" the dials to input a code. Using deeply chained CSS sibling combinators, the engine synchronously checks if the physical dials match a pre-determined hardware code (e.g., `7-3-9`). Upon successful validation, the heavy 3D steel door mechanically unlatches and swings open on a Y-axis hinge.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. Note that the native combination is `7-3-9`.

## ✨ Why it fits EaseMotion CSS

Interactive physical objects and cryptographic logic are traditionally handled exclusively by JavaScript. This component proves that CSS is completely capable of acting as both a 3D rendering engine and a synchronous logic validator simultaneously. It provides the EaseMotion community with an elite `level:advanced` blueprint on how to construct complex multi-faced 3D cylinders natively, how to track multi-tiered UI states without a JS framework, and how to chain those states into a massive boolean logic gate to trigger complex environmental animations.