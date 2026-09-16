# Inline Edit

## What does this do?

Click-to-edit field values that occupy exactly the same box whether they are
being displayed or edited.

## How is it used?

```html
<div class="ile-r">
  <dt>Project name</dt>
  <dd><input class="ile-i" value="EaseMotion CSS" aria-label="Project name" /></dd>
</div>
```

## Why is it useful?

Inline editing is usually implemented by swapping a `<span>` for an `<input>` on
click. Those two elements never have identical metrics — inputs have their own
default padding, border, font inheritance and line height — so the value visibly
jumps and the row height changes at the exact moment the user clicks. It also
means the field is unreachable by keyboard until a click has happened, because a
span is not focusable.

Keeping the input present at all times and simply making its chrome transparent
removes both problems. The metrics are identical because it is the same element,
and the value is in the tab order, so a keyboard user reaches edit mode by
tabbing.

The hover state gives it away as editable — a transparent input looks like static
text, so without the border hint and the pencil affordance, users do not discover
the feature. The pencil hides on `:focus-within` since once you are editing, the
hint is redundant.

Each input carries an `aria-label` matching its `<dt>`, because the visual
label-value relationship in a definition list is not automatically an accessible
name for the control.
