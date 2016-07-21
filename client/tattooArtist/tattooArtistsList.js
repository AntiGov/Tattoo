/*Template.tattooArtistsListView.onCreated(()=>{
  this.autorun(()=>{
    this.subscribe('')
  })
})*/

Template.tattooArtistsListView.helpers({
  artists(){
    return StudiosArtists.find({})
  }
})

Template.tattooArtistsListView.events({
  "click [data-action='delete-artist']"(){
    if(confirm("Are you sure want to delete this?")){
      StudiosArtists.remove(this._id)
    }
  }
})