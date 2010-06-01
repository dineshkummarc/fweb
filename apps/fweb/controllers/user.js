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
	user: null,

  showUserPane: function() {
    var pane = SC.SheetPane.create({   // initially was SC.PanelPane
      layout: { centerX: 0, centerY: 0, width: 800, height: 500 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        classNames: ['formPane'],
        childViews: 'nameView nameLabel userNameView descriptionLabel descriptionView roleLabel roleView statusLabel statusView subscriptionDateLabel subscriptionDateView lastConnectionLabel lastConnectionView buttonView'.w(),

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
        	valueBinding: "Fweb.userController.user.userName"
        }),

				descriptionLabel: SC.LabelView.extend({
        	layout: { top: 90, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'description'
				}),
        descriptionView: SC.TextFieldView.extend({
        	layout: { top: 90, left: 120, height: 20, width: 200 },                                    
        	valueBinding: "Fweb.userController.user.description"
        }),                                                                     
                  
        roleLabel: SC.LabelView.extend({
        	layout: { top: 120, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'role'
				}),                                                              
        roleView: SC.TextFieldView.extend({                                    
        	layout: { top: 120, left: 120, height: 20, width: 200 },               
        	valueBinding: "Fweb.userController.user.role"
        }),                                                                     
               
        statusLabel: SC.LabelView.extend({
        	layout: { top: 150, left: 20, height: 20, width: 100 },
	        classNames: ['formLabel'],
					value: 'status'
				}),                                                                  
        statusView: SC.TextFieldView.extend({                                 
        	layout: { top: 150, left: 120, height: 20, width: 100 },                                       
        	valueBinding: "Fweb.userController.user.status"
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
                                                                               
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 10, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "Fweb.userController.pane"
        })
      })
    });
    pane.append();
    this.set('pane', pane);
  },

  hidePane: function() {
    this.pane.remove();
  }
  
}) ;
