
FlowRouter.route('/user/add/tattoo-appointment',{
  name:'tattooAppointment',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooAppointmentView'})
  }
})

FlowRouter.route('/user/list/appointment-view',{
  name:'tattooAppointmentList',
  action(){
     BlazeLayout.render('homeLayout',{main:'tattooAppointmentListView'})
  }
})
FlowRouter.route('/user/new/appointment-new',{
  name:'tattooAppointmentNew',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooAppointmentNewView'})
  }
})