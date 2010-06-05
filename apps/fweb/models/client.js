// ==========================================================================
// Project:   Fweb.Client
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  Model for clients

  @extends SC.Record
  @version 0.1
*/
Fweb.Client = SC.Record.extend(
/** @scope Fweb.Client.prototype */ {

	orders: SC.Record.toMany("Fweb.Order", {
	   inverse: "client", isMaster: YES
  }),
	
  ragSoc: SC.Record.attr(String),
	descr: SC.Record.attr(String),
	pIva: SC.Record.attr(String),
	cFisc: SC.Record.attr(String),
	vatNumb: SC.Record.attr(String),
	nation: SC.Record.attr(String),
	address: SC.Record.attr(String),
	city: SC.Record.attr(String),
	cap: SC.Record.attr(String),
	prov: SC.Record.attr(String),
	tel: SC.Record.attr(String),
	fax: SC.Record.attr(String),
	cell: SC.Record.attr(String),
  isActive: SC.Record.attr(Boolean, { defaultValue: YES }),

	fullAddress: function() {
	    return this.getEach('address', 'city', 'cap', 'prov', 'tel').compact().join(' ');
	  }.property('address', 'city', 'cap', 'prov', 'tel').cacheable()

}) ;
