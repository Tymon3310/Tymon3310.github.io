// Wait for DOM to be fully loaded before setting up functionality
document.addEventListener('DOMContentLoaded', function() {
    displayTime();
    // Check if user has a theme preference stored
    loadThemePreference();
    // Setup navbar scroll behavior
    setupNavbarBehavior();
    // Ensure mobile menu setup
    setupMobileMenu();
    // Setup animations for content elements
    setupContentAnimations();
    // Setup social button hover effects
    setupSocialButtons();
});

//language switching
function en() {
    window.location.href = '/EN.html';
}
function pl() {
    window.location.href = '/index.html';
}

//theme switch with animation
function light() {
    var elements = document.getElementsByClassName('content');
    const navbar = document.getElementById('navbar');
    const bottomBar = document.querySelector('.bottom');
    const backToTop = document.getElementById('backToTop');
    
    // Toggle light mode on content elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("light-mode");
    }
    
    // Store theme preference
    const isLightMode = elements[0].classList.contains("light-mode");
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    
    // Add transition class to animate theme change
    document.documentElement.classList.add('theme-transitioning');
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 500); // Match this to your CSS transition time
}

// Load theme preference from local storage
function loadThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        light(); // Apply light mode if it was saved
    }
}

// Setup mobile menu with improved accessibility and animation
function setupMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('aria-label', 'Menu');
        
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close menu on anchor link clicks with smooth scrolling
    const menuLinks = document.querySelectorAll('#navLinks a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            
            // If it's an anchor link, add smooth scrolling
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    
                    window.scrollTo({
                        top: targetPosition - navbarHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add keyboard navigation support to mobile menu
    if (menuIcon) {
        menuIcon.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
}

// Toggle mobile menu with improved animation
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks && menuIcon) {
        // Toggle active state
        navLinks.classList.toggle('active');
        
        // Update icon for menu state
        const isExpanded = navLinks.classList.contains('active');
        menuIcon.setAttribute('aria-expanded', isExpanded);
        
        // Change icon based on state
        if (isExpanded) {
            menuIcon.querySelector('i').textContent = 'close';
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
            menuIcon.querySelector('i').textContent = 'menu';
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
}

// Close menu when clicking outside
function closeMenuOnClickOutside(event) {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks && !navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.querySelector('i').textContent = 'menu';
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Setup navbar scroll behavior
function setupNavbarBehavior() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Close mobile menu on scroll
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const menuIcon = document.querySelector('.menu-icon');
            if (menuIcon) {
                menuIcon.setAttribute('aria-expanded', 'false');
                menuIcon.querySelector('i').textContent = 'menu';
            }
        }
        
        // Determine scroll direction and position
        if (currentScroll > lastScrollTop && currentScroll > 70) {
            // Scrolling down & not at the top
            navbar.classList.add('hidden');
        } else {
            // Scrolling up or at the top
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        
        // Show navbar when user stops scrolling
        scrollTimeout = setTimeout(function() {
            navbar.classList.remove('hidden');
        }, 1500);
    }, { passive: true });
}

// Setup content animations
function setupContentAnimations() {
    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add spring animation on scroll to bottom
    document.addEventListener('scroll', function() {
        const contentWrapper = document.querySelector('main');
        if (!contentWrapper) return;
    
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.offsetHeight;
        
        // Check if we're at the bottom (with a small threshold)
        if (documentHeight - scrollPosition < 5) {
            // Remove the class first to reset the animation if it's already applied
            contentWrapper.classList.remove('spring-bounce');
            // Force a reflow
            void contentWrapper.offsetWidth;
            // Add the class to trigger the animation
            contentWrapper.classList.add('spring-bounce');
        }
    }, { passive: true });
    
    // Add hover effects to creator name
    const creatorName = document.getElementById('tworca');
    if (creatorName) {
        creatorName.addEventListener('mouseover', function() {
            this.classList.add('pulse');
        });
        
        creatorName.addEventListener('mouseout', function() {
            this.classList.remove('pulse');
        });
    }
}

// Setup social button hover effects
function setupSocialButtons() {
    const socialButtons = document.querySelectorAll('.socials a');
    
    socialButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.setAttribute('aria-label', `Visit my ${button.textContent.trim()}`);
        });
    });
}

// Display time with improved performance
function displayTime() {
    // Time options without date
    const timeOptions = { 
        timeZone: "Europe/Warsaw", 
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit", 
        hour12: false 
    };
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('pl-PL', timeOptions);
    
    const timeElement = document.getElementById('time');
    if (timeElement !== null) {
        timeElement.innerText = timeString;
    }
}

// Update time every second with requestAnimationFrame for better performance
let timeUpdateInterval;

function startTimeUpdates() {
    if (timeUpdateInterval) {
        clearInterval(timeUpdateInterval);
    }
    
    // Update immediately
    displayTime();
    
    // Update every second, but only if tab is visible
    timeUpdateInterval = setInterval(() => {
        if (!document.hidden) {
            displayTime();
        }
    }, 1000);
}

// Start time updates when the page loads
startTimeUpdates();

// Update time when the page becomes visible
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        displayTime(); // Update immediately when page becomes visible
    }
});

// Back to top button functionality
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fix for mobile viewport height (100vh issue on mobile)
function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVh);
setVh();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Allow Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.getElementById('navLinks');
        if (navLinks && navLinks.classList.contains('active')) {
            const menuIcon = document.querySelector('.menu-icon');
            navLinks.classList.remove('active');
            menuIcon.setAttribute('aria-expanded', 'false');
            menuIcon.querySelector('i').textContent = 'menu';
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
});
