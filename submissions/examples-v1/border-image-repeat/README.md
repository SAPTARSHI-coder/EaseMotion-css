# Border Image Repeat

Compares the four `border-image-repeat` values — `stretch`, `repeat`, `round`, and `space` — and their two-axis combinations with visual examples and a reference table.

## Tile Behaviors

Each value handles edge tiling differently: `stretch` scales a single tile across the full side; `repeat` tiles at original size (possibly clipping); `round` scales tiles for an exact integer fit; `space` inserts even gaps between unmodified tiles. Two-value syntax controls horizontal and vertical axes independently.

## Usage

Open `demo.html` in any modern browser. Each card shows a repeating-diagonal-line source image with one of the four repeat modes or a two-axis combination. The comparison table summarizes tiling, scaling, clipping, and gap behavior. Modify `border-image-repeat` values in `style.css` to experiment.
