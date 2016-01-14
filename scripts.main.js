alert('main loaded');

$(document).ready(function(){
/*
	var sDeviceID=device.uuid;
			
	console.log('hello world');
	console.log('device: '+sDeviceID);
			
	//window.plugins.insomnia.keepAwake();
*/
	alert('document ready');
	
	nfc.addNdefListener(function(oEvent){
		alert('tag detected');
	}, function(){
		//success
		alert('added listener');
	}, function(oError){
		alert('Error adding NDEF listener ' + JSON.stringify(error));
		//failure
	});
	
	alert('hello world');
	
});
