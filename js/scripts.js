
$(".gallery div img").click(function() {

  if ( $( this ).parent().hasClass( "active" ) ) {
    $('main').removeClass( "lightbox" );
    $(".lightbox-bg").removeClass('active');

    $(".lightbox-nav").removeClass('active');

    $(".gallery div").removeClass('inactive');
    $(this).parent().removeClass( "active" );
  } else {
    $('main').addClass( "lightbox" );
    $(".lightbox-bg").addClass('active');

    $(".lightbox-nav").addClass('active');

    $(".gallery div").addClass('inactive');
    $(this).parent().removeClass( "inactive" );
    $(this).parent().addClass( "active" );
  }

});

// $(".lightbox-bg").click(function() {
//   $('main').removeClass( "lightbox" );
//   $(".lightbox-bg").removeClass('active');

//   $(".gallery div").removeClass('inactive');
//   $(".gallery div").removeClass('active');
// });


// $(".grid-btn").click(function() {
//   $('.grid').toggleClass( "active" );
//   $('.grid-btn').toggleClass( "active" );
// });

if(Cookies.get('grid') == 'true') {
  $('.grid').removeClass( "active" );
  $('.grid-btn').addClass( "active" );
}

function grid() {
    $('.grid').toggleClass( "active" );
    $('.grid-btn').toggleClass( "active" );

  if(Cookies.get('grid') == 'true') {
    Cookies.set('grid', false);
    console.log('grid off');
  } else {
    Cookies.set('grid', true);
    console.log('grid on');
  }
};

// footnote toggle
$(".fn").click(function() {
  $( this ).next( '.fnc').toggleClass( 'active');
  $( this ).toggleClass( 'active');
});



$(".mobile-btn").click(function() {
  $('.mobile-overlay').toggleClass( 'active');
  $('.mobile-btn').toggleClass( 'active');
  $('section').toggleClass( 'hide');

  $('.lightbox-nav').toggleClass( 'menu-open');
});


$(".img-btn").on('click',function(){
  var id = $(this).attr('id');
  var nav;

  if(id=="prev") {
    nav = $(".slide.active").prev('.slide.inactive');
    if(nav.length == 0) nav = $(".slide.inactive").last();
  } else if(id=="next") {
    nav = $(".slide.active").next('.slide.inactive');
    if(nav.length == 0) nav = $(".slide.inactive").first();
  } else if(id=="close") {
    $(".gallery div.active img").click()
  }
  
  $(".slide.active").addClass("inactive");
  $(".slide.active").removeClass("active");
  nav.removeClass("inactive");
  nav.addClass("active");
});


$(document).keydown(function(e) {
  switch(e.which) {
    
      // left arrow
      case 37:
      $( "#prev" ).click();
      break;
  
      // right arrow
      case 39:
      $( "#next" ).click();
      break;
  
      default: return;
  }
  e.preventDefault();
  
});