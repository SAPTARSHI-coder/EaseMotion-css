# Cloud Sync

1. What does this do? A cloud sync icon with arrows that rotate continuously around a subtly pulsing cloud. A status dot blinks amber during active syncing and turns solid green when synced. Built entirely with CSS pseudo-elements.

2. How is it used? Add a `.sync-icon` with `.cloud-body`, `.cloud-arrow`, and `.sync-status` elements. The arrows use `@keyframes arrow-spin` for continuous rotation. The cloud body pulses with `@keyframes cloud-pulse`. The status dot blinks or goes solid based on `.done` class.

3. Why is it useful? Cloud sync is a common status indicator in file storage, backup, and collaboration apps. The rotating arrows + pulsing cloud provide clear visual feedback that data is actively being synchronized.
