TattooStudio = new Mongo.Collection('tattoostudio')

TattooStudio.attachSchema({
         name:{
         	type:String,
          label:"Name"

         },
         tattooStudioId:{
         	type:String,
          label:"Tatoo StudioId",
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