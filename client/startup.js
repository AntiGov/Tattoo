document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log("window.open works well");
  if(Meteor.isCordova){
  	window.plugins.insomnia.keepAwake();
		//window.open = cordova.InAppBrowser.open;
	}
}