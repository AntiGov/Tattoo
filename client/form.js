AutoForm.hooks({
  insertForm: {
    onSuccess(formType, res) {
      AppSettings.update({_id: Meteor.user() && Meteor.user().getSettings()._id}, {$set: {showDiscoverDenton: true}})
      FlowRouter.go("formSubmit", {_id: res});
    }
  }
})

Template.formView.events({
	"click [data-action='show-subscribe']"(e) {
		Template.instance().emailSubscribe.set(true);
		e.stopPropagation();
		e.preventDefault();
	},
	"click [data-action='hide-subscribe']"(e) {
		Template.instance().emailSubscribe.set(false);
		e.stopPropagation();
		e.preventDefault();
	},
	"click [data-action='submitForm']"(e) {
		document.getElementById("submitFormBtn").click();
	},
	"click [data-action='toggleExpand']"(){
		var oe = Template.instance().optionsExpanded.get();
		Template.instance().optionsExpanded.set(!oe);
	},
	"click #submitFormBtn"(e) {
		//e.preventDefault();
	}
})

Template.formView.onCreated(function(){
	this.emailSubscribe = new ReactiveVar(false);
	this.optionsExpanded = new ReactiveVar(false);
})

Template.formView.helpers({
	emailSubscribe() {
		return Template.instance().emailSubscribe.get();
	},
	optionsExpanded() {
		return Template.instance().optionsExpanded.get();
	}
})