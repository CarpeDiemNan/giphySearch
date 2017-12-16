// ******************************************************************
// ******************************************************************
//      VARIABLES
topics = ["Dog", "Pony", "Puppy", "Cat", "Fish", "Bird"];
var searchItem = "pony";
var toggle = "still";

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

			// Retrieving the still and video URL for the image
			  
          	var imgURL = giphyData.data[i].images.original_still.url;
          	// Creating an element to hold the still image
          	var stillImage = $("<img>").attr("src", imgURL);
          	 
           
          	var imgVideoURL = giphyData.data[i].images.downsized.url;
          	// Creating an element to hold the video image
          	var videoImage = $("<img>").attr("src", imgVideoURL);
          	

          	// Appending the image
          	pictureDiv.append(stillImage);

          	 // Putting the entire movie above the previous movies
          	$("#imageArea").prepend(pictureDiv);  

          	// toggle between still and video on image click
          	$(document).on('click', "#imageArea", function(){
          		// $("#imageArea").empty();
       
		    if(toggle == "still"){
		    	toggle = "video";  	    	 
		    	 
		    	pictureDiv.append(videoImage);
		    	$("#imageArea").html(pictureDiv);
		    }
		    else {
		    	toggle = "still";
		    	 pictureDiv.append(stillImage);
		    	$("#imageArea").html(pictureDiv);	    	 
		    }
})           
			}
		})
}
//      MAIN PROCESSES
// runQuery(queryURLBase);
// POPULATE initial buttons
popButtons();
// LISTEN for button clicks
$(document).on('click', ".btn", function(){
     

    searchItem = this.id;    
    queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;
      
    runQuery(queryURLBase);
     
})
$(document).on('click', "#imageArea", function(){
       // toggle between still and video
		    if(toggle == "still"){
		    	toggle = "video";
		    	alert("video");  // SCOPE PROBLEM
		    	// var imgVideoURL = giphyData.data[i].images.downsized.url;
		    	// var image = $("<img>").attr("src", imgVideoURL);
		    	// pictureDiv.append(image);
		    	// $("#imageArea").prepend(pictureDiv);

		    }
		    else {
		    	toggle = "still";
		    	alert("still");
		    	// var imgURL = giphyData.data[i].images.original_still.url;
		    	// var image = $("<img>").attr("src", imgURL);
		    	// pictureDiv.append(image);
		    	// $("#imageArea").prepend(pictureDiv);
		    }
})


		// // toggle between still and video
		//     if(toggle == "still"){
		//     	toggle = "video";
		//     }
		//     else {
		//     	toggle = "still";
		//     }

  
			// Retrieving the still or video URL for the image
			// if(toggle == "still"){ 
   //        		var imgURL = giphyData.data[i].images.original_still.url;
   //        	}
   //        	else {
   //        		var imgURL = giphyData.data[i].images.downsized.url;
   //        	}