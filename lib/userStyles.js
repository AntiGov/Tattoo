UsersStyles = new Mongo.Collection("usersStyles");

UsersStyles.attachSchema({
	backgroundImageId: {
		type: String,
		autoform:{
      	afFieldInput: {
	     		type: 'fileUpload',
	     		collection: 'Images',
	     		label: 'Choose file'
     	}
    },
    optional:true
	},
	fontColor: {
		type: String,
		defaultValue: "#000000",
		autoform: {
      type: "bootstrap-colorpicker"
    }
	},
	bgColor: {
		type:String,
		defaultValue: "#FFFFFF",
		autoform: {
      type: "bootstrap-colorpicker"
    }
	},
	accentColor: {
		type:String,
		defaultValue: "#FFFFFF",
		autoform: {
      type: "bootstrap-colorpicker"
    }
	},
})