App = {};
App.refreshDiscoverDenton = function(){
	App.ref.close();
	App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
}