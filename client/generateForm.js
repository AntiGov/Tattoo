Template.generateForm.onRendered(function(){
  Meteor.setTimeout(() => {
  	console.log(this.data.appSettingsId, this.data._id)
   $("#svfs" + this.data.appSettingsId).submit();
   UserForms.update({_id: this.data._id}, {$set: {hasSubmitted: true}})
	}, 2000)
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