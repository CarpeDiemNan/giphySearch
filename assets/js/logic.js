//      VARIABLES
topics = ["Dog", "Pony", "Puppy", "Cat", "Fish", "Bird"];

var queryURLBase = "https://api.giphy.com/v1/gifs/search?api_key=0DCbLqFsuTrcFYsBerOEbG7vYEzptnsg&q=funny+animals&limit=10&offset=0&rating=G&lang=en";
//      FUNCTIONS
function runQuery(queryURL){
	$.ajax({url: queryURL, method: "GET"})
		.done(function(giphyData) {
			// clear the wells from the previous run
			// $("#wellSection").empty();
			for(var i = 0; i < topics.length; i++){
			console.log(giphyData);
			// console.log(NYTData);

			// start dynamically dumping to html
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
runQuery(queryURLBase);

 