$("document").ready(function() {


    //made an array

    // for (var i = 0; i < animals.length; i++) {
    //     var button = $("<button>");
    //     button.attr("class", "animalsButton");
    //     button.attr('data-type', animals[i]);
    //     button.data("topic", animals[i]);
    //     button.append(animals[i]);
    //     $("#buttonContainer").append(button);
    //     // console.log(animals[i]);
    // }

    // STEP 1 
    // Make render buttons function
    // Loop through animals array and make a 
    // button for each one
    // Then print the button to the html
    //<button data-animals="cats">cats</button>


    // STEP 2
    // Click event for animal buttons
    // Grab the animal button data
    // plug that data into the AJAX API call
    // print the giphys from the AJAX call to the html

    // STEP 3
    // make submit click event for making new animal button
    // take the user input and add it to the array of animals
    // Then run the render buttons function again

    var animals = ["unicorn", "goat", "cat", "lizard", "cats"];

    function renderButtons() {
        $("#animalButtonsDiv").html("");
        for (var i = 0; i < animals.length; i++) {
            var newButtonDiv = `
                <button data-animals=${animals[i]} class="animalButton">
                    ${animals[i]}
                </button>`;

            $("#animalButtonsDiv").append(newButtonDiv);
        }
    }
    renderButtons();

    $(document).on("click", ".animalButton", function() {
        var searchParameter = $(this).attr("data-animals");
        // console.log("searchParameter: " + searchParameter);

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=l191LgYnB9k4bz4tWIJs1suXWF1W1Ezy&limit=10&q=" + searchParameter;
        $("#images").html("");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(JSON.stringify(response));
            for (let i = 0; i < response.data.length; i++) {
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;

                var newGifImage = `
                <div class="col-md-4">
                    <img src=${still} data-still=${still} data-animated=${animated} data-state="still" class="animalGIf" />
                </div>
                `;

                $("#images").append(newGifImage);

            }
        });
    })

    $(document).on("click", "#submit", function(event) {
        event.preventDefault()
        var userInput = $("#user-input").val();
        animals.push(userInput);
        renderButtons();
    })

    $(document).on("click", ".animalGIf", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animated"))
            $(this).attr("data-state", "animated")
        } else if (state === "animated") {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        }
    })
















    //     $("button").on("click", function(event) {
    //         event.preventDefault();

    //         var searchParameter = $(this).hasClass("animalsButton") ? $(this).text().trim() : $("#user-input").val();
    //         var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=l191LgYnB9k4bz4tWIJs1suXWF1W1Ezy&limit=10&q=" + searchParameter;
    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         }).done(function(response) {
    //             // console.log(response);
    //             for (let i = 0; i < response.data.length; i++) {
    //               var source = response.data[i].images.downsized_large.url;
    //                 var newImage = "<img class='gif' height='200px' src='" + source + "' />";

    //                 $("#images .row").eq(0).prepend(newImage);
    //                 $.ajax({ url: queryURL, method: "GET" })
    //                     .done(function(response) {
    //                         (response.data[0].rating);
    //                         $("body").append("<p>Rating: " + response.data[0].rating + "<p>");

    //                     })
    //                 $(".gif").on("click", function() {
    //                     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //                     var state = $(this).attr("data-state");
    //                     // If the clicked image's state is still, update its src attribute to what its data-animate value is.

    //                     // Then, set the image's data-state to animate
    //                     // Else set src to the data-still value
    //                     if (state === "still") {
    //                         $(this).attr("src", $(this).attr("data-animate"));
    //                         $(this).attr("data-state", "animate");
    //                     } else {
    //                         $(this).attr("src", $(this).attr("data-still"));
    //                         $(this).attr("data-state", "still");
    //                     }

    //                 })
    //             }
    //             // var animal = $("#user-input").val();

    //             // console.log($("button[data-type=" + searchParameter + "]").length);
    //             if ($("button[data-type=" + searchParameter + "]").length == 0) {
    //                 var button = $("<button>");
    //                 button.attr("class", "animalButton");
    //                 button.attr('data-type', searchParameter);
    //                 button.data("topic", searchParameter);
    //                 button.append(searchParameter);
    //                 $("#buttonContainer").append(button);
    //             }
    //             // $.ajax({ url: queryURL, method: 'GET' })
    //             //     .done(function(response) {
    //             //             $("body).append(" < p > Rating: "+response.data[0].rating+" < /p>");
    //             // })

    //         });
    //     });
});