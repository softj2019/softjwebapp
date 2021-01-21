<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Itemdownload class
 *
 * Copyright (c) CIBoard <www.ciboard.co.kr>
 *
 * @author CIBoard (develop@ciboard.co.kr)
 */

/**
 * 관리자>컨텐츠몰관리>상품다운로드로그 controller 입니다.
 */
class Itemdownload extends CB_Controller
{

	/**
	 * 관리자 페이지 상의 현재 디렉토리입니다
	 * 페이지 이동시 필요한 정보입니다
	 */
	public $pagedir = 'cmall/itemdownload';

	/**
	 * 모델을 로딩합니다
	 */
	protected $models = array('Cmall_download_log', 'Cmall_item_detail');

	/**
	 * 이 컨트롤러의 메인 모델 이름입니다
	 */
	protected $modelname = 'Cmall_download_log_model';

	/**
	 * 헬퍼를 로딩합니다
	 */
	protected $helpers = array('form', 'array', 'number', 'cmall');

	function __construct()
	{
		parent::__construct();

		/**
		 * 라이브러리를 로딩합니다
		 */
		$this->load->library(array('pagination', 'querystring', 'cmalllib'));
	}

	/**
	 * 목록을 가져오는 메소드입니다
	 */
	public function index()
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_cmall_itemdownload_index';
		$this->load->event($eventname);

		$view = array();
		$view['view'] = array();

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before'] = Events::trigger('before', $eventname);

		/**
		 * 페이지에 숫자가 아닌 문자가 입력되거나 1보다 작은 숫자가 입력되면 에러 페이지를 보여줍니다.
		 */
		$param =& $this->querystring;
		$page = (((int) $this->input->get('page')) > 0) ? ((int) $this->input->get('page')) : 1;
		$view['view']['sort'] = array(
			'cdo_id' => $param->sort('cdo_id', 'asc'),
			'cit_id' => $param->sort('cit_id', 'asc'),
			'cit_name' => $param->sort('cit_name', 'asc'),
			'cit_key' => $param->sort('cit_key', 'asc'),
			'cde_title' => $param->sort('cde_title', 'asc'),
			'cdo_datetime' => $param->sort('cdo_datetime', 'asc'),
		);
		$findex = $this->input->get('findex') ? $this->input->get('findex') : $this->{$this->modelname}->primary_key;
		$forder = $this->input->get('forder', null, 'desc');
		$sfield = $this->input->get('sfield', null, '');
		$skeyword = $this->input->get('skeyword', null, '');

		$per_page = admin_listnum();
		$offset = ($page - 1) * $per_page;

		/**
		 * 게시판 목록에 필요한 정보를 가져옵니다.
		 */
		$this->{$this->modelname}->allow_search_field = array('cdo_id', 'cde_id', 'cit_id', 'cmall_item.mem_id', 'cmall_download_log.mem_id', 'cdd_datetime', 'cdo_ip', 'cit_name', 'cit_key', 'cde_title'); // 검색이 가능한 필드
		$this->{$this->modelname}->search_field_equal = array('cdo_id', 'cde_id', 'cit_id', 'cmall_item.mem_id', 'cmall_download_log.mem_id'); // 검색중 like 가 아닌 = 검색을 하는 필드
		$this->{$this->modelname}->allow_order_field = array('cdo_id', 'cit_id', 'cit_name', 'cit_key', 'cde_title', 'cdd_datetime'); // 정렬이 가능한 필드
		$result = $this->{$this->modelname}
			->get_admin_list($per_page, $offset, '', '', $findex, $forder, $sfield, $skeyword);
		$list_num = $result['total_rows'] - ($page - 1) * $per_page;
		if (element('list', $result)) {
			foreach (element('list', $result) as $key => $val) {
				$select = 'mem_id, mem_userid, mem_nickname, mem_icon';
				$result['list'][$key]['member'] = $dbmember
					= $this->Member_model->get_by_memid(element('mem_id', $val), $select);
				$result['list'][$key]['display_name'] = display_username(
					element('mem_userid', $dbmember),
					element('mem_nickname', $dbmember),
					element('mem_icon', $dbmember)
				);
				$result['list'][$key]['itemurl'] = cmall_item_url(element('cit_key', $val));
				$result['list'][$key]['download_link'] = admin_url('cmall/itemdownload/download/' . element('cde_id', $val));
				if (element('cdo_useragent', $val)) {
					$userAgent = get_useragent_info(element('cdo_useragent', $val));
					$result['list'][$key]['browsername'] = $userAgent['browsername'];
					$result['list'][$key]['browserversion'] = $userAgent['browserversion'];
					$result['list'][$key]['os'] = $userAgent['os'];
					$result['list'][$key]['engine'] = $userAgent['engine'];
				}
				$result['list'][$key]['num'] = $list_num--;
			}
		}

