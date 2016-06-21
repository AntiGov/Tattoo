document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log("window.open works well");
  if(Meteor.isCordova){
		window.open = cordova.InAppBrowser.open;
	}
}