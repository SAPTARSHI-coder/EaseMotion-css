1. What does this do? Creates an interactive 1-5 star rating with hover preview (stars highlight up to the hovered position), click-to-rate, and a read-only display mode.
2. How is it used? Use radio inputs and labels inside `.star-rating` with `direction: rtl` for the CSS-only hover chain effect. Add `.star-rating--readonly` for display-only mode.
3. Why is it useful? A star rating is a standard UI pattern for reviews and feedback — this implementation uses pure CSS for hover highlighting (no JS dependency for the core interaction) and is fully keyboard accessible via native radio inputs.
