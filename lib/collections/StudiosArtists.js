StudiosArtists = new Mongo.Collection('studiosartists');

StudiosArtists.attachSchema({
    name:{
     type:String
    },
    tattooStudioId: {
       type:String,
       autoform:{
        options: ()=>{
           return _.map(TattooStudio.find().fetch(),(studio)=>{
            return {label: studio.name, value: studio._id}
           })
        }
       }
    },
    role: {
        type: String,
        label: "What role do they play at the tattoo studio (Tattoo/ piercer/ front desk).",
        
    autoform: {
      type: "select2",
     
    options:()=>{
      return  [
                  {label: "Tattoo", value: "Tattoo"},
                  {label: "Piercer", value: "Piercer"},
                  {label: "FontDesk", value: "FontDisk"}
              ];
    }


  }
},

    tattooArtistId: {
      type:String,
      autoValue(){
        if(this.isInsert){
          return this.userId;
        }
      },
      autoform:{
        type:"hidden"
      }
      
    }
});

 