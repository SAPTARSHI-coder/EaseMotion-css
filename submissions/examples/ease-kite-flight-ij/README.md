# Kite Flight

A diamond kite bobs on an invisible wind while its striped tail whips behind it.

## How is it used?

The kite body follows a bobbing path via `transform` keyframes; the tail is a tiny separate element with its own rapid `alternate` whip:

```css
.kite {
  animation: kite-bob 5.5s ease-in-out infinite;
}

@keyframes kite-bob {
  0%, 100% {
    transform: translate(-50%, 0) rotate(-4deg);
  }
  30% {
    transform: translate(-50%, -20px) rotate(3deg);
  }
}

.tail {
  animation: tail-whip 1.1s ease-in-out infinite alternate;
}
```

## Why is it useful?

Splitting motion into a slow "body" loop and a fast "attachment" loop sells secondary motion — the same pairing used for cursor trails, pendulums, and springs. A fast `alternate` tail reads as momentum and weight without physics code.
