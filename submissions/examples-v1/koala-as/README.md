# Koala

### What does this do?

It shows a koala clinging to a eucalyptus trunk. It shifts its grip gently as it holds on, blinks its eyes, and the leaves either side of it rustle. Under reduced motion the koala and leaves hold still.

### How is it used?

```html
<div class="koala">
  <span class="eark le"></span>
  <span class="bodyk"></span>
  <div class="headk"><span class="facek"></span><span class="nosek"></span></div>
  <span class="armk ak1"></span>
</div>
```

The koala's signature fluffy ears are a `repeating-conic-gradient` of fine light strands layered over a pale disc, so the fur texture comes from one property rather than dozens of elements. The big dark nose is a rounded gradient shape, and the whole animal shifts on a slow `cling` so it reads as gripping the trunk rather than sitting still.

### Why is it useful?

Wildlife, sleepy, and "hang in there" or conservation themes use a koala. This builds a clinging koala with pure CSS shapes and animation, no images, with a reduced motion fallback.
