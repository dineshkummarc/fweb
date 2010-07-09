// ==========================================================================
// Project:   Fweb.orderController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

var now = SC.DateTime.create();

/** @class

  This controller manage single order views and actions

  @extends SC.ArrayController
*/
Fweb.orderController = SC.ArrayController.create(
/** @scope Fweb.orderController.prototype */ {

	nestedStore: null,
	order: null,
	nestedOrder: null,
	title: null,
	
	// create and load a new order record
	loadNewOrder: function() {
		var nestedStore = Fweb.store.chain(); // create nested store
		var order = nestedStore.createRecord(Fweb.Order, {guid: 999, date: now, dateClientRef: now}); // create a new order (guid ?!?!? http://groups.google.com/group/sproutcore/browse_thread/thread/af45cd5d964d4b91/bf6c9bc2f2c34e3e?lnk=gst&q=CREATERECORD#bf6c9bc2f2c34e3e)
		this.set('order', order);
		this.set('title', 'Ordine');
		var nestedOrder = nestedStore.find(order); // nested record of Order
		this.set('nestedStore', nestedStore);
		this.set('nestedOrder', nestedOrder);
		var emptyRow = nestedStore.createRecord(Fweb.OrderRow, {guid: 999, order: nestedOrder.get('guid'), rowNum: 1, datConPrev: now});
		this.set('content', [emptyRow]);
	},
	
	// load an order
	loadOrder: function() {
		var nestedStore = Fweb.store.chain(); // create nested store
		var selected = Fweb.ordersController.getPath('selection') // selection set of selected order
		var order = selected.firstObject(); // the selected order
		this.set('order', order);
		this.set('title', 'Ordine '+order.get('num'));
		var nestedOrder = nestedStore.find(order); // nested record of Order
		this.set('nestedStore', nestedStore);
		this.set('nestedOrder', nestedOrder);
		// load rows data in content of this controller
		var rowsQuery = SC.Query.local(Fweb.OrderRow, {
		   conditions: 'order = {order}',
		   order: nestedOrder,
		});
		this.set('content',nestedStore.find(rowsQuery));
	},
	
	showNewOrder: function() {
		this.loadNewOrder();
		Fweb.mainMenuController.set('nowShowing', 'OrderView');
	},
	
	showOrder: function() {
		this.loadOrder();
		Fweb.mainMenuController.set('nowShowing', 'OrderView');
	},
	
	showHeadPane: function() {
	  var pane = SC.PickerPane.create({
	    layout: { left: 345, top: 116, right: 20, height: 200 },
	    contentView: SC.View.extend({
	      layout: { top: 0, left: 0, bottom: 0, right: 0 },
	      childViews: 'titleView'.w(),

	      titleView: SC.LabelView.extend({
	        layout: { top: 10, left: 10, height: 24 },
	        controlSize: SC.LARGE_CONTROL_SIZE,
	        icon: sc_static('resources/icons/sport_soccer.png'),
	        value: "Head"
	      }),

	    })
	  });
	  pane.append();
	  this.set('filterPane', pane);
	},
	
	hideFilterPane: function() {
    this.filterPane.remove();
  },

}) ;
