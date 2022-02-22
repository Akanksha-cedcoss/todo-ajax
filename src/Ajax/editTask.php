<?php
session_start();
if ($_REQUEST['action'] == 'edittask') {
    $id = $_REQUEST['data'];
    foreach ($_SESSION['cart'] as $key => $val) {
        if ($_SESSION['cart'][$key]['id'] == $id) {
            echo json_encode($_SESSION['cart'][$key]);
            break;
        }
    }
}
?>