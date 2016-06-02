FlowRouter.notFound = {
	action() {
		FlowRouter.go("home");
	}
}

Router.configure({
  notFoundTemplate: "notFound"
});

FlowRouter.route("/admin/:anything?", {
	name: "admin"
})

FlowRouter.route("/welcome-to-denton", {
	name: "welcomeToDenton",
	action() {
		BlazeLayout.render('mainLayout', {main: 'welcomeToDentonView'});
	}
})

FlowRouter.route("/", {
	name: "home",
	action() {
		console.log("yoyoyoyo")
		BlazeLayout.render('mainLayout', {main: 'signInView'});
	}
})

FlowRouter.route("/form", {
	name: "form",
	action(){
		BlazeLayout.render("mainLayout", {main: "formView"})
	}
})

FlowRouter.route("/form-submit/:_id", {
	name: "formSubmit",
	action(){
		BlazeLayout.render("mainLayout", {main: "formSubmitView"});
	}
})