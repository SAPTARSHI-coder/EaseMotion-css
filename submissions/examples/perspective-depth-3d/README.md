# Perspective Depth 3D

Explores CSS `perspective` for 3D depth perception with a rotating cube scene. Demonstrates how varying perspective values (50px to 1000px) and `perspective-origin` positions affect the rendered 3D view.

## Depth Perception

Smaller perspective values (e.g., 50px) produce extreme foreshortening like a wide-angle camera lens. Larger values (1000px) approach orthographic projection where parallel lines remain nearly parallel. `perspective-origin` shifts the vanishing point, changing the viewer's angle relative to the scene.

## Usage

Open `demo.html` in a modern browser. Hover over any card to rotate its 3D cube. Compare the distortion levels across the four perspective tiers. Three additional cards demonstrate different `perspective-origin` values. All cubes use `transform-style: preserve-3d`. Edit `perspective` and `perspective-origin` values in `style.css` to experiment.
