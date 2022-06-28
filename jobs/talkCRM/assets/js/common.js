//네비게이션
/*200519 전체 삭제, 새로추가*/
$(document).on('click', '.main-navi:not(.sm) li.hassub button', function(){
    if($(this).hasClass('down-arrow')){
        $(this).parent('.hassub').addClass('on');
        $(this).attr('class', 'up-arrow');
        $(this).siblings('.dp2').slideDown();
    }else{
        $(this).parent('.hassub').removeClass('on');
        $(this).attr('class', 'down-arrow');
        $(this).siblings('.dp2').slideUp();
    }
});
$(document).on('mouseenter', '.main-navi.sm .hassub', function(){
    $(this).addClass('hover');
});
$(document).on('mouseleave', '.main-navi.sm .hassub', function(){
    $(this).removeClass('hover');
});
$(document).on('click', '.main-navi.sm .h1title', function(){
    $(this).parents('.main-navi').removeClass('sm');
});
$(document).on('click', '.main-navi .h1title .left-arrow', function(){
    $('.hassub.on .up-arrow').trigger('click');
    $(this).parents('.main-navi').addClass('sm');
});
//네비게이션

//탭
$('.tabUl li').click(function(){
    var tab_id = $(this).attr('data-id');

    $(this).siblings('li').removeClass('on');
    $(this).closest('.tabUl').next('.tabContent').children('.tabbox').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
});
$('.dp1 li').click(function(e){
    e.preventDefault();
    var tab_id = $(this).children('a').attr('data-id');

    $(this).siblings('li').children('a').removeClass('on');
    $(this).closest('.dp1').next('.dp2').children('table').removeClass('on');
    $('.dp2 table tr').removeClass('on');
    $(this).children('a').addClass('on');
    $("#"+tab_id).addClass('on');
});
//검색탭
$('.doc li').click(function(e){
   e.preventDefault();
    $(this).siblings('li').children('a').removeClass('on');
    $(this).children('a').addClass('on');
});
$('.dp2 table tr').click(function(){
    $('.dp2 table tr').removeClass('on');
    $(this).addClass('on');
});

$('.srcinput , .srcwrap').focusin(function(){
    $('.srcwrap').addClass('on');
});
//검색팝업
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('srcinput');
    var $popArea = $tgPoint.parents().hasClass('srcwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.srcwrap').removeClass('on');
    }
});
//유입경로탭
$('.fnwrap .dp2 td').on('click', function(){
    var tab_id = $(this).parents('table').attr('id');
    var depth1 = $('a[data-id="' + tab_id + '"]').text();
    var depth2 = $(this).text();
    $(this).parents('.formwrap3').children('input.fninput').val(depth1 + '▶' + depth2);
});
//유입경로팝업
$('.fninput , .fnwrap').focusin(function(){
    $(this).next('.fnwrap').addClass('on');/*2020.07.17 수정*/
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('fninput');
    var $popArea = $tgPoint.parents().hasClass('fnwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.fnwrap').removeClass('on');
    }
});
//쿠폰검색팝업
$('.cpwrap a').on('click', function(){
    var cpName = $(this).text();
    $(this).parents('.formwrap3').children('input.cpinput').val(cpName);
});
$('.cpinput').on('propertychange change keyup paste input', function(){
    var currentVal = $(this).val();
    var oldVal;
    if(currentVal == oldVal){
        return;
    }
    oldVal = currentVal;
    $('.cpwrap').addClass('on');
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('cpinput');
    var $popArea = $tgPoint.parents().hasClass('cpwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.cpwrap').removeClass('on');
    }
});
//선불금이체-고객검색팝업
$('.custsrc-btn').click(function(){
    $('#custSrc').addClass('on');
});

//페이지네이션
$('.pagination .page-item .page-link').click(function(e){
    e.preventDefault();
    $('.page-link').removeClass('active');
    $(this).addClass('active');
});

//고객검색
$('#custSrc .tableBody').click(function(){
    
    if($(this).hasClass('on')){
        $(this).removeClass('on');
    }else if($('#prepayment').hasClass('on')){
        $(this).removeClass('on');
        $('#custSrc').removeClass('on');
    }
    else{
    $('#custSrc .tableBody').removeClass('on');
    $(this).addClass('on'); 
}
});
$('#custSrc .modalClose').click(function(){
    $('#custSrc .tableBody').removeClass('on');
});
//중복고객 합병처리
$('#dupCustBtn').click(function(){
    $('#custSrc .tableBody').removeClass('on');
    $('#dupCust').addClass('on'); 
});
$('#dupCust td:not(.table-tit) a').click(function(e){
    e.preventDefault();
    $(this).closest('td').siblings('td').children('a').removeClass('on');
    $(this).toggleClass('on');
});
// 메뉴 2020.05.19 삭제
//$('.logo-right').click(function(){
//    $('.right-main').css('margin-left','70px');
//    $('.right-main').css("max-width","calc(100% - 70px)");
//});
//$('#sidebar li:nth-child(1) img').click(function(){
//    $('.right-main').css('margin-left','230px');
//});
// 메뉴R 2020.05.14 수정 ~481
$('.Rtab-pub').click(function(){
    $('.right-tab-box').css('right','0');
    $('.right-ul li').removeClass('on');
    $('.pub-on').trigger('click');
});
$('.Rtab-pri').click(function(){
    $('.right-tab-box').css('right','0');
    $('.right-ul li').removeClass('on');
    $('.pri-on').trigger('click');
});
$('.R-T-Close').click(function(){
    $('.right-tab-box').css('right','-800px');
});

