var quoteList = [{
	quote: "Sometimes it lasts in love but sometimes it hurts instead",
	author: "Adele Adkins"
},

{
	quote: "I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter.",
	author: "Walt Disney",
},
{
	quote: "Only I can change my life. No one can do it for me.",
	author: "Carol Burnett"

},];

var quoteText = document.getElementsByTagName("Blockquote")[0];
var buttonClick = document.getElementById("new-quote");
var quoteAuthor = document.getElementsByTagName("p")[0];


function randomQuote () {
	var randomNumber = Math.floor(Math.random() * (quoteList.length));
	var rq = quoteList[randomNumber];
	console.log(randomNumber);
	(function(){
		return quoteText.textContent = rq.quote;
	}());
	(function(){
		return quoteAuthor.textContent = rq.author;
	}());
}


	

	buttonClick.addEventListener("click", randomQuote);
	document.addEventListener("load", randomQuote);


