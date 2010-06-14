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

	showOrder: function() {
		Fweb.mainMenuController.set('nowShowing', 'OrderView')
	},

}) ;