// 모달
$('body').click(function(){
    if($('.modal').hasClass('on')){
        $('body').css('overflow', 'hidden');
    }
});
$(".call-btn").click(function(){
    $("#call").addClass('on');
});
$(".consult-btn").click(function(){
    $("#consult").addClass('on');
});
$(".consult-table tr").click(function(){
    $("#consult").addClass('on');
});
$(".package-add-btn").click(function(){
    $("#package-add").addClass('on');
});
$(".reserv-btn").click(function(){
    $("#reserv").addClass('on');
});
$(".payment-btn").click(function(){
    //저장후수납등록 클릭시 기존의 상담정보창 close
    $(".modal").removeClass('on');
    $("#payment").addClass('on');
});
$(".chart-btn").click(function(){
    $("#chart").addClass('on');
});
$(".custSrc-btn").click(function(){
    $("#custSrc").addClass('on');
});
$(".package-btn").click(function(){
    $("#package-add").addClass('on');
});
$(".coupon-btn").click(function(){
    $("#coupon").addClass('on');
});
$(".mileage-btn").click(function(){
    $("#mileage").addClass('on');
});
$(".prepayment-btn").click(function(){
    $("#prepayment").addClass('on');
});
$(".package-edit-btn").dblclick(function(){
    $("#package-edit").addClass('on');
});
$(".prescription-add-btn").click(function(){
    $("#prescription-add").addClass('on');
});
$(".prescription-edit-btn").click(function(){
    $("#prescription-edit").addClass('on');
});
$(".imgView-btn").click(function(){
    $("#imgView").addClass('on');
});
$(".imgUp-btn").click(function(){
    $("#imgUp").addClass('on');
});
$(".customerl-btn").click(function(){
    $("#customerl").addClass('on');
});
$(".msg-btn").click(function(){
    $("#msg").addClass('on');
});
$(".serviceSrc .blueTable tbody tr").dblclick(function(){
    $(".editpop").addClass('on'); 
});
$('.editpop-btn').on('click', function(e){
    e.preventDefault();
    $('.editpop').addClass('on');
});
$(".modalClose").click(function(){
    $(this).parents(".modal").removeClass('on');
    $('body').css('overflow', 'auto');
});

// 날짜 선택
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    showMonthAfterYear:true, //년도 먼저 나오고, 뒤에 월 표시
    monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//달력의 월 부분 텍스트
    dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 부분 텍스트
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], //달력의 요일 부분 Tooltip 텍스트
    numberOfMonths: [1,1], // 1행 2열로 표시
});
//input을 datepicker로 선언
$(".date_pick").datepicker(); 

// 체크박스
$('#all-ck-1').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t input').prop('checked',true);
     else $('.body-t input').prop('checked',false);
 });
 $('#all-ck-2').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t2 input').prop('checked',true);
     else $('.body-t2 input').prop('checked',false);
 });
 $('#all-ck-3').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t3 input').prop('checked',true);
     else $('.body-t3 input').prop('checked',false);
 });
 $('#all-ck-4').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t4 input').prop('checked',true);
     else $('.body-t4 input').prop('checked',false);
 });
 $('#m-all-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.mo-body-t input').prop('checked',true);
     else $('.mo-body-t input').prop('checked',false);
 });
 $('#m-all1-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.mo-body-t2 input').prop('checked',true);
     else $('.mo-body-t2 input').prop('checked',false);
 });

//file upload
var uploadFile = $('.fileBox .uploadBtn');

uploadFile.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName').val(filename);
});

var uploadFile2 = $('.fileBox2 .uploadBtn2');
uploadFile2.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName2').val(filename);
});


//마우스오버 메뉴
  //메뉴보이기+위치
  $('.hoverpopList tbody tr').mouseenter(function(e){
    var tp = $(this).parents('.tabbox');
    //Get window size:
    var winWidth = $(document).width();
    var winHeight = $(document).height();
    //Get pointer position:
    var RposX = e.pageX;
    var RposY = e.pageY;
    var posX = e.pageX - tp.offset().left;
    var posY = e.pageY - tp.offset().top;
    //Get contextmenu size:
    var menuWidth = tp.find('.hoverpop').width();
    var menuHeight = tp.find('.hoverpop').height();
    //Security margin:
    var secMargin = 10;
    //Prevent page overflow:
    if(RposX + menuWidth + secMargin >= winWidth
    && RposY + menuHeight + secMargin >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else if(RposX + menuWidth + secMargin >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY + secMargin + "px";
    }
    else if(RposY + menuHeight + secMargin >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + secMargin + "px";
      posTop = posY + secMargin + "px";
    }
      
    tp.find('.hoverpop').removeClass('on');
    //Display menu:
    tp.find('.hoverpop').css({
       "left": posLeft,
       "top": posTop
    }).addClass('on');
    
    //Prevent browser default contextmenu.
    return false;
  });

  //메뉴사라지기
    $('body').on('mouseover', function(e){
        var $tgPoint = $(e.target);
        var $popArea = $tgPoint.parents().hasClass('hoverpopList');

        if ( !$popArea ){
            $('.hoverpop').removeClass('on');
        }
    });
 


//2020.05.14 수정 688 ~ 731
//우클릭메뉴
$(".serviceSrc .blueTable tbody tr").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".serviceSrc .blueTable tbody tr").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.serviceSrc').append('<div class="rcpop"><ul><li><a href="#" class="editpop-btn">수정</a></li><li><a href="#" class="del-btn">삭제</a></li></ul</div>');
            //메뉴보이기+위치
            var tp = $(this).parents('.modalContent');
            //Get pointer position:
            var MposX = e.pageX - tp.offset().left;
            var MposY = e.pageY - tp.offset().top;
            posLeft = MposX + "px";
            posTop = MposY - 58 + "px";
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');
        //수정,삭제 기능
        var thisTR = $(this);
        $(document).on('click', '.rcpop .editpop-btn', function(){
            $('.editpop').addClass('on'); 
            $('.rcpop').remove();
        });
        $(document).on('click', '.rcpop .del-btn', function(){
            $(thisTR).remove();
            $('.rcpop').remove();
        });
        //Prevent browser default contextmenu.
        return false;
    }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');
    if ( !$popArea ){
        $('.rcpop').remove();
    }
});

