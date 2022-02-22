<?php
session_start();
//session_unset();
?>
<html>

<head>
    <title>TODO List</title>
    <link href="styles.css" type="text/css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div class="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
            <input id="new-task" type="text" name="input">
            <button id="add">Add</button>
            <button hidden id='update'>Update</button>
            <input id="edit-task" type="hidden" value="">
        </p>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
        </ul>
        <h3>Completed</h3>
        <ul id="completed-tasks">

        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>