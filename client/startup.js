document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  if(Meteor.isCordova){
		window.open = cordova.InAppBrowser.open;
		Meteor.setTimeout(()=> {
			App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
		}, 5000);
	}
}