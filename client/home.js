var groups = new ReactiveVar(null)

Template.home.onCreated(function (){
	this.groups = groups
	if(!this.groups.get()){
		Meteor.call('getGroupDataOfUser', function(er, res){
			if(er){
				console.log('client error: ', er)
			}else{
				groups.set(res.data)						
			}
		})
	}
})

Template.home.helpers({
	groups: function(){
		return Template.instance().groups.get()
	}
})

Template.home.events({
	'click #loginWithFacebook': function(ev, er){
		ev.preventDefault()

		var self = Template.instance()

		Meteor.loginWithFacebook({requestPermissions: ['user_managed_groups']}, function (er, res){
			if(er){
				console.log('problem when logging in')
			}else{
				Meteor.call('getGroupDataOfUser', function(er, res){
					if(er){
						console.log('client error: ', er)
					}else{
						groups.set(res.data)						
					}
				})
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