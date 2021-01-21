<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Cbversion class
 *
 * Copyright (c) CIBoard <www.ciboard.co.kr>
 *
 * @author CIBoard (develop@ciboard.co.kr)
 */

/**
 * 관리자>환경설정>버전정보 controller 입니다.
 */
class Cbversion extends CB_Controller
{

	/**
	 * 관리자 페이지 상의 현재 디렉토리입니다
	 * 페이지 이동시 필요한 정보입니다
	 */
	public $pagedir = 'config/cbversion';

	/**
	 * 모델을 로딩합니다
	 */
	protected $models = array();

	/**
	 * 이 컨트롤러의 메인 모델 이름입니다
	 */
	protected $modelname = '';

	/**
	 * 헬퍼를 로딩합니다
	 */
	protected $helpers = array('form', 'array', 'file');

	function __construct()
	{
		parent::__construct();

		/**
		 * 라이브러리를 로딩합니다
		 */
		$this->load->library(array('requests'));
	}

	/**
	 * 버전정보 페이지입니다
	 */
	public function index()
	{
		// 이벤트 라이브러리를 로딩합니다
		$eventname = 'event_admin_config_cbversion_index';
		$this->load->event($eventname);

		$view = array();
		$view['view'] = array();

		// 이벤트가 존재하면 실행합니다
		$view['view']['event']['before'] = Events::trigger('before', $eventname);

		Requests::register_autoloader();
		$headers = array('Accept' => 'application/json');
		$postdata = array('requesturl' => current_full_url(), 'package' => CB_PACKAGE, 'version' => CB_VERSION);

		try {
			$request = Requests::post(config_item('ciboard_check_latest_version'), $headers, $postdata);
			$view['view']['latest_versions'] = json_decode($request->body, true);
			if (strtolower(CB_PACKAGE) === 'pro') {
				$view['view']['latest_version_name'] = $view['view']['latest_versions']['pro_version'];
				$view['view']['latest_download_url'] = $view['view']['latest_versions']['pro_downloadurl'];
			} else {
				$view['view']['latest_version_name'] = $view['view']['latest_versions']['lite_version'];
				$view['view']['latest_download_url'] = $view['view']['latest_versions']['lite_downloadurl'];
			}
		} catch (Exception $e) {
			log_message('error', 'Caught exception: '.$e->getMessage());
		}

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
}
