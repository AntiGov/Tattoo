UserForms = new Mongo.Collection("userForms");

UserFormSchema = new SimpleSchema({
	numInGroup: {
		type: Number,
		label: "Number In Group",
		min: 1
	},
	formId: {
		type: Number,
		label: "Form Id"
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
		label: "Zip",
		regEx: SimpleSchema.RegEx.ZipCode
	},
	brochures: {
		type: [String],
		label: "Brochures",
		autoform: {	
			options: [
				{label: "Arts & Jazz", value: "artsAndJazz"},
				{label: "Arts, Antiques & Autos", value: "artsAntiquesAutos"}, 
				{label: "City Map", value: "cityMap"},
				{label: "Courthouse Museum", value: "courtHouseMuseum"},
				{label: "CVB Rack Card", value: "cvbrackCard"},
				{label: "Denton Live", value: "dentonLive"},
				{label: "Dig Lil' d brochure", value: "digLil'dBrochure"},
				{label: "Downtown Guide", value: "downtownGuide"},
				{label: "Firefighers Museum", value: "fireFighersMuseum"},
				{label: "Horse Country Rack Card", value: "horseCountryRackCard"},
				{label: "Hotels/Motels", value: "hotels/Motels"},
				{label: "NT State Fair", value: "ntStateFair"},
				{label: "Tearoff map", value: "tearoffMap"},
				{label: "Twu", value: "Twu"},
				{label: "University of No. Texas", value: "yuniversityOfNo.Texas"},
			]
		},
		optional: true
	},
	interests: {
		type: [String],
		label: "Interests",
		autoform: {	
			options: [
				{label: "Arts & Culture", value:"arts&Culture"},
				{label: "Dining", value:"dining"},
				{label: "Event Information", value:"eventInformation"},
				{label: "History", value:"history"},
				{label: "Horse Country", value:"horseCountry"},
				{label: "Hotels / Motels / B&B", value:"hotels/Motels/B&B"},
				{label: "Meeting Space", value:"meetingSpace"},
				{label: "Outdoor", value:"outdoor"},
				{label: "Shopping", value:"shopping"},
				{label: "Vistor Information", value: "vistorInformation"},
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
