
$(document).ready(function () {

    $(".skitter-large").skitter();

let aboutOffset = $("#about").offset().top
$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop() 
    if (windowScroll > aboutOffset -60) {
        $('#main-nav').css('backgroundColor' , 'rgba(0 , 0 ,0, 0.7');
        $('#main-nav').css('padding-left' , '60px')
        $('#main-nav').css('padding-right' , '60px')
        // $('#btnUP').css('display','block')
        $('#btnUP').fadeIn(500)

    }
    else {
        $('#main-nav').css('backgroundColor' , 'transparent')
        $('#btnUP').fadeOut(500)

    }
});

$("a[href^='#']").click(function (e) {
    let linkHref = $(e.target).attr('href')
    console.log(linkHref);

    let linksOffset = $(linkHref).offset().top
    $('html,body').animate({scrollTop:linksOffset} ,1000) 
})

$("#btnUP").click(function() {
    $('html,body').animate({scrollTop:0} ,1000)
})

    
    $('#loading .sk-cube-grid').fadeOut(1000 , function() {
       $('#loading').fadeOut(1000 , function () {
        $('#loading').remove();
        $('body').css('overflow', 'auto');
       }) 
    })
})

$('#siderBar i ').click(function () {
    let = boxWidth = $('.box').outerWidth();
    if ($('#siderBar').css('left') == '0px') {
        $('#siderBar').animate({left: `-${boxWidth}`}, 1000)
    }
    else {
        $('#siderBar').animate({left: '0'}, 1000)
    }
})

let changeColor = $('.color-box');

changeColor.eq(0).css('backgroundColor', '#09c');
changeColor.eq(1).css('backgroundColor', 'orange');
changeColor.eq(2).css('backgroundColor', 'teal');
changeColor.eq(3).css('backgroundColor', 'lightgreen');
changeColor.eq(4).css('backgroundColor', 'tomato');

changeColor.click(function (e) {
    let colorPass =   $(e.target).css('backgroundColor');
    $('p').css('color', colorPass)
})


$('.img-sideBar').click(function (e) {
   let imgSrc=  $(e.target).attr('src');
   $('header').css('backgroundImage', `url(${imgSrc})` )
})