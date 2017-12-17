// ******************************************************************
// ******************************************************************
//      VARIABLES
topics = ["Dog", "Pony", "Puppy", "Cat", "Fish", "Bird"];
var searchItem = "pony";
var toggle = "still";
		var imgArray = [];	 
		var searchTerm = {
			stillImage: "",
			videoImage: "",
			rating: "",
			imageNumber: -1    // to find right image for toggling
		};

		 
					 


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
			 
			$("#imageArea").empty();

			for(var i = 0; i < 10; i++){
			console.log(giphyData);	
			 

			 // Creating a div to hold the animal pictures
          	var pictureDiv = $("<div class='pictures'>");

			// store the rating data
			searchTerm.rating = giphyData.data[i].rating;		 

			// create element to have rating displayed
			var pOne = $("<p>").text("Rating: " + searchTerm.rating);

			// displaying the rating
			pictureDiv.append(pOne);

			// Retrieving the still image
			  
          	searchTerm.stillImage = giphyData.data[i].images.original_still.url;
          	 
          	// Creating an element to hold image
          	var Image = $("<img>").attr("src", searchTerm.stillImage);

          	// Retrieving video image to be used on image click()
            searchTerm.videoImage = giphyData.data[i].images.downsized.url;

            searchTerm.imageNumber = i;

            // PUSH new searchTerm object into imgArray

            imgArray.push(searchTerm);      
             


          	 
           
          	// Appending the image
          	pictureDiv.append(Image);

          	 // Putting image on page
          	$("#imageArea").prepend(pictureDiv);  

          	 
			}
		})
}
//      MAIN PROCESSES
// send group of original buttons to page
popButtons();
// LISTEN for button clicks
$(document).on('click', ".btn", function(){     
	// this.id will tell which button was pushed
    searchItem = this.id;    
    queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;
      
    runQuery(queryURLBase);
     
})
// LISTEN for newly entered search
$(document).on('onkeydown', ".form-control", function(){
	var searchItem = $("#search").val();
	queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;
	 runQuery(queryURLBase);
});


$(document).on('click', "#imageArea", function(){
       // toggle between still and video
		    if(toggle == "still"){
		    	toggle = "video";

		    	// PULL URL out of page		    	
		    	var img = $("<img>").attr("src").val();
		    	// FIND the imgArray [index] of the searchTerm object of the current still image
		    	var index = imageArray.indexOf(img);
		    	// THEN send the video image of imgArray [index] to the page.
		    	pictureDiv.append(imageArray[index].videoImage);

		    }
		    else {
		    	toggle = "still";
		    	alert("still");
		    	// var imgURL = giphyData.data[i].images.original_still.url;
		    	// var image = $("<img>").attr("src", imgURL);
		    	// pictureDiv.append(image);
		    	// $("#imageArea").prepend(pictureDiv);
		    }
});


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

   // Put still image and video in an object, then push to imageArray
            // var obj = {still: stillImage, video: videoImage};
            // imageArray.push(obj);
            // console.log("just pushed to imageArray: " + imageArray[i].still + imageArray[i.video]);