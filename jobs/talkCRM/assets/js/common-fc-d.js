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
        height: 800,
        locale: 'ko',
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        plugins: ['interaction', 'resourceDayGrid', 'resourceTimeGrid', 'dayGrid', 'momentPlugin', 'timeGrid'],
        defaultView: 'resourceTimeGridDay',
        defaultDate: today,
        nowIndicator: true,//현 시간 라인 표기
        scrollTime: '09:00:00',//타임라인 스크롤 시작시간
        allDaySlot: false,//종일 이벤트 숨기기
        slotLabelFormat: [
            // { month: 'long', year: 'numeric' }, // top level of text
            // { weekday: 'short' } // lower level of text
            {
                hour: '2-digit',    //numeric 3 2-digit 03
                minute: '2-digit',  //numeric 3 2-digit 03
                hour12: false,      //true am 6 false 06
            }
        ],
        editable: true,//수정기능
        selectable: true,//선택기능
        eventLimit: true, // allow "more" link when too many events
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
            dayGridMonth: {
                type: 'dayGridMonth',
                buttonText: 'Month',
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
        //데이터 베이스 출력 할 리소스 - 예약내역
        events: [
            //    U key            행   시작시간                   종료시간                       예약명

            {
                id: '2',
                resourceId: 'a',
                start: today + 'T09:00:00',
                end: today + 'T09:30:00',
                title: 'event 2', description: '' +
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

            {id: '3', resourceId: 'a', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 3',backgroundColor:'#CCD6E3',textColor:'#001B3C',borderColor:"#003473"},
            {id: '4', resourceId: 'a', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 4',backgroundColor:'#DBEFDC',textColor:'#285B2A',borderColor:"#4CAF50"},
            {id: '5', resourceId: 'a', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 5',backgroundColor:'#FDD9D7',textColor:'#51221F',borderColor:"#F44336"},

            {id: '6', resourceId: 'a', start: today + 'T09:00:00', end: today + 'T09:30:00', title: 'event 6',backgroundColor:'#f0f0f0',textColor:'#666',borderColor:"#ccc"},
            {id: '7', resourceId: 'a', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 7',backgroundColor:'#FFDECD',textColor:'#854D04',borderColor:"#F48236"},
            {id: '8', resourceId: 'a', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 8',backgroundColor:'#CDFDFF',textColor:'#045985',borderColor:"#4C9EAF"},
            {id: '9', resourceId: 'a', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 9',backgroundColor:'#CDCDFF',textColor:'#260485',borderColor:"#7547C7"},

            {id: '10', resourceId: 'b', start: today + 'T09:00:00', end: today + 'T09:30:00', title: 'event 10',backgroundColor:'#FDCDFF',textColor:'#85044D',borderColor:"#C747C2"},
            {id: '11', resourceId: 'b', start: today + 'T10:00:00', end: today + 'T10:30:00', title: 'event 11',backgroundColor:'#666666',textColor:'#fff',borderColor:"#333333"},
            {id: '12', resourceId: 'b', start: today + 'T11:00:00', end: today + 'T11:30:00', title: 'event 12',backgroundColor:'#CCD6E3',textColor:'#001B3C',borderColor:"#003473"},
            {id: '13', resourceId: 'b', start: today + 'T14:00:00', end: today + 'T14:30:00', title: 'event 13',backgroundColor:'#CCD6E3',textColor:'#001B3C',borderColor:"#003473"},


        ],
        //현재 렌더링 된 날짜 세트가 DOM에서 제거되기 전에 트리거됩니다
        datesDestroy(arg) {
            // console.log('datesDestroy',arg);
        },
        //뷰의 날짜와 관련되지 않은 DOM 구조가 렌더링 된 후 트리거됩니다.
        viewSkeletonRender(arg) {
            // console.log('viewSkeletonRender',arg);

        },

        //뷰의 DOM 스켈레톤이 DOM에서 제거되기 전에 트리거됩니다.
        viewSkeletonDestroy(arg) {
            // console.log('viewSkeletonDestroy',arg);

        },
        //날짜 드래그 선택
        select: function (arg) {
            console.log('select',
                arg
                // 'select',
                // arg.startStr,
                // arg.endStr,
                // arg.resource ? arg.resource.id : '(no resource)'
            );
            callRightSmallNavEmptyDate(arg.jsEvent,arg.view);
        },
        //날짜 클릭
        // dateClick: function(arg) {
        // console.log('dateClick',arg.jsEvent
        //     // 'dateClick',
        //     // arg.date,
        //     // arg.resource ? arg.resource.id : '(no resource)'
        // );

        // },
        //새로운 날짜 집합이 렌더링되면 트리거됩니다.
        //빈 날짜 마우스 우클릭
        datesRender(arg) {
            //마우스 우클릭
            arg.el.oncontextmenu = ((e) => {
                callRightSmallNavEmptyDate(e, arg.view);
            });
            // arg.el.onmousedown= ((e)=>{
            //     if(e.button===2){
            //         callRightSmallNavEmptyDate(e);
            //     }
            // });
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

            arg.el.ondblclick = (() => {
                $('#reserv').addClass('on');
            });
            arg.el.onclick = ((e) => {
                // e.preventDefault();
            })
            arg.el.oncontextmenu = ((e) => {
                callRightSmallNav(e);
            });
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
        //예약 리사이즈
        eventResizeStop: function (arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
            callRightSmallNav(arg.jsEvent)
        },
        eventResize(arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
            console.log('eventResize');
        },
//        드롭
         eventDrop: function(info) {
        // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
        // if (!confirm("Are you sure about this change?")) {
        //     info.revert();
        // }
        // },
        // eventClick(arg) {
            $('.eventDescription').addClass('hidden');
            $('.tooltip').addClass('hidden');
         },
    });
    calendar.render();

    //예약 이벤트 추가
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
        console.log(formData)

        calendar.addEvent({
            id: Math.round( Math.random()*10),//d
            resourceId: 'c',
            start:  formData[4].value+'T'+formData[5].value,
            end:  formData[4].value+'T'+formData[6].value,
            title: formData[2].value
        });
        $('#reserv').removeClass('on');
        calendar.render();
    });
    //20.06.17 추가
    $('.selectResourseId').on('change', function(){
        var resourceA;
        var thisVal;
        $.each($('input[name=selectResourseId]:checked'), function(key,value){
            thisVal = $(this).val()
            resourceA = calendar.getResourceById(thisVal);
            resourceA.remove();
//            calendar.remove();
            console.log(thisVal);
        });
    });
});
    //옵션트리거
    // calendar.setOption('locale', 'ko');

    //날짜선택이벤트 트리거
    // calendar.on('dateClick', function(info) {
    // console.log(info);
    // });




//메뉴호출 예약 이벤트
function callRightSmallNav(e){
    console.log(e.target)
    var clientX= e.clientX;
    var clientY= e.clientY;
    $('.rcpop').remove()
    $('.main-wrap').append('<div class="rcpop ver2"><ul><li class="bor-b-g"><a href="#" class="editpop-btn">내원확인</a></li><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="rc-add R-arr">예약수정</a><ul class="top-80"><li><a href="#" class="reserved-btn">예약수정</a></li><li><a href="#">예약취소</a></li><li><a href="#">예약삭제</a></li></ul></li><li><a href="#" class="R-arr">확인콜</a><ul class="top-120"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li class="bor-b-g"><a href="#" class="R-arr">해피콜</a><ul class="top-160"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li><a href="#" class="msg-btn">문자발송</a></li><li class="bor-b-g"><a href="#">고객이동</a></li><li><a href="#">예약복사</a></li><li><a href="#">예약이동</a></li></ul></div>');
    $('.rcpop').css('position',"fixed");
    $('.rcpop').css('display',"block");
    $('.rcpop').css('left',clientX);
    $('.rcpop').css('top',clientY);
    // console.log('callRightSmallNav',e)
    e.preventDefault();
}

//메뉴호출 빈셀 빈날짜
function callRightSmallNavEmptyDate(e,el){
    var querySelectorAll=e.target.querySelectorAll(
        'div.fc-title',
        '.fc-time',
        '.fc-content',
        '.fc-content',
        '.fc-time-grid-event',
        '.fc-end-resizer',
        '.fc-widget-content'
    );

    console.log(querySelectorAll);
    console.log(el);

    console.log(e.target)
    if(querySelectorAll.length > 0){
        return
    }else{
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
        $('.rcpop').css('left',clientX);
        $('.rcpop').css('top',clientY);
        // console.log('callRightSmallNavEmptyDate',e)
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
