<?php $this->managelayout->add_css(element('view_skin_url', $layout) . '/css/style.css'); ?>

<?php echo element('headercontent', element('board', element('list', $view))); ?>


	<h3 >
        <?php
            echo html_escape(element('board_name', element('board', element('list', $view))));
        ?>
    </h3>
    <div class="border_button mt20">
        <?php if (element('write_url', element('list', $view))) { ?>
            <div class="pull-right">
                <button type="button" onclick="location.href='<?php echo element('write_url', element('list', $view)); ?>'" class="btn btn-success btn-sm">글쓰기</button>
            </div>
        <?php } ?>
    </div>



	<?php
	$attributes = array('name' => 'fboardlist', 'id' => 'fboardlist');
	echo form_open('', $attributes);
	?>


    <section class="sec3" id="sec3">
        <img class="bg" src="<?php echo base_url('assets/img/sec3.png'); ?>" />
        <div class="main-inner slider">
    <?php
    $i = 0;
    $open = false;
    $cols = element('gallery_cols', element('board', element('list', $view)));
    if (element('list', element('data', element('list', $view)))) {
    foreach (element('list', element('data', element('list', $view))) as $result) {
        if ($cols && $i % $cols === 0) {
//            echo '<ul class="mt20">';
            $open = true;
        }
        $marginright = (($i+1)% $cols === 0) ? 0 : 2;
    ?>

            <div class="list">
                <div class="temp-left">
                    <div class="sec3-txtbox">
                        <p class="pj-title">
                            <?php if (element('post_reply', $result)) { ?><span class="label label-primary">Re</span><?php } ?>
                            <a href="<?php echo element('post_url', $result); ?>" style="
                            <?php
                            if (element('title_color', $result)) {
                                echo 'color:' . element('title_color', $result) . ';';
                            }
                            if (element('title_font', $result)) {
                                echo 'font-family:' . element('title_font', $result) . ';';
                            }
                            if (element('title_bold', $result)) {
                                echo 'font-weight:bold;';
                            }
                            if (element('post_id', element('post', $view)) === element('post_id', $result)) {
                                echo 'font-weight:bold;';
                            }
                            ?>
                                    " title="<?php echo html_escape(element('title', $result)); ?>"><?php echo html_escape(element('title', $result)); ?></a>
                        </p>
                        <p class="pj-subttl"><?=element('subtitle',element('extravars', $result))?></p>
                        <ul class="pj-ul">
                            <li><?=element('subdescription',element('extravars', $result))?></li>
                            <li><?=element('info1',element('extravars', $result))?></li>
                            <li><?=element('info2',element('extravars', $result))?></li>
                        </ul>
                        <a href="<?php echo element('post_url', $result); ?>" target="_blank">
                            <button type="button" class="btn df">자세히 보기</button>
                        </a>
                    </div>
                </div>
                <div class='temp-right <?=element('modisplay',element('extravars', $result))?>'>
                    <div class="tabletBox">
                        <div class="tabletimg">
                            <img src="<?php echo site_url(config_item('uploads_dir') . '/post/' .$result['file'][0]['pfi_filename'])?>" alt="tabletimg">
                        </div>
                        <div class="tabletLayout"></div>
                    </div>
                    <div class="phoneBox">
                        <div class="phoneimg">
                            <img src="<?php echo site_url(config_item('uploads_dir') . '/post/' .$result['file'][1]['pfi_filename'])?>" alt="tabletimg">
                        </div>
                        <div class="phoneLayout"></div>
                    </div>
                </div>
            </div>

        <?php

        }
    }
    ?>
        </div>
    </section>
<?php
echo form_close();
?>

