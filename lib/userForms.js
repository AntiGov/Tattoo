UserForms = new Mongo.Collection("userForms");

UserFormPage1 = new SimpleSchema({
	numInGroup: {
		type: Number,
		label: "Number In Group",
		min: 1
	}
})

UserFormPage2 = new SimpleSchema({
	firstName: {
		type: String,
		label: "First Name"
	},
	lastName: {
		type: String,
		label: "Last Name"
	},
	recieveNewsLetter: {
		type: Boolean,
		label: "Would you like to receive our Enewsletter?"

	},
	email: {
		type: String,
		label: "Email"
	}

})

UserFormPage3 = new SimpleSchema({
	zip: {
		type: Number,
		label: "Zip",
		regEx: SimpleSchema.RegEx.ZipCode
	}
})

UserFormPage4 = new SimpleSchema({
	brochures: {
		type: [String],
		label: "Brochures"
	},
	interests: {
		type: [String],
		label: "Interests"	
	}
})

UserFormPage5 = new SimpleSchema({
	comments: {
		type: String,
		label: "Comments"
	}
})




UserForms.attachSchema([UserFormPage1, UserFormPage2, UserFormPage3]);