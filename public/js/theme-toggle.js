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

        // Override the default theme toggle behavior with enhanced version
        function overrideThemeToggle() {
            // Remove any existing event listeners by cloning the element
            const newThemeToggle = themeToggle.cloneNode(true);
            themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
            
            // Add enhanced click event with debouncing
            let isTransitioning = false;
            newThemeToggle.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (isTransitioning) return;
                isTransitioning = true;
                
                // Add transition class for smooth animation
                addTransitionClass();
                
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
                
                newThemeToggle.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
                
                // Toggle theme (using PaperMod's logic)
                if (body.className.includes("dark")) {
                    body.classList.remove('dark');
                    localStorage.setItem("pref-theme", 'light');
                } else {
                    body.classList.add('dark');
                    localStorage.setItem("pref-theme", 'dark');
                }
                
                // Add subtle animation
                newThemeToggle.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    newThemeToggle.style.transform = 'scale(1)';
                }, 150);
                
                // Prevent rapid clicking
                setTimeout(() => {
                    isTransitioning = false;
                }, 300);
            });

            // Keyboard accessibility
            newThemeToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    newThemeToggle.click();
                }
            });

            // Add smooth hover effects
            newThemeToggle.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
            });

            newThemeToggle.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });

            // Add focus ring animation
            newThemeToggle.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary)';
                this.style.outlineOffset = '2px';
            });

            newThemeToggle.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        }

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
                transition: transform 0.3s ease;
            }
        `;
        document.head.appendChild(style);

        // Override the theme toggle after a short delay to ensure PaperMod's script has loaded
        setTimeout(overrideThemeToggle, 100);
    });
})();
