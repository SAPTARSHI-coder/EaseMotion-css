# EaseMotion CSS — Text Scramble Reveal

A cinematic terminal-style text decryption effect that rapidly cycles through random characters before resolving into the final readable text.

This effect is ideal for:

* Developer portfolios
* Cyberpunk interfaces
* Loading screens
* Hero section headlines
* Command-line inspired UI components
* Technology product showcases

## Preview

The animation simulates an encrypted text stream that progressively decrypts into its final state, creating a premium hacker-terminal aesthetic.

## Features

* Lightweight implementation
* Smooth text decryption effect
* Reusable utility class
* Monospace terminal-inspired styling
* Customizable reveal speed
* Customizable character pool
* No external dependencies

## Usage

Apply the utility class and provide the target text using the `data-text` attribute.

```html
<h2
  class="ease-scramble-reveal"
  data-text="INITIALIZING..."
>
  INITIALIZING...
</h2>
```

## Customization

### Change Reveal Speed

Inside the script:

```js
const SCRAMBLE_INTERVAL = 35;
const REVEAL_SPEED = 0.4;
```

Lower interval values create faster updates.

Higher reveal speed values cause characters to settle more quickly.

### Change Character Pool

```js
const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
```

Replace with your preferred symbols or characters.

## Example Use Cases

### Hero Heading

```html
<h1
  class="ease-scramble-reveal"
  data-text="WELCOME TO THE FUTURE"
>
  WELCOME TO THE FUTURE
</h1>
```

### Loading Screen

```html
<h2
  class="ease-scramble-reveal"
  data-text="SYSTEM BOOTING..."
>
  SYSTEM BOOTING...
</h2>
```

### Developer Portfolio

```html
<h2
  class="ease-scramble-reveal"
  data-text="FULL STACK DEVELOPER"
>
  FULL STACK DEVELOPER
</h2>
```

## Browser Support

Works in all modern browsers supporting:

* CSS animations
* Pseudo-elements
* ES6 JavaScript

## Files

```text
submissions/
└── examples/
    └── ease-scramble-reveal/
        ├── demo.html
        ├── style.css
        └── README.md
```

## By
[Pari Dubey](https://github.com/pari-dubey1)