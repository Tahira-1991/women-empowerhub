
    // This script redirects the user to the main page after a simulated delay
    window.onload = function() {
        // Get the logo container to control the animation
        const logoContainer = document.querySelector('.logo-container');
        
        // Loading time is 4 seconds (4000 milliseconds)
        const loadingDuration = 4000;

        setTimeout(() => {
            // OPTION 1: Stop the animation when loading is complete
            // We set the animation property to 'none' on the pseudo-element 
            // by directly manipulating the stylesheet via a class added to the parent.
            logoContainer.style.setProperty('--animation-play-state', 'paused');

            // 2. Wait a brief moment (100ms) for the user to see the static "finished" state
            setTimeout(() => {
                // 3. Redirect to the main mentor page
                window.location.href = 'mentors.html';
            }, 100); 
        }, loadingDuration); 
    };
