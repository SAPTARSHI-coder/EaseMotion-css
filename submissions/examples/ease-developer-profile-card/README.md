# Developer Profile Card

A modern, highly interactive, and responsive developer profile card component built with pure HTML and CSS. It features professional layout aesthetics, glassmorphic styling, vibrant gradients, animated SVG borders, and seamless light/dark theme transitions using modern CSS selector mechanics.

---

## Overview

The **Developer Profile Card** is designed to showcase software engineers, open-source contributors, tech teams, and web designers. By combining modern CSS specifications with fluid entrance animations and interactive states, it leaves a premium, polished impression on users.

This component uses **no JavaScript** for its core functions—including theme switching—making it light, SEO-friendly, and easy to drop into any website or application.

---

## Features

- 🎭 **CSS-Only Theme Switching**: Leverages the power of the `:has()` parent selector to toggle between light and dark modes instantly using radio inputs.
- 🎡 **Rotating Gradient Ring**: An animated vector SVG outline ring that surrounds the developer's avatar, rotating slowly by default and accelerating with a glow effect on hover.
- 🧑‍💻 **Self-Contained Vector Avatar**: Built using fully customizable inline SVGs so there are no broken image placeholders or heavy asset loading times.
- 🏷️ **Interactive Stack Badges**: Responsive technology stack labels that lift, scale, and light up with theme accents on hover.
- 📊 **Contribution Statistics**: Clean grid columns representing repositories, stars, and PRs, designed to emphasize numbers and zoom slightly on mouseover.
- 🌐 **Dynamic Social Buttons**: Icon buttons mapping to GitHub, Twitter, LinkedIn, and Dribbble. Hovering triggers smooth shifts and colors matching the official brand identity.
- ⚡ **Staggered Animations**: Fluid load-in animations that transition different card elements consecutively, giving the card a lively introduction.
- 📱 **Mobile Responsive Design**: Clean layouts scaling from small screens (under 375px) up to high-resolution desktop viewports.

---

## Use Cases

- **Developer Portfolios**: Highlight your skills, stats, and socials on your personal landing page.
- **Team Dashboards**: Arrange cards in a clean CSS grid layout to showcase agency or company developers.
- **Open Source Contributor Pages**: Give community contributors their own showcase card.
- **GitHub Profiles / Bio Links**: Host a lightweight dashboard of your programming activity and social handles.

---

## Customization

The component is highly customizable using CSS Custom Properties. You can adjust the styling by overwriting the variables in the stylesheet:

### Layout Custom Properties

| Custom Property      | Default (Light Mode)        | Default (Dark Mode)         | Purpose                            |
| :------------------- | :-------------------------- | :-------------------------- | :--------------------------------- |
| `--bg-primary`       | `#f8fafc`                   | `#080c14`                   | Body/wrapper page background       |
| `--card-bg`          | `rgba(255, 255, 255, 0.75)` | `rgba(15, 23, 42, 0.65)`    | Glassmorphic card surface          |
| `--card-border`      | `rgba(255, 255, 255, 0.6)`  | `rgba(255, 255, 255, 0.06)` | Semi-transparent card borders      |
| `--text-main`        | `#0f172a`                   | `#f8fafc`                   | Main header and name text color    |
| `--text-muted`       | `#64748b`                   | `#94a3b8`                   | Subheadings, bio, and label color  |
| `--accent-primary`   | `#6366f1` (Indigo)          | `#818cf8` (Light Indigo)    | Main accent highlight color        |
| `--accent-secondary` | `#a855f7` (Purple)          | `#c084fc` (Light Purple)    | Secondary gradient accent color    |
| `--accent-pink`      | `#ec4899` (Pink)            | `#f472b6` (Light Pink)      | Gradient highlight color           |
| `--tag-bg`           | `#f1f5f9`                   | `#1e293b`                   | Technology tag background color    |
| `--btn-cta-bg`       | Linear Gradient             | Linear Gradient             | Accent gradient for the CTA button |

### Editing Typography

The component imports and utilizes two Google Fonts:

- **Outfit**: Used for bold, modern headings and statistic values.
- **Inter**: Used for high-legibility body content like roles, bios, and tag texts.

To substitute these fonts, update the font families:

```css
:root {
  --font-heading: "Your-Heading-Font", sans-serif;
  --font-body: "Your-Body-Font", sans-serif;
}
```
