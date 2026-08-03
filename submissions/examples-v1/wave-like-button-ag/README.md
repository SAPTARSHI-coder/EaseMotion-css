# Wave Like Button

A retro-inspired, pure CSS toggle button component featuring an organic fluid wave animation that fills the button on hover/focus and locks in the liked state.

## Questions & Answers

1. **What does this do?**  
   It renders a Retrowave-themed like button that triggers a rising water wave transition upon hover/focus, and fully fills with a solid neon gradient when clicked to toggle the "Liked" state.

2. **How is it used?**  
   Embed the checkbox input followed by a label button and its inner contents (such as the SVG icon and status text):

   ```html
   <div class="wave-like-container">
     <input 
       type="checkbox" 
       id="wave-like-checkbox" 
       class="wave-like-checkbox"
     >
     <label 
       for="wave-like-checkbox" 
       class="wave-like-btn"
       aria-label="Like content"
     >
       <span class="wave-container" aria-hidden="true"></span>
       <span class="btn-content">
         <svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true">
           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
         </svg>
         <span class="unliked-text">Like</span>
         <span class="liked-text">Liked</span>
       </span>
     </label>
   </div>
   ```

3. **Why is it useful?**  
   It provides an ultra-lightweight, highly reusable, and accessible interaction block for modern/retro user interfaces without the overhead of JavaScript.
