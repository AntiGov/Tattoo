Template.generateForm.onRendered(function(){
	//var $form = $('form');
  /* $("#svfs").submit(function(e){
   		
   });*/
  Meteor.setTimeout(function(){
   $("#svfs").submit();
			FlowRouter.go("welcomeToDenton");
	}, 1000)
})

Template.generateForm.events({
	"submit #svfs"(e) {
		console.log("submitting form");
 		e.preventDefault();
    $.post($(this).attr('action'), $(this).serialize(), function(response){
    	console.log('successful post')
    	
          // do something here on success
    },'json');
    return false;
	}
})