# Pure CSS Interactive Modal Component (-tg)

An accessible, JavaScript-free overlay dialog component built natively via URL anchor routing rules, appended with contributor uniqueness tokens.

## Features
- **Zero JS Dependency:** Dictates display visibility states and backdrop toggles entirely via the native CSS `:target` pseudo-selector workflow.
- **Conflict-Free Architecture:** Configured completely inside isolated namespaces to comply with framework bento-merging policies.
- **Physics-backed Transitions:** Uses custom cubic-bezier properties (`scale` and `translateY`) to produce an elegant scale-in pop overlay animation.
- **Backdrop Navigation Bridge:** Contains an underlying viewport-spanning anchor layout layer to allow intuitive outside-clicks to safely clear the active modal hash.

## File Structure
```text
ease-model-dialogue-tg/
├── demo.html    # Context component usage sandbox
├── style.css    # Interactive overlay transformations
└── README.md    # Component documentation manual
```

## How It's Used
```HTML
<a href="#ease-demo-modal-tg" class="ease-btn-tg btn-primary-tg">Open Interactive Modal</a>

<div id="ease-demo-modal-tg" class="ease-modal-overlay-tg">
  <div class="ease-modal-card-tg">
    </div>
</div>
```

## Why It Fits
It directly follows EaseMotion CSS's core philosophy of creating complex user experiences using pure layout layers. It avoids DOM overhead and heavy performance thread costs on low-power devices while staying highly composable and organized.