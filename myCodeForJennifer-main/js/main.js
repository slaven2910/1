console.log("it works")

$(document).ready(function () {
    $(".submit").click(function (event) {
        event.preventDefault()
        console.log("Clicked a button")

        var email = $(".email").val();
        var subject = $(".subject").val();
        var message = $(".message").val();

        
    })
}) 