//패키지수정 - 처방수정 우클릭메뉴
$(".packpop-btn tr").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".packpop-btn tr").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        $('.rcpop').remove();//기존 팝업제거
        $(this).closest('.pack-table').append('<div class="rcpop"><ul><li><a href="#" class="presAdd-btn">처방수정</a></li><li><a href="#" class="del-btn">처방삭제</a></li></ul</div>');
            //메뉴보이기+위치
            var tp = $(this).closest('.modalContent');
            //Get pointer position:
            var MposX = e.pageX - tp.offset().left;
            var MposY = e.pageY - tp.offset().top;
            posLeft = MposX + "px";
            posTop = MposY - 58 + "px";
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');
        //수정,삭제 기능
        var thisTR = $(this);
        $(document).on('click', '.rcpop .presAdd-btn', function(){
            $('#prescription-add').addClass('on'); 
            $('.rcpop').remove();
        });
        $(document).on('click', '.rcpop .del-btn', function(){
            $(thisTR).remove();
            $('.rcpop').remove();
        });
        //Prevent browser default contextmenu.
        return false;
    }
});

//2020-05-14 추가 ~
//메시지 탭
$('#msg .top-tabul li').click(function(){
    var tab_id = $(this).attr('data-id');
    var tab_id2 = $(this).attr('data-id2');
    $(this).siblings('li').removeClass('on');
    $('.po-rel > .tabContent').children('.tabbox').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
    $("#"+tab_id2).addClass('on');
});


// 예약
//게시판
$("#board-list .wrap ul").click(function(){
    $("#board-view").addClass('on');
    $("#board-list").removeClass('on');
});
$(".board-write-btn").click(function(){
    $("#board-write").addClass('on');
    $(".modal:not(#board-write)").removeClass('on');
});
$(".list-btn").click(function(){
    $("#board-list").addClass('on');
    $(".modal:not(#board-list)").removeClass('on');
});
$(".list-x").click(function(){
    $(".modal").removeClass('on');
});
$('#help .tableBody').click(function(){
    $("#help-view").addClass('on');
    $(".modal:not(#help-view)").removeClass('on');
});
$('.help-btn').click(function(){
    $("#help").addClass('on');
    $(".modal:not(#help)").removeClass('on');
});

$('#num-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.tableBody input').prop('checked',true);
     else $('.tableBody input').prop('checked',false);
 });

// 05.19 추가
// 우클릭 빈셀메뉴
$(".reser-table tbody tr td").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".reser-table tbody tr td").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        if($(this).hasClass('table-M')){ 
        }else{
        //실행내용
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.reser-table').append('<div class="rcpop ver2"><ul class="w100px"><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="memo-btn">메모등록</a></li><li><a href="#">휴진등록</a></li><li class="bor-b-g"><a href="#">휴진취소</a></li><li><a href="#">예약가져오기</a></li></ul></div>');
          //메뉴보이기+위치
            var tp = $(this).parents('.table-in');
            //Get window size:
            var winWidth = $(document).width();
            var winHeight = $(document).height();
            //Get pointer position:
            var RposX = e.pageX;
            var RposY = e.pageY;
            var posX = e.pageX - tp.offset().left;
            var posY = e.pageY - tp.offset().top;
            //Get contextmenu size:
            var menuWidth = $('.rcpop').width();
            var menuHeight = $('.rcpop').height();
            //Security margin:
            var secMargin = 10;
            //Prevent page overflow:
            posLeft = posX + 20 + "px";
             posTop = posY + 10 + "px";
            $('.rcpop').removeClass('on');
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');

            //Prevent browser default contextmenu.
            return false;
          }
    }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');

    if ( !$popArea ){
        $('.rcpop').remove();
    }
});
// 우클릭 예약셀메뉴
$(".reser-table tbody tr td .table-M").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".reser-table tbody tr td .table-M").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        //실행내용
        $('.rcpop').remove();//기존 팝업제거
        // 05.19 8:00 수정
        $(this).parents('.reser-table').append('<div class="rcpop ver2"><ul><li class="bor-b-g"><a href="#" class="editpop-btn">내원확인</a></li><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="rc-add R-arr">예약수정</a><ul class="top-80"><li><a href="#" class="reserved-btn">예약수정</a></li><li><a href="#">예약취소</a></li><li><a href="#">예약삭제</a></li></ul></li><li><a href="#" class="R-arr">확인콜</a><ul class="top-120"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li class="bor-b-g"><a href="#" class="R-arr">해피콜</a><ul class="top-160"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li><a href="#" class="msg-btn">문자발송</a></li><li class="bor-b-g"><a href="#">고객이동</a></li><li><a href="#">예약복사</a></li><li><a href="#">예약이동</a></li></ul></div>');
          //메뉴보이기+위치
        //   
            var tp = $(this).parents('.table-in');
            //Get window size:
            var winWidth = $(document).width();
            var winHeight = $(document).height();
            //Get pointer position:
            var RposX = e.pageX;
            var RposY = e.pageY;
            var posX = e.pageX - tp.offset().left;
            var posY = e.pageY - tp.offset().top;
            //Get contextmenu size:
            var menuWidth = $('.rcpop').width();
            var menuHeight = $('.rcpop').height();
            //Security margin:
            var secMargin = 10;
            //Prevent page overflow:
            posLeft = posX + 20 + "px";
             posTop = posY + 10 + "px";
            $('.rcpop').removeClass('on');
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');

            //Prevent browser default contextmenu.
            return false;
          }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');

    if ( !$popArea ){
        $('.rcpop').remove();
    }
});
$(document).on('click', '.rcpop a', function(){
    $('.rcpop').remove();
});

