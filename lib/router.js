FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('mainLayout', {content: 'home'})
	}
})

FlowRouter.route('/group/:id', {
	action: function(params, queryParams){
		BlazeLayout.render('mainLayout', {content: 'group'})
	}
})