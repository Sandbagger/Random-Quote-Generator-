
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

/*function randomQuote () {
	var randomNumber = Math.floor(Math.random() * (quoteList.length));
	var rq = quoteList[randomNumber];
	console.log(randomNumber);
	(function(){
		return blockquoteText.textContent = rq.quote;
	}());
	(function(){
		return quoteAuthor.textContent = rq.author;
	}());
	(function(){
		var text = rq.quote;
		return twitterAnchor.setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
	}());
}*/


var blockquoteText = document.getElementsByTagName("Blockquote")[0];
var buttonClick = document.getElementById("new-quote");
var quoteAuthor = document.getElementsByTagName("p")[0];
var twitterAnchor = document.getElementsByClassName("twitter-share-button")[0];


function getJSONP (){
	var tag = document.createElement("script");
	var randNum =Math.floor(Math.random() * 20) + 1;  
tag.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+randNum+"&_jsonp=mycallback";

document.getElementsByTagName("head")[0].appendChild(tag);

}

function mycallback (data) {
	//strip html tags in data.content
	var temp = document.createElement("div");
	temp.innerHTML = data[0].content;
	var sanitized = temp.textContent || temp.innerText;
	
	blockquoteText.textContent = sanitized;

	if (blockquoteText.textContent.length > 140) {
		getJSONP();
	} 

	else {
		
	quoteAuthor.textContent = data[0].title;

	var text = blockquoteText.textContent;
	document.getElementsByClassName("twitter-share-button")[0].setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
	}
}


window.onload = getJSONP();
buttonClick.addEventListener("click", getJSONP);

