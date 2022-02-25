$(document).ready(function () {
  /**
   * request for previously added tasks
   */
  $.ajax({
    type: "POST",
    url: "utility/Ajax/onLoad.php",
    data: { action: "showprevious" },
    dataType: "JSON",
    success: function (response) {
      $.fn.displayTasks(response);
    },
  });

  /**
   * Add new task
   */
  $(document).on("click", "#add", function (e) {
    e.preventDefault();
    $.ajax({
      url: "utility/Ajax/addTask.php",
      method: "POST",
      data: {
        data: $("#new-task").val(),
        action: "addtask",
      },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
        $("#new-task").val("");
      },
    });
  });

  /**
   * display tasks as completed or imcomplete
   * @param {*} response 
   */
  $.fn.displayTasks = function (response) {
    let incomplete = "";
    let complete = "";

    function myfunc(task)
    {
      if (task.status == "pending") {
        incomplete +=
          "<li>" +
          '<input id="check" type="checkbox" value=' +
          task.id +
          ">" +
          "<label>" +
          task.name +
          "</label>" +
          '<input type="text"><button id="edit" class="edit" value=' +
          task.id +
          '>Edit</button><button class="delete" id="delete" value=' +
          task.id +
          ">Delete</button></li>";
      }
      else
      {
        complete +=
          '<li><input type="checkbox" id="check" value=' +
          task.id +
          "><label>" +
          task.name +
          '</label><input type="text"><button class="edit" id="edit" value=' +
          task.id +
          '>Edit</button><button class="delete" id="delete" value=' +
          task.id +
          ">Delete</button></li>";
      }
    }
    response.forEach(myfunc);
    $("#incomplete-tasks").html(incomplete);
    $("#completed-tasks").html(complete);
  };

  /**
   * delete task
   */
  $(document).on("click", "#delete", function () {
    var id = $(this).val();
    $.ajax({
      type: "POST",
      url: "utility/Ajax/deleteTask.php",
      data: { data: id, action: "deletetask" },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
      },
    });
  });

  /**
   * edit task name
   */
  $(document).on("click", "#edit", function () {
    var id = $(this).val();
    $.ajax({
      type: "POST",
      url: "utility/Ajax/editTask.php",
      data: { data: id, action: "edittask" },
      dataType: "JSON",
      success: function (response) {
        $("#new-task").val(response["name"]);
        $("#edit-task").val(response["id"]);
        $("#add").toggle();
        $("#update").toggle();
      },
    });
  });

  /**
   * update task name
   */
  $(document).on("click", "#update", function () {
    let id = $("#edit-task").val();

    let newName = $("#new-task").val();
    $.ajax({
      type: "POST",
      url: "utility/Ajax/updateTask.php",
      data: { data: id, name: newName, action: "updatetask" },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
        $("#new-task").val("");
        $("#edit-task").val("");
        $("#add").toggle();
        $("#update").toggle();
      },
    });
  });

  /**
   * change task status
   */
  $(document).on("change", "#check", function () {
    let id = $(this).val();
    $.ajax({
      type: "POST",
      url: "utility/Ajax/updateStatus.php",
      data: { data: id, action: "updatestatus" },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
      },
    });
  });

  //end of file
});
