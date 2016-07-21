TattooApointment = new Mongo.Collection('tattooappointment')

TattooApointment.helpers({
    artist(){
        return StudiosArtists.find({tattooArtistId: this._id})
    },
    studio(){
        return TattooStudio.find({tattooStudioId: this._id})
    }

})
TattooApointment.attachSchema({
    date: {
        type: Date,
        label: "Appointment date",
        optional:true
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
