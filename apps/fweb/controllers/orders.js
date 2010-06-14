// ==========================================================================
// Project:   Fweb.ordersController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  This controller manage all CRUD operations on orders

  @extends SC.ArrayController
*/
Fweb.ordersController = SC.ArrayController.create(
/** @scope Fweb.ordersController.prototype */ {

	filterPane: null,
	ordersPopupMenu: null,
	alertPane: null,
	
	showOrders: function() {
		Fweb.mainMenuController.set('nowShowing', 'OrdersView')
	},
	
	showFilterPane: function() {
    var pane = SC.SheetPane.create({
      layout: { centerX: 0, centerY: 0, width: 600, height: 400 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'titleView dataView buttonView'.w(),

        titleView: SC.LabelView.extend({
          layout: { top: 10, left: 0, height: 24 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          icon: sc_static('resources/icons/filter.png'),
          value: "Filtri sugli ordini"
        }),
        
        dataView: SC.LabelView.extend({
        	layout: { top: 40, bottom: 40, left: 10, right: 10 },
        	value: "...filters..."
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 10, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "Fweb.ordersController.filterPane"
        })
      })
    });
    pane.append();
    this.set('filterPane', pane);
  },

	showAlertPane: function(message, subMessage) {
		if (message==undefined || message=='') { message = 'Alert!'};
		if (subMessage==undefined || subMessage=='') { subMessage = 'something happened.'};
		subMessage = Fweb.ordersController.getPath('selection');
    var pane = SC.AlertPane.warn(message, subMessage, '', "OK", this); 
    pane.append();
    this.set('alertPane', pane);
  },

  hideFilterPane: function() {
    this.filterPane.remove();
  },
	
}) ;
