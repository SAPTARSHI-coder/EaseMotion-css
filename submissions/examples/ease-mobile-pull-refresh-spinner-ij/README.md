# ease-mobile-pull-refresh-spinner
A mobile feed header with a pull-to-refresh gesture: a ring spinner rotates against a dashed track as the feed rebuilds.
## Run
Open `demo.html` directly in a browser to watch the pull loop.
## Notes
- Pull progress is exposed as `--pull-progress` and drives the spinner rotation.
- The feed cards shuffle to the back on each completed pull.