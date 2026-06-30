# ease-container-query

Animation utilities that adapt their behavior based on parent container size using CSS Container Queries. Zero JavaScript required.

## Usage

Wrap your component in an ease-cq container, then apply animation classes to children:

    <div class="ease-cq">
      <div class="ease-cq-slide">Adapts to container width</div>
    </div>

## Classes

| Class             | Description                                            |
| ----------------- | ------------------------------------------------------ |
| ease-cq           | Sets container-type: inline-size on wrapper            |
| ease-cq-size      | Sets container-type: size on wrapper                   |
| ease-cq-slide     | Slide-up entrance — distance adapts to container width |
| ease-cq-fade      | Fade-in entrance — duration adapts to container width  |
| ease-cq-zoom      | Zoom entrance — intensity adapts to container width    |
| ease-cq-layout    | Stacks vertically in narrow, row in wide (480px+)      |
| ease-cq-text      | Font size adapts to container width                    |
| ease-cq-hide      | Hidden in containers under 350px                       |
| ease-cq-fast      | Forces fast animation duration                         |
| ease-cq-slow      | Forces slow animation duration                         |
| ease-cq-delay-100 | 100ms animation delay                                  |
| ease-cq-delay-200 | 200ms animation delay                                  |
| ease-cq-delay-300 | 300ms animation delay                                  |
| ease-cq-delay-500 | 500ms animation delay                                  |

## Container Breakpoints

| Container Width | Behavior                                    |
| --------------- | ------------------------------------------- |
| under 400px     | Subtle animations (8px slide, fast fade)    |
| 400px - 699px   | Medium animations (20px slide, normal fade) |
| 700px+          | Full animations (40px slide, slow fade)     |

## Browser Support

Requires CSS Container Queries (Chrome 105+, Edge 105+, Firefox 110+, Safari 16+). Falls back gracefully — elements remain visible with base animation in unsupported browsers.

## Notes

- Always apply ease-cq (or ease-cq-size) to the parent wrapper, not the animated element
- Combine with other ease-\* utilities freely
- Unlike viewport media queries, container queries respond to the component's own layout context

## Submission

- **Author:** sudha09-git
- **Issue:** #986
- **Files:** style.css, demo.html
