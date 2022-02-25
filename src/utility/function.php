<?php
namespace App;
require_once("class/task.php");

/**
 * get task details
 *
 * @param Task $task
 * @return array
 */
function getTask(Task $task)
{
    return [
        "id" => $task->getId(),
        "name" => $task->getName(),
        "status" => $task->getStatus()
    ];
}
