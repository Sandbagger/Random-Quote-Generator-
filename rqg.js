var blockquoteText = document.getElementsByTagName("Blockquote")[0];
var buttonClick = document.getElementById("new-quote");
var quoteAuthor = document.getElementsByTagName("p")[0];
var twitterAnchor = document.getElementsByClassName("twitter-share-button")[0];


// Callback index.
var count = 0;


var jsonp = function(url, options) {
    options = options || {};

    var prefix = options.prefix || '__jp';
    var param = options.param || '_jsonp';
    var timeout = options.timeout ? options.timeout : 15000;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;
    var cleanup;
    var cancel;
    var promise;
    var noop = function() {};

    // Generate a unique id for the request.
    var id = prefix + (count++);

    cleanup = function() {
        // Remove the script tag.
        if (script && script.parentNode) {
            script.parentNode.removeChild(script);
        }

        window[id] = noop;

        if (timer) {
            clearTimeout(timer);
        }
    };

    promise = new Promise(function(resolve, reject) {
        if (timeout) {
            timer = setTimeout(function() {
                cleanup();
                reject(new Error('Timeout'));
            }, timeout);
        }

        window[id] = function(data) {
            cleanup();
            resolve(data);
        };

        // Add querystring component
        console.log(url);
        url +=  (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
        url = url.replace('?&', '?');

        // Create script.
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

        cancel = function() {
            if (window[id]) {
                cleanup();
                reject(new Error('Canceled'));
            }
        };

    });

    return {
        promise: promise.then(function(a){
        	var filtered = a.filter(function(i){
		if (i.content.length + i.title.length < 152){
			return i;
			}
		})
		arr.push(filtered);
		return filtered;
	}).then(function(a){
		 randomQuote();
         blockquoteText.addEventListener("click", randomQuote);
	})
  }

}
/*
$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
 a.foreach

 var content = a.content.

  $("Blockquote").append(a[0].content.textContent);
  	$("#author").append(a[0].title);
});*/
  

var arr = [];

/*function mycallback (data) {
	//strip html tags in data.content

	var filtered = data.filter(function(i){
		if (i.content.length + i.title.length < 152){
			return i;
		}
	})

	arr.push(filtered);
}

*/

function randomQuote(){
	//update text

    
	var randNum =Math.floor(Math.random() * arr[0].length-1);


    var temp = document.createElement("div");
    temp.innerHTML = arr[0][randNum].content;
    var sanitized = temp.textContent || temp.innerText;
    blockquoteText.textContent = sanitized;   

    document.getElementsByClassName("twitter-share-button")[0].setAttribute("href", "https://twitter.com/intent/tweet?text=" + sanitized);
	//update author
	document.getElementById('author').innerHTML = arr[0][randNum].title;
}
	
	
/*
		
	quoteAuthor.textContent = data[0].title;

	var text = blockquoteText.textContent;
	document.getElementsByClassName("twitter-share-button")[0].setAttribute("href", "https://twitter.com/intent/tweet?text="+ text);
	}
}
*/

window.onload = jsonp("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&");
//buttonClick.addEventListener("click", getJSONP);
