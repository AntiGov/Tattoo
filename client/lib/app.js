App = {};
App.refreshDiscoverDenton = function() {
	App.ref.close();
	App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
}

App.hexToRgb = function(h) {
  var r = parseInt((cutHex(h)).substring(0,2),16), g = ((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16)
  return [r,g,b];
}

function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
