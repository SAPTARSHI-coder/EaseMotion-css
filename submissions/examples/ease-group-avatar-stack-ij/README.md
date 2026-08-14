# ease-group-avatar-stack

A stacked avatar group with hover expand animation. Avatars overlap partially in a compact stack and separate on hover to reveal full avatars. Includes a "+N" overflow indicator and tooltips.

## Features

- Overlapping avatar stack using negative margin
- Hover expands the stack, separating avatars with spring-like motion
- "+N" overflow indicator for remaining members
- Tooltip showing the member's name on hover
- Avatar scale effect on individual hover

## CSS Custom Property Control

- `--avatar-duration`: Duration of the expand/collapse transition
- `--avatar-size`: Width and height of each avatar
- `--avatar-border-color`: Border color around each avatar circle
- `--avatar-overlap`: Amount of overlap (negative margin) in the collapsed state
- `--avatar-expand-gap`: Additional gap applied on hover to separate avatars
- `--avatar-radius`: Border radius for the avatar shape
