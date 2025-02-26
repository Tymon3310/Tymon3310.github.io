// Wait for DOM to be fully loaded before setting up functionality
document.addEventListener('DOMContentLoaded', function() {
    displayTime();
    // Check if user has a theme preference stored
    loadThemePreference();
    // Setup navbar scroll behavior
    setupNavbarBehavior();
    // Ensure mobile menu setup
    setupMobileMenu();
});

//langugage
function en() {
    window.location.href = '/EN';
}
function pl() {
    window.location.href = '/';
}

//theme switch
function light() {
    var elements = document.getElementsByClassName('content');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("light-mode");
    }
    
    // Store theme preference
    const isLightMode = elements[0].classList.contains("light-mode");
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

// Load theme preference from local storage
function loadThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        light(); // Apply light mode if it was saved
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close menu on anchor link clicks
    const menuLinks = document.querySelectorAll('#navLinks a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks) {
        // Toggle active state
        navLinks.classList.toggle('active');
        
        // Force immediate style application
        void navLinks.offsetWidth;
        
        // Update ARIA attributes for accessibility
        const isExpanded = navLinks.classList.contains('active');
        menuIcon.setAttribute('aria-expanded', isExpanded);
        
        // Add click outside listener if menu is open
        if (isExpanded) {
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
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

function displayTime() {
    console.log("time updated");
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
// Update time every second
setInterval(displayTime, 1000);

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
