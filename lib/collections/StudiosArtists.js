StudiosArtists = new Mongo.Collection('studiosartists');

StudiosArtists.attachSchema({
    name:{
     type:String
    },

    tattooArtistId: {
      type:String,
      autoform: {
      options: function(){
        return _.map(TattooStudio.find({}).fetch(), function(artist){
          return {label: artist.name, value: artist._id};
        })
      }
    }

    },
    tattooStudioId: {
       type:String
    },
    role: {
        type: String,
        label: "What role do they play at the tattoo studio (Tattoo/ piercer/ front desk)."
  }
});