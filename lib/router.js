FlowRouter.notFound = {
	action() {
		FlowRouter.go("home");
	}
}

Router.configure({
  notFoundtemplate: "notFound"
});

FlowRouter.route("/", {
	name: "home",
	action() {
		BlazeLayout.render('mainLayout', {main: 'signInView'});
	}
})

FlowRouter.route("/form", {
	name: "form",
	action(){
		BlazeLayout.render("mainLayout", {main: "formView"})
	}
})

FlowRouter.route("/discover-denton", {
	name: "discoverDenton",
	action(){
		BlazeLayout.render("mainLayout", {main: "discoverDentonView"})
	}
})