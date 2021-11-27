<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: road
 * Date: 2019-12-03
 * Time: 오전 8:43
 */

class Summernote extends CB_Controller {


    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/

     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $this->load->view('summernote/index');
    }
    public function upload(){


        # 매달 해당월 로 디렉토리 생성

        $mydir = 'uploads/summernote/'.date('Ym'); // 저장경로는 서버환경에따라 설정해줍니다. 하단 스크립트를 통해 디렉토리가 자동으 생성됩니다.
        if(!is_dir($mydir)) {
            if(@mkdir($mydir, 0777)) {
                @chmod($mydir, 0777);
            }
        }

        // 파일 업로드 기본설정
        $config['upload_path']          = $mydir;
        $config['allowed_types']        = 'gif|jpg|png';//이미지 확장 자 제한
        $config['max_size']             = 50960; //이미지 용량 제한
        $config['max_width']            = 0;
        $config['max_height']           = 0;
        $config['encrypt_name']         = true;
        $log_field = array();

        $this->load->library('upload', $config);

        // 실제 업로드할 파일이 있는지 확인
        if($this->upload->do_upload('file'))
        {
            $data = array('upload_data' => $this->upload->data());
            $save_url = ''.$data['upload_data']['file_name'];

            // 이미지 리사이징 가로 900px 이상만 리사이징됨
            $img_conf['image_library']      = 'gd2';
            $img_conf['source_image']       = $data['upload_data']['full_path'];
            $img_conf['create_thumb']       = TRUE;
            $img_conf['quality']            = '90%';
            $img_conf['maintain_ratio']     = TRUE;
            $img_conf['new_image']          = $mydir;
            if($data['upload_data']['image_width'] > 2048) { //이미지 가로 폭 제한
                $img_conf['width']              = 2048;
                $img_conf['master_dim']         = 'width';
            }
            $this->load->library('image_lib', $img_conf);
            if($this->image_lib->resize()) {
                # URL 다시 설정
                $refile_arr = explode('.', $data['upload_data']['file_name']);
                $refile = $refile_arr[0].'_thumb.'.$refile_arr[1];
                // 위에서 지정한 경로와 동일하게 설정
                $save_url = site_url().'/uploads/summernote/'.date('Ym').'/'.$refile;
                unlink($data['upload_data']['full_path']);
            }
            $json_data['success']=true;
            $json_data['save_url']=$save_url;
            header('Content-type: application/json');
            echo json_encode($json_data);
        } else {
            $error_message = $this->upload->display_errors();
            echo json_encode(array('success' => false, 'error' => strip_tags($error_message)));
        }
    }

}