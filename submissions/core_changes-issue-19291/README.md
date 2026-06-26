# Animated Star Rating Widget

1. What does this do? Provides a pure-CSS interactive star rating widget with hover bounce animation, selection fill, and live rating text, using hidden radio inputs and the reverse-flex sibling combinator trick.
2. How is it used? Place hidden radio inputs (in reverse order, highest value first) with `<label for="...">★</label>` inside a `flex-direction: row-reverse` container. Stars fill left-to-right on hover and stay filled on click.
3. Why is it useful? Star ratings are a universal UI pattern for reviews, ratings, and feedback forms. This component follows EaseMotion CSS's zero-JavaScript philosophy with smooth bounce transitions, reduced-motion support, and dark mode compatibility.
