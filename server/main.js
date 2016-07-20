import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('studiosartists',function(){
         return StudioArtists.find({});
})

Meteor.publish('tattoostudio',function(){
         return TattooStudio.find({});
})

Meteor.publish('tattooappointment',function(){
         return TattooAppointment.find({});
})