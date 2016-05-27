AdminConfig = {
  collections: {
    UserForms: {
    	tableColumns: [
	   		{ label: 'Number in group:', name: 'numInGroup' },
	   		{ label: 'First Name:', name: 'firstName' },
	   		{ label: 'Last Name:', name: 'lastName'},
	   		{ label: 'Email', name: 'email'},
	   		{ label: 'Zip Code:', name: 'zip'},
	   		{ label: 'Brochures:', name: 'brochures'},
	   		{ label: 'Interests:', name: 'interests'}
  		]
    },
    AppSettings: {
    	tableColumns: [
	   		{ label: 'Is Locating', name: 'isLocating' },
	   		{ label: 'Show CRM', name: 'showCRM' },
	   		{ label: 'Timeout Time', name: 'timeoutTime'},
	   		{ label: 'User ID', name: 'userId'}
  		]
    },
    AppLocations: {
    	tableColumns: [
	   		{ label: 'Name', name: 'name' },
  		]
    }
  }
};