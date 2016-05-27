Template.welcomeToDentonView.events({
	"click [data-action='goto-form']": function(){
		FlowRouter.go("form");
	}
})

Template.welcomeToDentonView.onRendered(function(){
	if(!UserStatus.isMonitoring()){
		UserStatus.startMonitor(100,100);
	}
})