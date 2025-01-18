

document.addEventListener("DOMContentLoaded", () => {
    const slideshowContainer = document.getElementById("review-slideshow");
    const reviewCards = document.querySelectorAll(".review-card");

    if (window.innerWidth <= 675) {
        let currentIndex = 0;
        const cardWidth = reviewCards[0].offsetWidth + 16; 
        const totalCards = reviewCards.length;

        
        const moveToNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalCards; 
            slideshowContainer.scrollTo({
                left: currentIndex * cardWidth,
                behavior: "smooth",
            });
        };

        
        const interval = setInterval(moveToNextSlide, 2000); 

        
        slideshowContainer.addEventListener("mouseenter", () => {
            clearInterval(interval); 
        });

        slideshowContainer.addEventListener("mouseleave", () => {
            setInterval(moveToNextSlide, 1000); 
        });
    }
});
