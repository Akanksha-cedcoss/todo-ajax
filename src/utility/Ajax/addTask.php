<?php
namespace App;
require_once("../class/task.php");
require_once("../function.php");

/**
 * add a new task
 */
if ($_REQUEST['action'] == 'addtask') {
    if(!isset($_SESSION['cart'])){
        $_SESSION['total'] = 0;
        $_SESSION['cart'] = array();
    }
    $task = new Task($_SESSION['total'] , $_REQUEST['data']);
    array_push($_SESSION['cart'] , getTask($task));
    $_SESSION['total']+=1;
    echo json_encode($_SESSION['cart']);
}
