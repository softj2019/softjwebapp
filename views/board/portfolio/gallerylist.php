<?php $this->managelayout->add_css(element('view_skin_url', $layout) . '/css/style.css'); ?>

<?php echo element('headercontent', element('board', element('list', $view))); ?>


	<h3 class="hidden">
        <?php
            echo html_escape(element('board_name', element('board', element('list', $view))));
        ?>
    </h3>
	<div class="table-top hidden"><?php /**임시조치*/?>
		<?php if ( ! element('access_list', element('board', element('list', $view))) && element('use_rss_feed', element('board', element('list', $view)))) { ?>
			<a href="<?php echo rss_url(element('brd_key', element('board', element('list', $view)))); ?>" class="btn btn-default btn-sm" title="<?php echo html_escape(element('board_name', element('board', element('list', $view)))); ?> RSS 보기"><i class="fa fa-rss"></i></a>
		<?php } ?>

		<?php if (element('use_category', element('board', element('list', $view))) && ! element('cat_display_style', element('board', element('list', $view)))) { ?>
			<select class="input" onchange="location.href='<?php echo board_url(element('brd_key', element('board', element('list', $view)))); ?>?findex=<?php echo html_escape($this->input->get('findex')); ?>&category_id=' + this.value;">
				<option value="">카테고리선택</option>
				<?php
				$category = element('category', element('board', element('list', $view)));
				function ca_select($p = '', $category = '', $category_id = '')
				{
					$return = '';
					if ($p && is_array($p)) {
						foreach ($p as $result) {
							$exp = explode('.', element('bca_key', $result));
							$len = (element(1, $exp)) ? strlen(element(1, $exp)) : 0;
							$space = str_repeat('-', $len);
							$return .= '<option value="' . html_escape(element('bca_key', $result)) . '"';
							if (element('bca_key', $result) === $category_id) {
								$return .= 'selected="selected"';
							}
							$return .= '>' . $space . html_escape(element('bca_value', $result)) . '</option>';
							$parent = element('bca_key', $result);
							$return .= ca_select(element($parent, $category), $category, $category_id);
						}
					}
					return $return;
				}

				echo ca_select(element(0, $category), $category, $this->input->get('category_id'));
				?>
			</select>
		<?php } ?>
		<div class="col-md-6">
			<div class=" searchbox">
				<form class="navbar-form navbar-right pull-right" action="<?php echo board_url(element('brd_key', element('board', element('list', $view)))); ?>" onSubmit="return postSearch(this);">
					<input type="hidden" name="findex" value="<?php echo html_escape($this->input->get('findex')); ?>" />
					<input type="hidden" name="category_id" value="<?php echo html_escape($this->input->get('category_id')); ?>" />
					<div class="form-group">
						<select class="input pull-left px100" name="sfield">
							<option value="post_both" <?php echo ($this->input->get('sfield') === 'post_both') ? ' selected="selected" ' : ''; ?>>제목+내용</option>
							<option value="post_title" <?php echo ($this->input->get('sfield') === 'post_title') ? ' selected="selected" ' : ''; ?>>제목</option>
							<option value="post_content" <?php echo ($this->input->get('sfield') === 'post_content') ? ' selected="selected" ' : ''; ?>>내용</option>
							<option value="post_nickname" <?php echo ($this->input->get('sfield') === 'post_nickname') ? ' selected="selected" ' : ''; ?>>회원명</option>
							<option value="post_userid" <?php echo ($this->input->get('sfield') === 'post_userid') ? ' selected="selected" ' : ''; ?>>회원아이디</option>
						</select>
						<input type="text" class="input px150" placeholder="Search" name="skeyword" value="<?php echo html_escape($this->input->get('skeyword')); ?>" />
						<button class="btn btn-primary btn-sm" type="submit"><i class="fa fa-search"></i></button>
					</div>
				</form>
			</div>
			<div class="searchbuttonbox">
				<button class="btn btn-primary btn-sm pull-right" type="button" onClick="toggleSearchbox();"><i class="fa fa-search"></i></button>
			</div>
			<?php if (element('point_info', element('list', $view))) { ?>
				<div class="point-info pull-right mr10">
					<button type="button" class="btn-point-info" ><i class="fa fa-info-circle"></i></button>
					<div class="point-info-content alert alert-warning"><strong>포인트안내</strong><br /><?php echo element('point_info', element('list', $view)); ?></div>
				</div>
			<?php } ?>
		</div>
		<script type="text/javascript">
		//<![CDATA[
		function postSearch(f) {
			var skeyword = f.skeyword.value.replace(/(^\s*)|(\s*$)/g,'');
			if (skeyword.length < 2) {
				alert('2글자 이상으로 검색해 주세요');
				f.skeyword.focus();
				return false;
			}
			return true;
		}
		function toggleSearchbox() {
			$('.searchbox').show();
			$('.searchbuttonbox').hide();
		}
		<?php
			if ($this->input->get('skeyword')) {
				echo 'toggleSearchbox();';
			}
		?>
		$(document).on('click', '.btn-point-info', function() {
			$('.point-info-content').toggle();
		});
		//]]>
		</script>
	</div>

	<?php
	if (element('use_category', element('board', element('list', $view))) && element('cat_display_style', element('board', element('list', $view))) === 'tab') {
		$category = element('category', element('board', element('list', $view)));
	?>
		<ul class="nav nav-tabs clearfix">
			<li role="presentation" <?php if ( ! $this->input->get('category_id')) { ?>class="active" <?php } ?>><a href="<?php echo board_url(element('brd_key', element('board', element('list', $view)))); ?>?findex=<?php echo html_escape($this->input->get('findex')); ?>&category_id=">전체</a></li>
			<?php
			if (element(0, $category)) {
				foreach (element(0, $category) as $ckey => $cval) {
			?>
				<li role="presentation" <?php if ($this->input->get('category_id') === element('bca_key', $cval)) { ?>class="active" <?php } ?>><a href="<?php echo board_url(element('brd_key', element('board', element('list', $view)))); ?>?findex=<?php echo html_escape($this->input->get('findex')); ?>&category_id=<?php echo element('bca_key', $cval); ?>"><?php echo html_escape(element('bca_value', $cval)); ?></a></li>
			<?php
				}
			}
			?>
		</ul>
	<?php } ?>

	<?php
	$attributes = array('name' => 'fboardlist', 'id' => 'fboardlist');
	echo form_open('', $attributes);
	?>

    <?php if (element('is_admin', $view)) { /**관리기능*/?>
        <div class="hidden">
            <label for="all_boardlist_check"><input id="all_boardlist_check" onclick="if (this.checked) all_boardlist_checked(true); else all_boardlist_checked(false);" type="checkbox" /> 전체선택</label>
        </div>
    <?php } ?>
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
            echo '<ul class="mt20">';
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
                <div class="temp-right">
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
