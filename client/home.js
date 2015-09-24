




Template.home.events({
	'click #loginWithFacebook': function(ev, er){
		ev.preventDefault()
		Meteor.loginWithFacebook({requestPermissions: ['user_managed_groups']}, function (er, res){
			if(er){
				console.log('problem when logging in')
			}else{
				console.log(Meteor.user())
			}
		})
	},

	'click #logout': function(ev, er){
		ev.preventDefault()
		Meteor.logout(function(err){
			if(err){
				console.log(err)
			}
		})
	}
})