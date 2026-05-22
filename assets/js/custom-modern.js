/**
 * =====================================================
 * CUSTOM MODERN PORTFOLIO - INTERACTIVE FEATURES
 * Dark Mode Toggle | Smooth Animations | Form Handling
 * =====================================================
 */

(function () {
    'use strict';

    // =====================================================
    // 1. DARK MODE TOGGLE
    // =====================================================

    const DARK_MODE_KEY = 'portfolio-dark-mode';
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Initialize dark mode based on saved preference or system preference
    function initDarkMode() {
        const savedMode = localStorage.getItem(DARK_MODE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedMode) {
            if (savedMode === 'dark') {
                enableDarkMode();
            }
        } else if (prefersDark) {
            enableDarkMode();
        }
    }

    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem(DARK_MODE_KEY, 'dark');
        updateThemeToggleIcon();
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem(DARK_MODE_KEY, 'light');
        updateThemeToggleIcon();
    }

    function updateThemeToggleIcon() {
        if (themeToggleBtn) {
            const isDarkMode = body.classList.contains('dark-mode');
            themeToggleBtn.innerHTML = isDarkMode 
                ? '<i class="ti-sun"></i>' 
                : '<i class="ti-light-bulb"></i>';
            themeToggleBtn.setAttribute('aria-label', isDarkMode 
                ? 'Enable light mode' 
                : 'Enable dark mode');
        }
    }

    // Toggle dark mode on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // Initialize on page load
    initDarkMode();

    // =====================================================
    // 2. SCROLL ANIMATIONS
    // =====================================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-on-scroll elements
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Auto add fade-on-scroll class to section content
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('section, .about-area, .service-area, .contact-area');
        sections.forEach(section => {
            const children = section.querySelectorAll('h2, h3, p, .skill-section, .project-card, .timeline-item');
            children.forEach((child, index) => {
                if (!child.classList.contains('fade-in-up')) {
                    child.classList.add('fade-on-scroll');
                }
            });
        });
    });

    // =====================================================
    // 3. SMOOTH SCROLL FOR NAVIGATION
    // =====================================================

    const navLinks = document.querySelectorAll('.nav-link');
    const navBar = document.querySelector('header');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    // Close mobile menu if open
                    const navCollapse = document.getElementById('navbar');
                    if (navCollapse && navCollapse.classList.contains('in')) {
                        navCollapse.classList.remove('in');
                    }
                }
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id], div[id*="about"], div[id*="skills"], div[id*="projects"], div[id*="experience"], div[id*="contact"]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // =====================================================
    // 4. SKILL PROGRESS BARS ANIMATION
    // =====================================================

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const percent = parseInt(bar.style.width);
            const startTime = performance.now();
            const duration = 1000; // 1 second animation

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentPercent = progress * percent;
                bar.style.width = currentPercent + '%';

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        });
    }

    // Trigger animation when skill section is visible
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const skillObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    skillObserver.unobserve(skillSection);
                }
            });
        }, { threshold: 0.3 });

        skillObserver.observe(skillSection);
    }

    // =====================================================
    // 5. CONTACT FORM HANDLING
    // =====================================================

    const contactForm = document.getElementById('contact-form-modern');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const formLoader = document.getElementById('form-loader');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            const formResponse = document.querySelector('.form-response');
            
            // Show loader
            if (formLoader) formLoader.style.display = 'block';

            // Collect form data
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validate form
            if (!name || !email || !subject || !message) {
                showFormError('Please fill all required fields.');
                if (formLoader) formLoader.style.display = 'none';
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address.');
                if (formLoader) formLoader.style.display = 'none';
                return;
            }

            // Simulate sending email (replace with actual backend call)
            setTimeout(() => {
                // In a real application, you would send data to a backend
                console.log('Form Data:', {
                    name,
                    email,
                    subject,
                    message,
                    timestamp: new Date().toISOString()
                });

                // Show success message
                showFormSuccess();
                
                // Reset form
                contactForm.reset();
                
                // Hide loader
                if (formLoader) formLoader.style.display = 'none';

                // Hide message after 5 seconds
                setTimeout(() => {
                    if (formResponse) formResponse.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    function showFormSuccess() {
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        const formResponse = document.querySelector('.form-response');

        if (formResponse && successMessage) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            formResponse.style.display = 'block';
        }
    }

    function showFormError(message) {
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        const formResponse = document.querySelector('.form-response');

        if (formResponse && errorMessage) {
            errorMessage.textContent = '✗ ' + message;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            formResponse.style.display = 'block';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // =====================================================
    // 6. RESUME DOWNLOAD
    // =====================================================

    const resumeBtn = document.querySelector('.resume-download-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Track download
            console.log('Resume download requested');
            
            // In a real application, this would trigger a file download
            // Example: window.location.href = 'path/to/resume.pdf';
            
            // Show notification
            alert('Resume download feature will be implemented. Email me at rahulmaurya979295@gmail.com');
        });
    }

    // =====================================================
    // 7. ACTIVE LINK HIGHLIGHTING
    // =====================================================

    function setActiveLink() {
        const currentLocation = window.location.hash;
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentLocation || (currentLocation === '' && link.getAttribute('href') === '#home')) {
                link.classList.add('active');
            }
        });
    }

    // Set active link on page load and hash change
    window.addEventListener('load', setActiveLink);
    window.addEventListener('hashchange', setActiveLink);

    // =====================================================
    // 8. NAVBAR BACKGROUND ON SCROLL
    // =====================================================

    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.background = body.classList.contains('dark-mode')
                ? 'rgba(31, 31, 46, 0.95)'
                : 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'none';
        }
    });

    // =====================================================
    // 9. COUNTER ANIMATION
    // =====================================================

    function animateCounters() {
        const statItems = document.querySelectorAll('.stat-item h3');
        
        statItems.forEach(item => {
            const target = parseInt(item.textContent);
            let current = 0;
            const increment = target / 30; // 30 frames
            
            const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                    item.textContent = target + '+';
                    clearInterval(interval);
                } else {
                    item.textContent = Math.floor(current) + '+';
                }
            }, 50);
        });
    }

    // Trigger counter animation when about section is visible
    const aboutSection = document.querySelector('.about-area');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(aboutSection);
                }
            });
        }, { threshold: 0.5 });

        aboutObserver.observe(aboutSection);
    }

    // =====================================================
    // 10. PROJECT CARD HOVER EFFECTS
    // =====================================================

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // =====================================================
    // 11. MOBILE MENU HANDLING
    // =====================================================

    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-navbar');
    const navCollapse = document.getElementById('navbar');

    if (openBtn) {
        openBtn.addEventListener('click', function () {
            if (navCollapse) {
                navCollapse.classList.add('in');
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (navCollapse) {
                navCollapse.classList.remove('in');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (navCollapse && navCollapse.classList.contains('in')) {
            if (!navCollapse.contains(event.target) && !openBtn.contains(event.target)) {
                navCollapse.classList.remove('in');
            }
        }
    });

    // =====================================================
    // 12. TYPING ANIMATION (Optional)
    // =====================================================

    function typeText(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // =====================================================
    // 13. ACCESSIBILITY ENHANCEMENTS
    // =====================================================

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (navCollapse && navCollapse.classList.contains('in')) {
                navCollapse.classList.remove('in');
            }
        }
    });

    // =====================================================
    // 14. LAZY LOADING IMAGES (Optional)
    // =====================================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // =====================================================
    // 15. GTAG ANALYTICS TRACKING (Optional)
    // =====================================================

    // Track social link clicks
    const socialLinks = document.querySelectorAll('.social-links a, .social-links-contact a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const platform = this.getAttribute('title') || 'social';
            console.log('Social link clicked:', platform);
            // You can send this to Google Analytics or other tracking services
        });
    });

    // =====================================================
    // 16. PERFORMANCE OPTIMIZATION
    // =====================================================

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Do something on scroll end
        }, 150);
    }, false);

    // =====================================================
    // 17. ERROR HANDLING
    // =====================================================

    window.addEventListener('error', function (event) {
        console.error('Error occurred:', event.error);
    });

    // =====================================================
    // 18. PAGE LOAD COMPLETION
    // =====================================================

    window.addEventListener('load', function () {
        // Hide preloader
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            preloader.style.transition = 'all 0.5s ease-out';
        }

        console.log('Portfolio loaded successfully!');
    });

    // =====================================================
    // 19. SERVICE WORKER REGISTRATION (PWA)
    // =====================================================

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app still works
        });
    }

})();

// =====================================================
// 20. GLOBAL UTILITY FUNCTIONS
// =====================================================

/**
 * Smooth scroll to element
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

/**
 * Log portfolio information
 */
function logPortfolioInfo() {
    console.log('%c Rahul Maurya - Data Science Analyst Portfolio', 'color: #6c63ff; font-size: 16px; font-weight: bold;');
    console.log('%c Email: rahulmaurya979295@gmail.com', 'color: #666; font-size: 12px;');
    console.log('%c GitHub: github.com/rahulmaurya', 'color: #666; font-size: 12px;');
    console.log('%c LinkedIn: linkedin.com/in/rahulmaurya', 'color: #666; font-size: 12px;');
}

// Log info on first load
window.addEventListener('load', logPortfolioInfo);
