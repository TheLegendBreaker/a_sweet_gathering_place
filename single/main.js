$('.single-nav').click(function(){
    if($(window).width() <= 1025){
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
