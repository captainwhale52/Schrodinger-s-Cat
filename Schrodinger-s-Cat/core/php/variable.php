<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    ob_start();
    session_start();

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            create();
            break;
        case 'GET':
			      //read();
            break;
        case 'PUT':
            create();
            break;
        case 'DELETE':
            //delete();
            break;
    }
    
    function create() {
        $result = array();
        $data = json_decode(file_get_contents('php://input'));
        $params = null;
        if ($data != null) {
            $params = array(
                "name" => $data->{'name'},
                "value" => $data->{'value'},
            );
        } else {
            $params = array(
                "name" => $_GET['name'],
                "value" => $_GET['value'],
            );
        }
        $_SESSION[$params['name']] = $params['value'];
        $el = array('name' => $params['name'], 'value' => $_SESSION[$params['name']]);
        array_push($result, $el);
        echo json_encode($result);
    }
?>