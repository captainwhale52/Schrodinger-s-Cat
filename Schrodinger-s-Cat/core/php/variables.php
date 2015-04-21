<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    ob_start();
    session_start();

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            add();
            break;
        case 'GET':
			      read();
            break;
        case 'PUT':
            add();
            break;
        case 'DELETE':
            //delete();
            break;
    }
    
    function read() {
        $result = array();
        $data = json_decode(file_get_contents('php://input'));
        $params = null;
        if ($data != null) {
            $params = array(
                "names" => $data->{'names'},
            );
        } else {
            $params = array(
                "names" => $_GET['names'],
            );
        }
        foreach ($params["names"] as &$name) {
            if (isset($_SESSION[$name])) {
                $el = array('name' => $name, 'value' => $_SESSION[$name]);
            } else {
                $el = array('name' => $name, 'value' => "");
            }
            array_push($result, $el);
        }
        echo json_encode($result);
    }
?>