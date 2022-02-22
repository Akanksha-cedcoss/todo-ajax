<?php
session_start();
if ($_REQUEST['action'] == 'updatetask') {
    $id = $_REQUEST['data'];
    $name = $_REQUEST['name'];
    foreach ($_SESSION['cart'] as $key => $val) {
        if ($_SESSION['cart'][$key]['id'] == $id) {
            $_SESSION['cart'][$key]['name'] = $name;
            break;
        }
    }
    echo json_encode($_SESSION['cart']);
}
?>