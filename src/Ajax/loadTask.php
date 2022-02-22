<?php 
session_start();
function loadIncompleteTasks(){
    $html = "";
    foreach($_SESSION['cart'] as $key=>$val){
      $html +='<li><input type="checkbox"><label>'+$val['name'] +'</label><input type="text"><button class="edit" value=' +
      $_SESSION['cart'][$key]['id'] +
        '>Edit</button><button class="delete" id="delete" value=' +
        $_SESSION['cart'][$key]['id'] +
        ">Delete</button></li>";

    }
    echo json_encode('yes'.$html);
}
