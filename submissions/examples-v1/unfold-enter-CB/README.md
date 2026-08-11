# folding animation

this is an example of a enter folding animation

## Implementation Details
* Uses CSS 3D transforms (rotateX) for a realistic folding illusion.
* Employs transform-origin: top center to ensure the card hinges right from the top edge.
* Utilizes a custom cubic-bezier transition curve for a snappy, organic feel.

## Usage

```html
<div class="container">
<div class="unfold-card">

 <!-- anything else you want to add -->
    </div>
</div>
```


```css


.container {
    perspective: 1000px;
}

.unfold-card {
transform-origin: top center;
    
    
animation: unfoldEnter 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}


@keyframes unfoldEnter {
    0% {
        /* Start completely flat/rotated back, and invisible */
        transform: rotateX(-90deg);
        opacity: 0;
    }
    100% {
        /* Rotate smoothly to flat facing the camera */
        transform: rotateX(0deg);
        opacity: 1;
    }
}





```

