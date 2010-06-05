// ==========================================================================
// Project:   Fweb.OrderRow Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

sc_require('models/order_row');

var now = SC.DateTime.create();

Fweb.OrderRow.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  
	{	guid: 1,
		order: 1,	
		rowNum: 1,
		origRowNum: 1,
		length: 150,
		width: 300,
		height: 28.50,
		rowStatus: "I",
		rowType: "A",
		art: "A000120045",
		artVar: "",
		artCli: "TRB01",
		desc1: "guitar analog multi effect",
		desc2: "metal blue box",
		desc3: "",
		desc4: "",
		prodType: "hand crafted",
		fuoriMisura: "N",
		siglaDep: "",
		unMis: "PZ",
		sconto: 0.10,	
		extraSconto1: 0,
		extraSconto2: 0,
		extraSconto3: 0,
		extraSconto4: 0,
		condExtraSconto1: "",
		condExtraSconto2: "",
		condExtraSconto3: "",
		condExtraSconto4: "",
		aliqIva: 20.00,
		price: 400.00,
		valSconto: 40.00,
		quant: 1,
		quantInProd: 1,
		quantProd: 1,
		quantInSped: 1,
		quantEvasa: 0,
		datConPrev: now.advance({ day: +10 }),
		datConRich: now.advance({ day: +7 }),
		datConProd: now.advance({ day: +4 }),
		percAgent: 0,
		quantInProd: 1,
		serial: "GAME400",
		zone: "nord est",
		omaggio: "N",
		passoPerProduz: "",
		note: "Aggiungere un set di potenziometri omaggio." }

];
