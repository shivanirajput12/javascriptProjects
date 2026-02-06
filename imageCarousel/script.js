const carouselInner = document.querySelector('#carouselInner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer =  document.querySelector('#dotsContainer');


//get all images
const slides =  document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;

//current slide index
let currentIndex = 0;

//create dots dynamically
slides.forEach((_, index)=>{
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    //click on dots goes to that slide
    dot.addEventListener('click',()=>{
        goToSlide(index);
    })
    dotsContainer.appendChild(dot);
})

//Get all dots
const dots = document.querySelectorAll('.dot');

//function to update carousel position
function updateCarousel(){
    //move the carousel inner to show current slide
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    //update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

}


//go to specific slide
function goToSlide(index){
    currentIndex = index;
    updateCarousel();
}

//next slide 
function nextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides; //loop back to 0
    updateCarousel();
}

//previous slide
function prevSlide(){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; //loop back to last slide(loop to end)
    updateCarousel();
}

// event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


//Auto-play 
let autoPlayInterval = setInterval(nextSlide, 3000); //change slide every 3 seconds

//pause on hover 
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 3000);
});