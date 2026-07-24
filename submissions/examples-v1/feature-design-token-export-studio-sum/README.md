# Design Token Export Studio

Related issue: #51883

## What does this do?

A live design-token workshop for color, motion speed, border radius, and spacing. Adjust sliders and color pickers, watch a button/card/text preview update in real time, then export tokens as a `:root { }` CSS snippet or a JSON map — with one-click copy and reset to defaults.

## How is it used?

Open `demo.html` in a browser. No server or external assets required.

1. Edit **Primary**, **Surface**, and **Text** colors.
2. Tune **Motion speed**, **Border radius**, and **Base spacing** sliders.
3. Review the live preview panel (`.token-preview-studio`).
4. Click **Copy CSS** or **Copy JSON**, or read the generated snippets in the export textareas.
5. Click **Reset defaults** to restore the EaseMotion-inspired indigo palette.

Tokens are applied as CSS custom properties on `:root` and the preview surface so transitions reflect the chosen speed token.

## Why is it useful?

Design systems need a fast way to prototype token values before committing them to code. This studio bridges designers and developers: tweak visually, export portable CSS/JSON, and paste into component libraries or documentation — all without Figma plugins or build tooling.

## Accessibility

- All controls have visible labels; copy status uses `aria-live`.
- Focus rings on buttons and the preview button.
- Under `prefers-reduced-motion: reduce`, preview transitions and hover transforms are disabled.

## Files

```
submissions/examples/feature-design-token-export-studio-sum/
├── demo.html
├── style.css
└── README.md
```
