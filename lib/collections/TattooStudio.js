TattooStudio = new Mongo.Collection('tattoostudio')

TattooStudio.attachSchema({
         name:{
         	type:String,
          label:"Name"

         },
         tattooStudioId:{
         	type:String,
          label:"Tatoo StudioId"
            
        }
});