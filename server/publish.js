Meteor.publish(null,function(){
  return TattooStudio.find({})
})

Meteor.publish(null,function(){
  return TattooApointment.find({})
})

Meteor.publish(null,function(){
  return StudiosArtists.find({})
})