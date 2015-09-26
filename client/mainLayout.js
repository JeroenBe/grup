Template.mainLayout.onCreated(function (){
	this.groups = groups
})

Template.mainLayout.helpers({
	groups: function (){
		return Template.instance().groups.get()
	}
})