<?php $this->managelayout->add_css(element('view_skin_url', $layout) . '/css/style.css'); ?>
<?php	$this->managelayout->add_js(base_url('plugin/zeroclipboard/ZeroClipboard.js')); ?>

<?php
if (element('syntax_highlighter', element('board', $view)) OR element('comment_syntax_highlighter', element('board', $view))) {
	$this->managelayout->add_css(base_url('assets/js/syntaxhighlighter/styles/shCore.css'));
	$this->managelayout->add_css(base_url('assets/js/syntaxhighlighter/styles/shThemeMidnight.css'));
	$this->managelayout->add_js(base_url('assets/js/syntaxhighlighter/scripts/shCore.js'));
	$this->managelayout->add_js(base_url('assets/js/syntaxhighlighter/scripts/shBrushJScript.js'));
	$this->managelayout->add_js(base_url('assets/js/syntaxhighlighter/scripts/shBrushPhp.js'));
	$this->managelayout->add_js(base_url('assets/js/syntaxhighlighter/scripts/shBrushCss.js'));
	$this->managelayout->add_js(base_url('assets/js/syntaxhighlighter/scripts/shBrushXml.js'));
?>
	<script type="text/javascript">
	SyntaxHighlighter.config.clipboardSwf = '<?php echo base_url('assets/js/syntaxhighlighter/scripts/clipboard.swf'); ?>';
	var is_SyntaxHighlighter = true;
	SyntaxHighlighter.all();
	</script>
<?php } ?>

<?php echo element('headercontent', element('board', $view)); ?>

    <div class="in-pofo">
        <div class="inner-head">
            <img src="<?=$view['file_image'][0]['origin_image_url']?>" alt="" class="bg-img">
            <div class="bg-grey"></div>
            <div class="info-txt">
                <h1 class="pofo-tit"><?php echo html_escape(element('post_title', element('post', $view))); ?></h1>
                <p class="pofo-sub">
                    <?=$view["extra_content"][0]["output"]?>
                   <br>
                    <?=$view["extra_content"][1]["output"]?>
                </p>
            </div>
        </div>
        <div class="inner-main clearfix">
            <div class="in-box">
                <div class="info-ul">
                    <p>INFO</p>
                    <div class="ul-div">
                        <ul class="in-ul1">
                            <li>
                                <p>
                                    개발 플랫폼<br>
                                    <?=$view["extra_content"][2]["output"]?>
                                </p>
                            </li>
                            <li>
                                <p>
                                    UI / UX<br>
                                    <?=$view["extra_content"][3]["output"]?>
                                </p>

                            </li>
                        </ul>
                        <ul class="in-ul2">
                            <li>
                                <p class="font-18">
                                    <strong>CLIENT</strong><br>
                                    <?=$view["extra_content"][4]["output"]?>
                                </p>

                            </li>
                            <li>
                                <p class="font-18">
                                    <strong>TYPE</strong><br>
                                    <?=$view["extra_content"][5]["output"]?>
                                </p>

                            </li>
                            <li>
                                <p class="font-18">
                                    <strong>YEAR</strong><br>
                                    <?=$view["extra_content"][6]["output"]?>
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class='img-box clearfix <?=$view["extra_content"][15]["output"]?>'>
                    <div class="pc-img">
                        <img src="<?=$view['file_image'][0]['origin_image_url']?>" alt="">
                    </div>
                    <div class="mo-img">
                        <img src="<?=$view['file_image'][1]['origin_image_url']?>" alt="">
                    </div>
                </div>
                <a href="<?=$view["extra_content"][7]["output"]?>" class="link-btn" target="_self"><?=$view["extra_content"][8]["output"]?></a>
            </div>
            <div class="in-box2 clearfix">
                <div>
                    <div>
                        <p class="tit">Logo</p>
                        <div class="box2-div box2-img">
                            <img src="<?=$view['file_image'][2]['origin_image_url']?>" alt="">
                        </div>
                    </div>
                    <div>
                        <p class="tit">Colours</p>
                        <div class="box2-div box2-img color-box">
                            <img src="<?=$view['file_image'][3]['origin_image_url']?>" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <p class="tit">Typography</p>
                    <ul class="box2-div txt-size">
                        <li class="txt-name"><?=$view["extra_content"][9]["output"]?></li>
                        <li><?=$view["extra_content"][10]["output"]?></li>
                        <li><?=$view["extra_content"][11]["output"]?></li>
                        <li><?=$view["extra_content"][12]["output"]?></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


<div class="border_button mt20">
    <div class="btn-group pull-left" role="group" aria-label="...">
        <?php if (element('modify_url', $view)) { ?>
            <button type="button" content="btn btn-default" onclick="location.href='<?php echo element('modify_url', $view); ?>'" class="btn btn-default btn-sm">수정</button>
        <?php } ?>
        <?php	if (element('delete_url', $view)) { ?>
            <button type="button" class="btn btn-default btn-sm btn-one-delete" data-one-delete-url="<?php echo element('delete_url', $view); ?>">삭제</button>
        <?php } ?>
        <button type="button" onclick="location.href='<?php echo element('list_url', $view); ?>'" class="btn btn-default btn-sm">목록</button>
        <?php if (element('search_list_url', $view)) { ?>
            <a href="<?php echo element('search_list_url', $view); ?>" class="btn btn-default btn-sm">검색목록</a>
        <?php } ?>
        <?php if (element('reply_url', $view)) { ?>
            <button type="button" onclick="location.href='<?php echo element('reply_url', $view); ?>'" class="btn btn-default btn-sm">답변</button>
        <?php } ?>
        <?php if (element('prev_post', $view)) { ?>
            <button type="button" onclick="location.href='<?php echo element('url', element('prev_post', $view)); ?>'" class="btn btn-default btn-sm">이전글</button>
        <?php } ?>
        <?php if (element('next_post', $view)) { ?>
            <button type="button" onclick="location.href='<?php echo element('url', element('next_post', $view)); ?>" class="btn btn-default btn-sm">다음글</button>
        <?php } ?>
    </div>
    <?php if (element('write_url', $view)) { ?>
        <div class="pull-right">
            <button type="button"  onclick="location.href='<?php echo element('write_url', $view); ?>'" class="btn btn-success btn-sm">글쓰기</button>
        </div>
    <?php } ?>
</div>

<?php echo element('footercontent', element('board', $view)); ?>

<?php if (element('target_blank', element('board', $view))) { ?>
<script type="text/javascript">
//<![CDATA[
$(document).ready(function() {
	$("#post-content a[href^='http']").attr('target', '_blank');
});
//]]>
</script>
<?php } ?>

<script type="text/javascript">
//<![CDATA[
var client = new ZeroClipboard($('.copy_post_url'));
client.on('ready', function(readyEvent) {
	client.on('aftercopy', function(event) {
		alert('게시글 주소가 복사되었습니다. \'Ctrl+V\'를 눌러 붙여넣기 해주세요.');
	});
});
//]]>
</script>
<?php
if (element('highlight_keyword', $view)) {
	$this->managelayout->add_js(base_url('assets/js/jquery.highlight.js'));
?>
	<script type="text/javascript">
	//<![CDATA[
	$('#post-content').highlight([<?php echo element('highlight_keyword', $view);?>]);
	//]]>
	</script>
<?php } ?>
