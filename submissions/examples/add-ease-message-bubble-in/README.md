# Animation: add-ease-message-bubble-in

1. **What does this do?**  
   It applies a sleek, elastic slide-and-scale entrance animation to chat message bubbles, anchoring their animation origin points dynamically to their bottom-left or bottom-right corners to make them appear to sprout from their respective chat tails.

2. **How is it used?**  
   Apply the `.message-bubble-in` class to your chat bubble container, accompanied by the `.bubble-in-left` modifier for incoming messages (sprouts from the bottom-left corner) or `.bubble-in-right` for outgoing messages (sprouts from the bottom-right corner):
   
   ```html
   <!-- Incoming chat bubble -->
   <div class="chat-bubble message-bubble-in bubble-in-left">
     <p>Hello there! I'm an incoming message.</p>
   </div>

   <!-- Outgoing chat bubble (staggered delay example) -->
   <div class="chat-bubble message-bubble-in bubble-in-right" style="--bubble-in-delay: 0.3s;">
     <p>Hi! I'm an outgoing message appearing with a slight delay.</p>
   </div>
   ```

3. **Why is it useful?**  
   It brings organic, app-like responsiveness to chat feeds, helpdesk popups, and conversational AI interfaces. By prioritizing hardware-accelerated CSS transforms/opacity and incorporating clean staggered delay parameters along with accessible prefers-reduced-motion fallback transitions, it aligns with EaseMotion CSS's standards of high performance and elegant user experience.
