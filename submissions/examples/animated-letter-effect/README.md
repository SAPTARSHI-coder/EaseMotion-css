# Sandbox Component Showcase: Terminal-Style Scramble Logo Reveal

## Overview

A terminal-inspired logo reveal animation that progressively decrypts text from random symbols into its final readable form. Each character cycles through a configurable set of glyphs before locking into place, creating a cinematic decoding effect reminiscent of command-line interfaces, cyberpunk UIs, and hacker-themed introductions.

## 📁 Sandbox Configuration Files

* `demo.html` — Self-contained logo reveal showcase featuring character scrambling, cursor blinking, and replay functionality.
* `style.css` — Scoped styling layer controlling typography, layout, transitions, cursor animation, and visual presentation.

## 🚀 Key Animation Mechanics

### 1. Character-by-Character Decryption

Each letter begins as a rapidly changing random glyph selected from a configurable character pool. After a predefined number of cycles, the character resolves into its final value and remains locked.

### 2. Sequential Reveal Pipeline

Characters do not start simultaneously. A configurable stagger delay creates a natural left-to-right reveal pattern that mimics text being decoded in real time.

### 3. Custom Glyph Pool

The scrambling process draws from a configurable collection of symbols, punctuation marks, and special characters. This allows developers to customize the visual personality of the effect.

### 4. Lock-State Transition

Once a character finishes scrambling, it transitions into a stable locked state. This progressive accumulation of resolved characters reinforces the decoding illusion.

### 5. Terminal Cursor Finish

After the final character is revealed, a blinking cursor appears beside the completed word. This provides a familiar command-line aesthetic and visually signals completion.

### 6. Replayable Animation Cycle

A replay button allows users to restart the entire sequence without refreshing the page. All character states are rebuilt dynamically before the reveal begins again.

### 7. Configuration-Driven Architecture

The displayed text, scramble duration, glyph collection, stagger timing, and animation speed can all be modified through a single configuration object, making customization straightforward.

### 8. Sandbox-Isolated Implementation

All logic, styling, and rendering remain fully contained within the sandbox submission directory. The feature introduces no external dependencies and requires no framework integration.

## 🎯 Use Cases

* Logo introductions
* Portfolio landing pages
* Developer websites
* Cyberpunk-themed interfaces
* Terminal-style UIs
* Product launch animations
* Loading screens
* Interactive brand reveals

## ✨ Why It Fits EaseMotion CSS

This submission demonstrates animation as a storytelling mechanism rather than a decorative effect. The gradual transition from chaos to clarity creates a memorable reveal while remaining lightweight, configurable, and easy to understand. The implementation combines expressive motion with clean structure, aligning closely with EaseMotion CSS's animation-first philosophy.
