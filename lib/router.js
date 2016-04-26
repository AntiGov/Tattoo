FlowRouter.notFound = {
	action() {
		FlowRouter.go("home");
	}
}

FlowRouter.route("/", {
	name: "home",
	action() {
		BlazeLayout.render('mainLayout', {main: 'homeView'});
	}
})
