# Avatar Status Ring

Avatars with a conic gradient status ring (colored arc) and status indicator dot. Ring color via `--as-color`. The ring spins continuously. The dot pulses for online status, solid for away, offline, and busy.

## Features

- Conic gradient ring with custom color via `--as-color`
- Continuous spin animation on the ring
- Status dot (online pulses, away/busy/offline solid)
- Avatar image via `--as-img` CSS variable
- Grid layout with labels

## Usage

Set `--as-color` for the ring color on `.avatar-ring`. Set the avatar image via `background-image` inline style on `.av-circle`. Add `.online`, `.away`, `.offline`, or `.busy` class to `.as-dot` for status.
