# ease-sidebar-drawer-panel

A sidebar drawer panel that slides in from the left with an overlay backdrop.

## Features

- Drawer slides in using `transform: translateX` transition
- Overlay backdrop dismisses drawer on click
- Toggle button to open and close
- Customizable via CSS custom properties

## Usage

Click the "Toggle Sidebar" button to open the drawer. Click the overlay or the button again to close.

Customize via `:root` variables:

```css
--sdp-width: 280px;
--sdp-transition-duration: 0.3s;
--sdp-bg-color: #ffffff;
--sdp-overlay-color: rgba(0, 0, 0, 0.4);
```