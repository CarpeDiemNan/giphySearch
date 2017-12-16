// ******************************************************************
// ******************************************************************
//      VARIABLES
topics = ["Dog", "Pony", "Puppy", "Cat", "Fish", "Bird"];
var searchItem = "pony";

// var queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&q=funny+animals&limit=10&offset=0&rating=G&lang=en";
var queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;

// ********************************************************************
// ********************************************************************
//      FUNCTIONS

// READ thru array, send a button to page for each element
function popButtons(){
    for(var i = 0; i < topics.length; i++){
        
        var wellSection = $('<button>');
			wellSection.addClass("btn btn-default");
			wellSection.attr('id', topics[i]);
            wellSection.text(topics[i]);            
            console.log(topics[i]);
            
			$("#buttonArea").append(wellSection); 
    }
}

function runQuery(queryURL){
	$.ajax({url: queryURL, method: "GET"})
		.done(function(giphyData) {
			// clear the wells from the previous run
			// $("#wellSection").empty();
			$("#imageArea").empty();
			
			for(var i = 0; i < 10; i++){
			console.log(giphyData);	

			 // Creating a div to hold the animal pictures
          	var pictureDiv = $("<div class='pictures'>");

			// store the rating data
			var rating = giphyData.data[i].rating;

			// create element to have rating displayed
			var pOne = $("<p>").text("Rating: " + rating);

			// displaying the rating
			pictureDiv.append(pOne);

			// Retrieving the URL for the image
          	var imgURL = giphyData.data[i].images.original_still.url;

          	// Creating an element to hold the image
          	var image = $("<img>").attr("src", imgURL);

          	// Appending the image
          	pictureDiv.append(image);

          	 // Putting the entire movie above the previous movies
          	$("#imageArea").prepend(pictureDiv);             
			}
		})
}
//      MAIN PROCESSES
// runQuery(queryURLBase);
// POPULATE initial buttons
popButtons();
// LISTEN for button clicks
$(document).on('click', ".btn", function(){
    console.log("This is a " + this.id);
    searchItem = this.id;    
    queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;
     console.log(queryURLBase);
    runQuery(queryURLBase);
    // return false;
})



 // attach content to appropriate well
			// $("#articleWell-" + i).append(NYTData.response.docs[i].headline.main)
			// $("#articleWell-" + i).append(NYTData.response.docs[i].pub_date);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].section_name);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].web_url);        