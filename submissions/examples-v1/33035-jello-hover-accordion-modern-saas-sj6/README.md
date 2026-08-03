# Jello-Hover Accordion — Modern SaaS

A pure CSS, zero-dependency **integrations accordion** for SaaS settings
pages where the jello is deliberately *scoped*: hovering a closed section
wiggles only its **logo chip** — a small squash-and-stretch that reads as
a friendly product microinteraction, not a page effect. Opening a section
gives the panel one soft settle; open sections never wiggle. Built on
native `<details>`/`<summary>`; no JavaScript anywhere.

Resolves Issue: #33035

## ✨ Features

- **Scoped, one-token jello** — the squash-and-stretch lives on the
  30px logo chip, and every keyframe is computed from a single amplitude
  token (`--sa-squash`) via `calc()` (±14% → ∓11% → ±6% → ∓3% → ±1% → 0).
  One number tunes the whole gesture; scoping it to the chip keeps the
  header text perfectly still.
- **Closed sections only** — the wiggle applies via
  `.sa-item:not([open])`, and the open panel's content holds still after
  a single `sa-settle` (fade + 3% scaleY from the top) that replays on
  every open, since closed `<details>` content isn't rendered.
- **Keyboard parity** — the chip jello also fires on
  `.sa-head:focus-visible`, so Tab users get the same wink; Enter/Space
  toggles natively; 2px accent focus ring on the header.
- **Native accordion semantics** — `<details name="sa-integrations">`
  gives exclusive-open behavior with zero JS.
- **SaaS-native details** — dotted-grid canvas, brandable logo chips,
  Connected / Not-connected state chips, monospace scope tags
  (`chat:write`), dashed row separators, tabular numerals.
- **Genuinely responsive** — fluid panel up to 540px; under 420px row
  values wrap onto their own line so rows stay readable on phones.
- **Tunable via custom properties** — squash amplitude, wiggle duration,
  settle duration, easing, and chevron rotation on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the wiggle and the
  settle; the hover cue survives as an accent border change.

## 🔧 Custom Properties

| Property                | Default                          | Role                            |
| ----------------------- | -------------------------------- | ------------------------------- |
| `--sa-squash`           | `0.14`                           | Chip jello amplitude (±14%)     |
| `--sa-duration`         | `540ms`                          | Whole wiggle gesture            |
| `--sa-settle-duration`  | `240ms`                          | Panel settle on open            |
| `--sa-ease`             | `cubic-bezier(0.22, 1, 0.36, 1)` | Settle curve                    |
| `--sa-toggle-duration`  | `220ms`                          | Chevron rotation                |

## 🚀 Usage

```html
<details class="sa-item" name="my-integrations">
  <summary class="sa-head">
    <span class="sa-logo is-relay" aria-hidden="true">R</span>
    <span class="sa-head-name">
      Relay
      <span class="sa-head-kind">Team chat</span>
    </span>
    <span class="sa-state is-on">Connected</span>
    <span class="sa-chevron" aria-hidden="true"></span>
  </summary>
  <div class="sa-body">
    <div class="sa-row">
      <span class="sa-row-label">Scopes</span>
      <span class="sa-scope">chat:write</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — an "Integrations" settings panel (chat / source control / issues).
- `style.css` — motion tokens, calc()-driven chip jello, SaaS skin, a11y guards.
- `README.md` — this document.
