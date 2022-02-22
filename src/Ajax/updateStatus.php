<?php
session_start();
if ($_REQUEST['action'] == 'updatestatus') {
    $id = $_REQUEST['data'];
    foreach ($_SESSION['cart'] as $key => $val) {
        if ($_SESSION['cart'][$key]['id'] == $id) {
            $_SESSION['cart'][$key]['status']=($_SESSION['cart'][$key]['status']=='pending')?'completed':'pending';
            break;
        }
    }
    echo json_encode($_SESSION['cart']);
}
?>