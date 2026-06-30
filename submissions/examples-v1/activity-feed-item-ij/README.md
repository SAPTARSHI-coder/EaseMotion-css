# Activity Feed Item

1. What does this do? An activity feed list where new items slide in from the top with a translateY(-10px) + opacity 0→1 animation. Existing items reflow smoothly to make room for new additions. The "Add Event" button demonstrates the entrance animation.

2. How is it used? Add a `.feed-list` container with `.feed-item` children. New items are prepended with the `.new-item` class. On the next frame, add `.visible` to trigger the CSS transition. The cubic-bezier easing (0.34, 1.56, 0.64, 1) provides a spring-like entrance.

3. Why is it useful? Activity feeds are a common UI pattern in dashboards and social apps. The slide-in animation gives clear visual feedback that new content has arrived, without being disruptive.
