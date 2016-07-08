document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  if(Meteor.isCordova){
		window.open = cordova.InAppBrowser.open;
	}
}

App.ref = null;