# Terminal Typewriter

A terminal window component that types out commands character by character with a blinking cursor.

## Features

- Authentic terminal chrome (traffic-light dots, dark background)
- Sequential command execution with configurable speed
- Blinking cursor follows the last typed character
- Restart button to replay all commands

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tt-duration` | `0.3s` | Transition speed for controls |
| `--tt-bg` | `#0d1117` | Terminal background |
| `--tt-text-color` | `#00ff41` | Terminal text / prompt |
| `--tt-prompt-color` | `#ffaa00` | `$` prompt character |
| `--tt-cursor-color` | `#00ff41` | Blinking cursor indicator |

## Interactive JS

Characters are inserted one by one via `setTimeout`. The speed slider adjusts the delay between characters (20 – 200 ms). On restart the terminal clears and replays from the first command.
