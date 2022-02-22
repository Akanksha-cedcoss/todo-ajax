<?php
session_start();
if ($_REQUEST['action'] == 'addtask') {
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = array();
        $_SESSION['total'] = 0;
    }
    array_push($_SESSION['cart'], ['id' => $_SESSION['total'], 'name' => $_REQUEST['data'], 'status' => 'pending']);
    $_SESSION['total']+=1;
    echo json_encode($_SESSION['cart']);
}
