TattooStudio = new Mongo.Collection('tattoostudio')

TattooStudio.attachSchema({
         name:{
         	type:String,

         },
         tattooStudioId:{
         	type:String
         }
});