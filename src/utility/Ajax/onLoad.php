<?php
session_start();

/**
 * load previous task
 */
if ($_REQUEST['action'] == 'showprevious') {
    if (isset($_SESSION['cart'])) {
        echo json_encode($_SESSION['cart']);
    }
}
