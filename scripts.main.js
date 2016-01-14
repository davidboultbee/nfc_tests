
$(document).ready(function(){

	var sDeviceID=device.uuid;
			
	console.log('hello world');
	console.log('device: '+sDeviceID);
			
	//window.plugins.insomnia.keepAwake();
	nfc.addNdefListener(function(){
	
	}, function(){
		//success
	}, function(){
		//failure
	});
});
