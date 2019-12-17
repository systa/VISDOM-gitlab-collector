/*
* Copyright 2018-2019 Tampere University
* 
* Main authors: Anna-Liisa Mattila, Henri Terho, Antti Luoto, Hugo Fooy, Kari Systä
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in 
* the Software without restriction, including without limitation the rights to 
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so, 
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _ = require('underscore');
apps = require("./apps.js");


/*
 * Choose either or both
apps.collectGitlabIssueData('https://{your gitlab host}/api/v4/',    // <= FILL IN
			    '{id of your project}',                  // <= FILL IN
			    '{name of your visualization project}',  // <= FILL IN
			    '{óur access token}',                  // <= get from your gitlab and fill in
			    consumeData);
*/

apps.collectGitlabPipelineData('https://{your gitlab host}/api/v4/',    // <= FILL IN
			       '{id of your project}',                  // <= FILL IN
			       '{name of your visualization project}',  // <= FILL IN
			       '{óur access token}',                    // <= get from your gitlab and fill in
			    consumeData);



// See files 'example-issues.txt' and 'example-pipelines.txt'
function consumeData(result, e, err, type) {
    if (e === true) {
	for (i in result) {
	    console.log("!! Got " + result[i].length + " " + i);
	}
	// print debug information how many items of each type we got and what is the last item
	console.log('#Data fetched from source.');
	_.each(result, function (value, key) {
	    console.log("#" + value.length + ' ' + key + ' last of which is:');
	    console.log("#", value[value.length - 1]);
	});

    }
}
