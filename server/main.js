/*import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
*/
Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	return Meteor.users.find({_id: this.userId});
})