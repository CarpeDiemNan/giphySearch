//      VARIABLES
topics = ["Dog", "Pony", "Puppy", "Cat", "Fish", "Bird"];
var searchItem = "pony";
// var queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&q=funny+animals&limit=10&offset=0&rating=G&lang=en";
var queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&limit=10&offset=0&rating=G&lang=en&q="+ searchItem;
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
            
			// attach content to appropriate well
			// $("#articleWell-" + i).append(NYTData.response.docs[i].headline.main)
			// $("#articleWell-" + i).append(NYTData.response.docs[i].pub_date);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].section_name);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].web_url);        
    }
}




function runQuery(queryURL){
	$.ajax({url: queryURL, method: "GET"})
		.done(function(giphyData) {
			// clear the wells from the previous run
			// $("#wellSection").empty();
			for(var i = 0; i < topics.length; i++){
			console.log(giphyData);	 
			// start dynamically dumping to html
            $("#wellSection" + i).html(giphyData.data[i].bitly_gif_url);
			// var wellSection = $('<div>');
			// wellSection.addClass("well");
			// wellSection.attr('id', 'articleWell-' + i);
			// $("#wellSection").append(wellSection);
			// attach content to appropriate well
			// $("#articleWell-" + i).append(NYTData.response.docs[i].headline.main)
			// $("#articleWell-" + i).append(NYTData.response.docs[i].pub_date);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].section_name);
			// $("#articleWell-" + i).append(NYTData.response.docs[i].web_url);
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
    return false;
})



 