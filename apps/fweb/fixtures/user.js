// ==========================================================================
// Project:   Fweb.User Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

sc_require('models/user');

var now = SC.DateTime.create();
var yesterday = now.advance({ day: -1 });
var lastYear = now.advance({ year: -1 });


Fweb.User.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  
	{ guid: 1,
		userName: "MTF",
		description: "Matteo Folin",
		role: "administrator",
		userStatus: "connected",
		subscriptionDate: lastYear,
		lastConnection: yesterday,		
	}

];
