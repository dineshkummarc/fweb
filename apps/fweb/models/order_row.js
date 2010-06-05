// ==========================================================================
// Project:   Fweb.OrderRow
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  Order rows model

  @extends SC.Record
  @version 0.1
*/
Fweb.OrderRow = SC.Record.extend(
/** @scope Fweb.OrderRow.prototype */ {

	order: SC.Record.toOne("Fweb.Order", {
	   inverse: "orderRows", isMaster: NO
  }),
	
	rowNum: SC.Record.attr(Number),
	origRowNum: SC.Record.attr(Number),
	length: SC.Record.attr(Number),
	width: SC.Record.attr(Number),
	height: SC.Record.attr(Number),
	rowStatus: SC.Record.attr(String),
	rowType: SC.Record.attr(String),
	art: SC.Record.attr(String),
	artVar: SC.Record.attr(String),
	artCli: SC.Record.attr(String),
	desc1: SC.Record.attr(String),
	desc2: SC.Record.attr(String),
	desc3: SC.Record.attr(String),
	desc4: SC.Record.attr(String),
	prodType: SC.Record.attr(String),
	fuoriMisura: SC.Record.attr(String),
	siglaDep: SC.Record.attr(String),
	unMis: SC.Record.attr(String),
	sconto: SC.Record.attr(Number),	
	extraSconto1: SC.Record.attr(Number),
	extraSconto2: SC.Record.attr(Number),
	extraSconto3: SC.Record.attr(Number),
	extraSconto4: SC.Record.attr(Number),
	condExtraSconto1: SC.Record.attr(String),
	condExtraSconto2: SC.Record.attr(String),
	condExtraSconto3: SC.Record.attr(String),
	condExtraSconto4: SC.Record.attr(String),
	aliqIva: SC.Record.attr(Number),
	price: SC.Record.attr(Number),
	valSconto: SC.Record.attr(Number),
	quant: SC.Record.attr(Number),
	quantInProd: SC.Record.attr(Number),
	quantProd: SC.Record.attr(Number),
	quantInSped: SC.Record.attr(Number),
	quantEvasa: SC.Record.attr(Number),
	datConPrev: SC.Record.attr(SC.DateTime),
	datConRich: SC.Record.attr(SC.DateTime),
	datConProd: SC.Record.attr(SC.DateTime),
	percAgent: SC.Record.attr(Number),
	quantInProd: SC.Record.attr(Number),
	serial: SC.Record.attr(String),
	zone: SC.Record.attr(String),
	omaggio: SC.Record.attr(String),
	passoPerProduz: SC.Record.attr(String),
	note: SC.Record.attr(String) 
		
	/* residuo da campi F12 standard
	or_perc_rif1       smallfloat, { Perc. Agente Rif. 1 }
	or_perc_rif2       smallfloat, { Perc. Agente Rif. 2 }

	or_codice_foratura char (2),   { Codice di Foratura }
	or_nota            char (30),  { Commento }
	or_dest_finale     char (40)   { Destinatario } */

}) ;
