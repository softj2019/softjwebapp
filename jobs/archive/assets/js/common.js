window.addEventListener("load", function(){
    setTimeout(loaded, 100);

}, false);

function loaded(){
    window.scrollTo(0, 1);
}

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);

// top버튼
$(".scroll-t").click(function() {
    $('html, body').animate({
    scrollTop : 0
    }, 400);
    return false;
});
var floatPosition = parseInt($(".scroll").css('top'));
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop + floatPosition + "px";
    $(".scroll").stop().animate({
        "top" : newPosition
    }, 50);

}).scroll();

//상품구매수량 변경
$('.minus').click(function () {
    var data =  $("input[name=payment_order]");
    if(data.val() > 1){
        data.val(Number(data.val())-1);
        $('.num').html(data.val());
    }
});
$('.plus').click(function () {
    var data =  $("input[name=payment_order]");
    data.val(Number(data.val())+1);
    $('.num').html(data.val());
});

//nav-click
var menu=$('.detail-nav>li');
var content=$('.detail-section div.detail-wrap')
menu.click(function(e){
    e.preventDefault();
    var tg=$(this);
    var i=tg.index();
    var section=content.eq(i);
    var tt=section.offset().top-60;//201023.수정
    $('html,body').stop().animate({scrollTop:tt});
});

var windowB = $(window),
    headerOffsetTop = $(".main-navi").offset().top,
    hdheight = $(".main-navi").css('height');
 windowB.on("scroll",function(){
    if(windowB.scrollTop()>headerOffsetTop) {
        $(".main-navi").addClass("sticky");
        $('.main-inner').css('margin-top', hdheight);
    }else{
        $(".main-navi").removeClass("sticky");
        $('.main-inner').removeAttr('style');
    }
 });
 // 201023 수정
 $(function(){
    $('#all-ck').click(function(){
        var chk = $(this).is(':checked');
        if(chk) $('.cart-table tbody td input, .file-up-con li input').prop('checked',true);
        else $('.cart-table tbody td input, .file-up-con li input').prop('checked',false);
    });
});