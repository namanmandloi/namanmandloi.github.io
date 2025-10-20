# Personal Homepage - GitHub Pages

A modern, responsive personal homepage built with HTML, CSS, and JavaScript, designed for deployment on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Built with semantic HTML and proper ARIA attributes
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Meta tags and semantic structure for search engines

## 🏗️ Project Structure

```
moksh_page/
├── .github/
│   └── copilot-instructions.md    # Development guidelines
├── index.html                     # Main HTML file
├── styles.css                     # CSS styles and responsive design
├── script.js                      # JavaScript for interactivity
└── README.md                      # This file
```

## 🚀 Getting Started

### 1. Clone or Download
- Download this project to your local machine
- Or clone it: `git clone <your-repo-url>`

### 2. Customize Your Content
Edit `index.html` to add your personal information:
- Replace "Your Name" with your actual name
- Update the hero section with your bio
- Add your projects in the projects section
- Update contact information and social links
- Replace placeholder images with your photos

### 3. Deploy to GitHub Pages

#### Method 1: GitHub Repository
1. Create a new repository on GitHub named `<your-username>.github.io`
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be available at `https://<your-username>.github.io`

#### Method 2: Project Repository
1. Create any repository name (e.g., "my-portfolio")
2. Upload files to the repository
3. Go to Settings → Pages
4. Select source branch (usually "main")
5. Your site will be available at `https://<your-username>.github.io/<repository-name>`

## 🎨 Customization Guide

### Colors
The color scheme is defined in CSS custom properties at the top of `styles.css`:
```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #f59e0b;   /* Accent color */
    --text-primary: #1f2937;      /* Main text color */
    /* ... more colors ... */
}
```

### Fonts
The project uses Inter font from Google Fonts. To change it:
1. Update the Google Fonts link in `index.html`
2. Update the `--font-family` variable in `styles.css`

### Sections
The homepage includes these main sections:
- **Hero**: Introduction and call-to-action
- **About**: Personal bio and technologies
- **Projects**: Portfolio showcase
- **Skills**: Technical skills organized by category
- **Contact**: Contact information and social links

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Technical Details

### HTML Structure
- Semantic HTML5 elements for accessibility
- Meta tags for SEO and social sharing
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images (when you add them)

### CSS Features
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables) for easy theming
- Smooth animations and transitions
- Mobile-first responsive design
- Modern CSS features (backdrop-filter, box-shadow, etc.)

### JavaScript Functionality
- Mobile navigation toggle
- Smooth scrolling between sections
- Scroll-based animations
- Active navigation highlighting
- Intersection Observer for performance
- Responsive navbar behavior

## 📋 To-Do After Setup

1. **Add Your Photos**:
   - Replace the profile placeholder with your photo
   - Add screenshots of your projects

2. **Update Content**:
   - Write your personal bio
   - Add your actual projects with links
   - Update skills to match your experience
   - Add your real contact information

3. **Optional Enhancements**:
   - Add a contact form
   - Include a blog section
   - Add testimonials
   - Integrate with Google Analytics

## 🌐 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and make it your own! If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you have questions about deploying or customizing this homepage, feel free to reach out or open an issue in the repository.

---

**Happy coding!** 🚀