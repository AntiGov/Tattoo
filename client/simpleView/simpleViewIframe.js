Template.simpleViewIframe.events({
	"click [data-action='login-simple-view']"() {
		document.getElementById("svlf" + Template.parentData(1)._id).submit();
	},
	"click [data-action='goto-form']"(){
		document.getElementById("simpleview-iframe" + Template.parentData(1)._id).src = "http://denton.simpleviewcrm.com/forms/index.cfm?action=form&formID=" + this.formId;
	}
})