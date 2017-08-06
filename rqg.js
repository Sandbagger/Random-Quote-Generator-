/*var quoteList = [{
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

},];*/



var quoteText = document.getElementsByTagName("Blockquote")[0];
var buttonClick = document.getElementById("new-quote");
var quoteAuthor = document.getElementsByTagName("p")[0];
var twitterAnchor = document.getElementsByClassName("twitter-share-button")[0];


/*function randomQuote () {
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
}*/

	buttonClick.addEventListener("click", getJSONP);
	




function mycallback (data) {
	//strip html tags in data.content
	var temp = document.createElement("div");
	temp.innerHTML = data[0].content;
	var sanitized = temp.textContent || temp.innerText;
	

	quoteText.textContent = sanitized;
		
	quoteAuthor.textContent = data[0].title;

	var text = data[0].content;
	document.getElementsByClassName("twitter-share-button")[0].setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
}

function getJSONP (){
	var tag = document.createElement("script");
	var randNum =Math.floor(Math.random() * 20) + 1;  
tag.src = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+randNum+"&_jsonp=mycallback";

document.getElementsByTagName("head")[0].appendChild(tag);



}


window.onload = getJSONP();


