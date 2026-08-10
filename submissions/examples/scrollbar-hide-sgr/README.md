# Scrollbar Hide Utility

## What is this?
A clean, cross-browser CSS utility class (`.ease-scrollbar-hide`) that visually hides an element's scrollbar while keeping the element fully scrollable.

## How does it work?
Since there is no unified cross-browser CSS standard for hiding scrollbars yet, this utility targets each rendering engine individually:
- `scrollbar-width: none` for Firefox.
- `-ms-overflow-style: none` for legacy Internet Explorer and Edge.
- `::-webkit-scrollbar { display: none }` for Webkit-based browsers like Chrome, Safari, and modern Edge Chromium.
The scroll behavior itself (touch, mouse wheel, trackpad, and keyboard focus) remains fully functional.

## Why is it useful?
Visible scrollbars can disrupt clean, modern designs, particularly for horizontal menus, tab bars, carousels, and chip containers. This utility allows developers to achieve a clean aesthetic without breaking scroll functionality or relying on complex JavaScript workarounds.
