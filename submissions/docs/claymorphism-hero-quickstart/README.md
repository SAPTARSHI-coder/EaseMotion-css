# Claymorphism Hero Banner (Quickstart Guide)

This guide documents the implementation of a Claymorphism Hero Banner Section. Claymorphism is a popular web design trend characterized by soft, inflated, 3D-looking elements that resemble physical clay or Play-Doh.

## 1. What is Claymorphism?

Claymorphism is achieved through a precise combination of three CSS properties:
1. **Generous Padding & Border Radius**: Elements must look thick and pillowy. Sharp corners destroy the illusion of soft clay.
2. **Light / Pastel Backgrounds**: Claymorphism relies on soft contrast. Pure whites or deep blacks are generally avoided for the base background.
3. **The Triple Box-Shadow**: This is the defining technical feature. It requires an outer drop shadow to lift the element, combined with two inner shadows to create the 3D volume.

## 2. The Box-Shadow Formula

The signature clay look is built by stacking `box-shadow` layers separated by commas.

```css
.clay-element {
    /* 1. Base shape */
    border-radius: 24px;
    background-color: #ffffff;
    
    /* 2. The Magic Sauce */
    box-shadow: 
        /* A: The Outer Elevation (Drop Shadow) */
        8px 8px 16px rgba(163, 177, 198, 0.4),
        
        /* B: The Depth Shadow (Dark Inner Shadow, anchored bottom-right) */
        inset -4px -4px 8px rgba(163, 177, 198, 0.2),
        
        /* C: The Highlight Shadow (Light Inner Shadow, anchored top-left) */
        inset 4px 4px 8px rgba(255, 255, 255, 0.9);
}
```

## 3. Interactive States

Because clay elements appear physical, their interactive states should mimic physical interactions. When a user presses a clay button, it should look like it's being pushed down into the screen.

We achieve this by inverting the inner shadows during the `:active` state.

```css
.clay-element:active {
    /* Push the element down slightly */
    transform: translateY(2px);
    
    /* Swap the shadow sizes/offsets to simulate a press */
    box-shadow: 
        4px 4px 8px rgba(163, 177, 198, 0.4), /* Reduced outer shadow */
        inset -2px -2px 4px rgba(163, 177, 198, 0.2), /* Shallower depth */
        inset 2px 2px 4px rgba(255, 255, 255, 0.9); /* Shallower highlight */
}
```

## 4. Accessibility

Like Neumorphism, Claymorphism often relies on soft colors that can fail WCAG contrast requirements. It is critical to:
1. Ensure your text colors maintain at least a 4.5:1 contrast ratio against the clay backgrounds.
2. Provide a stark, high-visibility `:focus-visible` outline for keyboard navigation, utilizing `outline-offset` to ensure the focus ring doesn't clip into the soft, rounded corners of your clay elements.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
