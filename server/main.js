
Meteor.publish('studiosartists',function(){
         return StudioArtists.find({});
})

Meteor.publish('tattoostudio',function(){
         return TattooStudio.find({});
})

Meteor.publish('tattooappointment',function(){
         return TattooAppointment.find({});
})