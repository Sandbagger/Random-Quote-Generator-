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

var APIList = []; 

var quoteText = document.getElementsByTagName("Blockquote")[0];
var buttonClick = document.getElementById("new-quote");
var quoteAuthor = document.getElementsByTagName("p")[0];
var twitterAnchor = document.getElementsByClassName("twitter-share-button")[0];


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
	(function(){
		var text = rq.quote;
		return twitterAnchor.setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
	}());
}

	buttonClick.addEventListener("click", getJSON);
	document.addEventListener("load", randomQuote);


var storeResult = [];
 function getJSON () {
   var xhr = new XMLHttpRequest(); 
 
   xhr.onreadystatechange = function () {
       if (xhr.status === 200 && xhr.readyState === 4) {
   var rq = storeResult.push(JSON.parse(xhr.response));
      (function(){
		return quoteText.textContent = storeResult[0].contents.quotes[0].quote;
	}());
	(function(){
		return quoteAuthor.textContent = storeResult[0].contents.quotes[0].author;
	}());
	(function(){
		var text = storeResult[0].contents.quotes[0].quote;
		return document.getElementsByClassName("twitter-share-button")[0].setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
	}());

      }  else {randomQuote()};


    };
 
 xhr.open("GET", "http://quotes.rest/qod.json", true);
 xhr.send(null);
};

window.onload = getJSON();