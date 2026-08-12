# Mail Send Envelope

An envelope icon component that animates the sending process: flap closes, envelope folds and flies upward, a checkmark appears, and a new letter slides into view.

## Usage

Include `style.css` and `demo.html` in your project. Customise animations via CSS custom properties:

| Property | Default | Description |
|---|---|---|
| `--mse-duration` | `0.6s` | Base animation duration |
| `--mse-envelope-color` | `#4a90d9` | Envelope body colour |
| `--mse-flap-color` | `#357abd` | Envelope flap colour |
| `--mse-letter-color` | `#f5f5f5` | Letter paper colour |
| `--mse-check-color` | `#27ae60` | Checkmark colour |

## Behaviour

- Click **Send** to trigger the animation sequence.
- The *fast*, *slow*, and *bounce* examples demonstrate different `--mse-duration` settings.
