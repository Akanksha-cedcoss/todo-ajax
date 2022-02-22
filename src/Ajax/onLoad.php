<?php
session_start();
if ($_REQUEST['action'] == 'showprevious') {
    if (isset($_SESSION['cart'])) {
        echo json_encode($_SESSION['cart']);
    }
}