//마우스오버 팝업
$('.hoverpopList-res tbody .table-M, .table-M-h').mouseover(function(e){
    console.log('hi');
    var tp = $(this).parents('.table-in');
    //Get window size:
    var winWidth = $(document).width();
    var winHeight = $(document).height();
    //Get pointer position:
    var RposX = e.pageX;
    var RposY = e.pageY;
    var posX = e.pageX - tp.offset().left;
    var posY = e.pageY - tp.offset().top;
    //Get contextmenu size:
    var menuWidth = tp.find('.hoverpop').width();
    var menuHeight = tp.find('.hoverpop').height();
    //Security margin:
    var secMargin = 10;
    //Prevent page overflow:
    if(RposX + menuWidth + secMargin >= winWidth
    && RposY + menuHeight + secMargin >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else if(RposX + menuWidth + secMargin >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY + secMargin + "px";
    }
    else if(RposY + menuHeight + secMargin >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + secMargin + "px";
      posTop = posY + secMargin + "px";
    }
      
    tp.find('.hoverpop').removeClass('on');
    //Display menu:
    tp.find('.hoverpop').css({
       "left": posLeft,
       "top": posTop
    }).addClass('on');
    
    //Prevent browser default contextmenu.
    return false;
  });



// 메모버튼 20.06.17 수정 달력크기연동
$('.reserv-con .left-f .tabContent textarea').focusin(function(){
    $(".area-btn").addClass('on');
    var l = $('.left-con .ui-datepicker-calendar tbody tr').length;
    if(l == 6){
        $(".reserv-con .left-f .tabContent textarea").css('height',"380px");
    }else{
        $(".reserv-con .left-f .tabContent textarea").css('height',"420px");
    }   
}).focusout(function(){
    $(".area-btn").removeClass('on');
    var l = $('.left-con .ui-datepicker-calendar tbody tr').length;
    if(l == 6){
        $(".reserv-con .left-f .tabContent textarea").css('height',"420px");
    }else{
        $(".reserv-con .left-f .tabContent textarea").css('height',"460px");
    }
});
//20.06.17 추가
$(document).on('click', '.ui-datepicker-header>a', function(){
    var l = $('.left-con .ui-datepicker-calendar tbody tr').length;
    if(l == 6){
        $('.releft-t .ui-datepicker').height(276.920);
        $(".reserv-con .left-f .tabContent textarea, .rese-tab3-in").css('height',"420px");
    }else{
        $('.releft-t .ui-datepicker').height(236.920);
        $(".reserv-con .left-f .tabContent textarea, .rese-tab3-in").css('height',"460px");
    }
});
$(window).load('.ui-datepicker-header>a', function(){/*2020.08.04 수정*/
    var l = $('.left-con .ui-datepicker-calendar tbody tr').length;
    if(l == 6){
        $('.releft-t .ui-datepicker').height(276.920);
        $(".reserv-con .left-f .tabContent textarea, .rese-tab3-in").css('height',"420px");
    }else{
        $('.releft-t .ui-datepicker').height(236.920);
        $(".reserv-con .left-f .tabContent textarea, .rese-tab3-in").css('height',"460px");
    }
});
// 05.25 가로보기 메모버튼
$('.r-memo .d-memo').focusin(function(){
    $(this).next().css('display','block');
    $(this).css('width',"calc(100% - 51px)");
    txt_btn = false;
});
$('.r-memo .d-memo').focusout(function(){
    $(this).next().css('display','none');
    $(this).css('width',"100%");
    txt_btn = true;
});
// ~
// 설정ul
$(function () {
    var set_on = true
    $('.setup-b').click(function(){
        if(set_on){
            $('.setup-ul').addClass('on');
            set_on = false;
        }
        else{
            $('.setup-ul').removeClass('on');
            set_on = true;
        }
    });
});
// 05.25 추가 수정
// 셀렉트박스
$(document).ready(function () {
    $("div.select").click(function() {
        $(this).children("ul").toggle();
        $('.select > a').toggleClass('on');
    });
    $("div.select > ul > li").click(function() {
        var str = "";
        $("div.select > ul > li input").each(function(){
         if($(this).is(":checked")){
            str += $(this).next().text() + ", ";}
        });
        if(str.indexOf('전체') !== -1){
            var str = str.slice(0, 4);
        }else{
            var str = str.slice(0, -2);
        }
        $("div.select").children("a").text(str); 
    });
    //전체선택 클릭 시 모든 체크박스 선택
    $("div.select #sel-ck1").click(function(){
        if($(this).is(':checked')){$('div.select input').prop('checked',true);
        }else{
            $('div.select input').prop('checked',false);}
    });
    $("div.select input").click(function(){
        if($("div.select input:checked").length !== $("div.select input").length){
            $("#sel-ck1").prop('checked',false);
        }
    });
    $("div.select-mem").click(function() { 
        $(this).children('a').toggleClass('on');
    });
    $("div.select-mem > ul > li").click(function() {
        $(this).parents(".select-mem").children("a").text($(this).text());
        $(this).children('a').toggleClass('on');
    });
});


// ~
// 05.20 수정
var reRight_H = $('.reright-box .tabContent .table-in').height();
var calander_h = $('.reright-box .r-calander').outerHeight(true); 
$('.bas-view').click(function(){
    $('.hor-view').removeClass('on');
    $('.bas-view').addClass('on');
    $('.con-left, .tab-btn, .res-f, .res-t').removeClass('on');
    $('.reright-box .tabContent .table-in').height(reRight_H);
});
$('.hor-view').click(function(){
    $('.bas-view').removeClass('on');
    $('.hor-view').addClass('on');
    $('.con-left, .tab-btn, .res-f, .res-t').addClass('on');
    $('.reright-box .tabContent .table-in').height(reRight_H - calander_h - 40);
});
// ~
// 05.22 일자,예약 버튼수정 20.06.17 재수정
$(document).ready(function(){
    $('.tab-btn button').click(function(){
        if($(this).hasClass('on')){
            $('.tab-btn button, .r-reser, .r-memo').removeClass('on');
        }else{
            $('.tab-btn button, .r-reser, .r-memo').removeClass('on');
            var gray_id = $(this).attr('data-id');
            $(this).addClass('on');
            $("#"+gray_id).addClass('on');
        }
    });
});
// ~
 //day,week,month
$(document).ready(function(){
    $('.ul-tab-box>ul>li').click(function(){
        var res_id = $(this).attr('res-id');
        $('.ul-tab-box>ul>li').removeClass('on');
        $(this).parents('.con-right').find('.tabContent .tabbox').removeClass('on');
        $(this).addClass('on');
        $("#"+res_id).addClass('on');
        //day-box
        if(res_id.indexOf('res-tab1') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.day').addClass('on');
        }else if(res_id.indexOf('res-tab2') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.week').addClass('on');
        }else if(res_id.indexOf('res-tab3') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.month').addClass('on');
        }
    });
});
// 05.25 달력클릭 추가
$(document).ready(function(){
    $('.reserv-con .releft-t tbody td').click(function(){
        $('.reserv-con .releft-t tbody td span').removeClass('click-on');
        $(this).children('span').addClass('click-on');
    });
    $('.r-calander tbody td').click(function(){
        $('.r-calander tbody td').removeClass('click-on');
        $(this).addClass('click-on');
    });
});
// ~
//모달창
$(".reser-table tbody tr td").on("dblclick", function(){
    if($(this).hasClass('table-M')){
    }else{
        $('#reserv').addClass('on');
    }
});
$(".reser-table tbody tr td .table-M, .table-M-h").on("dblclick", function(){
    $('#reserv-edit').addClass('on');
    setTimeout(function(){$('#reserv').removeClass('on');
    }, 10);
});
$(document).on('click', '.reserv-btn', function(){
    $('#reserv').addClass('on');
});
$(document).on('click', '.reserved-btn', function(){
    $('#reserv-edit').addClass('on');
    $('.rcpop').remove();//20.06.11 추가
});
$(document).on('click', '.memo-btn', function(){
    $('#mo-memo').addClass('on');
});
$(document).on('click', '.msg-btn', function(){
    $('#msg').addClass('on');
});
$(document).on('click', '.ex-btn', function(){
    $('#excel-save').addClass('on');
});
$(document).on('click', '.board-btn', function(){
    $('#board-list').addClass('on');
});
$(document).on('click', '.help-btn', function(){
    $('#help').addClass('on');
});
//펜차트 모달
var dbclick=false;
$(document).on('click', '.p-chart>div', function(){
    setTimeout(function(){
        if(dbclick ===false){
            $('#penchart3').addClass('on');
        }
    },300);
}).on('dblclick', '.p-chart>div', function(){
    dbclick = true;
    $('#penchart2').addClass('on');
    setTimeout(function(){
        dbclick = false;
    },500);
});
//
$(document).on('click', '.penchart1-btn', function(){
    $('#penchart1').addClass('on');
});
$(document).on('click', '.chartlist>div', function(){
    $('.modal:not(#penchart2)').removeClass('on');
    $('#penchart2').addClass('on');
});
//05.22 중복전화번호 모달 추가
$(document).on('click', '.dupnum-btn', function(){
    $('#dupnum').addClass('on');
});
// ~
// 05.20 리콜관리
$(function () {
    var scr_on = true
    var recallS_Hei = $('.re-Src-b').height();
    var recallC_Hei = $('.re-con-b .table-in').height();
    $('.btn-src').click(function(){
        if(scr_on){
            $('.re-Src-b').addClass('on');
            $('.re-con-b .table-in').height(recallC_Hei - recallS_Hei);
            scr_on = false;
        }
        else{
            $('.re-Src-b').removeClass('on');
            $('.re-con-b .table-in').height(recallC_Hei);
            scr_on = true;
        }
    });
});
$('#recall-all-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.re-con-b input').prop('checked',true);
     else $('.re-con-b input').prop('checked',false);
 });

 $(".re-con-b tbody tr td").on("dblclick", function(){
    $('#info').addClass('on');
});

