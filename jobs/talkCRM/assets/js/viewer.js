//펜차트 모달
var dbclick=false;
var $image = $('#image');
var $download = $('#download');
var cropper;
var uploadedImageType = 'image/jpeg';

$(document).on('click', '.p-chart>div', function(){
    setTimeout(function(){
        if(dbclick ===false){
            $('#penchart3').addClass('on');
            $image.cropper({
                aspectRatio: 4 / 3,
                mouseWheelZoom: false,
                crop: function(event) {
                    console.log(event.detail.x);
                    console.log(event.detail.y);
                    console.log(event.detail.width);
                    console.log(event.detail.height);
                    console.log(event.detail.rotate);
                    console.log(event.detail.scaleX);
                    console.log(event.detail.scaleY);
                }
            });
            cropper= $image.data('cropper');
        }
    },300);
}).on('dblclick', '.p-chart>div', function(){
    dbclick = true;
    $('#penchart2').addClass('on');
    setTimeout(function(){
        dbclick = false;
    },500);
});
$(document).on('click', '.set7-list > div > div', function(){
    setTimeout(function(){
        
            $('#penchart3').addClass('on');
            $image.cropper({
                aspectRatio: 4 / 3,
                mouseWheelZoom: false,
                crop: function(event) {
                    console.log(event.detail.x);
                    console.log(event.detail.y);
                    console.log(event.detail.width);
                    console.log(event.detail.height);
                    console.log(event.detail.rotate);
                    console.log(event.detail.scaleX);
                    console.log(event.detail.scaleY);
                }
            });
            cropper= $image.data('cropper');
        
    },300);
});
//줌인
$('.glass-pl').on('click',function () {
    cropper.zoom(0.2)
})
//줌아웃
$('.glass-mn').on('click',function () {
    cropper.zoom(-0.2)
})
//줌100%
$('.view100').on('click',function () {
    cropper.zoomTo(1);
})
//회전 90
$('.rotate90').on('click',function () {
    cropper.rotate(90);
})
//회전 180
$('.rotate180').on('click',function () {
    cropper.rotate(180);
})
//좌우반전
$('.flip-hor').on('click',function () {
    cropper.scaleX(-1);
})
//상하반전
$('.flip-ver').on('click',function () {
    cropper.scaleY(-1);
})
//다운로드
$('#download').on('click',function () {

    $download.attr('href', cropper.toDataURL(uploadedImageType));
})
