/*Template.tattooStudioListView.onCreated(()=>{
  this.autorun(()=>{
    this.subscribe('')
  })
})*/

Template.tattooStudioListView.helpers({
  studios(){
    return TattooStudio.find({})
  }
})

Template.tattooStudioListView.events({
  "click [data-action='delete-studio']"(){
    if(confirm("Are you sure want to delete this?")){
      TattooStudio.remove(this._id)
    }
  }
})