		$view['view']['data'] = $result;

		/**
		 * primary key 정보를 저장합니다
		 */
		$view['view']['primary_key'] = $this->{$this->modelname}->primary_key;

		/**
		 * 페이지네이션을 생성합니다
		 */
		$config['base_url'] = admin_url($this->pagedir) . '?' . $param->replace('page');
		$config['total_rows'] = $result['total_rows'];
		$config['per_page'] = $per_page;
		$this->pagination->initialize($config);
		$view['view']['paging'] = $this->pagination->create_links();
		$view['view']['page'] = $page;

		/**
		 * 쓰기 주소, 삭제 주소등 필요한 주소를 구합니다
		 */
		$search_option = array('cit_name' => '상품명', 'cit_key' => '상품코드', 'cde_title' => '세부사항', 'cdd_datetime' => '날짜', 'cdo_ip' => 'IP');
		$view['view']['skeyword'] = ($sfield && array_key_exists($sfield, $search_option)) ? $skeyword : '';
		$view['view']['search_option'] = search_option($search_option, $sfield);
		$view['view']['listall_url'] = admin_url($this->pagedir);
		$view['view']['list_delete_url'] = admin_url($this->pagedir . '/listdelete/?' . $param->output());

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before_layout'] = Events::trigger('before_layout', $eventname);

