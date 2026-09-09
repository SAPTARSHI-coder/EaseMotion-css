# CineVerse

CineVerse is a premium, single-page Movie Discovery Web Application designed with a focus on modern aesthetics, performance, and user experience. It leverages pure HTML, CSS, and JavaScript without any external frameworks or build tools.

## 🌟 Features

- **Premium UI/UX**: Glassmorphism, smooth transitions, hover animations, and a polished dark/light mode experience.
- **Dynamic Content**: A comprehensive mock dataset simulates a real-world movie database.
- **Smart Search & Filtering**: Instant, debounced search functionality alongside genre and sorting filters.
- **Personalization**: LocalStorage persistence for Watchlist, Favorites, and Recently Viewed movies.
- **Fully Responsive**: Adapts seamlessly from desktop (sidebar layout) to mobile (bottom navigation layout).
- **Accessibility**: Keyboard navigable, semantic HTML, and ARIA attributes for screen readers.
- **Performance Optimized**: Event delegation, DOM efficient rendering, and custom scrollbars.

## 📸 Screenshots

*(Placeholders for screenshots)*

![Desktop Dashboard](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80)
*Desktop Dark Mode View*

![Movie Modal](https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80)
*Detailed Movie Modal*

## 📁 Folder Structure

```text
CineVerse/
├── demo.html    # Core semantic structure and embedded JavaScript logic
├── style.css    # Comprehensive styles, variables, and animations
└── README.md    # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, templates, dialog elements.
- **CSS3**: CSS Variables, Grid, Flexbox, Keyframes, Media Queries.
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, LocalStorage API, Event Delegation.
- **FontAwesome (via CDN)**: For scalable vector icons.

## 🚀 Installation & Usage

Since CineVerse uses zero build tools and no external frameworks, running it is incredibly simple:

1. Clone or download this repository.
2. Navigate to the `CineVerse` folder.
3. Open `demo.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

That's it! No `npm install`, no servers required.

## 🎨 Customization

### Themes
You can modify the core color palette by editing the CSS variables in the `:root` pseudo-class at the top of `style.css`. Both light and dark themes are configurable.

### Data
The movie dataset is defined as an array of objects within the `<script>` tag in `demo.html`. You can easily swap this out to use a real API (like TMDB) using `fetch()`.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

CineVerse is built with accessibility in mind. Interactive elements are reachable via keyboard (`Tab`), focus states are maintained, and color contrast ratios adhere to standard guidelines.

## ⚡ Performance

- **Debounced Search**: Prevents excessive rendering during rapid typing.
- **Event Delegation**: Attaches single listeners to parent containers instead of hundreds of listeners to individual cards.
- **CSS Hardware Acceleration**: Uses `transform` and `opacity` for animations to ensure 60fps rendering.

## 🛣️ Future Roadmap

- [ ] Integration with TMDB API for live data.
- [ ] User authentication system.
- [ ] Advanced movie trailers integration (YouTube Player API).
- [ ] Infinite scrolling with Intersection Observer for API pagination.

## 📄 License

This project is open-source and available under the MIT License.

## 🤝 Contributing Guidelines

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 👏 Credits

- UI Inspiration from Netflix, Letterboxd, and IMDb.
- Placeholder images from Unsplash.
- Icons provided by FontAwesome.
