<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=yes">
    <meta name="naver-site-verification" content="cb4d0aca060421d60668ed297e58cd7d1654d6d3" />
<title><?php echo html_escape(element('page_title', $layout)); ?></title>
    <meta property="og:type" content="website">
    <meta property="og:title" content="웹 사이트 맞춤형 통합 솔루션 제공 softj">
    <meta property="og:description" content="홈페이지제작,맞춤형 홈페이지,반응형 홈페이지,적응형 기업홈페이지,홍보용홈페이지,웹사이트제작,쇼핑몰제작,정보시스템 유지관리,전자정부,유지관리,SI,SEO 최적화, 웹 개발, 웹사이트 유지보수,웹 기능개선">
    <meta property="og:image" content="https://softj.net/assets/img/logo.png">
    <meta property="og:url" content="https://softj.net">
<?php if (element('meta_description', $layout)) { ?><meta name="description" content="<?php echo html_escape(element('meta_description', $layout)); ?>"><?php } ?>
<?php if (element('meta_keywords', $layout)) { ?><meta name="keywords" content="<?php echo html_escape(element('meta_keywords', $layout)); ?>"><?php } ?>
<?php if (element('meta_author', $layout)) { ?><meta name="author" content="<?php echo html_escape(element('meta_author', $layout)); ?>"><?php } ?>
<?php if (element('favicon', $layout)) { ?><link rel="shortcut icon" type="image/x-icon" href="<?php echo element('favicon', $layout); ?>" /><?php } ?>
<?php if (element('canonical', $view)) { ?><link rel="canonical" href="<?php echo element('canonical', $view); ?>" /><?php } ?>
<!--    <link rel="stylesheet" type="text/css" href="--><?php //echo element('layout_skin_url', $layout); ?><!--/css/style.css" />-->
<!--    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />-->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <link href="<?php echo base_url('assets/plugins/slick-theme.css'); ?>" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/parallax_background.js'); ?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/easing/EasePack.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>

    <?php echo $this->managelayout->display_css(); ?>
    <!--summernote-->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
    <link href="<?php echo base_url('assets/css/reset.css'); ?>" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url('assets/css/common.css?ver220607'); ?>" rel="stylesheet" type="text/css">
    <!-- Toastr -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/toastr/toastr.min.css'); ?>">
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

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NPTD5LV');
</script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-191149610-1">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-191149610-1');
    </script>
</head>
<body <?php echo isset($view) ? element('body_script', $view) : ''; ?>>
<div class="wrapper">
    <header class="main-hd">
        <div class="cursor"></div>
        <button type="button" class="menu-btn"></button>
        <ul class="links2">
            <li><a href="#sec2">
                    about us
                </a></li>
            <li><a href="#sec3">
                    portfolio
                </a></li>
            <li><a href="#sec4">
                    contact
                </a></li>
        </ul>
        <div class="main-line"></div>
        <h1 class="h-logo">
            <a href="/">
                <svg id="hLogo" x="0px" y="0px" viewbox="0 0 240 80">
                    <style type="text/css">
                        .st0{fill:none;stroke:#fff;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                        .dark .st0, .hovered .st0{stroke:#343434}
                        .dark .hovered .st0{stroke:#fff}
                    </style>
                    <path class="st0" d="M40.1,25.42c0,0-4.9-7.23-13.42-7.23S13.27,22.84,13.27,28c0,7.48,6.73,10.84,12.52,10.84
                        c6.02,0,14.32,3.87,14.32,11.61s-6.97,11.35-13.42,11.35s-15.23-5.42-15.23-7.74"/>
                    <ellipse class="st0" cx="71.65" cy="39.63" rx="21" ry="21.44"/>
                    <polyline class="st0" points="133.87,18.19 105.81,18.19 105.81,39.63 105.81,61.06 "/>
                    <line class="st0" x1="127.29" y1="38.88" x2="106.81" y2="38.88"/>
                    <polyline class="st0" points="142.97,18.19 158.94,18.19 174.9,18.19 "/>
                    <line class="st0" x1="158.94" y1="61.06" x2="158.94" y2="18.19"/>
                    <path class="st0" d="M226.77,18.19v33.97c0,0-2.9,8.9-11.03,8.9c-8.13,0-12-6.97-12-11.61"/>
                </svg>

                소프트제이
            </a>
        </h1>
        <nav class="main-navi">
            <button class="navi-close" type="button">
                <span></span>
            </button>
            <ul class="links">
                <li><a href="#sec1" class="on">
                        main
                    </a></li>
                <li><a href="#sec2">
                        about us
                    </a></li>
                <li><a href="#sec3">
                        portfolio
                    </a>
<!--                    <ul class="navsub">-->
<!--                        <li><a href="sub/portfolio-sub.html" target="_blank">onejoy mall</a></li>-->
<!--                        <li><a href="">talk crm</a></li>-->
<!--                        <li><a href="">good archive</a></li>-->
<!--                    </ul>-->
                </li>
                <li><a href="#sec4">
                        contact
                    </a></li>
            </ul>
        </nav>
    </header>
    <!-- header end -->

	<!-- main start -->
    <div class="main-wrap">

			<?php if (element('use_sidebar', $layout)) {?>
				<div class="left">
			<?php } ?>

			<!-- 본문 시작 -->
			<?php if (isset($yield))echo $yield; ?>
			<!-- 본문 끝 -->

			<?php if (element('use_sidebar', $layout)) {?>

				</div>
				<div class="sidebar">
					<?php $this->load->view(element('layout_skin_path', $layout) . '/sidebar'); ?>
				</div>

			<?php } ?>
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
<script type="text/javascript" src="<?php echo base_url('assets/js/captcha.js'); ?>"></script>
<!-- Toastr -->
<script type="text/javascript" src="<?php echo base_url('assets/plugins/toastr/toastr.min.js'); ?>"></script>
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
$('.parallax-background').parallaxBackground({
    event: 'mouse_move',
    animation_type: 'shift',
    animate_duration: 3
});
new Vivus('hLogo', {duration: 150, start:'autostart'});
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
