
$(document).ready(function(){
    $(".home").show("blind",1000);
});

$(".home_b").click(function(){
   if($(".gal_div") || $(".serv_div") || $(".con_div")){
     $(".gal_div, .serv_div, .con_div").hide(500, function(){
       $(".title").html("GAME CATALOGUE");
        $(".home_div").show("fade",1000);

        $(".pixgal").hide();
        $(".pixgalb").hide();
        $(".pixgalc").hide();
    });
   }
})


$(".gal").click(function(){
   if($(".home_div") || $(".serv_div") || $(".con_div")){
     $(".home_div, .serv_div, .con_div").hide(500, function(){
        $(".title").html("GAME GALLERY");
         $(".gal_div").show("fade",700);

         $(".pixgal").show("fade",1200);
        $(".pixgalb").show("fade",1200);
        $(".pixgalc").show("fade",1200);
    });
   }
})


$(".serv").click(function(){
   if($(".home_div") || $(".gal_div") || $(".con_div")){
     $(".home_div, .gal_div, .con_div").hide(500, function(){
       $(".title").html("OUR SERVICES");
        $(".serv_div").show("fade",700);

        $(".pixgal").hide();
        $(".pixgalb").hide();
        $(".pixgalc").hide();
    });
   }
})


$(".con").click(function(){
   if($(".home_div") || $(".serv_div") || $(".gal_div")){
     $(".home_div, .serv_div, .gal_div").hide(500, function(){
         $(".title").html("CONTACT US");
        $(".con_div").show("fade",700);

       $(".pixgal").hide();
        $(".pixgalb").hide();
        $(".pixgalc").hide();
    });
   }
})



$(".imga").click(function(){
    
  $(".gamee").hide("explode",1000);

  $(".gameee").hide("explode",1000);

  $(".pagi").hide("explode",1000);

  $(".foot").hide("explode",1000);

   $(".details").hide("explode",1000);

   $(".taba").show("fade",500);
$(".back").show("blind");

  $(".pix_area").switchClass("col-md-6", "col-md-12",1500, );

})




$(".back").click(function(){

  $(".back").hide();
  
  $(".gamee").show("fade",500);

  $(".gameee").show("fade",500);

  $(".pagi").show("fade",500);

  $(".foot").show("fade",500);

   $(".details").show("fade",500);

  $(".pix_area").switchClass("col-md-12", "col-md-6",1500, function(){
       $(".taba").hide( "fade",500 );
  }); 

})







$(".imgb").click(function(){
    
  $(".game").hide("explode",1000);

  $(".gameee").hide("explode",1000);

  $(".pagi").hide("explode",1000);

  $(".foot").hide("explode",1000);

   $(".detailsb").hide("explode",1000);

   $(".taba").show("fade",500);
$(".backb").show("blind");

  $(".pix_areab").switchClass("col-md-6", "col-md-12",1000, );

})




$(".backb").click(function(){

  $(".backb").hide();
  
  $(".game").show("fade",500);

  $(".gameee").show("fade",500);

  $(".pagi").show("fade",500);

  $(".foot").show("fade",500);

   $(".detailsb").show("fade",500);

  $(".pix_areab").switchClass("col-md-12", "col-md-6",1000, function(){
       $(".taba").hide( "fade",500 );
  }); 

})


$(".img_gal").hover(function(){
  $(this).effect("shake",1000);
})