// 경영관리
//탭
$('.tabUl li').click(function(){
    var tab_id = $(this).attr('data-id');
    $(this).siblings('li').removeClass('on'); 
    $(this).closest('.op-tabwrap').siblings('.op-wrap').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
});
// 설정관리 20.05.29 추가
$('.drug-ul button').click(function(){
    $('.drug-ul button').removeClass('on');
    $(this).addClass('on');
});

$(".no-btn").click(function(){
    $(this).parents(".modal").removeClass('on');
    $('body').css('overflow', 'auto');
});
$('.ms-doc li').click(function(e){
    e.preventDefault();
     $(this).siblings('li').children('a').removeClass('on');
     $(this).children('a').addClass('on');
 });
 //20.06.08 추가
 $('.ms-doc li .ms-T').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-id4');
    $('.ms-out .ms-out-tab').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
 });// ~
 //20.06.08 추가
//  $('.ms-select').change(function(e){
//     var tab_id = $(this).attr('data-id5');
//     $('.ms-tabout > div').removeClass('on');
//     $(this).addClass('on');
//     $("#"+tab_id).addClass('on');
//  });
 $(".ms-select").on( "change", function() {
    var tab_id = $(this).val();
    $('.ms-tabout > div').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
});
 
 
 // ~
//모달버튼
$('button').click(function(){
    if($(this).attr('class').indexOf('mdbtn') != -1){
        var str = $(this).attr('class').split(' ').filter(function(n){
           return n.includes('mdbtn'); 
        });
        var str2 = str.join();
        var idname = str2.slice(0,-6);
        $('#' + idname).addClass('on');
    }
});
$('.clk-tr tr').click(function(){
    $(this).toggleClass('on');
});
$('.clk-td td').click(function(){
    $(this).toggleClass('on');
});
// 20.06.04 추가
$('.color-cell td:last-child').click(function(e){
     $('#color-M').addClass('on');
 });
 $('#set5-all').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.sky-body input').prop('checked',true);
     else $('.sky-body input').prop('checked',false);
 });
