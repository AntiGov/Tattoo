FlowRouter.notFound = {
	action() {
		FlowRouter.go("home");
	}
}

Router.configure({
  notFoundTemplate: "notFound"
});

FlowRouter.route("/", {
	name: "home",
	action; function(params, queryParams) {
		BlazeLayout.render('mainLayout', {main: 'signInView'});
	}
})

FlowRouter.route("/form", {
	name: "form",
	triggersEnter: [function(context, redirect) {
		if(Meteor.user() && Meteor.user().getSettings() && !Meteor.user().getSettings().showCRM){
			redirect('/discover-denton');
		}
  }],
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