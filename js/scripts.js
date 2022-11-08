$(".gallery div img").click(function() {

  if ( $( this ).parent().hasClass( "active" ) ) {
    $('main').removeClass( "lightbox" );
    $(".lightbox-bg").removeClass('active');

    $(".gallery div").removeClass('inactive');
    $(this).parent().removeClass( "active" );
  } else {
    $('main').addClass( "lightbox" );
    $(".lightbox-bg").addClass('active');

    $(".gallery div").addClass('inactive');
    $(this).parent().removeClass( "inactive" );
    $(this).parent().addClass( "active" );
  }

});

$(".lightbox-bg").click(function() {
  $('main').removeClass( "lightbox" );
  $(".lightbox-bg").removeClass('active');

  $(".gallery div").removeClass('inactive');
  $(".gallery div").removeClass('active');
});


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



$(".fn").click(function() {
  $( this ).next( '.fnc').toggleClass( 'active');
  $( this ).toggleClass( 'active');
});