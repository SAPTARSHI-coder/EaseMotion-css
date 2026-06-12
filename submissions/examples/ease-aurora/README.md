# ease-aurora

## What does this do?

Applies a smooth, looping Aurora Borealis / Northern Lights animated background using pure CSS gradient keyframes — no JavaScript, no SVG, no dependencies.

## How is it used?

Markup



<!-- Basic aurora background -->
<section class="ease-aurora">
  <h1>Hero Section</h1>
</section>

<!-- Speed variants -->
<div class="ease-aurora ease-aurora-slow">Gentle, slow aurora</div>
<div class="ease-aurora ease-aurora-fast">Energetic, fast aurora</div>

<!-- Color theme variants -->
<div class="ease-aurora ease-aurora-green">Green dominant</div>
<div class="ease-aurora ease-aurora-purple">Purple dominant</div>
<div class="ease-aurora ease-aurora-blue">Blue dominant</div>

<!-- Works on images and any block element -->

<img class="ease-aurora" src="photo.jpg" alt="Profile" 
     style="width:120px; height:120px; border-radius:50%;" />

### Class Reference

| Class                | Description                              |
| -------------------- | ---------------------------------------- |
| `ease-aurora`        | Base class — default 8s aurora animation |
| `ease-aurora-slow`   | Gentle 16s animation                     |
| `ease-aurora-fast`   | Energetic 4s animation                   |
| `ease-aurora-green`  | Green-dominant color theme               |
| `ease-aurora-purple` | Purple-dominant color theme              |
| `ease-aurora-blue`   | Blue-dominant color theme                |
| `ease-aurora-pause`  | Pauses animation on hover                |

### CSS Custom Property

CSS


/_ Override duration directly _/
.my-element {
--aurora-duration: 12s;
}

## Why is it useful?

Aurora/northern-lights backgrounds are one of the most popular visual trends in modern UI — seen in hero sections, loading screens, and premium SaaS products. EaseMotion CSS currently has no ambient background animation utility.

This fills that gap with a single readable class that produces a stunning, atmospheric visual using only background-size, background-position, and CSS @keyframes. It follows EaseMotion’s core philosophy: powerful visual result from one class, zero JavaScript, fully composable with existing utilities like ease-fade-in and ease-delay-\*.

Works on any block element: div, section, img, header.
