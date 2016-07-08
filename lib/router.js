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
		if(Meteor.isCordova) {
			App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
		}
		Meteor.setTimeout(() => {
			UserStatus.pingMonitor();
			if(Meteor.isCordova){
				ref.show();
			}
			else {
				App.ref = window.open('http://discoverdenton.com');
			}
			if(Meteor.isCordova) {
				App.ref.addEventListener("loadstart", () => {
					if(UserStatus.isMonitoring()) {
						UserStatus().pingMonitor();
					}
				});
				App.ref.addEventListener("loadend", () => {
					if(UserStatus.isMonitoring()) {
						UserStatus().pingMonitor();
					}
				})
			}
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