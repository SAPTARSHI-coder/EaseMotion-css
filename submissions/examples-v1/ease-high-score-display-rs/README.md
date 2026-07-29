# ease-high-score-display

A CSS animation component for displaying animated high-score leaderboards with pulse effects.

## Usage

Open demo.html in a browser. Click the **Toggle** button to reveal score rows with staggered slide-in animation. The top score pulses with a golden glow effect.

## Custom Properties

| Property         | Default | Description              |
| ---------------- | ------- | ------------------------ |
| --primary        | #6c63ff | Primary accent color     |
| --bg             | #f8fafc | Page background          |
| --surface        | #fff    | Card background          |
| --text           | #1e293b | Text color               |
| --muted          | #64748b | Muted text color         |
| --border         | #e2e8f0 | Border color             |
| --gold           | #f59e0b | Gold (1st place) color   |
| --silver         | #94a3b8 | Silver (2nd place) color |
| --bronze         | #d97706 | Bronze (3rd place) color |
| --score-color    | #6c63ff | Score number color       |
| --rank-size      | 32px    | Rank badge diameter      |
| --duration       | 0.5s    | Transition speed         |
| --pulse-duration | 2s      | Pulse animation cycle    |

## Notes

CSS handles slide-in and pulse animations. JavaScript toggles visibility state and staggered delays.
