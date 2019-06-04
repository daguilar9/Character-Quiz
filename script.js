$(".wanda").hide(function(){
     
    $(".wanda").hide(); 
    $(".cosmo").hide();
    $(".timmy").hide();
    $(".poof").hide();
});

   $("button").click(function() {
       
    var icecream = $(".ice").val();
    var number = $(".number").val(); 
    
    console.log(icecream);
    console.log(number);
    
        
    if(icecream === "vanilla" && number < 36){
    $(".message").text("You are Wanda!"); 
    $(".wanda").show();
    $(".fairly").hide(); 
    $(".cosmo").hide();
    $(".poof").hide();
    $(".timmy").hide();
    }
    else if(icecream === "vanilla" && number > 36){
    $(".message").text("You are Timmy!"); 
    $(".wanda").hide();
    $(".fairly").hide(); 
    $(".cosmo").hide();
    $(".poof").hide();
    $(".timmy").show();
    }
    else if(icecream === "chocolate" && number < 36){
    $(".message").text("You are Poof!"); 
    $(".wanda").hide();
    $(".fairly").hide(); 
    $(".cosmo").hide();
    $(".poof").show();
    $(".timmy").hide();
    }
    else if(icecream === "chocolate" && number > 36){
    $(".message").text("You are Cosmo!");
    $(".wanda").hide();
    $(".fairly").hide(); 
    $(".cosmo").show();
    $(".poof").hide();
    $(".timmy").hide();
    }
    else if(icecream ==="" && number ===""){
    $(".message").text("Please enter something!");
    }
});
        
//
  