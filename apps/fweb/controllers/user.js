// ==========================================================================
// Project:   Fweb.userController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Fweb.userController = SC.ObjectController.create(
/** @scope Fweb.userController.prototype */ {
	pane: null,
	nestedStore: null,
	user: null,
	nestedUser: null,
	
	loadUser: function() {
		var user = Fweb.store.find(Fweb.User, 1); // first record of User
		this.set('user', user);
		var nestedStore = Fweb.store.chain(); // create nested store
		var nestedUser = nestedStore.find(user); // nested record of user
		this.set('nestedStore', nestedStore);
		this.set('nestedUser', nestedUser);
	},

  showUserPane: function() {
		this.loadUser();
    var pane = SC.SheetPane.create({   // initially was SC.PanelPane
      layout: { centerX: 0, centerY: 0, width: 400, height: 300 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'nameView nameLabel userNameView descriptionLabel descriptionView roleLabel roleView userStatusLabel userStatusView subscriptionDateLabel subscriptionDateView lastConnectionLabel lastConnectionView cancelButtonView saveButtonView'.w(),

        nameView: SC.LabelView.extend({
          layout: { top: 10, left: 0, height: 24 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          icon: sc_static('resources/icons/user_suit.png'),
          valueBinding: "Fweb.userController.user.description",
        }),
        
				nameLabel: SC.LabelView.extend({
        	layout: { top: 60, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'username'
				}),
        userNameView: SC.TextFieldView.extend({
        	layout: { top: 60, left: 120, height: 20, width: 200 },
        	valueBinding: "Fweb.userController.nestedUser.userName"
        }),

				descriptionLabel: SC.LabelView.extend({
        	layout: { top: 90, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'description'
				}),
        descriptionView: SC.TextFieldView.extend({
        	layout: { top: 90, left: 120, height: 20, width: 200 },                                    
        	valueBinding: "Fweb.userController.nestedUser.description"
        }),                                                                     
                  
        roleLabel: SC.LabelView.extend({
        	layout: { top: 120, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'role'
				}),                                                              
        roleView: SC.TextFieldView.extend({                                    
        	layout: { top: 120, left: 120, height: 20, width: 200 },               
        	valueBinding: "Fweb.userController.nestedUser.role"
        }),                                                                     
               
        userStatusLabel: SC.LabelView.extend({
        	layout: { top: 150, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'status'
				}),                                                                  
        userStatusView: SC.TextFieldView.extend({                                 
        	layout: { top: 150, left: 120, height: 20, width: 100 },                                       
        	valueBinding: "Fweb.userController.nestedUser.userStatus"
        }),                                                                     
           
        subscriptionDateLabel: SC.LabelView.extend({
        	layout: { top: 180, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'subcription'
				}),                                                                    
        subscriptionDateView: SC.LabelView.extend({                                   
        	layout: { top: 180, left: 120, height: 20, width: 100 },                                       
        	value: Fweb.userController.user.get('subscriptionDate').toFormattedString('%d/%m/%Y')
        }),  

				lastConnectionLabel: SC.LabelView.extend({
        	layout: { top: 210, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'last connection'
				}), 
		    lastConnectionView: SC.LabelView.extend({                                 
        	layout: { top: 210, left: 120, height: 20, width: 100 },                                       
        	value: Fweb.userController.user.get('lastConnection').toFormattedString('%d/%m/%Y %H:%M:%S')
        }),                                                                   
                                                                               
        cancelButtonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 10, height: 24, centerX: -50 },
          title: "Cancel",
          action: "remove",
          target: "Fweb.userController.pane"
        }),

				saveButtonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 10, height: 24, centerX: 50 },
          title: "Save",
          action: "save",
          target: "Fweb.userController"
        })
      })
    });
    pane.append();
    this.set('pane', pane);
  },

  hidePane: function() {
    this.pane.remove();
  },

	save: function() {
		this.nestedStore.commitChanges();
		this.pane.remove();
	}
  
}) ;
