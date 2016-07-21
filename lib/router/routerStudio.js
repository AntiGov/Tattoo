FlowRouter.route('/user/tattoo-studio',{
  name:'tattooStudio',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioView'})
  }
})

FlowRouter.route('/user/list/studio-view',{
  name:'tattooStudioList',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioListView'})
  }
})

FlowRouter.route('/user/new/studio-new',{
  name:'tattooStudioNew',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioNewView'})
  }
})

FlowRouter.route('/user/studio/:_id/edit',{
  name:'tattooStudioEdit',
  action(){
    BlazeLayout.render('homeLayout',{main: 'tattooStudioEditView'})
  }
})