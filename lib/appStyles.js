AppStyles = new Mongo.Collection("appStyles");

AppStyles.attachSchema({
	name: {
		type: String,
		label: "Style name"
	},
	backgroundImageId: {
		type: String,
		autoform:{
      	afFieldInput: {
	     		type: 'fileUpload',
	     		collection: 'Images',
	     		label: 'Choose file'
     	}
    }
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
	}
})