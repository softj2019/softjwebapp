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

// 카테고리
$(document).ready(function(){
  $(".gnb>ul>li .lnb").hide();
  $(".gnb>ul>li p").click(function(){
      $(this).next().slideToggle(300);
  });

  //네비,카테고리
  $('.ham-btn').click(function(e){
      e.preventDefault();
      $('.category').addClass('on');
      $('body').attr('style', 'overflow:hidden')
  });
  $('.cate-close, .cate-bg').click(function(e){
      e.preventDefault();
      $('.category').removeClass('on');
      $('body').attr('style', '')
  });
});
//체크박스 //210803 추가
$(function(){
  $('#all-chk').click(function(){
      var chk = $(this).is(':checked');
      if(chk) $('.file-up-con input').prop('checked',true);
      else $('.file-up-con input').prop('checked',false);
  });
});