$(document).ready(function(){
    var set6_H = $('.set6-H').height();
    var set6_inH = $('.set-tbOut').height();
    $('.href-Sb button').click(function(){
        if($(this).hasClass('on')){
            $('.href-Sb button, .set-tbOut').removeClass('on');
            $('.table-wrap .set6-H').height(set6_H);
        }else{
            $('.set-tbOut').addClass('on');
            $(this).addClass('on');
            $('.table-wrap .set6-H').height(set6_H - set6_inH);
        }
    });
    $('.com-i').sortable({
        update: function(event, ui){
            $(this).children().each(function(index){
                $(this).find('td').first().html(index + 1);
            });
        }
    });
});
//우클릭메뉴
$(".set7-list > div").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".set7-list > div").on("contextmenu", function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.set7-list').append('<div class="rcpop"><ul><li><a href="#" class="del-btn">삭제</a></li><li><a href="#" class="move-num-btn">이동</a></li><li><a href="#" class="">수정</a></li></ul></div>');
            //메뉴보이기+위치
            var tp = $(this).parents('.set7-list');
            //Get pointer position:
            var MposX = e.pageX - tp.offset().left;
            var MposY = e.pageY - tp.offset().top;
            posLeft = MposX + 1 + "px";
            posTop = MposY + 1 + "px";
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');
        //수정,삭제 기능
        var thisTR = $(this);
        $(document).on('click', '.rcpop .del-btn', function(){
            $(thisTR).remove();
            $('.rcpop').remove();
        });
        //Prevent browser default contextmenu.
        return false;
    }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');
    if ( !$popArea ){
        $('.rcpop').remove();
    }
});
$(document).on('click', '.move-num-input', function(){
    $('#move-num').addClass('on');
});
$(document).on('click', '.set7-list div div', function(){
    $('#imgView').addClass('on');
});
$('.Drug-M button').click(function(){
    $('.Drug-M button').removeClass('on');
    $(this).addClass('on');
});
//업무관리 20.06.05 추가
$(document).on('click', '.date-radio button', function(){
    $('.date-radio button').removeClass('on');
     $(this).addClass('on');
 });
 // 대시보드 20.06.08 추가
 $("div.select-mem.YN-sel > ul > li:first-child").click(function() {
     $(this).parents().parents("tr").removeClass('cell-g');
 });
 $("div.select-mem.YN-sel > ul > li:last-child").click(function() {
     $(this).parents().parents("tr").addClass('cell-g');
 });
 $(document).on('click', '.move-num-btn', function(){
     $('#move-num').addClass('on');
 });
 //탭
 $('.dash-tab button').click(function(){
     var tab_id = $(this).attr('data-id3');
     $('.dash-tab button').removeClass('on');
     $('.board-tab .tabbox').removeClass('on');
     $(this).addClass('on');
     $("#"+tab_id).addClass('on');
 });
// 순서변경 20.06.08 
$(document).ready(function(){
    $('.com-i').sortable({
    });
});
// 20.06.12 추가~
$("#dp").datepicker({
    onSelect: function(dateText, inst) {
        alert(dateText);
    },
    });
    $("#datep").click(function() {
        $("#dp").datepicker("show");
    });
  $('.Bgck-tr tr').click(function(){
    $(this).toggleClass('on');
});//~
$(document).ready(function(){
    $('.front-Tbtn button').click(function(){
        if($(this).hasClass('on')){
            $('.front-Tbtn button, .front-wrap2, .front-wrap3').removeClass('on');
            $('.front-wrap1').addClass('on');
        }else{
            $('.front-Tbtn button,.front-wrap1, .front-wrap2, .front-wrap3').removeClass('on');
            var gray_id = $(this).attr('front-id');
            $(this).addClass('on');
            $("#"+gray_id).addClass('on');
        }
    });
});
$(".in-Mdate").datepicker(); 

