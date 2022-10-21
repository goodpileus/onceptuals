$(".grid-btn").click(function() {
  $('.grid').toggleClass( "active" );
  $('.grid-btn').toggleClass( "active" );
});

$(".gallery div img").click(function() {

  if ( $( this ).parent().hasClass( "active" ) ) {
    $(".gallery div").show();
    $(this).parent().removeClass( "active" );
  } else {
    $(".gallery div").hide();
    $(this).parent().show();
    $(this).parent().addClass( "active" );
  }

});