<?php
session_start();
if ($_REQUEST['action']=='deletetask') {
    $id=$_REQUEST['data'];
    foreach($_SESSION['cart'] as $key=>$val){
        if($_SESSION['cart'][$key]['id']==$id){
            array_splice($_SESSION['cart'],$key,1);
            //unset($_SESSION['cart'][$key]);
            break;
        }
        
    }
    echo json_encode($_SESSION['cart']);
}
?>