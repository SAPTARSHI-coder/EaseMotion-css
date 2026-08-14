# CSS Liquid Water Drop

A hyper-realistic 3D water droplet that distorts the background behind it.

## Features

- **Pure CSS**: Fully built with HTML and CSS.
- **Backdrop Refraction**: Uses `backdrop-filter: blur() brightness() contrast()` to simulate light refracting through water, distorting the shapes behind it.
- **Inset Shadows**: Carefully layered `box-shadow: inset ...` properties give the droplet 3D volume, creating deep shadows on one side and inner highlights on the other.
- **Specular Highlights**: Pseudo-elements (`::before`, `::after`) create the sharp, bright reflections of a light source.
- **Organic Morphing**: An animated `border-radius` makes the droplet wobble and feel like a dynamic liquid rather than a rigid circle.

## Preview

Open `demo.html` in your browser to view the liquid drop.
