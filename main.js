$(document).ready(function() {
  $(".alert-danger").hide();

  $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    
    var newWord = $("#newWord").val().trim();
    var isDuplicate = false;
    $("td.word-td").each(function() {
      if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate) {
      $(".alert-danger").slideDown();
      return;
    }

    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var deleteTd = $("<td>").append(deleteBtn);
    var checkBox = $("<input type='checkbox' id='input'>");
    deleteTd.append(checkBox);

    newRow.append(wordTd).append(deleteTd);
    $("tbody").append(newRow);

    $("#newWord").val("").focus();
  });

  $("table").on("click", ".btn-danger", function() {
    if($("tr").length > 1) {
      $(this).parent().parent().remove();  
    }
    
  });

  $("#newWord").on("keydown", function() {
    $(".alert-danger").fadeOut(1500);
  });

  $("#input").on("click", function() {
    var check = $(this).parent();
    $(check).toggleClass("stroked");
  });

});