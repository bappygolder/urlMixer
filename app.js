/*jshint esversion: 6*/
//take URL input
var inputURL = prompt("Enter the root URL that you want the variation for. \ni.e: bappygolder.com, x.com.au etc \nDon't include any suffix or prefix of the URL (i.e: http://, www, / etc)");

//construct out put URL
var outputURLs = [];

//add all variation to output URL list
outputURLs.push(inputURL);
outputURLs.push(inputURL + '/');

outputURLs.push('www.' + inputURL);
outputURLs.push('www.' + inputURL + '/');

outputURLs.push('http://' + inputURL);
outputURLs.push('http://' + inputURL + '/');
outputURLs.push('http://' + 'www.' + inputURL);
outputURLs.push('http://' + 'www.' + inputURL + '/');

outputURLs.push('https://' + inputURL);
outputURLs.push('https://' + inputURL + '/');
outputURLs.push('https://' + 'www.' + inputURL);
outputURLs.push('https://' + 'www.' + inputURL + '/');
outputURLs.push('https://' + inputURL);
outputURLs.push('https://' + inputURL + '/');
outputURLs.push('https://' + 'www.' + inputURL);
outputURLs.push('https://' + 'www.' + inputURL + '/');

//show output in page
console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
console.info('\n' + outputURLs.length + " URL created.\n\n", 'background: olive;');
for (var i = 0; i < outputURLs.length; i++) {
    console.log(outputURLs[i]);
}