		/**
		 * 어드민 레이아웃을 정의합니다
		 */
		$layoutconfig = array('layout' => 'layout', 'skin' => 'index');
		$view['layout'] = $this->managelayout->admin($layoutconfig, $this->cbconfig->get_device_view_type());
		$this->data = $view;
		$this->layout = element('layout_skin_file', element('layout', $view));
		$this->view = element('view_skin_file', element('layout', $view));
	}

	/**
	 * 파일 다운로드 현황을 그래프 형식으로 페이지입니다
	 */
	public function graph($export = '')
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_cmall_itemdownload_graph';
		$this->load->event($eventname);

		$view = array();
		$view['view'] = array();

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before'] = Events::trigger('before', $eventname);

		$param =& $this->querystring;
		$datetype = $this->input->get('datetype', null, 'd');
		if ($datetype !== 'm' && $datetype !== 'y') {
			$datetype = 'd';
		}
		$start_date = $this->input->get('start_date') ? $this->input->get('start_date') : cdate('Y-m-01');
		$end_date = $this->input->get('end_date') ? $this->input->get('end_date') : cdate('Y-m-d');
		if ($datetype === 'y' OR $datetype === 'm') {
			$start_year = substr($start_date, 0, 4);
			$end_year = substr($end_date, 0, 4);
		}
		if ($datetype === 'm') {
			$start_month = substr($start_date, 5, 2);
			$end_month = substr($end_date, 5, 2);
			$start_year_month = $start_year * 12 + $start_month;
			$end_year_month = $end_year * 12 + $end_month;
		}

		$orderby = (strtolower($this->input->get('orderby')) === 'desc') ? 'desc' : 'asc';

		$result = $this->{$this->modelname}->get_file_download_count($datetype, $start_date, $end_date, $orderby);
		$sum_count = 0;
		$arr = array();
		$max = 0;

		if ($result && is_array($result)) {
			foreach ($result as $key => $value) {
				$s = element('day', $value);
				if ( ! isset($arr[$s])) {
					$arr[$s] = 0;
				}
				$arr[$s] += element('cnt', $value);

				if ($arr[$s] > $max) {
					$max = $arr[$s];
				}
				$sum_count += element('cnt', $value);
			}
		}

		$result = array();
		$i = 0;
		$save_count = -1;
		$tot_count = 0;

		if (count($arr)) {
			foreach ($arr as $key => $value) {
				$count = (int) $arr[$key];
				$result[$key]['count'] = $count;
				$i++;
				if ($save_count !== $count) {
					$no = $i;
					$save_count = $count;
				}
				$result[$key]['no'] = $no;

				$result[$key]['key'] = $key;
				$rate = ($count / $sum_count * 100);
				$result[$key]['rate'] = $rate;
				$s_rate = number_format($rate, 1);
				$result[$key]['s_rate'] = $s_rate;

				$bar = (int)($count / $max * 100);
				$result[$key]['bar'] = $bar;
			}
			$view['view']['max_value'] = $max;
			$view['view']['sum_count'] = $sum_count;
		}

		if ($datetype === 'y') {
			for ($i = $start_year; $i <= $end_year; $i++) {
				if( ! isset($result[$i])) $result[$i] = '';
			}
		} elseif ($datetype === 'm') {
			for ($i = $start_year_month; $i <= $end_year_month; $i++) {
				$year = floor($i / 12);
				if ($year * 12 == $i) $year--;
				$month = sprintf("%02d", ($i - ($year * 12)));
				$date = $year . '-' . $month;
				if( ! isset($result[$date])) $result[$date] = '';
			}
		} elseif ($datetype === 'd') {
			$date = $start_date;
			while ($date <= $end_date) {
				if( ! isset($result[$date])) $result[$date] = '';
				$date = cdate('Y-m-d', strtotime($date) + 86400);
			}
		}

		if ($orderby === 'desc') {
			krsort($result);
		} else {
			ksort($result);
		}

		$view['view']['list'] = $result;

		$view['view']['start_date'] = $start_date;
		$view['view']['end_date'] = $end_date;
		$view['view']['datetype'] = $datetype;

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before_layout'] = Events::trigger('before_layout', $eventname);

		if ($export === 'excel') {

			header('Content-type: application/vnd.ms-excel');
			header('Content-Disposition: attachment; filename=상품다운로드로그_' . cdate('Y_m_d') . '.xls');
			echo $this->load->view('admin/' . ADMIN_SKIN . '/' . $this->pagedir . '/graph_excel', $view, true);

		} else {
			/**
			 * 어드민 레이아웃을 정의합니다
			 */
			$layoutconfig = array('layout' => 'layout', 'skin' => 'graph');
			$view['layout'] = $this->managelayout->admin($layoutconfig, $this->cbconfig->get_device_view_type());
			$this->data = $view;
			$this->layout = element('layout_skin_file', element('layout', $view));
			$this->view = element('view_skin_file', element('layout', $view));
		}
	}

	/**
	 * 목록 페이지에서 선택삭제를 하는 경우 실행되는 메소드입니다
	 */
	public function listdelete()
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_cmall_itemdownload_listdelete';
		$this->load->event($eventname);

		// 이벤트가 존재하면 실행합니다
		Events::trigger('before', $eventname);

		/**
		 * 체크한 게시물의 삭제를 실행합니다
		 */
		if ($this->input->post('chk') && is_array($this->input->post('chk'))) {
			foreach ($this->input->post('chk') as $val) {
				if ($val) {
					$this->{$this->modelname}->delete($val);
				}
			}
		}

		// 이벤트가 존재하면 실행합니다
		Events::trigger('after', $eventname);

		/**
		 * 삭제가 끝난 후 목록페이지로 이동합니다
		 */
		$this->session->set_flashdata(
			'message',
			'정상적으로 삭제되었습니다'
		);
		$param =& $this->querystring;
		$redirecturl = admin_url($this->pagedir . '?' . $param->output());

		redirect($redirecturl);
	}

	/**
	 * 파일다운로드시 실행되는 함수입니다
	 */
	public function download($cde_id = 0)
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_cmall_itemdownload_download';
		$this->load->event($eventname);

		// 이벤트가 존재하면 실행합니다
		Events::trigger('before', $eventname);

		$cde_id = (int) $cde_id;
		if (empty($cde_id) OR $cde_id < 1) {
			show_404();
		}

		$file = $this->Cmall_item_detail_model->get_one($cde_id);

		if ( ! element('cde_id', $file)) {
			show_404();
		}

		// 이벤트가 존재하면 실행합니다
		Events::trigger('after', $eventname);

		$this->load->helper('download');

		$data = file_get_contents(config_item('uploads_dir') . '/cmallitemdetail/' . element('cde_filename', $file)); // Read the file's contents
		$name = element('cde_originname', $file);
		if ($name && $data) {
			force_download($name, $data);
		}
	}

	/**
	 * 오래된 상품다운로드로그삭제 페이지입니다
	 */
	public function cleanlog()
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_cmall_itemdownload_cleanlog';
		$this->load->event($eventname);

		$view = array();
		$view['view'] = array();

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before'] = Events::trigger('before', $eventname);

		/**
		 * Validation 라이브러리를 가져옵니다
		 */
		$this->load->library('form_validation');

		/**
		 * 전송된 데이터의 유효성을 체크합니다
		 */
		$config = array(
			array(
				'field' => 'day',
				'label' => '기간',
				'rules' => 'trim|required|numeric|is_natural',
			),
		);
		$this->form_validation->set_rules($config);

		/**
		 * 유효성 검사를 하지 않는 경우, 또는 유효성 검사에 실패한 경우입니다.
		 * 즉 글쓰기나 수정 페이지를 보고 있는 경우입니다
		 */
		if ($this->form_validation->run() === false) {

			// 이벤트가 존재하면 실행합니다
			$view['view']['event']['formrunfalse'] = Events::trigger('formrunfalse', $eventname);

		} else {
			/**
			 * 유효성 검사를 통과한 경우입니다.
			 * 즉 데이터의 insert 나 update 의 process 처리가 필요한 상황입니다
			 */

			// 이벤트가 존재하면 실행합니다
			$view['view']['event']['formruntrue'] = Events::trigger('formruntrue', $eventname);

			if ($this->input->post('criterion') && $this->input->post('day')) {
				$deletewhere = array(
					'cdo_datetime <=' => $this->input->post('criterion'),
				);
				$this->Cmall_download_log_model->delete_where($deletewhere);
				$view['view']['alert_message'] = '총 ' . number_format($this->input->post('log_count')) . ' 건의 ' . $this->input->post('day') . '일 이상된 상품다운로드로그가 모두 삭제되었습니다';
			} else {
				$criterion = cdate('Y-m-d H:i:s', ctimestamp() - $this->input->post('day') * 24 * 60 * 60);
				$countwhere = array(
					'cdo_datetime <=' => $criterion,
				);
				$log_count = $this->Cmall_download_log_model->count_by($countwhere);
				$view['view']['criterion'] = $criterion;
				$view['view']['day'] = $this->input->post('day');
				$view['view']['log_count'] = $log_count;
				if ($log_count > 0) {
					$view['view']['msg'] = '총 ' . number_format($log_count) . ' 건의 ' . $this->input->post('day') . '일 이상된 상품다운로드로그가 발견되었습니다. 이를 모두 삭제하시겠습니까?';
				} else {
					$view['view']['alert_message'] = $this->input->post('day') . '일 이상된 상품다운로드로그가 발견되지 않았습니다';
				}
			}
		}

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before_layout'] = Events::trigger('before_layout', $eventname);

		/**
		 * 어드민 레이아웃을 정의합니다
		 */
		$layoutconfig = array('layout' => 'layout', 'skin' => 'cleanlog');
		$view['layout'] = $this->managelayout->admin($layoutconfig, $this->cbconfig->get_device_view_type());
		$this->data = $view;
		$this->layout = element('layout_skin_file', element('layout', $view));
		$this->view = element('view_skin_file', element('layout', $view));
	}
}
