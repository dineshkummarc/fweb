// ==========================================================================
// Project:   Fweb.Order Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

sc_require('models/order');

var now = SC.DateTime.create();

Fweb.Order.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },

	{ guid: 1,
		client: 1,
		orderRows: [1],
		num: "1",
		date: now.advance({ day: -1 }),
		clientRef: "10/01/A",
		dateClientRef: now.advance({ day: -1 }),
		ordStatus: "I",
		ordType: "normal",
		ordDesc: "first order from Dino",
		operator: "MTF",
		destination: "Dino 	magazzino 2",
		nation: "IT",
		address: "via del cavolo 111",
		city: "Sgonico",
		cap: "34788",
		prov: "TS",
		tel: "0039040444677",
		fax: "",
		cell: "",
		ddtCausale: "vendita",
		ddtPorto: "Franco",
		ddtTrasporto: "V",
		ddtVettore: "Giuseppe Balestra & c.",
		ddtZonaVettore: "nord est",
		ddtModoTrasporto: "gomma",
		zone: "nord est",
		agent: "Joe Chip",
		list: "standard",
		valute: "euro",
		modPag: "bonifico 30gg" },

	{ guid: 2,
		client: 1,
		orderRows: [2],
		num: "2",
		date: now.advance({ day: -2 }),
		clientRef: "10/02/A",
		dateClientRef: now.advance({ day: -1 }),
		ordStatus: "I",
		ordType: "normal",
		ordDesc: "second order from Dino",
		operator: "MTF",
		destination: "Dino 	magazzino 3",
		nation: "IT",
		address: "via del cavolo 111",
		city: "Sgonico",
		cap: "34788",
		prov: "TS",
		tel: "0039040444677",
		fax: "",
		cell: "",
		ddtCausale: "vendita",
		ddtPorto: "Franco",
		ddtTrasporto: "V",
		ddtVettore: "Giuseppe Balestra & c.",
		ddtZonaVettore: "nord est",
		ddtModoTrasporto: "gomma",
		zone: "nord est",
		agent: "Joe Chip",
		list: "standard",
		valute: "euro",
		modPag: "bonifico 30gg" }

];
