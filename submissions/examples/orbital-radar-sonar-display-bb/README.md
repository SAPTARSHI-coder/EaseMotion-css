# Orbital Radar Sonar Scanner HUD (EaseMotion CSS)

A futuristic sci-fi orbital radar/sonar scanner display component featuring 360-degree sweep beams, concentric grid rings, target blips, and expanding sonar pings built with HTML5 and CSS3.

## 1. What does this do?
This component renders a defense grid radar UI with a rotating conical beam sweep (`conic-gradient` + keyframe rotation). Targeted blips illuminate dynamically as the radar beam sweeps past, emitting expanding radial sonar waves.

## 2. How is it used?
Link `style.css` in your HTML document and render the `.radar-screen` inside `.radar-card` as shown in `demo.html`.

## 3. Why is it useful?
- **Futuristic & Sci-Fi aesthetics**: Ideal for defense dashboards, gaming HUD interfaces, sci-fi web apps, and telemetry displays.
- **Pure CSS Hardware Acceleration**: 60fps rotation and radial ping animations rendered using native CSS keyframes without JS dependencies.
- **Responsive Layout**: Scales automatically across all device resolutions.
