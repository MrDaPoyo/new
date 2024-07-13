const poyo = document.querySelector('#poyo_star');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const poyowhisper = document.querySelector('#poyo-whisper');

poyo.addEventListener('mouseover', () => {
    poyowhisper.play();
    // Animate poyo to fly to the new position
    poyo.animate([
        { transform: `rotate(0deg)` },
        { transform: `rotate(360deg)`}, 
        { transform: `rotate(700deg)`}, 
        { transform: `rotate(720deg)`}, 
        { transform: `translate(1000px, -500px)` }
    ], {
        duration: 4000, // Animation duration in milliseconds
        easing: 'ease-in', // Animation easing function
    }).onfinish = () => {
        poyo.style.opacity = 0; // Set opacity to 0 to fade away poyo
        // Check if poyo is outside of the screen
        if (poyo.offsetLeft < 0 || poyo.offsetLeft > window.innerWidth || poyo.offsetTop < 0 || poyo.offsetTop > window.innerHeight) {
            poyo.remove(); // Delete poyo from the DOM
            
        }
        alert("You found me!");
        alert("*Poyo hands you a cookie* 🍪")
    };
    
});