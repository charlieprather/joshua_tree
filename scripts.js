 




    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);



        



      };
    };

$(window).scroll(function() {
    $('#animatedElement').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("hatch");
      }
    });
  });




    const sliderImages = document.querySelectorAll('.slide-in'); // this will tell you where the bottom of the window is.

console.log(sliderImages);



    function checkSlide(e){


sliderImages.forEach(sliderImage => {

                                                                  //halfway throught the image

const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;


const imageBottom = sliderImage.offsetTop + sliderImage.height;

const isHalfShown = slideInAt > sliderImage.offsetTop;

const isNotScrolledPast = window.scrollY < imageBottom;     // this vaiable will check if we are not scrolled past the image

if(isHalfShown && isNotScrolledPast){

sliderImage.classList.add('active');


}else{

sliderImage.classList.remove('active');
}



});



    }

    window.addEventListener('scroll', debounce(checkSlide));



