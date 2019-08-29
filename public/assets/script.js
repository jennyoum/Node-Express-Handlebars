$(function() {
    var newBurger;
    $(".submit").on("click", function(event) {
      var id = $(this).data("id");
     newBurger = $(this).data("newBurger");
  
      var newBurgerState = {
        devoured: newState
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed state to", newState);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var addBurger = {
        name: $("#ca").val(),
        devoured: $("[name=devoured]:checked").val()
      };
      console.log(addBurger);

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a new Burger");
          location.reload();
        }
      );
    });

  });
  