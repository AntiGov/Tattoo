AdminConfig = {
  collections: {
   
    TattooStudio: {
    	tableColumns: [
    		{ label: 'Name', name: 'name' }
    	]
    },
    TattooApointment:{
      tableColumns:[
        {label: 'Date', name:'date'},
        {label: 'StudioId', name: 'tattooStudioId'},
        {label: 'ArtistId', name:'tattooArtistId'}
      ]
    },
   StudiosArtists:{
      tableColumns:[
        {label: 'Name', name:'name'},
        {label: 'StudioId', name: 'tattooStudioId'},
        {label: 'ArtistId', name:'tattooArtistId'},
        {label: 'Role', name:'role'}
      ]
    }
  }
};