
$( document ).ready(function(){
  $('.item').on('click', function() {
        $(this).addClass('active')
          .siblings('.item').removeClass('active');
        $(".contentbox").hide();
        if($(this).hasClass("about")){
          $("#about").show();
        } 
        else if($(this).hasClass("portfolio")){
          $("#portfolio").show();
        } 
        else if($(this).hasClass("skills")){
          $("#skills").show();
        } 
        else if($(this).hasClass("contact")){
          $("#contact").show();
        }
        // if($(this).hasClass("about")){
        //     $('.about').addClass('show').siblings(".page").removeClass("show");
        // } else if($(this).hasClass("portfolio")){
        //     $('.portfolio').addClass('show').siblings(".item").removeClass("show");   
        // } else if($(this).hasClass("skills")){
        //     $('.skills').addClass('show').siblings(".page").removeClass("show");
        // }
  });

});
