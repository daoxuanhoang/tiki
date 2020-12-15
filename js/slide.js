var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > 11) {slideIndex = 0}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
}


var indexDraw = 0;

function showSlideNext(indexDraw) {
  var slides = document.getElementsByClassName("slide");
  let count = 0;
  for (let i = 0; i < slides.length; i++) {
      if(i >= indexDraw && i <= indexDraw + 6 ){
        count++;
        slides[i].style.display="block";
      }
      else
        slides[i].style.display = "none";  
  }
  for(let i =0 ;i < 6 - count; i++){
    slides[i].style.display="block";
  }
  
}

function plusSlideSixItem(n) {
  indexDraw += n;
  if(indexDraw < 0){
    indexDraw = 0;
    return false;
  }
  $(".prev-draw").attr("disable",indexDraw == 0);
  if(indexDraw > 20){
    indexDraw = 18;
    return false;
  }
  $(".next-draw").attr("disable",indexDraw >= 16);
  showSlideNext(indexDraw);
}

var indexHOT= 0;

function showSlideHOT(indexHOT) {
  var slides = document.getElementsByClassName("slide1");
  let count = 0;
  for (let i = 0; i < slides.length; i++) {
      if(i >= indexHOT && i <= indexHOT + 8 ){
        count++;
        slides[i].style.display="block";
      }
      else
        slides[i].style.display = "none";  
  }
  for(let i =0 ;i < 8 - count; i++){
    slides[i].style.display="block";
  }
  
}

function plusSlideEightitem(n) {
  indexHOT += n;
  if(indexHOT < 0){
    indexHOT = 0;
    return false;
  }
  $(".btn-prev").attr("disable",indexHOT == 0);
  if(indexHOT > 20){
    indexHOT = 18;
    return false;
  }
  $(".btn-next").attr("disable",indexHOT >= 16);
  showSlideHOT(indexHOT);
}

$(document).ready(()=>{
  setInterval(()=>{
    showSlides(slideIndex);
  }, 4000);
})


