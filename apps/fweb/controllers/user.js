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
        childViews: 'nameView nameLabel userNameView descriptionView roleView statusView subscriptionDateView lastConnectionView buttonView'.w(),

        nameView: SC.LabelView.extend({
          layout: { top: 10, left: 0, height: 24 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          icon: sc_static('resources/icons/user_suit.png'),
          valueBinding: "Fweb.userController.user.description",
        }),
        
				nameLabel: SC.LabelView.extend({
        	layout: { top: 60, left: 20, height: 20, width: 100 },
	        escapeHTML: NO,
					value: '<b>username:</b> '
				}),
        userNameView: SC.TextFieldView.extend({
        	layout: { top: 60, left: 100, height: 20, width: 200 },
        	valueBinding: "Fweb.userController.user.userName"
        }),

        descriptionView: SC.LabelView.extend({
        	layout: { top: 90, left: 20 },
	        escapeHTML: NO,                                                       
        	value: "<b>description:</b> "+Fweb.userController.user.get('description')
        }),                                                                     
                                                                                
        roleView: SC.LabelView.extend({                                     
        	layout: { top: 120, left: 20 },                 
	        escapeHTML: NO,                                                       
        	value: "<b>role:</b> "+Fweb.userController.user.get('role')
        }),                                                                     
                                                                                
        statusView: SC.LabelView.extend({                                     
        	layout: { top: 150, left: 20 },                 
	        escapeHTML: NO,                                                       
        	value: "<b>status:</b> "+Fweb.userController.user.get('status')
        }),                                                                     
                                                                                
        subscriptionDateView: SC.LabelView.extend({                                     
        	layout: { top: 180, left: 20 },                 
	        escapeHTML: NO,                                                       
        	value: "<b>subscription:</b> "+Fweb.userController.user.get('subscriptionDate').toFormattedString('%d/%m/%Y %Z')
        }),  

		    lastConnectionView: SC.LabelView.extend({                                     
        	layout: { top: 210, left: 20 },                 
	        escapeHTML: NO,                                                       
        	value: "<b>last connection:</b> "+Fweb.userController.user.get('lastConnection').toFormattedString('%d/%m/%Y %H:%M:%S %Z')
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
