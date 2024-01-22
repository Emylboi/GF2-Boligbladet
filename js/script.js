const slide = document.querySelector(".slider-slide")
let currentImageIndex = 0;

let sliderImages = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
]

function setActiveSlide(index){
    slide.src = sliderImages[index]
}

/* setActiveSlide(currentImageIndex) */

function next() {
    if (currentImageIndex >= sliderImages.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
    setActiveSlide(currentImageIndex);
}

/* let autoSlideTimeout; */

function setAutoSlide() {
    /* let seconds = 3; */
  
    function updateCounter() {
      next();
      autoSlideTimeout = setTimeout(updateCounter, 5000);
    }
  
    updateCounter();
  }

setAutoSlide();


/*  */
/* FORMS */
/*  */

var monthSelect = document.getElementById("months");

var monthOptions = ["3 måneder", "6 måneder", "9 måneder"];

for (var i = 0; i < monthOptions.length; i++) {
    var option = new Option(monthOptions[i], monthOptions[i]);
    monthSelect.add(option);
  }

let form = document.querySelector("#form-Subscribe")
let firstName = document.querySelector('input[name="firstName"]')
let email = document.querySelector('input[name="email"]')
let months = document.querySelector('select[name="months"]')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('hidden')
})

/*  */
/* BURGER MENU */
/*  */

const burgerBtn = document.querySelector("#burgerBtn")
const burgerMenu = document.querySelector("#burger-menu")

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("show")
  burgerBtn.classList.toggle("active")
})

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("show")
  burgerBtn.classList.remove("active")
})