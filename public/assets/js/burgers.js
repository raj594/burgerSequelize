// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var customer = $(".customer").val().trim();

    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id,
      data: customer
    }).then(
      function(result) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    event.stopPropagation();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: newBurger
    }).then(
      function(result) {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});