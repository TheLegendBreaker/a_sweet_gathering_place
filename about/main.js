$('.single-nav').click(function(){
    if($(window).width() <= 1019){
	    console.log('widow small enough');
            if($('#hamburger').is(":visible")){
            $('#hamburger').slideToggle(300, function(){
                $('#menu').slideToggle(300);
            });
        }else{
            $('#menu').slideToggle(300, function(){
                $('#hamburger').slideToggle(300);
            });
        }
    }
});

// change the size of the google map based on screen size
$(window).resize(function(){
    if($(window).width() <= 700){
        $("#m-map").attr("width", "300");
        $("#m-map").attr("height", "300");
    }else if($(window).width() >= 1020){
    	$('#menu').removeAttr('style');
	$('#menu').removeClass('inactive');
    }else if($(window).width() <= 1620){
        $("#m-map").attr("width", "400");
        $("#m-map").attr("height", "400");
        $("#about-card").prepend($("#about1"));
        $("#about-card").prepend($("#about2"));
    }else if($(window).width() >= 1620){
        $("#desk-display").append($("#about1"));
        $("#desk-display").append($("#about2"));
    }
});

// check window size on init
if($(window).width() <= 700){
    $("#m-map").attr("width", "300");
    $("#m-map").attr("height", "300");
}else if($(window).width() >= 1020){
    $('#menu').removeAttr('style');
    $('#menu').removeClass('inactive');
    $("#m-map").attr("width", "500");
    $("#m-map").attr("height", "500");
}else if($(window).width() >= 1620){
    $("#desk-display").append($("#about1"));
    $("#desk-display").append($("#about2"));
}
