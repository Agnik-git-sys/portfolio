# Agnik Mondal - Premium Data Analyst Portfolio

A handcrafted, premium personal portfolio website built with vanilla HTML5, CSS3, and JavaScript featuring GSAP animations and ScrollTrigger effects.

## Overview

This portfolio showcases professional data analytics expertise through an editorial, premium design inspired by Linear, Stripe, Vercel, and modern SaaS aesthetics.

## Features

- 🎨 **Premium Design**: Inspired by industry leaders (Stripe, Linear, Vercel)
- 🌓 **Dark/Light Mode**: Smooth theme switching with localStorage persistence
- ⚡ **Smooth Animations**: GSAP micro-animations and ScrollTrigger reveals
- 📱 **Fully Responsive**: Desktop, tablet, and mobile optimized
- 🎯 **Editorial Layout**: Asymmetric compositions with intentional spacing
- ♿ **Accessible**: Semantic HTML and keyboard navigation
- 🚀 **Performance Optimized**: Minimal dependencies, fast loading

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern layout, CSS variables, responsive design
- **Vanilla JavaScript**: No frameworks or build tools
- **GSAP 3**: Professional animations
- **ScrollTrigger**: Scroll-based animations
- **Google Fonts**: Space Grotesk & Inter

## Sections

1. **Navigation**: Sticky navbar with smooth scroll navigation
2. **Hero**: Full-screen introduction with dashboard mockup
3. **About**: Professional background and analytical philosophy
4. **Projects**: Case study cards with business outcomes
5. **Skills**: Categorized skill showcase with progress bars
6. **Certificates**: Professional certifications gallery
7. **Education**: Timeline of educational achievements
8. **Insights**: Articles and thoughts on data analytics
9. **Contact**: Contact form and social links
10. **Footer**: Minimal elegant footer

## Design Philosophy

- **Whitespace-First**: Breathing room dominates the layout
- **Typography-Centric**: Clean hierarchy with editorial feel
- **No Generated Content**: Skeleton placeholders instead of AI images
- **Subtle Animations**: Enhance, never distract
- **Premium Minimalism**: Less is more
- **Intentional Asymmetry**: Grid-breaking compositions

## Color System

### Light Mode
- Primary Blue: `#2563EB`
- Dark Navy: `#111827`
- Warm Orange: `#BC4800`
- Light Background: `#FFFFFF`
- Soft Background: `#F5F7FA`

### Dark Mode
- Dark Background: `#0B1120`
- Dark Card: `#111827`
- Dark Text: `#F3F4F6`

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required
4. Customize content in HTML file
5. Update colors in CSS variables

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-blue: #2563EB;
    --warm-orange: #BC4800;
    /* ... */
}
```

### Content
Edit content directly in `index.html`. All sections are clearly labeled.

### Animations
Adjust animation timing and effects in `script.js`:
```javascript
gsap.from(element, {
    duration: 0.6,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Single HTML file with inline scripts
- Minimal CSS (no framework overhead)
- GSAP CDN for animations
- Optimized for fast loading

## Future Enhancements

- [ ] Add real project case studies
- [ ] Implement blog functionality
- [ ] Add more interactive elements
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Email integration for contact form

## License

Personal portfolio - 2024

## Contact

Learn more about data analytics and see live projects at the portfolio website.
