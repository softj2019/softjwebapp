$(document).ready(function(){
	var date = new Date();
	var year = date.getFullYear();
	var month = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
	var day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
	var hour = date.getHours() < 10 ? "0"+ date.getHours() : date.getHours();
	var min = date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes();
	var hour = date.getHours() < 10 ? "0"+ date.getHours() : date.getHours();
	var sec = date.getSeconds() < 10 ? "0"+ date.getSeconds() : date.getSeconds();
	 var time = year+""+month+""+day+""+hour+""+min;
	 var currTime = 0;
	 if(min<30){
		 currTime = hour+"00";
	 }else{
		 currTime = hour+"30";
	 }
	 $(".day_"+currTime).addClass("timeZone_current");
	 $(".week_"+currTime).addClass("timeZone_current");
	 
	 var currArea, currTime, currId, currDay;

	$(".draggable-day").draggable({
	  cursor: "move", 
	  stack: ".draggable",
	  opacity: 0.7
	 });
	  $(".draggable-day").bind("dragstart",function(event, ui){
		currId = $(this).attr("id");
		currTime = $(this).attr("item-value-time");
		currArea = $(this).attr("item-value-area");
	  });	  
	  $(".draggable-day").bind("dragstop", function(event, ui){ 
		  const offset = $(this).offset();
		  var currTop = offset.top;
		  var currLeft = offset.left;
		$( '.day-table' ).find("tr").each( function() {
			if($(this).offset().top > currTop){				
				console.log("currId : " + currId);			
				console.log("currTime : " + currTime);			
				console.log("currArea : " + currArea);	
				console.log("id : " + $(this).attr("id"));
				console.log("offset id : " + $(this).attr("id")+"_"+currArea);
				console.log("offset item-value-time : " + $("#"+$(this).attr("id")+"_"+currArea).attr("item-value-time"));
				console.log("offset item-value-area : " + $("#"+$(this).attr("id")+"_"+currArea).attr("item-value-area"));
				console.log("curr.top : " + currTop);
				console.log("curr.left : " + currLeft);
				console.log("offset.top : " + $(this).offset().top);
				console.log("offset.left : " + $(this).offset().left);
				$("#"+$(this).attr("id")+"_"+currArea).append($("#"+currId));			

				$("#"+currId).css({"left" : "0", "top" : "0"});
				alert("시간 : " + $("#"+$(this).attr("id")+"_"+currArea).attr("item-value-time") + " /  구분 : "+ getDivnNm(currArea) );

				return false;
			};
		});
	});
	
	$(".draggable-week").draggable({
	  cursor: "move", 
	  stack: ".draggable",
	  opacity: 0.7
	 });
	  $(".draggable-week").bind("dragstart",function(event, ui){
		currId = $(this).attr("id");
		currTime = $(this).attr("item-value-time");
		currDay = $(this).attr("item-value-day");
	  });	  
	  $(".draggable-week").bind("dragstop", function(event, ui){ 
		  const offset = $(this).offset();
		  var currTop = offset.top;
		  var currLeft = offset.left;
		  var day, time;
		$( '.week-selector' ).each( function() {
			if($(this).offset().top <= currTop && $(this).offset().left <= currLeft){				
				day = (Number($("#"+$(this).attr("id")).attr("item-value-day")));
				if(day <1000) day = "0"+day;

				time = $("#"+$(this).attr("id")).attr("item-value-time");
				console.log("currId : " + currId);			
				console.log("currTime : " + currTime);
				console.log("id : " + $(this).attr("id"));
				console.log("offset item-value-time : " + time);
				console.log("offset item-value-day : " + day);
				console.log("curr.top : " + currTop);
				console.log("curr.left : " + currLeft);
				console.log("offset.top : " + $(this).offset().top);
				console.log("offset.left : " + $(this).offset().left);
			};
		});
		$("#week_"+time+"_"+day).append($("#"+currId));			

		$("#"+currId).css({"left" : "0", "top" : "0"});
		alert("시간 : " + time + " /  날짜 : "+day );
	});

	
	$(".draggable-month").draggable({
	  cursor: "move", 
	  stack: ".draggable",
	  opacity: 0.7
	 });
	  $(".draggable-month").bind("dragstart",function(event, ui){
		currId = $(this).attr("id");
		currDay = $(this).attr("item-value-day");
	  });	  
	  $(".draggable-month").bind("dragstop", function(event, ui){ 
		  const offset = $(this).offset();
		  var currTop = offset.top;
		  var currLeft = offset.left;
		  var day;
		$( '.month-selector' ).each( function() {
			if($(this).offset().top <= currTop && $(this).offset().left <= currLeft){				
				day = (Number($("#"+$(this).attr("id")).attr("item-value-day")));
				if(day <1000) day = "0"+day;

				console.log("currId : " + $("#"+$(this).attr("id")).attr("item-value-day"));			
				console.log("currId : " + currId);			
				console.log("id : " + $(this).attr("id"));
				console.log("offset item-value-day : " + day);
				console.log("curr.top : " + currTop);
				console.log("curr.left : " + currLeft);
				console.log("offset.top : " + $(this).offset().top);
				console.log("offset.left : " + $(this).offset().left);
			};
		});
		
		$("#month_"+day+">div").append($("#"+currId));		
		$("#"+currId).css({"left" : "0", "top" : "0"});
		alert(" 날짜 : "+day );
	});
});
    
