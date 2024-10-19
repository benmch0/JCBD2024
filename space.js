document.addEventListener('DOMContentLoaded', function() {
    const spaceBackground = document.querySelector('.space-background');
    
    // Number of stars you want
    const numberOfStars = 150;

    // Generate stars
    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        // Random size for each star
        let size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        // Random position for each star
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Add the star to the space background
        spaceBackground.appendChild(star);
    }
});




// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the cake GIF image
    const cakeGif = document.querySelector('.cake-gif');

    // Add a click event listener to the cake GIF
    cakeGif.addEventListener('click', function () {
        // Start the confetti animation
        startConfetti();
    });

    function startConfetti() {
        var duration = 15 * 1000; // 15 seconds duration
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // Since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }
});

