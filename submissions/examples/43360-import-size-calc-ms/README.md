# Modular CSS Import Size Calculator

Resolves #43360.

### What does this do?
Provides an interactive form widget allowing developers to select specific EaseMotion animation modules (Fades, Bounces, Hovers) and calculates the estimated Gzipped file size of their custom CSS bundle.

### How is it used?
Users check the boxes for the features they intend to use. Javascript computes the sum of the data-size attributes and dynamically updates the total badge, accompanied by a subtle EaseMotion `.ease-pop` animation to draw the user's eye to the updated number.

### Why is it useful?
Performance-conscious developers are hesitant to import massive CSS libraries just for one or two animations. By visually demonstrating that EaseMotion is strictly modular, developers gain confidence that they only pay the performance cost for the animations they actually use.
