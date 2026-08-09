# React Shimmer Modal

A reusable React modal component with a dark minimalist interface and shimmer pulse animation.

---

## Features

- Dark UI
- Responsive
- Shimmer animation
- Smooth opening animation
- Custom title
- Custom content
- Confirm & Cancel buttons

---

## Props

| Prop | Type | Description |
|------|------|-------------|
| isOpen | boolean | Controls modal visibility |
| title | string | Modal title |
| children | ReactNode | Modal body |
| onClose | function | Close callback |
| onConfirm | function | Confirm callback |

---

## Usage

```jsx
import ShimmerModal from "./ShimmerModal";

function App(){

const [open,setOpen]=useState(true);

return(

<>

<ShimmerModal
isOpen={open}
title="Delete File"
onClose={()=>setOpen(false)}
onConfirm={()=>alert("Deleted")}
>

Are you sure you want to delete this file?

</ShimmerModal>

</>

);

}
```

---

## Customization

Edit style.css to change

- colors
- animation speed
- border radius
- shadow