// 우클릭 빈셀메뉴
$(".reser-table tbody tr td").on("mousedown", function (e){
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
            posLeft = posX  + "px";
             posTop = posY + 42 + "px";
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
$('body').on('mousedown', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');

    if ( !$popArea ){
        $('.rcpop').remove();
    }
});

$(document).ready(function(){
	var drag_x1 = false;
	$(".reser-table tbody tr td").on({
		mousedown: function(e) {
			drag_x1 = e.offsetX;
		},
		mouseup: function(e) {
            $(".reser-table tbody tr td").on('contextmenu', function() {
              return false;
            });
            console.log(typeof($(this).attr("item-value-time")) != "undefined" ? $(this).attr("item-value-time") : "");
            console.log(typeof($(this).attr("item-value-day")) != "undefined" ? $(this).attr("item-value-day") : "");
            if($(this).find('.table-M').length > 0){ 
            $('.rcpop').remove();//기존 팝업제거
            $(this).parents('.reser-table').append('<div class="rcpop ver2"><ul><li class="bor-b-g"><a href="#" class="editpop-btn">내원확인</a></li><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="rc-add R-arr">예약수정</a><ul class="top-80"><li><a href="#" class="reserved-btn">예약수정</a></li><li><a href="#">예약취소</a></li><li><a href="#">예약삭제</a></li></ul></li><li><a href="#" class="R-arr">확인콜</a><ul class="top-120"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li class="bor-b-g"><a href="#" class="R-arr">해피콜</a><ul class="top-160"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li><a href="#" class="msg-btn">문자발송</a></li><li class="bor-b-g"><a href="#">고객이동</a></li><li><a href="#">예약복사</a></li><li><a href="#">예약이동</a></li></ul></div>');
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
                if(RposX + menuWidth + secMargin >= winWidth
                && RposY + menuHeight + secMargin >= winHeight){
                  //Case 1: right-bottom overflow:
                  posLeft = posX - menuWidth - secMargin + "px";
                  posTop = posY - menuHeight - secMargin + 42 + "px";
                }
                else if(RposX + menuWidth + secMargin >= winWidth){
                  //Case 2: right overflow:
                  posLeft = posX - menuWidth - secMargin + "px";
                  posTop = posY + secMargin + 42 + "px";
                }
                else if(RposY + menuHeight + secMargin >= winHeight){
                  //Case 3: bottom overflow:
                  posLeft = posX + secMargin + "px";
                  posTop = posY - menuHeight + 42 - secMargin + "px";
                }
                else {
                  //Case 4: default values:
                  posLeft = posX + secMargin + "px";
                  posTop = posY + secMargin + 42 + "px";
                }
                $('.rcpop').removeClass('on');
                //Display menu:
                $('.rcpop').css({
                   "left": posLeft,
                   "top": posTop
                }).addClass('on');
                //Prevent browser default contextmenu.
                return false;
              }
            else{
                if(event.offsetX != drag_x1) {
				    $('.rcpopdrag').remove();//기존 팝업제거
                    $(this).append('<div class="rcpopdrag ver2"><ul class="w100px"><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="memo-btn">메모등록</a></li><li><a href="#">휴진등록</a></li><li class="bor-b-g"><a href="#">휴진취소</a></li><li><a href="#">예약가져오기</a></li></ul></div>');
                  //메뉴보이기+위치
                      $(this).mouseleave(function(){
                        $('.rcpopdrag').remove();//기존 팝업제거
                      })
                    //Prevent browser default contextmenu.
                    return false;
			     }
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
                    if(RposX + menuWidth + secMargin >= winWidth
                    && RposY + menuHeight + secMargin >= winHeight){
                      //Case 1: right-bottom overflow:
                      posLeft = posX - menuWidth - secMargin + "px";
                      posTop = posY - menuHeight - secMargin + 42 + "px";
                    }
                    else if(RposX + menuWidth + secMargin >= winWidth){
                      //Case 2: right overflow:
                      posLeft = posX - menuWidth - secMargin + "px";
                      posTop = posY + secMargin + 42 + "px";
                    }
                    else if(RposY + menuHeight + secMargin >= winHeight){
                      //Case 3: bottom overflow:
                      posLeft = posX + secMargin + "px";
                      posTop = posY - menuHeight + 42 - secMargin + "px";
                    }
                    else {
                      //Case 4: default values:
                      posLeft = posX + secMargin + "px";
                      posTop = posY + secMargin + 42 + "px";
                    }
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
});

function getDivnNm(str){
	if(str == "2"){
		return "전체";
	}else if(str == "3"){
		return "초진";
	}else if(str == "4"){
		return "재진";
	}else if(str == "5"){
		return "취소";
	}else if(str == "6"){
		return "치료";
	}else if(str == "7"){
		return "경과";
	}else if(str == "8"){
		return "시술";
	}else if(str == "9"){
		return "상담";
	}else if(str == "10"){
		return "치료";
	}else if(str == "11"){
		return "수술1";
	}
}