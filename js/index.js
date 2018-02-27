
$( document ).ready(function(){
  $('.item').on('click', function() {
        $(this).addClass('active')
          .siblings('.item').removeClass('active');
        $(".contentbox").hide();
        if($(this).hasClass("about")){
          $("#about").fadeIn(700);
        } 
        else if($(this).hasClass("portfolio")){
          $("#portfolio").fadeIn(700);
        } 
        else if($(this).hasClass("skills")){
          $("#skills").fadeIn(700);
        } 
        else if($(this).hasClass("contact")){
          $("#contact").fadeIn(700);
        }
  });

});
