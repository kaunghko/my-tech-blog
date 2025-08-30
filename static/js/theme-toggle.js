// Enhanced Theme Toggle with Smooth Animations
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        if (!themeToggle) return;

        // Add smooth theme switching class
        function addTransitionClass() {
            body.classList.add('theme-transitioning');
            setTimeout(() => {
                body.classList.remove('theme-transitioning');
            }, 300);
        }

        // Enhanced theme toggle function
        function toggleTheme() {
            // Add transition class for smooth animation
            addTransitionClass();
            
            // Check current theme
            const isDark = body.classList.contains('dark');
            
            if (isDark) {
                // Switch to light theme
                body.classList.remove('dark');
                localStorage.setItem('pref-theme', 'light');
                
                // Add subtle animation
                themeToggle.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    themeToggle.style.transform = 'scale(1)';
                }, 150);
                
            } else {
                // Switch to dark theme
                body.classList.add('dark');
                localStorage.setItem('pref-theme', 'dark');
                
                // Add subtle animation
                themeToggle.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    themeToggle.style.transform = 'scale(1)';
                }, 150);
            }
        }

        // Enhanced click event with debouncing
        let isTransitioning = false;
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (isTransitioning) return;
            isTransitioning = true;
            
            // Add click ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                width: 100px;
                height: 100px;
                top: 50%;
                left: 50%;
                margin-top: -50px;
                margin-left: -50px;
            `;
            
            themeToggle.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
            
            // Toggle theme
            toggleTheme();
            
            // Prevent rapid clicking
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });

        // Keyboard accessibility
        themeToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });

        // Add ripple animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            #theme-toggle {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);

        // Enhanced theme initialization
        function initializeTheme() {
            const savedTheme = localStorage.getItem('pref-theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
            }
            
            // Add fade-in effect on page load
            body.style.opacity = '0';
            setTimeout(() => {
                body.style.transition = 'opacity 0.5s ease';
                body.style.opacity = '1';
            }, 100);
        }

        // Initialize theme
        initializeTheme();

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('pref-theme')) {
                if (e.matches) {
                    body.classList.add('dark');
                } else {
                    body.classList.remove('dark');
                }
            }
        });

        // Add smooth hover effects
        themeToggle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        themeToggle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });

        // Add focus ring animation
        themeToggle.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary)';
            this.style.outlineOffset = '2px';
        });

        themeToggle.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
})();
