/*Template.tattooAppointmentListView.onCreated(()=>{
  this.autorun(()=>{
    this.subscribe('')
  })
})*/

Template.tattooAppointmentListView.helpers({
  appointments(){
    return TattooApointment.find({})
  }
})

Template.tattooAppointmentListView.events({
  "click [data-action='delete-appoint']"(){
    if(confirm("Are you sure want to delete this?")){
      TattooApointment.remove(this._id)
    }
  }
})