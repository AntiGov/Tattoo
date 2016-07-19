TattooStudio = new Mongo.Collection('tattoostudio')

TattooStudio.attachSchema({
         name:{
         	type:String,

         },
         tattooStudioId:{
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