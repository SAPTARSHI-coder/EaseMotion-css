# Bugfix: Badge Pulse Theme Color

This submission resolves **Issue 3: Pulse Ring Uses Static RGBA Colors Instead of Dynamic CSS Variables**.

## 🐛 The Bug
The `.ease-badge-pulse` glow effect was implemented using hardcoded `rgba()` values (e.g., `rgba(108, 99, 255, 0.7)`). While this achieved the correct 70% opacity for the glow, it entirely disconnected the pulse effect from the core theme variables (`--ease-color-primary`). Consequently, if a developer overrode the primary theme color dynamically, the badge's background color would update, but the pulsing outer ring would remain hardcoded to purple.

## 🛠️ The Fix
Without modifying the existing library files, this submission provides a `style.css` file that patches the `@layer easemotion-components` to use the modern CSS `color-mix()` function.

By using `color-mix(in srgb, var(--ease-color-primary) 70%, transparent)`, we successfully combine the dynamic, unpredictable hex/hsl values provided by the CSS custom property with a fixed 70% opacity. This pattern is repeated for the danger and success variants to ensure full theme propagation.

## 📋 Verification
Open `demo.html` to see the fix in action. The page dynamically applies different theme overrides (`--ease-color-primary: #f97316` and `#ec4899`) to specific container blocks. You will see that the pulsing glow correctly adopts the dynamic theme color while retaining its intended translucency.
