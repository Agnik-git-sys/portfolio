// ========================================
// GSAP CONFIGURATION & INITIALIZATION
// ========================================

gsap.registerPlugin(ScrollTrigger);

// ========================================
// THEME TOGGLE
// ========================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    htmlElement.style.colorScheme = 'dark';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    htmlElement.style.colorScheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// HERO SECTION ANIMATIONS
// ========================================

function animateHero() {
    const tl = gsap.timeline();

    // Animate label
    tl.from('[data-gsap="label"]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
    }, 0);

    // Animate title
    tl.from('[data-gsap="title"]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    }, 0.1);

    // Animate subtitle
    tl.from('[data-gsap="subtitle"]', {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: 'power2.out'
    }, 0.2);

    // Animate description
    tl.from('[data-gsap="description"]', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out'
    }, 0.3);

    // Animate buttons
    tl.from('[data-gsap="buttons"]', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out'
    }, 0.4);

    // Animate stats
    tl.from('[data-gsap="stats"]', {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: 'power2.out'
    }, 0.5);

    // Animate visual
    tl.from('[data-gsap="visual"]', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out'
    }, 0.2);
}

// Run hero animations on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateHero);
} else {
    animateHero();
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

// About section cards
gsap.utils.toArray('.metric-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Project cards
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Certificate cards
gsap.utils.toArray('.certificate-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power2.out'
    });
});

// Blog cards
gsap.utils.toArray('.blog-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Skill items
gsap.utils.toArray('.skill-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            once: true
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.05,
        ease: 'power2.out'
    });
});

// ========================================
// SECTION TITLE ANIMATIONS
// ========================================

gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            once: true
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
    });
});

// ========================================
// CONTACT FORM ANIMATION
// ========================================

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        once: true
    },
    opacity: 0,
    x: -50,
    duration: 0.7,
    ease: 'power2.out'
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        once: true
    },
    opacity: 0,
    x: 50,
    duration: 0.7,
    ease: 'power2.out'
});

// ========================================
// BUTTON HOVER EFFECTS
// ========================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    });
});

// Load ScrollToPlugin if not already loaded
if (!gsap.plugins.scrollTo) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js';
    document.head.appendChild(script);
}

// ========================================
// PARALLAX EFFECT ON HERO VISUAL
// ========================================

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    gsap.to(heroVisual, {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom center',
            scrub: 1
        },
        y: 50,
        opacity: 0.8,
        ease: 'none'
    });
}

// ========================================
// FORM SUBMISSION
// ========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 2000;
            animation: slideIn 0.3s ease-out;
        `;
        successMsg.textContent = '✓ Message sent successfully!';
        document.body.appendChild(successMsg);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            gsap.to(successMsg, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                onComplete: () => successMsg.remove()
            });
        }, 3000);
    });
}

// ========================================
// SCROLL TRIGGER REFRESH ON LOAD
// ========================================

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to toggle theme (optional)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        themeToggle.click();
    }
});

// ========================================
// INTERSECTION OBSERVER FOR DYNAMIC EFFECTS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.project-card, .certificate-card, .blog-card').forEach(card => {
    observer.observe(card);
});