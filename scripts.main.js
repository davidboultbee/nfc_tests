
$(document).ready(function(){

	var sDeviceID=device.uuid;
			
	console.log('hello world');
	console.log('device: '+sDeviceID);
			
	//window.plugins.insomnia.keepAwake();
	nfc.addNdefListener(function(){
		alert('tag detected');
	}, function(){
		//success
	}, function(){
		//failure
	});
});
