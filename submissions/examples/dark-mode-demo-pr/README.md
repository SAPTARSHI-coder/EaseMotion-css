# dark-mode-demo-pr

A **dark mode showcase page** demonstrating how EaseMotion CSS custom properties can be overridden for dark themes using both `prefers-color-scheme` and a manual toggle.

## Preview

Open `demo.html` in your browser. No build step required.

## How It Works

| Method | Trigger | Use Case |
|--------|---------|----------|
| `prefers-color-scheme: dark` | OS-level dark mode setting | Automatic adaptation |
| `.dark-active-pr` class | Manual toggle button | User preference override |

## Token Overrides

| Token | Light Value | Dark Value | Purpose |
|-------|-------------|------------|---------|
| `--dm-bg` | `#ffffff` | `#0f172a` | Page background |
| `--dm-surface` | `#f8fafc` | `#1e293b` | Elevated surfaces (hero, tables) |
| `--dm-text` | `#1e293b` | `#f1f5f9` | Primary text |
| `--dm-text-muted` | `#64748b` | `#94a3b8` | Secondary text |
| `--dm-border` | `#e2e8f0` | `#334155` | Borders and dividers |
| `--dm-primary` | `#3b82f6` | `#60a5fa` | Primary brand color (lighter in dark) |
| `--dm-primary-glow` | `rgba(59,130,246,0.3)` | `rgba(96,165,250,0.3)` | Shadow glow |
| `--dm-card-bg` | `#ffffff` | `#1e293b` | Card backgrounds |
| `--dm-shadow` | `0 4px 20px rgba(0,0,0,0.15)` | `0 4px 20px rgba(0,0,0,0.5)` | Shadows (stronger in dark) |

## Usage

```html
&lt;!-- Automatic via OS setting --&gt;
&lt;body class="dark-mode-demo-pr"&gt;
  ...
&lt;/body&gt;

&lt;!-- Manual toggle --&gt;
&lt;body class="dark-mode-demo-pr dark-active-pr"&gt;
  ...
&lt;/body&gt;

&lt;!-- Toggle with JavaScript --&gt;
&lt;button onclick="document.body.classList.toggle('dark-active-pr')"&gt;
  Toggle Dark Mode
&lt;/button&gt;