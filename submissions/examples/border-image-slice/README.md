# Border Image Slice

Demonstrates how `border-image-slice` divides a source image into nine regions (four corners, four edges, and an optional center). Compares number, percentage, fill, and asymmetric slice values.

## Slice Mechanism

Slice lines are positioned inward from each edge of the source image. Corner slices are placed at element corners, edge slices tile along sides, and the center is discarded unless `fill` is included. The `border-image-repeat` property controls how edge slices are rendered.

## Usage

Open `demo.html` to see each slice variant on colored gradient source images. A grid diagram visualizes the nine-region slicing model. Edit `border-image-slice` values in `style.css` to experiment with different slicing strategies.
