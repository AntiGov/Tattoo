StudiosArtists = new Mongo.Collection('studiosartists');

StudiosArtists.attachSchema({
    tattooArtistId: {
    	type:String
    },
    tattooStudioId: {
       type:String
    },
    role: {
        type: String,
        label: "What role do they play at the tattoo studio (Tattoo/ piercer/ front desk)."
  }
});