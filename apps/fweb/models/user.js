// ==========================================================================
// Project:   Fweb.User
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  User logged data

  @extends SC.Record
  @version 0.1
*/
Fweb.User = SC.Record.extend(
/** @scope Fweb.User.prototype */ {

  userName: SC.Record.attr(String),
	description: SC.Record.attr(String),
	role: SC.Record.attr(String),
	status: SC.Record.attr(String),
	subscriptionDate: SC.Record.attr(SC.DateTime),
	lastConnection: SC.Record.attr(SC.DateTime),

}) ;
