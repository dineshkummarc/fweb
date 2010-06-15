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
	
	// TODO acthung !!! if add button new record in any case !!! TODO
	loadOrder: function() {
		var nestedStore = Fweb.store.chain(); // create nested store
		var selected = Fweb.ordersController.getPath('selection') // selection set of selected order
		if (selected.length() > 0) {
			var order = selected.firstObject(); // the selected order
		}else{
			var order = nestedStore.createRecord(Fweb.Order, {guid: 999}); // create a new order (guid ?!?!? http://groups.google.com/group/sproutcore/browse_thread/thread/af45cd5d964d4b91/bf6c9bc2f2c34e3e?lnk=gst&q=CREATERECORD#bf6c9bc2f2c34e3e)
		};
		this.set('order', order);
		var nestedOrder = nestedStore.find(order); // nested record of Order
		this.set('nestedStore', nestedStore);
		this.set('nestedOrder', nestedOrder);
		alert("order="+order);
		alert("nestedOrder="+nestedOrder);
	},
	
	showOrder: function() {
		this.loadOrder();
		Fweb.mainMenuController.set('nowShowing', 'OrderView')
	},

}) ;
