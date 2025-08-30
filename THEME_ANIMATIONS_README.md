# Theme Switching Animations

This Hugo site now includes smooth animations when switching between light and dark themes. The animations provide a polished user experience with smooth transitions for all color-related properties.

## Features

### 🎨 Smooth Transitions
- **Duration**: 300ms with ease timing function
- **Properties**: background-color, color, border-color, box-shadow
- **Elements**: All theme-affected elements including body, header, navigation, content, and code blocks

### 🌙 Enhanced Theme Toggle
- **Hover Effects**: Scale and rotation animations
- **Click Animations**: Subtle scale feedback
- **Icon Transitions**: Smooth fade between sun/moon icons
- **Ripple Effect**: Material Design-inspired click feedback
- **Accessibility**: Keyboard navigation and focus states

### 📱 Responsive Design
- **Mobile Optimized**: Touch-friendly interactions
- **Reduced Motion**: Respects user preferences for reduced motion
- **Performance**: Optimized animations for smooth 60fps

## Files Added

### CSS Animations
- `static/css/theme-transitions.css` - Main animation styles
- Smooth transitions for all theme properties
- Enhanced theme toggle button styling
- Page load fade-in animations

### JavaScript Enhancements
- `static/js/theme-toggle.js` - Enhanced theme toggle functionality
- Smooth theme switching with transition classes
- Click ripple effects and hover animations
- System theme preference detection

### Hugo Integration
- `layouts/partials/extend_head.html` - Includes custom CSS and JS
- `layouts/partials/extend_footer.html` - Overrides default theme toggle

## How It Works

### 1. CSS Transitions
The animations are powered by CSS transitions applied to all elements that change with theme:

```css
* {
    transition: background-color 0.3s ease, 
                color 0.3s ease, 
                border-color 0.3s ease,
                box-shadow 0.3s ease;
}
```

### 2. Theme Toggle Enhancement
The theme toggle button includes:
- Hover scale and rotation effects
- Click ripple animations
- Smooth icon transitions
- Enhanced focus states

### 3. JavaScript Integration
The custom JavaScript:
- Adds transition classes during theme switches
- Prevents rapid clicking during transitions
- Provides smooth user feedback
- Maintains accessibility features

## Customization

### Animation Duration
To change the animation speed, modify the transition duration in `theme-transitions.css`:

```css
* {
    transition: background-color 0.5s ease, /* Change from 0.3s to 0.5s */
                color 0.5s ease,
                border-color 0.5s ease,
                box-shadow 0.5s ease;
}
```

### Timing Function
You can experiment with different timing functions:
- `ease` (default) - Smooth acceleration and deceleration
- `ease-in` - Slow start, fast end
- `ease-out` - Fast start, slow end
- `ease-in-out` - Smooth start and end
- `cubic-bezier()` - Custom timing curve

### Additional Properties
Add more properties to animate:

```css
* {
    transition: background-color 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease,
                transform 0.3s ease,        /* Add transform animations */
                opacity 0.3s ease;          /* Add opacity animations */
}
```

## Testing

### Local Development
1. Start Hugo server: `hugo server`
2. Visit: `http://localhost:1313`
3. Click the theme toggle button to see animations

### Test Page
A dedicated test page is available at `/test-theme.html` that demonstrates all the animation features.

## Browser Support

The animations use modern CSS features supported by:
- ✅ Chrome 26+
- ✅ Firefox 16+
- ✅ Safari 6.1+
- ✅ Edge 12+

For older browsers, the site gracefully degrades to instant theme switching without animations.

## Performance Considerations

- **Hardware Acceleration**: Transitions use GPU-accelerated properties
- **Reduced Motion**: Automatically disabled for users who prefer reduced motion
- **Efficient Selectors**: CSS transitions are applied efficiently
- **Minimal JavaScript**: Lightweight enhancement without performance impact

## Accessibility

- **Keyboard Navigation**: Theme toggle accessible via Tab and Enter/Space
- **Focus Indicators**: Clear visual focus states
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Screen Readers**: Proper ARIA labels and semantic markup

## Troubleshooting

### Animations Not Working
1. Check if custom CSS/JS files are loading
2. Verify Hugo is copying static files to public directory
3. Check browser console for JavaScript errors
4. Ensure theme toggle is not disabled in Hugo config

### Performance Issues
1. Reduce transition duration (e.g., from 0.3s to 0.2s)
2. Limit animated properties to essential ones
3. Check for conflicting CSS animations
4. Verify hardware acceleration is enabled

### Theme Toggle Not Working
1. Check if `disableThemeToggle` is set to false in Hugo config
2. Verify custom JavaScript is loading
3. Check browser console for errors
4. Ensure theme toggle button exists in HTML

## Future Enhancements

Potential improvements for future versions:
- **Theme Presets**: Multiple color schemes beyond light/dark
- **Animation Variants**: Different animation styles to choose from
- **Custom Timing**: User-configurable animation speeds
- **Advanced Effects**: Particle effects, morphing shapes
- **Theme History**: Remember user's preferred themes per page

## Contributing

To contribute to the theme animations:
1. Modify CSS in `static/css/theme-transitions.css`
2. Update JavaScript in `static/js/theme-toggle.js`
3. Test changes across different browsers
4. Ensure accessibility compliance
5. Update this documentation

---

**Note**: These animations enhance the user experience while maintaining the site's performance and accessibility. The smooth transitions make theme switching feel polished and professional.
