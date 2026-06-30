# ease-scrollbar-hide

Hides the visual scrollbar while keeping the element scrollable.

## Usage

Include the `style.css` in your project and apply the class:

```html
<div class="ease-scrollbar-hide" style="overflow-y: scroll;">
  Scrollable content without visible scrollbar
</div>
```

## CSS Reference

```css
.ease-scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ease-scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

## Demo

Open `demo.html` in a browser to see the component in action.
