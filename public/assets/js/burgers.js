///from burgers this is the models/burgers file
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

    // DEVOUR A BURGER
    $(".devour-burger").on("click", function (event) {
      event.preventDefault();

        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        var myAudio = document.getElementById("myAudio"); 

        function playAudio() { 
          x.play(myAudio); 
        } 
        play();

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
              type: "PUT",
              data: newDevourState
            }).then(
              function () {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
              });
    });


// BUILD A NEW BURGER
    $(".add-burger").on("submit", function (event) {
      event.preventDefault();

      var newBurger = {
        burger_name: $("#new-burger-name").val(),
        devoured: $("devoured-status").val()
      }

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          });
    });

    // DELETE Burger.
    $(".delete-burger").on("click", function (event) {
           event.preventDefault();

          var id = $(this).data("id");

          // Send the DELETE request.
          $.ajax("/api/burgers/" + id, {
            type: "DELETE"
          }).then(
            function () {
              console.log("deleted burger", id);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });
});


