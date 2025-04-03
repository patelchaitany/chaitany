// Dedicated keyboard navigation handler

document.addEventListener('DOMContentLoaded', function() {
    console.log('Keyboard navigation initializing...');
    
    // Fix for arrow keys - add specific navigation handling
    document.addEventListener('keydown', function(event) {
        // Log all key presses for debugging
        console.log('Keyboard navigation keydown:', event.key);
        
        // Check if key is a navigation key (arrow keys, HJKL)
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
             'h', 'j', 'k', 'l', 'H', 'J', 'K', 'L'].includes(event.key)) {
            
            // Prevent default browser behavior
            event.preventDefault();
            event.stopPropagation();
            
            console.log('Navigation key pressed:', event.key);
            
            // Map the key to the appropriate navigation function
            switch(event.key) {
                case 'ArrowLeft':
                case 'h':
                case 'H':
                    console.log('Attempting to move left');
                    if (typeof goToPreviousSection === 'function') {
                        goToPreviousSection();
                        render(true);
                    }
                    break;
                    
                case 'ArrowRight':
                case 'l':
                case 'L':
                    console.log('Attempting to move right');
                    if (typeof goToNextSection === 'function') {
                        goToNextSection();
                        render(true);
                    }
                    break;
                    
                case 'ArrowUp':
                case 'k':
                case 'K':
                    console.log('Attempting to move up');
                    if (typeof goToPreviousItem === 'function') {
                        goToPreviousItem();
                        render(false);
                    }
                    break;
                    
                case 'ArrowDown':
                case 'j':
                case 'J':
                    console.log('Attempting to move down');
                    if (typeof goToNextItem === 'function') {
                        goToNextItem();
                        render(false);
                    }
                    break;
            }
        }
    }, true); // Use capture phase
    
    // Ensure document focus
    document.body.focus();
    console.log('Keyboard navigation initialized');
}); 