$('.sk-position').click(function(){
    if($('.in-modal').hasClass('on')){
        $('.sk-position').css('overflow', 'hidden');
    }
});
$(".clinic-re-btn").click(function(){
    $("#clinic-re").addClass('on');
});
// 20.06.16 삭제~
// $(".mouse-sk1 tbody tr").on("mousedown", function(e){
//     //우클릭 기본메뉴 제거
//     var thison = $(this);
//     $(".mouse-sk1 tbody tr").on('contextmenu', function() {
//     return false;
//     });
//     //if 오른쪽클릭일경우
//     if( e.which == 3 ){
//         $('.mouse-sk1 tbody tr').removeClass('here');//20.06.12 추가
//         $(this).addClass('here');//20.06.12 추가
//         $('.rcpop').remove();//기존 팝업제거
//         $(this).parents('.mouse-skout').append('<div class="rcpop"><button type="button" class="today-on-btn"><i class="warning-I"></i></button><button type="button" class="inM-ann-btn"><i class="edit-I"></i></button><button type="button" class="inM-del-btn"><i class="cancel-d-I"></i></button><button type="button" class="complet-on-btn"><i class="yesin-I"></i></button></div>');
//             //메뉴보이기+위치
//             var tp = $(this).parents('.mouse-skout');
//             //Get pointer position:
//             var MposX = e.pageX - tp.offset().left;
//             var MposY = e.pageY - tp.offset().top;
//             posLeft = MposX + "px";
//             posTop = MposY + 3 + "px";
//             //Display menu:
//             $('.rcpop').css({
//             "left": posLeft,
//             "top": posTop
//             }).addClass('on');
//         //20.06.12 삭제, 기존 1137 ~ 1145
//         return false;
//     }
// });
// $(".mouse-sk2 tbody tr").on("mousedown", function(e){
//     //우클릭 기본메뉴 제거
//     $(".mouse-sk2 tbody tr").on('contextmenu', function() {
//     return false;
//     });
//     //if 오른쪽클릭일경우
//     if( e.which == 3 ){
//         $('.rcpop').remove();//기존 팝업제거
//         $(this).parents('.mouse-skout').append('<div class="rcpop in-rcW"><button type="button"><i class="warning-I"></i></button><button type="button" class="inM-ann2-btn"><i class="edit-I"></i></button><button type="button" class="inM-del2-btn"><i class="cancel-d-I"></i></button></div>');
//             //메뉴보이기+위치
//             var tp = $(this).parents('.mouse-skout');
//             //Get pointer position:
//             var MposX = e.pageX - tp.offset().left;
//             var MposY = e.pageY - tp.offset().top;
//             posLeft = MposX + "px";
//             posTop = MposY + 3 + "px";
//             //Display menu:
//             $('.rcpop').css({
//             "left": posLeft,
//             "top": posTop
//             }).addClass('on');
//         return false;
//     }
// });
// $(".mouse-sk3 tbody tr").on("mousedown", function(e){
//     //우클릭 기본메뉴 제거
//     $(".mouse-sk3 tbody tr").on('contextmenu', function() {
//     return false;
//     });
//     //if 오른쪽클릭일경우
//     if( e.which == 3 ){
//         $('.rcpop').remove();//기존 팝업제거
//         $(this).parents('.mouse-skout').append('<div class="rcpop in-rcW"><button type="button"><i class="yesin-I"></i></button><button type="button" class="reserved-btn"><i class="edit-I"></i></button><button type="button" class="msg-btn"><i class="Messages-I"></i></button></div>');
//             //메뉴보이기+위치
//             var tp = $(this).parents('.mouse-skout');
//             //Get pointer position:
//             var MposX = e.pageX - tp.offset().left;
//             var MposY = e.pageY - tp.offset().top;
//             posLeft = MposX + "px";
//             posTop = MposY + 3 + "px";
//             //Display menu:
//             $('.rcpop').css({
//             "left": posLeft,
//             "top": posTop
//             }).addClass('on');
//         //Prevent browser default contextmenu.
//         return false;
//     }
// }); ~
$(document).on('click', '.inM-ann-btn', function(){/*20.06.12 수정 ~ 1204*/
    $('.rcpop').remove();
    $('.sk-main').css('overflow', 'hidden');
    $('#inM-ann').addClass('on');
});
$(document).on('click', '.inM-del-btn', function(){
    $('.rcpop').remove();
    $('.sk-main').css('overflow', 'hidden');
    $('#inM-del').addClass('on');
});
$(document).on('click', '.inM-ann2-btn', function(){
    $('.rcpop').remove();
    $('.sk-main').css('overflow', 'hidden');
    $('#inM-ann2').addClass('on');
});
$(document).on('click', '.inM-del2-btn', function(){
    $('.rcpop').remove();
    $('.sk-main').css('overflow', 'hidden');
    $('#inM-del2').addClass('on');
});
$(document).on('click', '.msg-btn', function(){
    $('.rcpop').remove();
    $('#msg').addClass('on');
});
$(".modalClose").click(function(){
    $(".in-modal").removeClass('on');
    $('.sk-main').css('overflow', 'auto');
});
$(document).on('click', '.cancel-btn', function(){
    $('.in-modal').removeClass('on');
    $('.sk-main').css('overflow', 'auto');
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');
    if ( !$popArea ){
        $('.rcpop').remove();
    }
});

$(function () {
    $('.dbclick-a tr').dblclick(function () {
        $(this).attr('../sub/member.html');
    }).click(function(){
    return false;
    });
});

//고객상세 20.06.12 추가
$('.tabUl li').click(function(){
    var tab_id = $(this).attr('data-id');

    $(this).siblings('li').removeClass('on');
    $(this).closest('.tabUl').next('.tabContent2').children('.tabbox2').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
});
// 20.06.16 삭제~
// //주의 및 전달사항 우클릭 메뉴
// //우클릭 기본메뉴 제거
// $(".Rmenu-rel .ps-wrap").on('contextmenu', function() {
//     return false;
// });
// $(".Rmenu-rel .ps-wrap").on("mousedown", function(e){
//     //if 오른쪽클릭일경우
//     if( e.which == 3 ){
//         $('.rcpop').remove();//기존 팝업제거
//         $('.Rmenu-rel .ps-wrap').removeClass('here');
//         $(this).addClass('here');
//         $(this).parents('.Rmenu').append('<div class="rcpop"><button type="button" class="today-on-btn"><i class="warning-I"></i></button><button type="button" class="inM-ann-btn"><i class="edit-I"></i></button><button type="button" class="inM-del-btn"><i class="cancel-d-I"></i></button><button type="button" class="complet-on-btn"><i class="yesin-I"></i></button></div>');
//             //메뉴보이기+위치
//             var tp = $(this).parents('.Rmenu');
//             //Get pointer position:
//             var MposX = e.pageX - tp.offset().left;
//             var MposY = e.pageY - tp.offset().top;
//             posLeft = MposX + "px";
//             posTop = MposY + 3 + "px";
//             //Display menu:
//             $('.rcpop').css({
//             "left": posLeft,
//             "top": posTop
//             }).addClass('on');
//         return false;
//     }
    
