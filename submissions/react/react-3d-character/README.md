# 3D Sketchfab Character Portfolio (`ease-sketchfab-avatar-db`)

## What does this do?
Displays interactive 3D character models directly from Sketchfab inside claymorphism window cards.

## How is it used?
Pass the Sketchfab embed URL inside an iframe positioned in the `.card-viewport` container:

```html
<div class="avatar-card theme-olive">
  <div class="card-viewport">
    <iframe src="[https://sketchfab.com/models/](https://sketchfab.com/models/)<MODEL_ID>/embed?autostart=1" class="sketchfab-iframe"></iframe>
  </div>
</div>