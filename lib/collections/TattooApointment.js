TattooApointment = new Mongo.Collection('tattooappointment')

TattooApointment.attachSchema({
    date: {
        type: Date,
        label: "Appointment date"
    },
    tattooStudioId: {
        type: String,
        label: "Tattoo Sudio",
         autoform: {
              options:()=>{
                 return _.map(TattooStudio.find({}).fetch(),(studio)=>{
                 return {label: studio.name, value: studio._id};
        })
      }
    }
    },
    tattooArtistId: {
        type:String,
        label: "Tatto Artist",
        autoform:{
            options:()=>{
                return _.map(StudiosArtists.find({}).fetch(),(artist)=>{
                    return {label: artist.name, value: artist._id}
                })
            }
        }
    }
    
});
