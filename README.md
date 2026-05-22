# Free Flio - Portfolio Template (Customized)

This repository contains a customized copy of the Free Flio HTML5 portfolio template.

- Live site: https://rahulmaurya979295-hue.github.io/my_Portfolio_website/
- Entry point: index-minimal.html (index.html redirects to it)

Changes made:
- Added a profile image to the hero section and fixed asset paths.
- Added GitHub Actions workflow to deploy to GitHub Pages.
- Added index.html redirect, .gitignore, and this README.
# 🚀 Rahul Maurya's AI-Powered Data Science Portfolio

## Overview
This is a modern, recruiter-friendly portfolio website built with HTML5, CSS3, and vanilla JavaScript. It features smooth animations, dark/light mode toggle, responsive design, and is optimized for ATS (Applicant Tracking Systems) and GitHub showcase.

---

## ✨ Features

### 1. **Modern Design**
- Clean, professional interface optimized for recruiters
- Glassmorphism effects with blur and transparency
- Gradient backgrounds and smooth transitions
- Fully responsive design (mobile, tablet, desktop)

### 2. **Dark/Light Mode Toggle**
- Automatic detection of system preference
- Manual toggle button in the header
- Persistent preference saved to localStorage
- Smooth transition between themes

### 3. **Smooth Animations**
- Staggered fade-in animations on page load
- Scroll-triggered animations for sections
- Hover effects on cards and buttons
- Floating animations and pulse effects

### 4. **Interactive Elements**
- Smooth scroll navigation with active link highlighting
- Progress bars for skills with animation
- Project cards with hover effects
- Contact form with validation

### 5. **Recruiter-Focused Sections**
- Professional hero section with multiple CTAs
- Smart AI-style about section
- Skills section with progress bars
- Education & Certifications timeline
- Experience section with detailed responsibilities
- Featured projects with technical descriptions
- Contact section with multiple channels
- SEO-optimized meta tags

### 6. **Performance Optimized**
- Lightweight CSS and JavaScript
- Images optimized for web
- Lazy loading support
- CSS animations (GPU-accelerated)
- No heavy dependencies

### 7. **Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliant
- Screen reader friendly

---

## 📁 File Structure

```
portfolio/
├── index.html                          # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css                   # Original template styles
│   │   ├── responsive.css              # Responsive styles
│   │   └── custom-modern.css           # NEW: Modern enhancements
│   ├── js/
│   │   ├── script.js                   # Original template JS
│   │   └── custom-modern.js            # NEW: Interactive features
│   ├── images/
│   │   ├── slider/                     # Hero images
│   │   ├── about/                      # About section images
│   │   ├── gallery/                    # Project images
│   │   ├── testimonials/               # (Not used, can be removed)
│   │   └── blog/                       # (Not used, can be removed)
│   └── fonts/                          # Icon fonts
└── README.md                           # This file
```

---

## 🎨 Color Scheme

### CSS Variables (in `custom-modern.css`)
```css
--primary-color: #6c63ff          /* Main purple */
--secondary-color: #f368e0        /* Pink accent */
--dark-bg: #1f1f2e                /* Dark mode background */
--accent-color: #00d4ff           /* Cyan accent */
--success-color: #10b981          /* Green for success */
```

Customize these in `:root` to match your brand.

---

## 🔧 Customization Guide

### 1. Update Content

#### Hero Section
In `index.html`, find the hero section and update:
```html
<h2>Rahul Maurya</h2>
<p>Data Science Analyst | Python Developer | BI Specialist</p>
```

#### About Section
Update the AI-style summary:
```html
<h2>About Me</h2>
<p><strong>AI-Powered Professional Summary:</strong></p>
<p>Your custom about text...</p>
```

#### Skills Section
Modify skill items and percentages:
```html
<div class="skill-item">
    <div class="skill-header">
        <span>Your Skill</span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%;" data-percent="90"></div>
    </div>
</div>
```

