document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  if(Meteor.isCordova){
		window.open = cordova.InAppBrowser.open;
		App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
	}
}

App.ref = null;