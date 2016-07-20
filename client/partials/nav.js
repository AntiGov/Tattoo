Template.navLogin.events({
  "click [data-action='user-logout']"(){
        Meteor.logout()
  }
})