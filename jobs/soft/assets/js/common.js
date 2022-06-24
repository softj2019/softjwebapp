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
// 파일업로드
var uploadFile = $('.fileBox .uploadBtn');

uploadFile.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName').val(filename);
});
var uploadFile2 = $('.fileBox .uploadBtn2');
    uploadFile2.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileName2').val(filename);
    });
// 카테고리
$(".menu-box-tree,.menu-box-tree2").hide();
$(".menu-box-tree > li > a,.select-p").click(function(e){
    e.preventDefault();
    $(this).next().slideToggle(300);
});
// 달력
$(function() { 
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear:true,
        monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        numberOfMonths: [1,1],
    });          
    $(".date_pick").datepicker();      
    $('.ck-cu').click(function(){
        $(this).toggleClass('c-active')
    });        
});
//페이지네이션
$('.pagination .page-item .page-link').click(function(e){
    e.preventDefault();
    $('.page-link').removeClass('active');
    $(this).addClass('active');
});
//체크박스
$('#ch-all').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
    if(chk) $('.R-table input').prop('checked',true);
    else $('.R-table input').prop('checked',false);
});
// 상세페이지
$(".R-table tbody tr td:not(:first-child)").click(function() {
    if($(this).parents().hasClass('right-l')){
        
    }else{
        window.open('popup-detail.html','_blank', 'width=920px,height=630px,toolbars=no,scrollbars=no'); return false;
    }
});