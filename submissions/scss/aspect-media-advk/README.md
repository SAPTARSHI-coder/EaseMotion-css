# aspect-media-advk

Media wrappers that reserve their space before the asset loads, eliminating
layout shift.

## Configuration

```scss
@use "aspect-media-advk" as am with (
  $ratios: ("square": 1, "video": math.div(16, 9), "banner": 3)
);
```

## API

| Mixin | Purpose |
|---|---|
| `aspect($ratio)` | Reserve space; children fill it with `object-fit: cover`. |
| `media-fade($ratio, $duration)` | As above, plus a fade-in once decoded. |
| `embed($ratio)` | Responsive iframe embed. |

## Usage

```scss
@use "aspect-media-advk" as am;

.thumb { @include am.aspect("square"); }
.hero { @include am.media-fade("wide", 400ms); }
.map { @include am.embed("video"); }
```

```html
<figure class="hero">
  <img src="hero.jpg" alt="" onload="this.dataset.loaded = 'true'" />
</figure>
```

## Why it fits EaseMotion CSS

Cumulative Layout Shift is the motion users never asked for. An image without
reserved space collapses to zero height until it loads, then pushes everything
below it down — usually just as someone starts reading or reaches for a link. It
is the most disruptive movement on most pages, and no amount of tasteful animation
elsewhere compensates for it.

`aspect-ratio` reserves the box from first paint, so the asset arrives into space
already held for it. That makes the fade-in worth having: fading an image in is
only pleasant if it is not simultaneously shoving the layout around.

Naming the ratios keeps them consistent across a codebase — `math.div(16, 9)` written by
hand eventually becomes `1.77` somewhere, and the two do not round identically at
all widths.

The placeholder background gives the reserved box a visible presence rather than a
blank gap, and it re-tints in dark mode so it does not flash white. Under reduced
motion the fade is dropped and images appear immediately, since the space was
never going to shift anyway.
