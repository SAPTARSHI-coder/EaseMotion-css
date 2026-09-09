# Combobox

## What does this do?

A filtering autocomplete input built on the native `<datalist>` element.

## How is it used?

```html
<label class="cbx-l" for="anim">Animation name</label>
<div class="cbx">
  <input class="cbx-i" id="anim" list="anims" autocomplete="off" />
  <datalist id="anims">
    <option value="ease-fade-in"></option>
    <option value="ease-slide-up"></option>
  </datalist>
  <span class="cbx-ch" aria-hidden="true"></span>
</div>
```

## Why is it useful?

The ARIA combobox pattern is one of the most demanding in the spec: it requires
`aria-expanded`, `aria-controls`, `aria-activedescendant`, a managed listbox,
arrow-key navigation that moves a virtual cursor without moving DOM focus, and
correct announcement of the option count. Partial implementations are common and
actively worse than none, because assistive technology announces a combobox and
then behaves unpredictably.

`<datalist>` gives all of it from the platform. Filtering, keyboard navigation,
selection and announcement are the browser's implementation, which is tested
against real screen readers.

The honest trade-off is that the suggestion popup cannot be styled — it is browser
chrome. This submission therefore styles only the input shell and leaves the popup
alone, which is the correct choice for most autocompletes: a fully custom listbox
should be a deliberate decision made when the design genuinely requires it, not
the default because the native element was never considered.

`autocomplete="off"` prevents the browser's own form history competing with the
datalist suggestions, which otherwise produces two overlapping popups.
