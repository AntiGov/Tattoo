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
	/*recieveNewsLetter: {

	}*/
})

UserForms.attachSchema([UserFormPage1, UserFormPage2]);