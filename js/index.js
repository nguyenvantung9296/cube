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

$('.switch--active').click(function(){
    $('.form--login').addClass('opacity--0');
    $('.modal--login .body__siderbar2 .form-signup').addClass('opacity--1')
    e.preventDefault();
})
$('.switch--signup').click(function(){
    $('.form--login').removeClass('opacity--0');
    $('.modal--login .body__siderbar2 .form-signup').removeClass('opacity--1')
    e.preventDefault();
})

$('input').focus(function () {
    $(this).siblings('label').addClass('active--label');
});
$('input').blur(function () {
    if ($(this).val().length > 0) {
        $(this).siblings('label').addClass('active--label');
    } else {
        $(this).siblings('label').removeClass('active--label');
    }
    //login-email
    if($(this).hasClass('login--email')){
        if($(this).val().length === 0){
           $(this).siblings('span.error').text('Bạn cần nhập tài khoản !').parent('.form-group');
           loginemailError = true;
        }
        else{
            $(this).siblings('.error').text('').fadeOut().parent('.form-group');
            loginemailError = false;
        }
    }
    //password-login
    if($(this).hasClass('login--Password')){
        if($(this).val().length === 0){
           $(this).siblings('span.error').text('Bạn cần nhập mật khẩu !').parent('.form-group');
           loginPasswordError = true;
        }
        else if ($(this).val().length < 8 && $(this).val().length > 1 ) {
            $(this).siblings('.error').text('Mật khẩu sai hoặc không đúng !').fadeIn().parent('.form-group');
            loginPasswordError = true;
        }
        else{
            $(this).siblings('.error').text('').fadeOut().parent('.form-group');
            loginPasswordError = false;
        }
    }



     // User Name
     if ($(this).hasClass('name')) {
        if ($(this).val().length === 0) {
            $(this).siblings('span.error').text('Bạn cần nhập thông tin họ tên').parent('.form-group');
            usernameError = true;
        } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
            $(this).siblings('span.error').text('Tài khoản của bạn phải trên 6 kí tự !').parent('.form-group');
            usernameError = true;
        } else {
            $(this).siblings('.error').text('').fadeOut().parent('.form-group');
            usernameError = false;
        }
    }
    //email
    if($(this).hasClass('email')){
        if($(this).val().length === 0){
            $(this).siblings('span.error').text('Bạn cần địa chỉ email tại đây !').parent('.form-group')
            emailError = true;
        }
        else{
            $(this).siblings('.error').text('').parent('.form-group');
            emailError = false;
        }
    }
    //phone
    if($(this).hasClass('phone')){
        if($(this).val().length === 0){
            $(this).siblings('.error').text('Bạn cần nhập số điện thoại !').parent('.form-group')
            phoneError = true;
        }
        else{
            $(this).siblings('.error').text('').parent('.form-group');
            phoneError = false;
        }
    }
    //password
    if($(this).hasClass('pass')){
        if ($(this).val().length === 0) {
            $(this).siblings('.error').text('Bạn cần nhập mật khẩu !').parent('.form-group');
            passwordError = true;
        }
        else if ($(this).val().length < 8 && $(this).val().length > 1 ) {
            $(this).siblings('.error').text('Mật khẩu tối thiểu có 8 kí tự').parent('.form-group');
            passwordError = true;
        } else {
            $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passwordError = false;
        }
    }
    //passwordCon
    if($('.pass').val() !== $('.passConfirm').val()){
      $('.passConfirm').siblings('.error').text('Mật khẩu không hợp lệ ').parent('.form-group')
      passwordConError = false;
    }
    else{
        $('.passConfirm').siblings('.error').text('').parent('.form-group');
        passwordConError = true;
    }
    
      // Form submit
      $('form.signup-form').submit(function (e) {
        e.preventDefault();

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .phone, .pass, .passConfirm').blur();
        }else {
            $('.signup, .login').addClass('switched');
        }
    });
})
