Template.welcomeToDentonView.events({
	"click [data-action='goto-form']": function(){
		FlowRouter.go("form");
	}
})