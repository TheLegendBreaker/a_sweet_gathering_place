
$('.img').hover(function(){
    $(this).addClass('active');
    $('.img').each(function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('dim');
        }
    });
},function(){
    $('.img').removeClass('dim');
    $(this).removeClass('active');

}); 
