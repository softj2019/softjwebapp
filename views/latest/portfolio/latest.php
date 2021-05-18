<?php
if (element('latest', $view)) {
    foreach (element('latest', $view) as $key => $result) {
        ?>

        <div class="list">
            <div class="temp-left">
                <div class="sec3-txtbox">
                    <p class="pj-title">
                        <?php if (element('post_reply', $result)) { ?><span class="label label-primary">Re</span><?php } ?>
                        <a href="<?php echo element('url', $result); ?>"><?php echo html_escape(element('title', $result)); ?></a>
                    </p>
                    <p class="pj-subttl"><?=element('subtitle',element('extravars', $result))?></p>
                    <ul class="pj-ul">
                        <li><?=element('subdescription',element('extravars', $result))?></li>
                        <li><?=element('info1',element('extravars', $result))?></li>
                        <li><?=element('info2',element('extravars', $result))?></li>
                    </ul>
                    <a href="<?php echo element('url', $result); ?>" target="_blank">
                        <button type="button" class="btn df">자세히 보기</button>
                    </a>
                </div>
            </div>
            <div class="temp-right">
                <div class="tabletBox">
                    <div class="tabletimg">
                        <img src="<?php echo site_url(config_item('uploads_dir') . '/post/' .$result['file'][4]['pfi_filename'])?>" alt="tabletimg">
                    </div>
                    <div class="tabletLayout"></div>
                </div>
                <div class="phoneBox">
                    <div class="phoneimg">
                        <img src="<?php echo site_url(config_item('uploads_dir') . '/post/' .$result['file'][5]['pfi_filename'])?>" alt="tabletimg">
                    </div>
                    <div class="phoneLayout"></div>
                </div>
            </div>
        </div>

        <?php

    }
}
?>