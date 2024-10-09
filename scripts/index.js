// header Javascript

let searchBtn=document.querySelector(".searchBtn");
let closeBtn=document.querySelector(".closeBtn");
let searchbox=document.querySelector(".searchbox");

searchBtn.addEventListener('click', () => {
    searchbox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
 });

 closeBtn.addEventListener('click', () => {
    searchbox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
 });

// Image Slider Javascript
let slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
   
   if(slides.length > 0){
      slides[slideIndex].classList.add("displaySlide");
      intervalid=setInterval(nextSlide, 5000);
   }
};

function showSlide(index){

   if(index >= slides.length){
      slideIndex = 0;}
   else if(index < 0){
      slideIndex = slides.length - 1;
   }

   slides.forEach(slide => {
      slide.classList.remove("displaySlide");
   });
   slides[slideIndex].classList.add("displaySlide");
};

function prevSlide(){
   clearInterval(intervalid);
   slideIndex--;
   showSlide(slideIndex);
};

function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
};
