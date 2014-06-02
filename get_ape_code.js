// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var links = document.getElementsByClassName("blue a_none");
if (links && links.length == 1) {
	var l = links.item(0);
	l.addEventListener('click', function(e){
		var h = l.getAttribute("href");
		var id = h.substring(h.lastIndexOf('/')+1);
		var code = document.getElementsByClassName("mt_1 yahei f_16 b").item(0);
		var pw = code.innerText.substring(5);
		// id: pw
		var obj = {id: id, pw: pw};
		console.log("posting " + JSON.stringify(obj));
		chrome.runtime.sendMessage(obj);
	});
	
	
}
