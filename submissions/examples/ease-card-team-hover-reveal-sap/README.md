# ease-card-team-hover-reveal-sap

**Level: Intermediate**

A team-member card where name/title are always partially visible, and social links reveal further on hover.

## Usage

```html
<div class="team-card-sap">
  <img src="member.jpg" alt="...">
  <div class="team-info-sap">
    <h4>Name</h4>
    <p>Role</p>
    <div class="team-social-sap">Social links</div>
  </div>
</div>
```

## Notes

- Info panel starts partially visible (`translateY(60%)`) so name/title show by default — only the social row is fully hidden until hover.
- Social row fades in with a slight delay (`0.1s`) after the panel slides up, for a layered reveal feel.

## Browser support

All modern browsers.