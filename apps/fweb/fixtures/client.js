// ==========================================================================
// Project:   Fweb.Client Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

sc_require('models/client');

Fweb.Client.FIXTURES = [

  // TODO: It would be better use another model "Sede" con indirizzo, tel.
 	// 			 ecc... così da poter gestire + sedi...
  
  { guid: 1,
		orders: [1],
    ragSoc: "Dino S.p.A.",
    descr: "Produzione e commercializzazione dinosauri",
    pIva: "003854406789",
    cFisc: "003854406789",
    vatNumb: "",
    nation: "IT",
    address: "via del Mulinello 43/A",
    city: "Prosecco",
    cap: "34178",
    prov: "TS",
    tel: "003904046999",
    fax: "003904046987",
    cell: "00393200116511",
 		isactive: YES }

];