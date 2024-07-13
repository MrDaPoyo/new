const poyo = document.querySelector('#poyo_star');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

poyo.addEventListener('mouseover', () => {
    // Calculate the new position for poyo to fly to

    // Animate poyo to fly to the new position
    poyo.animate([
        { transform: `rotate(0deg)` },
        { transform: `rotate(200)`}, 
        { transform: `rotate(360deg)`}, 
        { transform: `translate(50px, -25px)` },
        { transform: `translate(200px, -100px)` },
        { transform: `translate(1000px, -500px)` }
    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing function
    }).onfinish = () => {
        poyo.style.opacity = 0; // Set opacity to 0 to fade away poyo
        // Check if poyo is outside of the screen
        if (poyo.offsetLeft < 0 || poyo.offsetLeft > window.innerWidth || poyo.offsetTop < 0 || poyo.offsetTop > window.innerHeight) {
            poyo.remove(); // Delete poyo from the DOM
        }
    };
    
});