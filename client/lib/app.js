App = {};
App.refreshDiscoverDenton = function() {
	//App.ref.close();
	//
}

App.hexToRgb = function(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    return [r, g, b];
}