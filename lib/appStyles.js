AppStyles = new Mongo.Collection("appStyles");


if(Meteor.isClient){
	AppStyles.helpers({
		getBackgroundWAlpha() {//{{getSettings.appStyle.bgColor}}99
			var res = App.hexToRgb(this.bgColor);
			return "" + res[0] + ", " + res[1] + ", " + res[2] + ", .67"
		}
	})
}

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