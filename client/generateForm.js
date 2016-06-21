Template.generateForm.onRendered(function(){
  Meteor.setTimeout(function(){
   $("#svfs").submit();
		FlowRouter.go("welcomeToDenton");
	}, 1000)
})

Template.generateForm.events({
	/*"submit #svfs"(e) {
		console.log("submitting form");
 		e.preventDefault();
    $.post($("#svfs").attr('action'), $("#svfs").serialize(), function(response){
    	console.log('successful post')
    	
          // do something here on success
    },'json');
    return false;
	}*/
})

Template.generateForm.helpers({
	dateFormated() {
		return moment(new Date()).format("MM/DD/YYYY");
	}
})