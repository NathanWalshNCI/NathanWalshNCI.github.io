
const slides = document.querySelectorAll( ".slide" );


slides.forEach( ( slide, index ) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});


const nextSlide = document.querySelector( ".btn-next" );


let curSlide = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener( "click", function () {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }


  slides.forEach( ( slide, index ) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});


const prevSlide = document.querySelector( ".btn-prev" );


prevSlide.addEventListener( "click", function () {

  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }


  slides.forEach( ( slide, index ) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});


setInterval(function(){
    document.querySelector( '.btn-next' ).click()
    },5000);



function ValidateEmail( inputText )
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if( inputText.value.match( mailformat ) )
{
  return true;
}
else
{
  alert( "You have entered an invalid email address!" );
  document.form.email.focus();
  return false;
}
}