// });
// $(document).on('click', '.rcpop .today-on-btn', function(){
//     $('.here').toggleClass('today-on');
//     $('.today-on').removeClass('here');
//     $('.rcpop').remove();
// });~
$(".reserv-edit-btn").click(function(){
    $("#reserv-edit").addClass('on');
});
// 20.06.16 QC 추가

//마우스오버 팝업 //20.06.17 QC 수정
$('.sk-hover tbody tr, .ps-wrap').mouseenter(function(e){
    $('.sk-hover tbody tr, .ps-wrap').removeClass('here');
    $(this).addClass('here');
    var tp = $(this).parents('.mouse-skout, .Rmenu-rel');
    //Get window size:
    var winWidth = $(document).width();
    var winHeight = $(document).height();
    //Get pointer position:
    var RposX = e.pageX;
    var RposY = e.pageY;
    var posX = e.pageX - tp.offset().left;
    var posY = e.pageY - tp.offset().top;
    //Get contextmenu size:
    var menuWidth = tp.find('.hoverpop2').width();
    var menuHeight = tp.find('.hoverpop2').height();
    //Security margin:
    var secMargin = 10;
    //Prevent page overflow:
    if(RposX + menuWidth + secMargin >= winWidth
    && RposY + menuHeight + secMargin >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth - 10 + "px";
      posTop = posY - menuHeight - 10 + "px";
    }
    else if(RposX + menuWidth + secMargin >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth - secMargin - 10 + "px";
      posTop = posY + secMargin - 10 + "px";
    }
    else if(RposY + menuHeight + secMargin >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + secMargin - 10 + "px";
      posTop = posY - menuHeight - secMargin - 10 + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + secMargin - 10 + "px";
      posTop = posY + secMargin - 10 + "px";
    }
     console.log(tp);
    //Display menu:
    tp.find('.hoverpop2').css({
       "left": posLeft,
       "top": posTop
    }).addClass('on');
  });
    
  //메뉴사라지기
  $('body').on('mousemove', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().is('.sk-position, .Rmenu-rel');
    if ( !$popArea ){
        $('.hoverpop2').removeClass('on');
    }
});
$(document).on('click', '.hoverpop2 .today-on-btn', function(){
    $('.here').toggleClass('today-on');
});
$(document).on('click', '.hoverpop2 .complet-on-btn', function(){
    $('.here').toggleClass('complet-on');
});

$(document).ready(function(){
    $('.clk2-tr tr ,.clk3-tr tr').click(function(){
        if($(this).hasClass('on')){
            $(this).parent().children('tr').removeClass('on')
        }else{
            $(this).parent().children('tr').removeClass('on')
            $(this).addClass('on');
        }
    });
    $('.clk2-td td:first-child').click(function(){
        $(this).toggleClass('on');
    });
    $('.clk2-td td:last-child').click(function(){
        if($(this).hasClass('on')){
            $('.clk2-td td:last-child').removeClass('on');
        }else{
            $('.clk2-td td:last-child').removeClass('on');
            $(this).addClass('on');
        }
    });
    $('.com-i').on('mousedown', function(){
        $('.com-i tr').find('td').each(function(){
            var td_W = $(this).width()
            $(this).css('width',td_W);
        });
    });
});
//유입경로탭
$('.fnwrap .dp2 td').on('click', function(){
    var tab_id = $(this).parents('table').attr('id');
    var depth1 = $('a[data-id="' + tab_id + '"]').text();
    var depth2 = $(this).text();
    $(this).parents('.formwrap3').children('.fn-out').children('input.fninput').val(depth1 + '▶' + depth2);
});
//20.06.24 추가
$(".color-M-btn").click(function(){
    $("#color-M").addClass('on');
});
$(".set-package-add-btn").click(function(){
    $("#set-package-add").addClass('on');
});
$(".drug-reg-btn").click(function(){
    $("#drug-reg").addClass('on');
});
$(".excel-upload-btn").click(function(){
    $("#excel-upload").addClass('on');
});
$(".coupon-reg-btn").click(function(){
    $("#coupon-reg").addClass('on');
});
$(".coupon-name-btn").click(function(){
    $("#coupon-name").addClass('on');
});
$(".bun-prescription-btn").click(function(){
    $("#bun-prescription").addClass('on');
});
$(".msg-class-btn").click(function(){
    $("#msg-class").addClass('on');
});
$(".doctor-M-btn").click(function(){
    $("#doctor-M").addClass('on');
});
$(".chart-reg-btn").click(function(){
    $("#chart-reg").addClass('on');
});
$(".chart-reg-btn").click(function(){
    $("#chart-reg").addClass('on');
});
$(".data-reset-btn").click(function(){
    $("#data-reset").addClass('on');
});

//20.07.17 소개자입력 추가
$(document).on('click', '.table-wrap.blue tr', function(){
    if($(this).hasClass('on')){
        $('.table-wrap.blue tr').removeClass('on');
    }else{
        $('.table-wrap.blue tr').removeClass('on');
        $(this).addClass('on')
    }
});
$(document).on('click', '.fr-add-btn', function(){
    $('#fr-add').addClass('on')
});
$(document).on('click', '.fr-rm-btn', function(){
    $('.table-wrap.blue tr.on').remove()
});
$(document).on('change', '#funnels', function(){
    var std = $("#funnels option:selected").val()
    if(std == '직원' || std == "지인" || std == "업체"){
        $('#fr').addClass('on')
    } ;
});