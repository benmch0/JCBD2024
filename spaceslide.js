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