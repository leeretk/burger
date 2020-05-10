///from burgers this is the models/burgers file
// Make sure we wait to attach our handlers until the DOM is fully loaded.


// BUILD A NEW BURGER
$("add-burger").on("submit", function(event) {
  event.preventDefault();
  
  var newBurger = {
        burger_name: $("#new-burger-name").val(),
        devoured: $("[burger_name=devoured]:checked").val()
};
  

$(function() {
    $("devour-burger").on("click", function(event) {
      // event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: newDevour
};


// Send the PUT request.
$.ajax("/api/burger/" + id, {
    type: "PUT",
     data: newDevourState
}).then(
  function() {
    console.log("changed devour to", newDevour);
      // Reload the page to get the updated list
      location.reload();
        }
      );
});




// Send the POST request.
$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
    }).then(
      function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
  });
});




// DELETE Burger.
    $(".delete-burger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });

