let screenHeight = $(window).height();
// console.log(screenHeight);


$(window).scroll(function () {
  let currentPosition = $(this).scrollTop();
  // console.log(currentPosition);
  if(currentPosition > screenHeight-100){
    $(".site-nav").addClass("site-nav-scroll");
  }else{
    $(".site-nav").removeClass("site-nav-scroll");
    setActive("home");
  }
});

$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");
  console.log(result);

  if(result){

    $(".menu-icon").removeClass("fa-close").addClass("fa-bars");



  }else{

    $(".menu-icon").removeClass("fa-bars").addClass("fa-close");


  }

});

function setActive(current) {

  $(".nav-link").removeClass("current-section");

  $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

  let currentSection = $("section[id]");
  currentSection.waypoint = function (direction, scroll) {

  }
  currentSection.waypoint(function (direction) {

    if(direction === "down"){
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActive(currentSectionId);
    }

  },{ offset:'150px' });

  currentSection.waypoint(function (direction) {

    if(direction === "up"){
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActive(currentSectionId);
    }

  },{ offset:'150px' });

}

navScroll();

$(window).on("load",function () {
  $('.loader-container').fadeOut(500,function () {
    $(this).remove();
  });
});