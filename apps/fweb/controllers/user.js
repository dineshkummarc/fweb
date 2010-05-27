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
        childViews: 'nameView dataView buttonView'.w(),

        nameView: SC.LabelView.extend({
          layout: { top: 10, left: 0, height: 24 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          icon: sc_static('resources/icons/user_suit.png'),
          valueBinding: "Fweb.userController.user.description",
        }),
        
        dataView: SC.LabelView.extend({
        	layout: { top: 40, bottom: 40, left: 10, right: 10 },
	        escapeHTML: NO,
        	value: "<b>username:</b> "+Fweb.userController.user.get('userName')+"<i> // TODO form all data and binding</i>"
					// TODO form all data and binding
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
