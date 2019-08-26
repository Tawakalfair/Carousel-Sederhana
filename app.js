const carouselSlide   = document.querySelector('.carousel-slide');
const carouselImages  = document.querySelectorAll('.carousel-slide img');
const navdots         = document.querySelector('.nav-dots');
//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const satu = document.querySelector('#satu');

//counter
let counter = 1;
const size  = carouselImages[0].clientWidth;
console.log(carouselImages.length);

console.log(carouselImages[0].clientWidth);
carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';

//perulanagan dots
var x = 0;
while (x < carouselImages.length-2 ) {
  navdots.innerHTML = "<button id=satu>tes</button>"
  console.log(x);
  x++;
}




//button listener

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return; // bug fix
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+ 'px)';
    console.log(counter);
});

satu.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter = 0;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+ 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return; //bugfix
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+ 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
  if (carouselImages[counter].id  === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+ 'px)';
  }
  if (carouselImages[counter].id  === 'first-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+ 'px)';
  }
});
