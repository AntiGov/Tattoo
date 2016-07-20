Meteor.publish("tattoostudio",function(){
  return TattooStudio.find({})
})

Meteor.publish("tattooapointment",function(){
  return TattooApointment.find({})
})

Meteor.publish("studioartists",function(){
  return StudioArtists.find({})
})