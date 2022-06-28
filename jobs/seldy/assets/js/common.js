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

 //상단메뉴
$(window).scroll(function(){
    var s_top = $(window).scrollTop();
    if(s_top > 100) {
        $('.main-header').addClass('stick');
    }
    else {
        $('.main-header').removeClass('stick');
    }
});

//소메뉴
$(".menu-btn").click(function(){
    if($(".sub-sec").hasClass("hide")){
        $(".sub-sec, .menu-btn").removeClass('hide');
    }else{
        $(".sub-sec, .menu-btn").addClass('hide');
    }
});
$(document).ready(function(){
    var currentPosition = parseInt($(".menu-btn").css("bottom"));
    $(window).scroll(function() {
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if(scrollBottom < 204){
            scrollBottom = 204;
        }else{
            scrollBottom = scrollBottom + 30;
        }
        $(".menu-btn").stop().animate({"bottom":scrollBottom+"px"},200);
    });
    $(window).resize(function(){
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if(scrollBottom < 204){
            scrollBottom = 204;
        }else{
            scrollBottom = scrollBottom + 30;
        }
        $(".menu-btn").stop().animate({"bottom":scrollBottom+"px"},200);
    });
});

  var w = $(window),
    footerHei = $('footer').outerHeight(),
    banner = $('.menu-btn');

  w.on('scroll', function() {

    var sT = w.scrollTop();
    var val = $(document).height() - w.height() - footerHei;

    if (sT >= val){
        banner.stop();
    }
  });
//체크박스
$(function(){
  $('#all-chk').click(function(){
     var chk = $(this).is(':checked');//.attr('checked');
      if(chk) $('.checklist input[type="checkbox"]').prop('checked',true);
      else $('.checklist input').prop('checked',false);
  });
});

//파일첨부
var uploadFile = $('.fileBox .uploadBtn');
uploadFile.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName').val(filename);
});
$('.file-up-con .cancel-btn').click(function(){
    $(this).parent().remove();
})

//팝업닫기
$('.cancelbtn, .close-btn').click(function(){
    $(this).parents('.popup').removeClass('on')
});

//네비,카테고리
$('.ham-btn').click(function(){
    $('.category').addClass('on');
    $('body').attr('style', 'overflow:hidden');
  });
$('.cate-close, .cate-bg').click(function(){
    $('.category').removeClass('on');
    $('body').attr('style', '');
});

//상세검색버튼
$('.btn-srcmore').click(function(){
    if($('.table-p-header').hasClass('on')){
        $('.table-p-header, .table-p').removeClass('on');
    }else{
        $('.table-p-header, .table-p').addClass('on');
    }
})