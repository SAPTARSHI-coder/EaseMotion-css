# line-clamp-fade

## 1. What does this do?
An SCSS mixin that clamps text to a fixed number of lines and fades the
final line out into the background color, instead of cutting it off with
a hard ellipsis.

## 2. How is it used?

```scss
@use 'line-clamp-fade' as *;

.card-excerpt {
  @include line-clamp-fade($lines: 3, $fade-color: #ffffff);
}

// Optional "Read more" expanded state
.card-excerpt.is-expanded {
  @include line-clamp-fade-expanded;
}
```

```html
<p class="card-excerpt">
  Long paragraph text that will be clamped to three lines with a
  smooth fade at the bottom edge instead of an abrupt "..." cut-off...
</p>
<button onclick="this.previousElementSibling.classList.toggle('is-expanded')">
  Read more
</button>
```

## 3. Why is it useful?
Saves contributors from hand-writing `-webkit-line-clamp` boilerplate every
time, and the gradient fade looks more deliberate and polished than a bare
ellipsis — fitting EaseMotion CSS's animation-first, curated design
philosophy. The optional expand mixin also makes it trivial to pair with a
"Read more" toggle.