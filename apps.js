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

//var express = require('express');
//var router = express.Router();
//console.log(" - apps: started");
const querystring = require('querystring');
//console.log(" - apps: querystring");

var collector = require("./data-collector/collector.js");

/*
 * Parameters
 * - url      base url of your gitlab API
 * - project  id of your project in gitlab
 * - context  name of your visualization, allows you to combine data from several sources
 * - token    access token (use "settings" of your gitlab GUI)
 * - callback function to be called with the results
 */
function collectGitlabPipelineData(url, project, context, token, callback) {


    var data = {
	'filters': {
	    'userParams': project,
	    'baseURL': url,
	    'auth': {
		'user': 'undefined',
		'password': 'undefined',
		'token': token,
		'method': 'token'
	    },
	    'origin': {
		'source': 'gitlab',
		'context': context,
	    }
	},
	'api': 'gitlab_pipelines'
    };
    runCollector(data,callback);
}

/*
 * Parameters
 * - url      base url of your gitlab API
 * - project  id of your project in gitlab
 * - context  name of your visualization, allows you to combine data from several sources
 * - token    access token (use "settings" of your gitlab GUI)
 * - callback function to be called with the results
 */
function collectGitlabIssueData(url, project, context, token, callback) {

    var data = {
	'filters': {
	    'userParams': project,
	    'baseURL': url,
	    'auth': {
		'user': 'undefined',
		'password': 'undefined',
		'token': token,
		'method': 'token'
	    },
	    'origin': {
		'source': 'gitlab',
		'context': context,
	    }
	},
	'api': 'gitlab'
    };
    runCollector(data,callback);
}

function runCollector(data, callback) {

    collector(data, function (result, e, err, type) {
        var error;
        var etype;
	
        if (e === true) { //all went well
            error = false;
            etype = false;
        } else {
            if (type === true) { // GET DATA error
                etype = 'getdata';
                var code = err.body.message !== undefined ? err.body.message : err.res;
                error = "Error during data collection: " + code + " at " + err.url + ".";
            } else { //SEND DATA error
                etype = 'senddata';
                error = "Error during data sending: " + err;
            }
	    
            console.log("Error: ", error);
        }
	
	callback(result, e, err, etype); 
    });
}

module.exports = {"collectGitlabIssueData": collectGitlabIssueData,
		  "collectGitlabPipelineData": collectGitlabPipelineData};

