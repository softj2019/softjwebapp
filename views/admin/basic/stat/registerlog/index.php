<div class="box">
	<div class="box-table">
		<?php
		$attributes = array('class' => 'form-inline', 'name' => 'flist', 'id' => 'flist');
		echo form_open(current_full_url(), $attributes);
		?>
			<div class="box-table-header">
				<ul class="nav nav-pills">
					<li role="presentation" class="active"><a href="<?php echo admin_url($this->pagedir); ?>">회원가입 경로</a></li>
					<li role="presentation"><a href="<?php echo admin_url($this->pagedir . '/graph'); ?>">기간별 그래프</a></li>
				</ul>
				<?php
				ob_start();
				?>
					<div class="btn-group pull-right" role="group" aria-label="...">
						<a href="<?php echo element('listall_url', $view); ?>" class="btn btn-outline btn-default btn-sm">전체목록</a>
					</div>
				<?php
				$buttons = ob_get_contents();
				ob_end_flush();
				?>
			</div>
			<div class="row">전체 : <?php echo element('total_rows', element('data', $view), 0); ?>건</div>
			<div class="table-responsive">
				<table class="table table-hover table-striped table-bordered">
					<thead>
						<tr>
							<th><a href="<?php echo element('mrg_id', element('sort', $view)); ?>">번호</a></th>
							<th>회원명</th>
							<th>가입일시</th>
							<th>가입경로</th>
							<th>OS</th>
							<th>Browser</th>
							<th>추천인</th>
							<th>IP</th>
						</tr>
					</thead>
					<tbody>
					<?php
					if (element('list', element('data', $view))) {
						foreach (element('list', element('data', $view)) as $result) {
					?>
						<tr>
							<td><?php echo number_format(element('num', $result)); ?></td>
							<td><?php echo element('display_name', $result); ?> ( <?php echo html_escape(element('mem_userid', $result)); ?> )</td>
							<td><?php echo display_datetime(element('mrg_datetime', $result), 'full'); ?></td>
							<td><a href="<?php echo goto_url(element('mrg_referer', $result)); ?>" target="_blank"><?php echo element('mrg_referer', $result); ?></a></td>
							<td><?php echo element('os', $result); ?></td>
							<td><?php echo element('browsername', $result); ?> <?php echo element('browserversion', $result); ?> <?php echo element('engine', $result); ?></td>
							<td><?php echo element('recommend_display_name', $result); ?> <?php if (element('mem_userid', element('recommend', $result))) { ?> ( <?php echo html_escape(element('mem_userid', element('recommend', $result))); ?> ) <?php } ?></td>
							<td><a href="?sfield=mrg_ip&amp;skeyword=<?php echo display_admin_ip(element('mrg_ip', $result)); ?>"><?php echo display_admin_ip(element('mrg_ip', $result)); ?></a></td>
						</tr>
					<?php
						}
					}
					if ( ! element('list', element('data', $view))) {
					?>
						<tr>
							<td colspan="8" class="nopost">자료가 없습니다</td>
						</tr>
					<?php
					}
					?>
					</tbody>
				</table>
			</div>
			<div class="box-info">
				<?php echo element('paging', $view); ?>
				<div class="pull-left ml20"><?php echo admin_listnum_selectbox();?></div>
				<?php echo $buttons; ?>
			</div>
		<?php echo form_close(); ?>
	</div>
	<form name="fsearch" id="fsearch" action="<?php echo current_full_url(); ?>" method="get">
		<div class="box-search">
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<select class="form-control" name="sfield" >
						<?php echo element('search_option', $view); ?>
					</select>
					<div class="input-group">
						<input type="text" class="form-control" name="skeyword" value="<?php echo html_escape(element('skeyword', $view)); ?>" placeholder="Search for..." />
						<span class="input-group-btn">
							<button class="btn btn-default btn-sm" name="search_submit" type="submit">검색!</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
