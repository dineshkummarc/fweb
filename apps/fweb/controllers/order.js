// ==========================================================================
// Project:   Fweb.orderController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

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
		var order = nestedStore.createRecord(Fweb.Order, {guid: 999}); // create a new order (guid ?!?!? http://groups.google.com/group/sproutcore/browse_thread/thread/af45cd5d964d4b91/bf6c9bc2f2c34e3e?lnk=gst&q=CREATERECORD#bf6c9bc2f2c34e3e)
		this.set('order', order);
		this.set('title', 'Nuovo ordine');
		var nestedOrder = nestedStore.find(order); // nested record of Order
		this.set('nestedStore', nestedStore);
		this.set('nestedOrder', nestedOrder);
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
		   order: order,
		});
		this.set('content',Fweb.store.find(rowsQuery));
	},
	
	showNewOrder: function() {
		this.loadNewOrder();
		Fweb.mainMenuController.set('nowShowing', 'OrderView')
	},
	
	showOrder: function() {
		this.loadOrder();
		Fweb.mainMenuController.set('nowShowing', 'OrderView')
	},

}) ;
