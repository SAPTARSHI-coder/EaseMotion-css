# Tab Panel Fade

## What does this do?

A tabbed panel interface (settings page style) implementing the full
WAI-ARIA Tabs pattern — arrow-key navigation, `Home`/`End`, roving
`tabindex` — where switching panels cross-fades the newly shown panel in,
even when re-selecting the already-active tab.

## How is it used?

```html
<div class="tpf-tablist" role="tablist" onkeydown="tpfKeydown(event)">
  <button role="tab" id="tab-profile" aria-controls="panel-profile" aria-selected="true" tabindex="0" onclick="tpfActivate(this)">Profile</button>
  <!-- ... -->
</div>
<div class="tpf-panel" id="panel-profile" role="tabpanel" aria-labelledby="tab-profile" tabindex="0">...</div>
```

`tpfActivate` toggles `aria-selected`, roving `tabindex` (only the active
tab is in the Tab order — arrow keys move between tabs), and each panel's
`hidden` attribute; `tpfKeydown` implements `ArrowLeft`/`ArrowRight`/`Home`/
`End` per the ARIA Tabs authoring practice.

## Why is it useful?

The fade only works reliably because it's a CSS *animation*, not a
*transition*: a transition only fires on a property value change, so
toggling `hidden` off on a panel whose opacity was already `1` before it was
hidden produces no visible transition at all — the browser has nothing to
interpolate from. An `animation` re-applied via `:not([hidden])` always
starts from its declared `0%` keyframe regardless of the element's prior
state, so the fade-in plays correctly on every activation, first switch or
the hundredth.

Implementing the full keyboard pattern (not just click-to-switch) matters
because tabs are one of the ARIA patterns screen reader and keyboard users
specifically expect arrow-key behaviour from — a mouse-only tab
implementation is a common and easy-to-miss accessibility gap that looks
completely correct in a visual review.
