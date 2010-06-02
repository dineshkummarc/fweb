// ==========================================================================
// Project:   Fweb.Recent Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

sc_require('models/recent');

Fweb.Recent.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  
  { guid: 1,
    typeDoc: "ddt",
    numDoc: "10/2013",
 		descDoc: "DDT 10/2013 of 12/5/2010 - Alpeat Snc - 5 colli" },
  
  { guid: 2,
    typeDoc: "ord",
    numDoc: "10/3303",
 		descDoc: "Ordine 10/3303 of 12/5/2010 - Minini SPA - 45 lastre" },
  
 	{ guid: 3,
    typeDoc: "ddt",
    numDoc: "10/2010",
 		descDoc: "DDT 10/2010 of 12/5/2010 - Vant Snc - 65 colli" },
  
 	{ guid: 4,
	  typeDoc: "off",
    numDoc: "10/1111",
 		descDoc: "Offerta of 12/5/2010 - DRF by cept snc - 9 lastre" },
  
];