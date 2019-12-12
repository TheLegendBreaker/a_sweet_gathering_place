$('.single-nav').click(function(){
    if($(window).width() <= 1025){
            if($('#single-burger').is(":visible")){
            $('#single-burger').slideToggle(300, function(){
                $('#single-menu').slideToggle(300);
            });
        }else{
            $('#single-menu').slideToggle(300, function(){
                $('#single-burger').slideToggle(300);
            });
        }
    }
});
