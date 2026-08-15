# Breathing Chat Bubble Component

Resolves #42396.

### What does this do?
Adds a Breathing Chat Bubble component to EaseMotion CSS tailored for Medical Dashboards. The typing indicator bubble utilizes a slow, 4-second `breathe` animation that gently expands the bubble and shifts its background tint. The internal dots follow a staggered vertical translation mirroring a calm heartbeat or breath cycle.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. The `.typing-indicator` div acts as the container for the breathing bubble.

### Why is it useful?
Medical interfaces need to convey calm, stability, and trust. Fast, frantic loading animations can induce anxiety. A slow, rhythmic breathing animation provides system status (e.g. "Doctor is typing") while maintaining a soothing UI aesthetic.
