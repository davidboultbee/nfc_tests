var bJQueryDocumentReady=false;

$(document).ready(function(){
	bJQueryDocumentReady=true;
});

// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.

$(document).on('deviceready',function(){
	if(bJQueryDocumentReady)  fThingsToDoWhenReady();
	else $(document).ready(fThingsToDoWhenReady);
});

function fThingsToDoWhenReady(){

	// Read NDEF formatted NFC Tags
	nfc.addNdefListener (
		function (nfcEvent) {
			var tag = nfcEvent.tag,
				ndefMessage = tag.ndefMessage;

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

};
