var group = new ReactiveVar(null)

Template.group.onCreated(function(){
	this.group = group
	var self = this
	this.autorun(function() {
		Meteor.call('getSpecificGroupData', [FlowRouter.getParam("id")], function (er, res){
			if(er){
				console.log(er)
			}else{
				group.set(res)
				console.log(res)
			}
		})
	})
})

Template.group.helpers({
	member: function(){
		return Template.instance().group.get()
	},
	group: function(){
		return Template
	}
})