var fbGraphGet = Meteor.wrapAsync(FBGraph.get)

Meteor.methods({
	getGroupDataOfUser: function(){
		var facebook = Meteor.user().services.facebook
		return fbGraphGet(facebook.id + '/groups?access_token=' + facebook.accessToken)
	},
	getSpecificGroupData: function(groupId){
		var facebook = Meteor.user().services.facebook 
		console.log(fbGraphGet('458027187737198?fields=gender&access_token=' + facebook.accessToken))

		return (fbGraphGet(groupId + '/members?access_token=' + facebook.accessToken)).data
	}
})