<?php
namespace App;
session_start();

/**
 * Task class
 */
class Task
{
    private int $id;
    public string $name;
    private string $status;

    /**
     * Task class constructor
     *
     * @param integer $id
     * @param string $name
     */
    public function __construct(int $id, string $name)
    {
        $this->id = $id;
        $this->name = $name;
        $this->status = "pending";
    }

    /**
     * getter function
     *
     * @return void
     */
    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getStatus()
    {
        return $this->status;
    }

}