#### Projects
Update projects with your work:
```html
<div class="col-lg-6 col-md-6 col-sm-12 project-item">
    <div class="project-card card-hover-effect">
        <div class="project-image">
            <img src="path/to/image.jpg" alt="Project description">
        </div>
        <div class="project-details">
            <h3>Project Name</h3>
            <p class="project-description">Your description...</p>
            <ul class="project-features">
                <li><strong>Feature 1:</strong> Description</li>
            </ul>
            <div class="project-tech">
                <span class="tech-tag">Technology</span>
            </div>
        </div>
    </div>
</div>
```

#### Contact Information
Update with your details:
```html
<a href="https://github.com/yourprofile">GitHub</a>
<a href="mailto:your.email@gmail.com">Email</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 2. Customize Colors

Edit `:root` in `assets/css/custom-modern.css`:
```css
:root {
    --primary-color: #6c63ff;      /* Change this */
    --secondary-color: #f368e0;    /* And this */
    --dark-bg: #1f1f2e;            /* And this */
}
```

All colors throughout the site will update automatically.

### 3. Add Resume Download

In `assets/js/custom-modern.js`, find the resume button handler and update:
```javascript
const resumeBtn = document.querySelector('.resume-download-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'path/to/your/resume.pdf';
    });
}
```

### 4. Update Meta Tags

Edit `<head>` section in `index.html`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="Your,Keywords,Here">
<meta property="og:title" content="Your Name - Your Title">
```

---

## 🎯 SEO Optimization

### Current Optimizations
✅ Semantic HTML5 structure  
✅ Meta description and keywords  
✅ Open Graph tags for social sharing  
✅ Mobile-responsive design  
✅ Fast loading time  
✅ Accessibility features  

### Additional SEO Tips
1. **Add structured data** (JSON-LD):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rahul Maurya",
  "url": "https://yourportfolio.com",
  "sameAs": [
    "https://github.com/rahulmaurya",
    "https://linkedin.com/in/rahulmaurya"
  ]
}
</script>
```

2. **Google Analytics**:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

3. **Sitemap & Robots.txt**:
Create `sitemap.xml` and `robots.txt` in root directory.

---

## 💼 GitHub Portfolio Best Practices

### 1. Repository Setup
```bash
# Create a portfolio repository
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/rahulmaurya/portfolio.git
git push -u origin main
```

### 2. README.md Template
```markdown
# Rahul Maurya - Data Science Portfolio

