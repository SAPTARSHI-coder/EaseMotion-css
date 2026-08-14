# Dropdown Cascade

## What does this do?

A dropdown menu whose items cascade in just behind the opening panel, built on
native `<details>` / `<summary>`.

## How is it used?

```html
<details class="ddc">
  <summary class="ddc-btn">Account</summary>
  <ul class="ddc-menu">
    <li style="--i:0"><a href="#p">Profile</a></li>
    <li style="--i:1"><a href="#b">Billing</a></li>
  </ul>
</details>
```

## Why is it useful?

Custom dropdowns are one of the most commonly re-implemented widgets and one of
the most commonly broken: the open state ends up in JavaScript, `Escape` is
forgotten, and the trigger loses its expanded/collapsed semantics.

`<details>` supplies all of it. The browser owns the open state, exposes it to
assistive technology, and handles keyboard activation — so the CSS only has to
describe appearance.

The animation detail worth reusing is the offset between container and contents.
The panel scales from its top edge over 220ms while items start 60ms later on a
40ms cascade, so the items appear to arrive *into* a panel that is already
opening. Running both on the same timing is what makes most dropdowns feel like a
flat image being faded in.

`transform-origin: top center` matters as much as the timing: scaling from the
element's centre makes the panel look like it is inflating in place rather than
unfolding from the button it belongs to.
