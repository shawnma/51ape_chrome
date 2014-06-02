// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var h = document.location.href;
var id = h.substring(h.lastIndexOf('/')+1);

function close_tab() {
	chrome.runtime.sendMessage({cmd:'close'});
}
chrome.runtime.sendMessage({id:id}, function(resp){
	console.log("id=" + id + " pw=" + resp.pw);
	if (document.location.href.indexOf('baidu.com')>0) {
		
		var inp = document.getElementById('accessCode');
		if (!inp) {
			console.log("clicking download on baidu");
			document.getElementById('downFileButtom').click();
		} else {
			inp.value = resp.pw;
			var btn = document.getElementById('submitBtn');
			btn.click();
		}
	}
	else {
	
	var inp = document.getElementsByClassName("pwd-input").item(0);
	if (!inp) {
		document.getElementById("download").click();
		setTimeout(close_tab, 2000);
	} else {	
		inp.value = resp.pw;
		var btn = document.getElementsByClassName("submit-btn").item(0);
		btn.click();
	}
	}
});
