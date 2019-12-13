console.log('home main js file read');

$('#hamburger').click(function(){
    $(this).toggle(300);
    $('#menu').toggle(300);
});
$('#menu').click(function(){
    $(this).toggle(300);
    $('#hamburger').toggle(300);
});

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
