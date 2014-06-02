// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var pw = {};
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
	console.log("callback, info=" + JSON.stringify(request));
	if (request.cmd) {
		chrome.tabs.remove(sender.tab.id);
	}
	else if(request.pw) {
		pw[request.id] = request.pw;
		pw.last = request.pw;
		console.log('set pw.last=' + pw.last);
		//chrome.tabs.create({ url: 'http://yunpan.cn/' + request.id });
	} else {
		if (pw[request.id])
    		sendResponse({pw: pw[request.id]})
    	else {
    		console.log('unknown id, sending last=' + pw.last);
    		sendResponse({pw: pw.last})
    	}
	}
});

// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function(tab) {
//    chrome.tabs.executeScript(null, {file: "get_ape_code.js"});
//});
