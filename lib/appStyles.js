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
		defaultValue: "#2A2A2A",
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