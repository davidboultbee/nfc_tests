alert('main loaded');

$(document).ready(function(){
/*
	var sDeviceID=device.uuid;
			
	console.log('hello world');
	console.log('device: '+sDeviceID);
			
	//window.plugins.insomnia.keepAwake();
*/
	
	alert('document ready');
	
});

// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.

$(document).on('deviceready',function(){
	alert('device ready');
	
	// Read NDEF formatted NFC Tags
	nfc.addNdefListener (
		function (nfcEvent) {
			var tag = nfcEvent.tag,
				ndefMessage = tag.ndefMessage;

			// dump the raw json of the message
			// note: real code will need to decode
			// the payload from each record
			alert(JSON.stringify(ndefMessage));

			// assuming the first record in the message has 
			// a payload that can be converted to a string.
			alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
		}, 
		function () { // success callback
			alert("Waiting for NDEF tag");
		},
		function (error) { // error callback
			alert("Error adding NDEF listener " + JSON.stringify(error));
		}
	);
});
