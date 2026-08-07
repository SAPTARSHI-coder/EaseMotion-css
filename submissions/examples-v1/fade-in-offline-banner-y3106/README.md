# Fade In Offline Banner

1. **What does this do?**  
   It provides an interactive, CSS-only connection warning banner that fades in and slides down elegantly from the top of the viewport when offline state is triggered, accompanied by a pulsing red indicator light.

2. **How is it used?**  
   Implement the structure using a checkbox trigger and the standard warning container (`offline-banner`) paired with sibling selectors:
   ```html
   <input type="checkbox" id="connection-state-trigger" class="status-checkbox" />
   
   <!-- Sibling banner controlled via checkbox checked state -->
   <div class="offline-banner" role="alert">
     <div class="banner-body">
       <span class="warning-pulse"></span>
       <div class="banner-message">
         <strong class="banner-title">NO CONNECTION DETECTED</strong>
         <p class="banner-desc">Changes will sync once restored.</p>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   Offline warnings are critical indicators for Web Apps and modern CMS networks. Building this component purely in CSS reduces initial script initialization lag, ensuring that connectivity alerts display with high reliability and zero runtime load overhead.
