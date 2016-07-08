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
	action() {
		BlazeLayout.render('loginLayout', {main: 'signInView'});
	}
})

FlowRouter.route("/admin/:anything?", {
	name: "admin"
})

FlowRouter.route("/welcome-to-denton", {
	name: "welcomeToDenton",
	action() {
		BlazeLayout.render('mainLayout', {main: 'welcomeToDentonView'});
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
	triggersEnter: [function(context, redirect) {
		App.ref = window.open("http://www.discoverDenton.com", "_blank", {toolbar: "no", location: "no", hidden: "yes", hardwareback: "yes", clearsessioncache: "yes", clearcache: "yes"});
		Meteor.setTimeout(() => {
			if(Meteor.isCordova){
				ref.show();
			}
			App.ref.addEventListener("loadstart", function() {
				if(UserStatus.isMonitoring()) {
					UserStatus().pingMonitor();
				}
			});
			App.ref.addEventListener("loadend", function(){
				if(UserStatus.isMonitoring()) {
					UserStatus().pingMonitor();
				}
			})
		}, 3000);
	}],
	action(){
		BlazeLayout.render("mainLayout", {main: "formSubmitView"});
	}
})

FlowRouter.route("/simpleview", {
	name: "simpleViewManage",
	action() {
		BlazeLayout.render("simpleViewLayout", {main: "simpleViewIFrames"})
	}
})