# Mention Highlight Pulse Animation

## What does this do?

When a user is @mentioned in a chat message or notification, their username tag briefly pulses with a vibrant highlight color for 3 cycles and then settles to a subtle static highlight, capturing their attention without becoming permanently distracting.

## How is it used?

Wrap the mention text in a span with the mention highlight class:

```html
<span class="mention-pulse">@sagar_k</span>
```

## Why is it useful?

In chat apps (like Slack, Discord, or Microsoft Teams) and social platforms, user mentions are the primary way to call someone's attention. A static highlight can easily blend into the text, while a permanent flashing animation is highly annoying and distracting. A brief, 3-cycle pulse offers the perfect compromise by flashing momentarily upon message arrival and then resting into a soft highlight.

## Tech Stack

- HTML
- CSS (keyframe animations)

## Preview

Open `demo.html` directly in your browser to see the effect.
