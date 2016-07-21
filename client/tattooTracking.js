Template.tattooTrackingView.events({
  "submit .tracking"(e){
    e.preventDefault();
     var tracking = e.target.track.value;
     console.log(tracking);
  }
})