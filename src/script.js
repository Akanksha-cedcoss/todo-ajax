$(document).ready(function () {
  $.ajax({
    type: "POST",
    url: "Ajax/onLoad.php",
    data: { action: "showprevious" },
    dataType: "JSON",
    success: function (response) {
      $.fn.displayTasks(response);
    },
  });

  $(document).on("click", "#add", function (e) {
    e.preventDefault();
    $.ajax({
      url: "Ajax/addTask.php",
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

  $.fn.displayTasks = function (response) {
    //var size = Object.keys(response).length;
    let incomplete = "";
    let complete = "";
    for (const key in response) {
      let current = response[key];
      if (current.status == "pending") {
        incomplete +=
          "<li>" +
          '<input id="check" type="checkbox" value=' +
          current.id +
          ">" +
          "<label>" +
          current.name +
          "</label>" +
          '<input type="text"><button id="edit" class="edit" value=' +
          current.id +
          '>Edit</button><button class="delete" id="delete" value=' +
          current.id +
          ">Delete</button></li>";
      } else {
        complete +=
          '<li><input type="checkbox" id="check" value=' +
          current.id +
          "><label>" +
          current.name +
          '</label><input type="text"><button class="edit" id="edit" value=' +
          current.id +
          '>Edit</button><button class="delete" id="delete" value=' +
          current.id +
          ">Delete</button></li>";
      }
    }
    $("#incomplete-tasks").html(incomplete);
    $("#completed-tasks").html(complete);
  };
  $(document).on("click", "#delete", function () {
    var id = $(this).val();
    $.ajax({
      type: "POST",
      url: "Ajax/deleteTask.php",
      data: { data: id, action: "deletetask" },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
      },
    });
  });
  $(document).on("click", "#edit", function () {
    var id = $(this).val();
    console.log(id);
    $.ajax({
      type: "POST",
      url: "Ajax/editTask.php",
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
  $(document).on("click", "#update", function () {
    let id = $("#edit-task").val();
    let newName = $("#new-task").val();
    $.ajax({
      type: "POST",
      url: "Ajax/updateTask.php",
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
  $(document).on("change", "#check", function () {
    let id = $("#check").val();
    $.ajax({
      type: "POST",
      url: "Ajax/updateStatus.php",
      data: { data: id, action: "updatestatus" },
      dataType: "JSON",
      success: function (response) {
        $.fn.displayTasks(response);
      },
    });
  });

  //end of file
});
