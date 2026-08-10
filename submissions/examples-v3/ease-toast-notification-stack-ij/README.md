# Toast Notification Stack

A stackable toast notification component with slide-in animation, auto-dismiss with progress bar, and dismiss-all functionality.

**Directory:** `ease-toast-notification-stack-ij`

## Features
- Stacked notifications from bottom-right
- Slide-in entrance with translateY + opacity animation
- Auto-dismiss with shrinking progress bar
- Success, Error, Info, Warning types
- Dismiss All button
- Dismissible individually via close button

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--tns-duration` | `0.35s` | Animation duration |
| `--tns-toast-bg` | `#1e293b` | Toast background |
| `--tns-shadow` | `0 8px 32px rgba(0,0,0,0.25)` | Toast box shadow |
| `--tns-radius` | `10px` | Border radius |
| `--tns-success` | `#10b981` | Success color |
| `--tns-error` | `#ef4444` | Error color |

## Usage
Open `demo.html` in a browser. Click any type button to spawn a toast. Click the X or wait 3s for auto-dismiss. Click "Dismiss All" to clear all.
