
# Animated Cookie Consent Banner Submission

## 1. What does this do?
It provides a modern, animated cookie consent banner with smooth slide-in animations, expandable preference sections, individual cookie category toggles, and persistent user preferences using localStorage. Perfect for GDPR compliance and privacy-focused websites.

## 2. How is it used?
The banner automatically appears on first visit (checks localStorage for existing consent). Users can accept all cookies, reject all (except necessary), or customize preferences. Preferences are saved to localStorage and persist across page reloads. The banner can be reset for demo purposes.

## 3. Why is it useful?
- Essential component for GDPR compliance
- Smooth slide-in animation from bottom
- Expandable cookie preferences section
- Individual toggles for each cookie category (necessary, performance, functional, marketing)
- Persistent user preferences using localStorage
- Three action options: Accept All, Reject All, Save Preferences
- Cookie policy and privacy policy links
- Toast notifications for user feedback
- Fully accessible with ARIA labels
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Easy to customize colors, positions, and cookie categories
- Maintainer can easily standardize this as `.ease-cookie-consent-[YOUR_INITIALS]` in the core library.