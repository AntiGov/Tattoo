TattooApointment = new Mongo.Collection('tattooappointment')

TattooApointment.attachSchema({
    date: {
        type: Date,
        label: "Appointment date"
    },
    tattooStudioId: {
        type: String,
        label: "Tattoo Sudio"
    },
    tattooArtistId: {
        type:String,
        label: "Tatto Artist"
    }
    
});
