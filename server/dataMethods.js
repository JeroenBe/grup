var fbGraphGet = Meteor.wrapAsync(FBGraph.get)

Meteor.methods({
	getGroupDataOfUser: function(){
		var facebook = Meteor.user().services.facebook
		return fbGraphGet(facebook.id + '/groups?access_token=' + facebook.accessToken)
	},
	getSpecificGroupData: function(groupId){
		var facebook = Meteor.user().services.facebook 
		return (fbGraphGet(groupId + '/members?access_token=' + facebook.accessToken)).data
	}
})