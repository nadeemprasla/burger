function validateForm() {
    var formUserInput = document.forms["inputForm"]["newBurger"].value;
    if (formUserInput == "") {
        alert("Enter Burger name");
        return false;
    }
}
$(function() {
    $(".devouredBtn").on("click", (event) => {
        var id = event.target.dataset.id;
        var devoured = {
            devoured: 1
        };
        $.ajax("api/burger/" + id, {
            type: "PUT",
            data: devoured
        }).then(() => {
            console.log("You have eaten a burger")
            location.reload();
        })


    })
    $(".eatenBtn").on("click", (event) => {
        var id = event.target.dataset.id;
        var devoured = {
            devoured: 0
        };
        $.ajax("api/burger/" + id, {
            type: "PUT",
            data: devoured
        }).then(() => {
            console.log("You have thrown up a burger")
            location.reload();
        })
    })
    $(".deleteBtn").on("click", (event) => {
        var id = event.target.dataset.id;
        $.ajax("/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("You have deleted a burger")
            location.reload();
        })
    })
})