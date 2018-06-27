$("document").ready(function() {

    var animals = ["unicorn", "goat", "dogs", "rabbit", "cats"];
    //made an array

    for (var i = 0; i < animals.length; i++) {
        var button = $("<button>");
        button.attr("class", "animalButton");
        button.attr('data-type', animals[i]);
        button.data("topic", animals[i]);
        button.append(animals[i]);
        $("#buttonContainer").append(button);
        console.log(animals[i])
    }
    //made a for loop (making buttons)
    //made html object and assigned a variable
    //.attr added a class to the button
    //data adds variable inside button
    //line 8 is text for button
    //line 9 grabbing the div to say where we want button

    //sets up click event
    <
    script type = "text/javascript" > < /script>

    $(document).on("click", "button", function() {
        let searchParameter = $(this).attr('data-type');
        //holds the serer api url
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchParameter;
        //https://developers.giphy.com/docs/

        //creates an ajax request using the get method
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        //callback function receiver
        // .done(function(response) {
        //     console.log(response)
        //         //create variable of image url, it's a strings
        //     var imageUrl = response.data.image_original_url;

        //     //use jquery to create HTML element o ftype image, img
        //     var catImage = $("<img>");

        //     //set the source and alt of our image, to prev define url and cat image respectively
        //     catImage.attr("src", imageUrl);
        //     catImage.attr("alt", "cat image");

        //     //prepend the image to our images div (that's the div with an id of images)
        //     $("#images").prepend(catImage);
    });
});

<
script type = "text/javascript" >
    $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.

        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    }); < /script>
});