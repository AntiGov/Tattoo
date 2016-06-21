UserForms = new Mongo.Collection("userForms");

UserFormSchema = new SimpleSchema({
	numInGroup: {
		type: Number,
		label: "Number In Group",
		min: 1
	},
	formId: {
		type: String,
		label: "Form Id",
		autoValue(){
			if(this.isInsert){
				var user = Meteor.users.findOne({_id: this.userId});
				return user.getSettings().appLocation().formId;
			}
		}
	},
	firstName: {
		type: String,
		label: "First Name",
		optional: true
	},
	lastName: {
		type: String,
		label: "Last Name",
		optional: true
	},
	recieveNewsLetter: {
		type: Boolean,
		label: "Would you like to receive our Enewsletter?",
		defaultValue: false
	},
	email: {
		type: String,
		label: "Email",
		optional: true,
		regEx: SimpleSchema.RegEx.Email
	},
	zip: {
		type: Number,
		label: "Zipcode",
		regEx: SimpleSchema.RegEx.ZipCode
	},
	brochures: {
		type: [String],
		label: "Brochures",
		autoform: {	
			options: [
				{label: "Arts & Jazz", value: "49"},
				{label: "Arts, Antiques & Autos", value: "65"}, 
				{label: "City Map", value: "39"},
				{label: "Courthouse Museum", value: "35"},
				{label: "CVB Rack Card", value: "89"},
				{label: "Denton Live", value: "7"},
				{label: "Dig Lil' d brochure", value: "98"},
				{label: "Downtown Guide", value: "107"},
				{label: "Firefighers Museum", value: "76"},
				{label: "Horse Country Rack Card", value: "79"},
				{label: "Hotels/Motels", value: "111"},
				{label: "NT State Fair", value: "66"},
				{label: "Tearoff map", value: "61"},
				{label: "Twu", value: "22"},
				{label: "University of No. Texas", value: "27"},
			]
		},
		optional: true
	},
	interests: {
		type: [String],
		label: "Interests",
		autoform: {	
			options: [
				{label: "Arts & Culture", value:"1"},
				{label: "Dining", value:"2"},
				{label: "Event Information", value:"11"},
				{label: "History", value:"4"},
				{label: "Horse Country", value:"12"},
				{label: "Hotels / Motels / B&B", value:"30"},
				{label: "Meeting Space", value:"31"},
				{label: "Outdoor", value:"6"},
				{label: "Shopping", value:"8"},
				{label: "Vistor Information", value: "10"},
			]
		},
		optional: true,
	},
	comments: {
		type: String,
		label: "Comments",
		optional: true
	},
})

UserForms.attachSchema(UserFormSchema);
