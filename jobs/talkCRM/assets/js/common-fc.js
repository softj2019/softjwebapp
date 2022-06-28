var calendar;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;
console.log(today)
//풀켈린더 시작

document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        firstDay: 1,//20.07.14 추가
        height: 800,
        locale: 'ko',
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        plugins: ['interaction', 'resourceDayGrid', 'resourceTimeGrid', 'dayGrid', 'timeGrid'],
        defaultView: 'resourceTimeGridDay',
        defaultDate: today,
        nowIndicator: true,//현 시간 라인 표기
        scrollTime: '09:00:00',//타임라인 스크롤 시작시간
        allDaySlot: false,//종일 이벤트 숨기기
        titleFormat: { // will produce something like "Tuesday, September 18, 2018"
            month: 'numeric',
            year: 'numeric',
            day: 'numeric',
            weekday: 'long'
        },
        slotLabelFormat: [
            // { month: 'numeric', year: 'numeric' }, // top level of text
            {
                // day: 'numeric',
                // weekday: 'long',// lower level of text
                hour: '2-digit',    //numeric 3 2-digit 03
                minute: '2-digit',  //numeric 3 2-digit 03
                hour12: false,      //true am 6 false 06
                // meridiem: 'numeric'
            }
        ],
        editable: true,//수정기능
        selectable: true,//선택기능
        selectHelper: true,
        aspectRatio: 1.8,
        slotLabelInterval:30,//slotDuration의 길이가 15 분 또는 30 분이더라도 헤더 레이블이 시간 표시에 나타납니다.
        //상단 버튼 설정
        header: {
            left: 'resourceTimeGridDay,timeGridWeek,dayGridMonth',
            center: 'prev title next',
            right: false,
        },
        //한번에 표시가능한 이벤트 수량
        eventLimit: true, // for all non-TimeGrid views
        //뷰 세부 설정
        views: {
            resourceTimeGridDay: {
                type: 'resourceTimeGridDay',
                buttonText: 'day',
                eventLimit: 3 // adjust to 6 only for timeGridWeek/timeGridDay
            },
            timeGridWeek: {
                type: 'timeGridWeek',
                buttonText: 'Week',
            },
            timeGrid: {
                type: 'timeGrid',
                buttonText: 'timeGrid',
                eventLimit: 3, // adjust to 6 only for timeGridWeek/timeGridDay
            },
            dayGridMonth: {
                type: 'dayGridMonth',
                buttonText: 'Month',
                eventLimit:7,
            }
        },

        //데이터 베이스 출력 할 리소스 - 분류 서버 post 예제
        // resources: {
        //     url: '/my-resource-script.php',
        //     method: 'POST'
        // },
        resources: [

            {id: 'a', title: '전체'},
            {id: 'b', title: '초진'},
            {id: 'c', title: '재진'},
            {id: 'd', title: '취소'},
            {id: 'e', title: '치료'},
            {id: 'f', title: '경과'},
            {id: 'g', title: '시술'},
            {id: 'h', title: '상담'},
            {id: 'i', title: '치료'},
            {id: 'j', title: '수술1'},
        ],
        // 데이터 베이스 출력 할 리소스 - 예약내역 20.06.25 수정
        //  eventsResources: {
        //      url: '../controller/getEventTest.php',
        //      method: 'POST'
        //  },
        events: [
            //    U key            행   시작시간                   종료시간                       예약명'<img src ="'+arg.event.textColor+'" />'

            {
                id: '2',
                resourceId: 'd',
                // 타이틀 표현방식
                // 이미지경로 성별 나이 소요시간 내원상태 를 서버에서 Data 로 치환하여 사용(20.07.30)
                title: '<img src ="http://'+$(location).attr('host')+'/webapp/assets/img/N-1.png" />'+'김태희'+'<span class="textRed">F</span>'+'20'+'(30분)'+'접수',
                //아이콘 경로 지정 사용안안하는 textColor bind 에 저장
                start: today + 'T09:00:00',
                end: today + 'T09:40:00',
                description: '' +
                    '' +
                    '<ul class="eventDescription">\n' +
                    '    <li>\n' +
                    '        <span class="popTh">상담일</span> : <span class="popTd">2020-03-04 수</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">상담사</span> : <span class="popTd">김진수</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">상담분류</span> : <span class="popTd">초진_이벤트</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">상담결과</span> : <span class="popTd">성공</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">표준금액</span> : <span class="popTd">900,000</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">할인금액</span> : <span class="popTd">100,000</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">견적금액</span> : <span class="popTd">800,000</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">할인사유</span> : <span class="popTd">지인소개</span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">희망일자</span> : <span class="popTd"></span>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '        <span class="popTh">메모</span> : <span class="popTd">메모를 입력합니다. 메모를 입력합니다. 메모를 입력합니다.</span>\n' +
                    '    </li>\n' +
                    '</ul>' +
                    '',
            },

            {id: '3', resourceId: 'a', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 3',backgroundColor:'#CCD6E3',textColor:'',borderColor:"#003473"},
            {id: '4', resourceId: 'a', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 4',backgroundColor:'#DBEFDC',textColor:'',borderColor:"#4CAF50"},
            {id: '5', resourceId: 'a', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 5',backgroundColor:'#FDD9D7',textColor:'',borderColor:"#F44336"},

            {id: '6', resourceId: 'a', start: today + 'T09:00:00', end: today + 'T09:30:00', title: 'event 6',backgroundColor:'#f0f0f0',textColor:'',borderColor:"#ccc"},
            {id: '7', resourceId: 'a', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 7',backgroundColor:'#FFDECD',textColor:'',borderColor:"#F48236"},
            {id: '8', resourceId: 'a', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 8',backgroundColor:'#CDFDFF',textColor:'',borderColor:"#4C9EAF"},
            {id: '9', resourceId: 'a', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 9',backgroundColor:'#CDCDFF',textColor:'',borderColor:"#7547C7"},

            {id: '10', resourceId: 'b', start: today + 'T09:00:00', end: today + 'T09:30:00', title: 'event 10',backgroundColor:'#FDCDFF',textColor:'',borderColor:"#C747C2"},
            {id: '11', resourceId: 'b', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 11',backgroundColor:'#666666',textColor:'',borderColor:"#333333"},
            {id: '12', resourceId: 'b', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 12',backgroundColor:'#CCD6E3',textColor:'',borderColor:"#003473"},
            {id: '13', resourceId: 'b', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 13',backgroundColor:'#CCD6E3',textColor:'',borderColor:"#003473"},


        ],
        //현재 렌더링 된 날짜 세트가 DOM에서 제거되기 전에 트리거됩니다
        // datesDestroy(arg) {
            // console.log('datesDestroy',arg);
        // },
        //뷰의 날짜와 관련되지 않은 DOM 구조가 렌더링 된 후 트리거됩니다.
        // viewSkeletonRender(arg) {
            // console.log('viewSkeletonRender',arg);

        // },

        //뷰의 DOM 스켈레톤이 DOM에서 제거되기 전에 트리거됩니다.
        // viewSkeletonDestroy(arg) {
            // console.log('viewSkeletonDestroy',arg);

        // },
        //날짜 드래그 선택
        select: function (arg) {

            if(arg.endStr){
                // callRightSmallNavEmptyDate(arg.jsEvent,arg.view);
            }
        },
        // selectOverlap:function(event){
            // console.log(event);
        // },
        //날짜 클릭
        dateClick: function(arg) {
            //Week 빌날짜 선택시 해당 날짜 day 화면으로 이동 20.07.30

            calendar.changeView(
                'resourceTimeGridDay', arg.date
            );
        },
        dayRender: function(arg) {
            arg.el.onclick=(function(e){ //20.07.29 수정
                // console.log(e)
            });
        },
        //새로운 날짜 집합이 렌더링되면 트리거됩니다.
        datesRender: function(arg) {
            //마우스 우클릭
            arg.el.oncontextmenu = (function(e){ //20.06.25 수정
                callRightSmallNavEmptyDate(e, arg);
            });
        },
        //이벤트를 랜더링시 적용할 대상 세팅
        eventRender: function (arg) {
            var tooltip = new Tooltip(arg.el, {
                title: arg.event.extendedProps.description,
                placement: 'right',
                trigger: 'hover',
                container: 'body',
                html: true,
            });

            arg.el.ondblclick = (function(){//20.06.25 수정
                $('#reserv').addClass('on');
            });
            // arg.el.onclick = ((e) => {
                // e.preventDefault();
            // })
             arg.el.oncontextmenu = (function(e){//20.06.25 수정
                 callRightSmallNav(e);
             });
             //예약 이벤트 제목을 html tag 입력가능하게 변경
            arg.el.querySelector('.fc-title').innerHTML = arg.event.title;



            // arg.el.onmousedown= ((e)=>{
            //     if(e.button===2){
            //         callRightSmallNav(e);
            //     }
            // })
            // console.log(arg.event);
            // console.log(arg.el.offsetHeight);
            // console.log(arg.el.offsetTop);
            // console.log(arg.el.offsetWidth);
        },

        //드래그 시작
        eventDragStart: function (arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
            console.log('eventDragStart');
        },
        //드래그 종료
        eventDragStop: function (arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');

            //callRightSmallNav(arg.jsEvent) 20.06.17 삭제

        },

        //예약 리사이즈 시작
        eventResizeStart: function (arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
            console.log('eventResizeStart');
        },
        //예약 리사이즈 종료
        eventResizeStop: function (arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
            callRightSmallNav(arg.jsEvent)
        },
         eventResize: function(arg) {
             console.log('eventResize');
         },
//        드롭
         eventDrop: function(info) {
        // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
        // if (!confirm("Are you sure about this change?")) {
        //     info.revert();
        // }
             $('.eventDescription').addClass('hidden');
             $('.tooltip').addClass('hidden');
             console.log('eventDrop');
        },
        // eventClick(arg) {
            // $('.eventDescription').addClass('hidden');
            // $('.tooltip').addClass('hidden');
         // },
        viewDisplay: function(view) {
           // Add onclick to header columns of weekView to navigate to clicked day on dayView
           $('.fc-day-header').each(function(){
               
                   $(this).css('cursor','pointer'); // set cursor
                   $(this).unbind('click'); //unbind previously bound 'click'
                   $(this).click(function(){
                       var dateStr = $(this).html().substring($(this).html().indexOf(' ')+1);
                       var day = dateStr.substring(0, 2);
                       var month = dateStr.substring(3, 5) - 1;
                       var year = dateStr.substring(6, 10);
                       $('#calendar').fullCalendar('gotoDate', new Date(year, month, day));
                       $('#calendar').fullCalendar('changeView', 'agendaDay');
                   });
               
           });
       },
    });
    calendar.render();
    

    //예약 등록 > 예약 정보 저장 시 예약 이벤트 추가 2020.07.29
    $('#submitReservAdd').on('click',function () {
        // id: 'a', title: '전체'
        // id: 'b', title: '초진'
        // id: 'c', title: '재진'
        // id: 'd', title: '취소'
        // id: 'e', title: '치료'
        // id: 'f', title: '경과'
        // id: 'g', title: '시술'
        // id: 'h', title: '상담'
        // id: 'i', title: '치료'
        // id: 'j', title: '수술1
        var formData = $('#reservAddForm').serializeArray();

        calendar.addEvent({
            id: Math.round( Math.random()*10),//랜던생성된 고유 키
            resourceId: 'c',//각 행 의 타켓 id 상단 주석 참조
            start:  formData[4].value+'T'+formData[5].value,//시작시간
            end:  formData[4].value+'T'+formData[6].value,//종료시간
            title: '<img src ="http://'+$(location).attr('host')+'/webapp/assets/img/N-1.png" />'+'김태희'+'<span class="textRed">F</span>'+'20'+'(30분)'+'접수',
            //마우스 오버시 출력될 내용
            description: '' +
                '' +
                '<ul class="eventDescription">\n' +
                '    <li>\n' +
                '        <span class="popTh">상담일</span> : <span class="popTd">2020-03-04 수</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">상담사</span> : <span class="popTd">김진수</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">상담분류</span> : <span class="popTd">초진_이벤트</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">상담결과</span> : <span class="popTd">성공</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">표준금액</span> : <span class="popTd">900,000</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">할인금액</span> : <span class="popTd">100,000</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">견적금액</span> : <span class="popTd">800,000</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">할인사유</span> : <span class="popTd">지인소개</span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">희망일자</span> : <span class="popTd"></span>\n' +
                '    </li>\n' +
                '    <li>\n' +
                '        <span class="popTh">메모</span> : <span class="popTd">메모를 입력합니다. 메모를 입력합니다. 메모를 입력합니다.</span>\n' +
                '    </li>\n' +
                '</ul>' +
                '',
        });
        $('#reserv').removeClass('on');
        calendar.render();
    });
    //20.06.17 추가
    $('.selectResourseId').on('change', function(){
        var resourceA;
        var resourceValue=[];
        $.each($('input[name=selectResourseId]'), function(key,value){
            resourceA = calendar.getResourceById($(this).val());
            console.log(resourceA)
            if(resourceA){
                resourceA.remove();
            }
        });
        $.each($('input[name=selectResourseId]'), function(key,value){
            if($(this).is(":checked") && $(this).val() !==""){
                resourceValue=callResource($(this).val());
                calendar.addResource({
                    id: resourceValue[0].id,
                    title: resourceValue[0].title,
                });
            }
        });
        calendar.render();
    });
    function callResource(id) {
        var result=[];
        var resource = [
            {id: 'a', title: '전체'},
            {id: 'b', title: '초진'},
            {id: 'c', title: '재진'},
            {id: 'd', title: '취소'},
            {id: 'e', title: '치료'},
            {id: 'f', title: '경과'},
            {id: 'g', title: '시술'},
            {id: 'h', title: '상담'},
            {id: 'i', title: '치료'},
            {id: 'j', title: '수술1'},
        ];
        return resource.filter(
            function(x) {
                return  x.id == id;
            }
        )
    }
});

    //옵션트리거
    // calendar.setOption('locale', 'ko');

    //날짜선택이벤트 트리거
    // calendar.on('dateClick', function(info) {
    // console.log(info);
    // });

$(document).on('click', '.fc-day-header', function(){
        $('#calendar').fullCalendar('changeView', 'agendaDay');
    });


//메뉴호출 예약 이벤트
function callRightSmallNav(e){
    var clientX= e.clientX;
    var clientY= e.clientY;
    $('.rcpop').remove()
    $('.main-wrap').append('<div class="rcpop ver2"><ul><li class="bor-b-g"><a href="#" class="editpop-btn">내원확인</a></li><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="rc-add R-arr">예약수정</a><ul class="top-80"><li><a href="#" class="reserved-btn">예약수정</a></li><li><a href="#">예약취소</a></li><li><a href="#">예약삭제</a></li></ul></li><li><a href="#" class="R-arr">확인콜</a><ul class="top-120"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li class="bor-b-g"><a href="#" class="R-arr">해피콜</a><ul class="top-160"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li><a href="#" class="msg-btn">문자발송</a></li><li class="bor-b-g"><a href="#">고객이동</a></li><li><a href="#">예약복사</a></li><li><a href="#">예약이동</a></li></ul></div>');
    $('.rcpop').css('position',"fixed");
    $('.rcpop').css('display',"block");
    var winWidth = $(window).width();//20.07.29 수정 436~467
    var winHeight = $(window).height();
    var posX = e.clientX;
    var posY = e.clientY;
    var menuWidth = $('.rcpop').width();
    var menuHeight = $('.rcpop').height();

    if(posX + menuWidth >= winWidth
    && posY + menuHeight >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth + "px";
      posTop = posY - menuHeight + "px";
    }
    else if(posX + menuWidth >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth + "px";
      posTop = posY + "px";
    }
    else if(posY + menuHeight >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + "px";
      posTop = posY - menuHeight + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + "px";
      posTop = posY + "px";
    }
    $('.rcpop').css({
       "left": posLeft,
       "top": posTop
    });
    // console.log('callRightSmallNav',e)
    e.preventDefault();
}

//메뉴호출 빈셀 빈날짜
function callRightSmallNavEmptyDate(e,el){

    if(e.target.classList.value==='fc-widget-content' || e.target.classList.value==='fc-highlight'){

        var clientX= e.clientX;
        var clientY= e.clientY;
        //빈 시간 종료
        $('#reservAddcurrentEnd').val(el.currentEnd);
        //빈 시작 시작
        $('#reservAddcurrentStart').val(el.currentStart)

        //예약등록시 날짜 에 입력
        $( "#reservAddDate" ).datepicker( "setDate", el.currentStart );

        $('.rcpop').remove()
        $('.main-wrap').append(' <div class="rcpop ver2"><ul class="w100px"><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="memo-btn">메모등록</a></li><li><a href="#">휴진등록</a></li><li class="bor-b-g"><a href="#">휴진취소</a></li><li><a href="#">예약가져오기</a></li></ul></div>');
        $('.rcpop').css('position',"fixed");
        $('.rcpop').css('display',"block");
        var winWidth = $(window).width();//20.07.29 수정 491~522
        var winHeight = $(window).height();
        var posX = e.clientX;
        var posY = e.clientY;
        var menuWidth = $('.rcpop').width();
        var menuHeight = $('.rcpop').height();

        if(posX + menuWidth >= winWidth
        && posY + menuHeight >= winHeight){
          //Case 1: right-bottom overflow:
          posLeft = posX - menuWidth + "px";
          posTop = posY - menuHeight + "px";
        }
        else if(posX + menuWidth >= winWidth){
          //Case 2: right overflow:
          posLeft = posX - menuWidth + "px";
          posTop = posY + "px";
        }
        else if(posY + menuHeight >= winHeight){
          //Case 3: bottom overflow:
          posLeft = posX + "px";
          posTop = posY - menuHeight + "px";
        }
        else {
          //Case 4: default values:
          posLeft = posX + "px";
          posTop = posY + "px";
        }
        $('.rcpop').css({
           "left": posLeft,
           "top": posTop
        });
        $(".reserv-btn").click(function(){
            $("#reserv").addClass('on');
        });
        e.preventDefault();
    }

}
$( document ).ready(function() {
    // $(".res-f").appendTo("#calendar");
    $('#calendar .fc-toolbar').after($('#calendar .res-f'));
    // $("#calendar .res-f").insertAfter("#calendar .fc-toolbar");
});

//가로보기 기본보기 높이수정 20.06.17 수정
$(document).on('click', '.bas-view', function(){
    $('.tab-btn button.on').trigger('click');
});

//가로보기 일간주간월간 높이 수정 20.06.17 수정
$(document).on('click', '.tab-btn button', function(){
    if($(this).hasClass('on')){
        console.log('add');
        $('.fc-view-container').addClass('on');
    }else{
        console.log('re');
        $('.fc-view-container').removeClass('on');
    }
});
//가로보기 달력 가로크기 20.06.17
$(document).on('click', '.ui-datepicker-header .ui-corner-all', function(){
    $('.r-calander .ui-datepicker-calendar tbody tr').contents().unwrap();
});
$(window).resize( function(){
    $('.r-calander .ui-datepicker-calendar tbody tr').contents().unwrap();
});
$(document).on('click', 'table.ui-datepicker-calendar', function(){
    $('.r-calander .ui-datepicker-calendar tbody tr').contents().unwrap();
});
