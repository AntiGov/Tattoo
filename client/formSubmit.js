Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})

Template.formSubmitView.onRendered(function(){
	//var $form = $('form');
   $("#svfs").submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
      },'json');
      return false;
   });
	$("#svfs").submit();
	FlowRouter.go("welcomeToDenton");
})