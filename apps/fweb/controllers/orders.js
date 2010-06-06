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

	nowShowing: "",
	
	showOrders: function() {
		this.set('nowShowing', 'OrdersView')
	}

}) ;
