# 3D Pastel Carousel Architectural Specification

## Abstract

The 3D Pastel Carousel component is a hardware-accelerated, interactive 3D carousel layout constructed entirely without JavaScript. It leverages native CSS transform capabilities, 3D perspective space, and selector-driven state management to deliver smooth 60fps transitions and an elegant pastel aesthetic.

## 3D Geometry & Math

### Perspective & Scene Hierarchy
The 3D environment relies on a structural hierarchy between the outer viewport wrapper and the inner scene container:
- **Camera Viewport (`.ease-carousel-wrapper`)**: Applies `perspective: 1200px` to define the distance between the user's eye (viewpoint) and the `z=0` plane. This establishes the vanishing point and depth perception.
- **Physical 3D Space (`.ease-scene`)**: Uses `transform-style: preserve-3d` to create a true three-dimensional coordinate system. This enables child elements to position and rotate independently along the X, Y, and Z axes rather than being flattened into a 2D composite layer.

### Cylindrical Projection Mathematics
The 5 carousel cards are arranged around a central vertical axis using cylindrical coordinates:
- **Angular Division**: A full 360° circle divided into 5 equal card slots yields angular increments of exactly 72° per card ($\frac{360^\circ}{5} = 72^\circ$).
- **Radius Offset**: Each card (`.ease-card-N`) is rotated around the Y-axis by its respective angle ($N \times 72^\circ$) and translated forward by a distance of `250px` (`translateZ(250px)`). This outward displacement defines the cylinder's radius and prevents card intersection.

| Card | Y-Axis Rotation (`rotateY`) | Z-Axis Offset (`translateZ`) | Pastel Color |
| :--- | :--- | :--- | :--- |
| Card 1 | `0deg` | `250px` | `#ffb3ba` (Pastel Pink) |
| Card 2 | `72deg` | `250px` | `#ffdfba` (Pastel Orange) |
| Card 3 | `144deg` | `250px` | `#ffffba` (Pastel Yellow) |
| Card 4 | `216deg` | `250px` | `#baffc9` (Pastel Green) |
| Card 5 | `288deg` | `250px` | `#bae1ff` (Pastel Blue) |

## Zero-JS State Management

State management is achieved without JavaScript runtime logic by utilizing hidden HTML `<input type="radio">` state controllers alongside the `:checked` pseudo-class and General Sibling Combinator (`~`).

### State Flow & Scene Counter-Rotation
1. **Radio State Controllers**: Hidden inputs (`#c-1` through `#c-5`) share the same `name="carousel"` attribute to enforce mutually exclusive active states.
2. **Scene Counter-Rotation**: When a specific radio controller is checked, the `.ease-scene` element rotates by the inverse of that card's angle (`-N * 72deg`) to align the target card facing front (`0deg` relative to camera viewer):
   - `#c-1:checked ~ .ease-scene` $\rightarrow$ `rotateY(0deg)`
   - `#c-2:checked ~ .ease-scene` $\rightarrow$ `rotateY(-72deg)`
   - `#c-3:checked ~ .ease-scene` $\rightarrow$ `rotateY(-144deg)`
   - `#c-4:checked ~ .ease-scene` $\rightarrow$ `rotateY(-216deg)`
   - `#c-5:checked ~ .ease-scene` $\rightarrow$ `rotateY(-288deg)`
3. **Navigation Dot Synchronization**: `<label>` elements connected via `for="c-N"` trigger the hidden inputs. Selector patterns like `#c-N:checked ~ .ease-nav [for="c-N"]` highlight the active dot indicator corresponding to the displayed card.
