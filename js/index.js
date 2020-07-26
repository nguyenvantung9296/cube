$('.img--active').click(function(){
    $('.content__menu').toggleClass('handClick');
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})
$('.icon--nav').click(function(){
    $('.container-fluid .row__row--sec2 .menu.menu__fa , .background__body').toggleClass('handclicknav opacity');
    

})
$('.addons').click(function(){
    $('.color__display').removeClass('color__span')
    $(this).addClass('color__span')
    $('.image__moto').addClass('display__none');
    $('.moto--active').addClass('display__none');
    $('.moto--item2').addClass('moto--block');
    $('.moto--active').removeClass('moto--block');
    $('.moto--item3').removeClass('moto--block');

})
$('.store').click(function(){
    $('.color__display').removeClass('color__span')
    $(this).addClass('color__span')
    $('.image__moto').addClass('display__none');
    $('.moto--item2').removeClass('moto--block');
    $('.moto--active').addClass('moto--block');
    $('.moto--item3').removeClass('moto--block');
   
    

})
$('.materials').click(function(){
    $('.color__display').removeClass('color__span')
    $(this).addClass('color__span')
    $('.image__moto').addClass('display__none');
    $('.moto--item2').removeClass('moto--block');
    $('.moto--active').removeClass('moto--block');
    $('.moto--item3').addClass('moto--block');
   
})