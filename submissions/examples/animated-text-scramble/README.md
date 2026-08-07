# ease-text-scramble

**Level: Advanced**

Text that briefly scrambles through random characters before revealing the final string.

## Usage

```html
<h1 class="ease-text-scramble" data-text="Your Text Here">Your Text Here</h1>
```

Call `scramble(element)` (included in `demo.html`) to trigger.

## Notes

- `totalFrames` controls resolve speed — higher means a slower reveal.
- Set `data-text` to match the element's initial content so it degrades gracefully without JS.

## Browser support

All modern browsers.