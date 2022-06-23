<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=yes">
<title><?php echo html_escape(element('page_title', $layout)); ?></title>
<?php if (element('meta_description', $layout)) { ?><meta name="description" content="<?php echo html_escape(element('meta_description', $layout)); ?>"><?php } ?>
<?php if (element('meta_keywords', $layout)) { ?><meta name="keywords" content="<?php echo html_escape(element('meta_keywords', $layout)); ?>"><?php } ?>
<?php if (element('meta_author', $layout)) { ?><meta name="author" content="<?php echo html_escape(element('meta_author', $layout)); ?>"><?php } ?>
<?php if (element('favicon', $layout)) { ?><link rel="shortcut icon" type="image/x-icon" href="<?php echo element('favicon', $layout); ?>" /><?php } ?>
<?php if (element('canonical', $view)) { ?><link rel="canonical" href="<?php echo element('canonical', $view); ?>" /><?php } ?>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!--    <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
   <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">-->
    <link href="<?php echo base_url('assets/plugins/slick-theme.css'); ?>" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <link href="<?php echo base_url('assets/css/reset.css'); ?>" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url('assets/css/common.css'); ?>" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url('views/mypage/bootstrap/css/style.css'); ?>" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <?php echo $this->managelayout->display_css(); ?>
<script type="text/javascript">
// 자바스크립트에서 사용하는 전역변수 선언
var cb_url = "<?php echo trim(site_url(), '/'); ?>";
var cb_cookie_domain = "<?php echo config_item('cookie_domain'); ?>";
var cb_charset = "<?php echo config_item('charset'); ?>";
var cb_time_ymd = "<?php echo cdate('Y-m-d'); ?>";
var cb_time_ymdhis = "<?php echo cdate('Y-m-d H:i:s'); ?>";
var layout_skin_path = "<?php echo element('layout_skin_path', $layout); ?>";
var view_skin_path = "<?php echo element('view_skin_path', $layout); ?>";
var is_member = "<?php echo $this->member->is_member() ? '1' : ''; ?>";
var is_admin = "<?php echo $this->member->is_admin(); ?>";
var cb_admin_url = <?php echo $this->member->is_admin() === 'super' ? 'cb_url + "/' . config_item('uri_segment_admin') . '"' : '""'; ?>;
var cb_board = "<?php echo isset($view) ? element('board_key', $view) : ''; ?>";
var cb_board_url = <?php echo ( isset($view) && element('board_key', $view)) ? 'cb_url + "/' . config_item('uri_segment_board') . '/' . element('board_key', $view) . '"' : '""'; ?>;
var cb_device_type = "<?php echo $this->cbconfig->get_device_type() === 'mobile' ? 'mobile' : 'desktop' ?>";
var cb_csrf_hash = "<?php echo $this->security->get_csrf_hash(); ?>";
var cookie_prefix = "<?php echo config_item('cookie_prefix'); ?>";
</script>

</head>
<body <?php echo isset($view) ? element('body_script', $view) : ''; ?>>
    <header class="main-hd sub-hd">
        <h1 class="sub-logo"><a href="<?=current_full_url()?>">소프트제이</a></h1>
    </header>
    <div class="sub-wrap">

			<?php if (element('use_sidebar', $layout)) {?>
				<div class="left">
			<?php } ?>

			<!-- 본문 시작 -->
			<style>
			    .board{padding: 0 20px}
			</style>
			<?php if (isset($yield))echo $yield; ?>
			<!-- 본문 끝 -->

			<?php if (element('use_sidebar', $layout)) {?>

				</div>
				<div class="sidebar">
					<?php $this->load->view(element('layout_skin_path', $layout) . '/sidebar'); ?>
				</div>

			<?php } ?>
        <footer class="foot-bg">
            <div class="footer-inner">
                <div class="foot-L">
                    <div class="f-logo">
                        <span>SOFT J</span>
                    </div>
                    <p>
                        경기도 고양시 일산동구 정발산로 24 타워3차 603호 (장항동, 웨스턴돔2)<br>
                        상호 : 소프트제이 ㅣ 대표자 : 김지훈<br>
                        Copyright © 2020 SOFTJ. All Rights Reserved.
                    </p>
                </div>
                <div class="ver-h"></div>
                <div class="foot-R">
                    <p>CONTACT US.</p>
<!--                    <p class="str-p">Tel. 070-7687-5532</p>-->
                    <p class="str-p"><a href="http://pf.kakao.com/_kxexcxgs" class="ch-kakao" target="_blank"></a></p>
                    <p class="fax-p">Fax. 02-6442-6623</p>
                    <p>Email. dev@softj.net</p>
                </div>
            </div>
        </footer>
	</div>
	<!-- main end -->

</div>
<!--[if lt IE 9]>
<script type="text/javascript" src="<?php echo base_url('assets/js/html5shiv.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/respond.min.js'); ?>"></script>
<![endif]-->
<script type="text/javascript" src="<?php echo base_url('assets/js/common.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/jquery.validate.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/jquery.validate.extension.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/sideview.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/js.cookie.js'); ?>"></script>
<?php echo $this->managelayout->display_js(); ?>
<script type="text/javascript">
$(document).on('click', '.viewpcversion', function(){
	Cookies.set('device_view_type', 'desktop', { expires: 1 });
});
$(document).on('click', '.viewmobileversion', function(){
	Cookies.set('device_view_type', 'mobile', { expires: 1 });
});
$('.slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay: true,
    dots:true,
});
var slider=$('#slider-div');
var slickOptions={
    infinite : true,
    arrows : true,
    dots : false,
    slidesToShow:1,
    autoplay : true,
    autoplaySpeed : 10000,
    speed : 100,
    pauseOnHover : true,
    draggable : true,
};
$(window).on('load resize', function() {
    if($(window).outerWidth() > 767) {
        slider.filter('.slick-initialized').slick('unslick');
    }else{
        slider.not('.slick-initialized').slick(slickOptions);
    }
});
if($('.parallax-background') > 0){
    $('.parallax-background').parallaxBackground({
        event: 'mouse_move',
        animation_type: 'shift',
        animate_duration: 3
    });
}
if($('#hLogo') > 0) {
    new Vivus('hLogo', {duration: 150, start: 'autostart'});
}
$('.sub-logo a').on("click",function () {
    location.href=cb_url;
})

</script>
<?php echo element('popup', $layout); ?>
<?php echo $this->cbconfig->item('footer_script'); ?>

<!--
Layout Directory : <?php echo element('layout_skin_path', $layout); ?>,
Layout URL : <?php echo element('layout_skin_url', $layout); ?>,
Skin Directory : <?php echo element('view_skin_path', $layout); ?>,
Skin URL : <?php echo element('view_skin_url', $layout); ?>,
-->

</body>
</html>
