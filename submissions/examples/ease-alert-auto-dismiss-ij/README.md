# Alert Auto Dismiss

A CSS-powered alert component that auto-dismisses with smooth slide animations. Built with Inter font, custom properties, and vanilla JavaScript.

## Features

- Success, Error, Info, and Warning alert types
- Slide-in and slide-out animations powered by CSS `@keyframes`
- Auto-dismiss after a configurable duration
- Manual close button on each alert
- Fully customizable via CSS custom properties

## Usage

Open `demo.html` in a browser. Click any button to trigger the corresponding alert. Alerts slide in from the top and auto-dismiss after `--alert-duration` (default 4s).

## Custom Properties

| Property                  | Default     | Description                         |
| ------------------------- | ----------- | ----------------------------------- |
| `--alert-duration`        | `4s`        | Auto-dismiss delay                  |
| `--alert-slide-distance`  | `-100px`    | Slide distance for in/out animation |
| `--alert-success-bg`      | `#d4edda`   | Success alert background            |
| `--alert-error-bg`        | `#f8d7da`   | Error alert background              |
| `--alert-info-bg`         | `#d1ecf1`   | Info alert background               |
| `--alert-warning-bg`      | `#fff3cd`   | Warning alert background            |
| `--alert-text-color`      | `#333`      | Default text color                  |

## Dependencies

- [Inter](https://fonts.google.com/specimen/Inter) font family (Google Fonts)
