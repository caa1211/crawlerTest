var Crawler = require("simplecrawler");

// crawler.interval = 500;

// Crawler.crawl("http://example.com/", function(queueItem){
//     console.log("Completed fetching resource:", queueItem.url);
// });


var crawler = Crawler.crawl("http://24h.pchome.com.tw/sign/mobile.htm");
crawler.interval = 300;
crawler.maxDepth = 2;
//crawler.initialPath = "/prod/";
//crawler.filterByDomain = "/prod"

	crawler.on("fetchstart",function(queueItem){
		console.log("Starting request for:",queueItem.url);
	})
	crawler.on("fetchcomplete",function(queueItem, responseBuffer, response){
		console.log("========");
		console.log("Completed fetching resource:",queueItem.url);
		console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
        console.log("It was a resource of type %s", response.headers['content-type']);
	});


// var myCrawler = new Crawler("http://24h.pchome.com.tw", "/", 80, 300);
// //myCrawler.maxDepth = 1;

// myCrawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
//     console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
//     console.log("It was a resource of type %s", response.headers['content-type']);

//     //  var continue = this.wait();
//     // doSomeDiscovery(data, function(foundURLs){
//     //     foundURLs.forEach(crawler.queueURL.bind(crawler));
//     //     continue();
//     // });

// });

// myCrawler.start();



