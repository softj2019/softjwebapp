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

// 탑버튼
$(".top").click(function() {
  $('html, body').animate({
      scrollTop : 0
  }, 400);
  return false;
});
$(".down").click(function(){
  $('html, body').animate({
      scrollTop:($('body').height())
  }, 400);
  return false;
});

//상품구매수량 변경
$('.minus').click(function () {
  var data =  $("input[name=payment_order_quantity]");
  data.val(Number(data.val())-1);
  $('.number').html(data.val());
});
$('.plus').click(function () {
  var data =  $("input[name=payment_order_quantity]");
  data.val(Number(data.val())+1);
  $('.number').html(data.val());
});
//체크박스
$(function(){
  $('#all-chk').click(function(){
     var chk = $(this).is(':checked');//.attr('checked');
      if(chk) $('.checklist input[type="checkbox"]').prop('checked',true);
      else $('.checklist input').prop('checked',false);
  });
});

//모달
$(function(){
    $("button[name='detail']").click(function(){
       $(".modal").attr("style", "display:block");
   });
   $(".modal-close").click(function(){
       $(".modal").attr("style", "display:none");
   });
});

//lnb
//$(function(){
//    $(".gnb>ul>li>a").mouseenter(function(){
//        $(this).next(".lnb").addClass("on").animate({
//            top : '52px'
//        });
//    });
//    $(".gnb>ul>li>a").mouseout(function(){
//        $(this).next(".lnb").removeClass("on");
//    });
//})