[Visit Portfolio](https://rahulmaurya.com)

## 🎯 About Me
Data Science Analyst with expertise in Python, SQL, and Power BI...

## 🛠️ Skills
- Python | SQL | Power BI | Tableau
- Pandas | NumPy | Scikit-learn
- Git | GitHub | Excel

## 📊 Featured Projects
1. **D Mart Sales Dashboard** - Power BI analytics
2. **Data Science Analytics** - ML prediction models

## 📖 Read More
[View Full Portfolio](https://yourportfolio.com)
```

### 3. GitHub Pages Deployment
Add to `package.json`:
```json
{
  "homepage": "https://rahulmaurya.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

---

## 🚀 Deployment

### 1. **GitHub Pages**
```bash
git push origin main
# Go to Settings > Pages > Source: main
```

### 2. **Netlify**
- Connect GitHub repository
- Build command: (leave empty)
- Publish directory: `/`
- Deploy!

### 3. **Vercel**
- Import project from GitHub
- No build command needed
- Deploy!

### 4. **Custom Domain**
Add `CNAME` file with your domain name.

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

All components are fully responsive and tested on all devices.

---

## 🎓 Accessibility Features

### WCAG 2.1 Compliance
✅ Color contrast ratio > 4.5:1  
✅ Keyboard navigation support  
✅ ARIA labels and roles  
✅ Semantic HTML structure  
✅ Alt text for images  
✅ Focus indicators  

### Testing Tools
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA Screen Reader](https://www.nvaccess.org/)

---

## 🔐 Security

### Best Practices Implemented
✅ No inline scripts  
✅ HTTPS ready  
✅ Form validation  
✅ XSS protection  
✅ CSRF tokens (if needed)  

### Additional Security
- Use environment variables for sensitive data
- Implement rate limiting on contact form
- Regular security audits
- Keep dependencies updated

---

## 📊 Analytics Integration

### Google Analytics 4
```javascript
gtag('event', 'view_project', {
  'project_name': 'D Mart Sales Dashboard'
});
```

### LinkedIn Insights Tag
Add tracking pixel for LinkedIn metrics.

### Hotjar Heatmaps
Track user behavior and engagement.

---

## 🐛 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE 11   | ⚠️ Limited |

---

## 📝 Resume Integration

### ATS-Friendly Format
If adding resume content to the site:
```html
<section id="resume">
  <h2>Resume</h2>
  <div class="resume-download">
    <a href="resume.pdf" download>Download PDF</a>
  </div>
</section>
```

### Resume Keywords for Data Science
- Data Analysis
- Machine Learning
- Python Programming
- SQL Database
- Business Intelligence
- Data Visualization
- Statistical Analysis
- Predictive Modeling

---

## 🎬 Performance Tips

### Optimization Checklist
- [ ] Compress images (use TinyPNG, ImageOptim)
- [ ] Minify CSS and JS
- [ ] Enable gzip compression
- [ ] Use CSS Grid/Flexbox instead of floats
- [ ] Lazy load images
- [ ] Remove unused CSS with PurgeCSS
- [ ] Use SVG for icons instead of PNG
- [ ] Implement caching headers

### Performance Metrics
- **Lighthouse Score**: Aim for 90+
- **PageSpeed Insights**: Mobile > 85, Desktop > 95
- **Core Web Vitals**: All "Good"

---

## 📚 Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse)
- [WAVE](https://wave.webaim.org/)

### Fonts & Icons
- [Google Fonts](https://fonts.google.com/)
- [FontAwesome](https://fontawesome.com/)
- [Themify Icons](https://themify.me/themify-icons)

---

## 🎁 Bonus Features

### Dark Mode
- Automatic system preference detection
- Manual toggle in header
- Persistent user preference
- Smooth transitions

### Animations
- On-scroll fade-in effects
- Hover state transformations
- Progress bar animations
- Staggered list animations

### Mobile Menu
- Responsive hamburger menu
- Smooth slide-in animation
- Click-outside to close
- Keyboard (Escape) to close

---

## 🤝 Contributing

If you're using this template for your own portfolio:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Create a Pull Request

---

## 📞 Support

For questions or issues:
- 📧 Email: rahulmaurya979295@gmail.com
- 💼 LinkedIn: [linkedin.com/in/rahulmaurya](https://linkedin.com/in/rahulmaurya)
- 🐙 GitHub: [github.com/rahulmaurya](https://github.com/rahulmaurya)

---

## 📄 License

This portfolio is open source. Feel free to use, modify, and distribute as needed.

---

## 🙏 Credits

- **Template Base**: Free Flio HTML5 Portfolio Template
- **Enhancements**: Modern CSS3, Dark Mode, Interactive JS
- **Icons**: Themify Icons, FontAwesome
- **Fonts**: Google Fonts

---

## 📈 Version History

### v2.0 (Current) - Modern Enhancement
- ✨ Dark/Light mode toggle
- ✨ Smooth scroll animations
- ✨ Skill progress bars
- ✨ Enhanced project cards
- ✨ Improved contact form
- ✨ SEO optimization
- ✨ Accessibility improvements

### v1.0 - Original Template
- Basic portfolio template
- Static design
- Responsive layout

---

## 🎯 Quick Start Checklist

- [ ] Update name and contact information
- [ ] Replace profile image
- [ ] Update skills and percentages
- [ ] Add your projects with descriptions
- [ ] Update education and certifications
- [ ] Add social media links
- [ ] Customize color scheme
- [ ] Add meta tags for SEO
- [ ] Test on mobile devices
- [ ] Deploy to GitHub/Netlify/Vercel

---

**Last Updated**: March 2026  
**Status**: Production Ready ✅  
**Support**: Active 🚀

---

*Built with ❤️ for Data Science Professionals*
