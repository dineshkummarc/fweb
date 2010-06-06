// ==========================================================================
// Project:   Fweb.Order
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  Model for orders, only head data, rows data in OrderRow model.
	TODO: destination in another model, Sede or similar...

  @extends SC.Record
  @version 0.1
*/
Fweb.Order = SC.Record.extend(
/** @scope Fweb.Order.prototype */ {

	client: SC.Record.toOne("Fweb.Client", {
	   inverse: "orders", isMaster: NO
  }),

	orderRows: SC.Record.toMany("Fweb.OrderRow", {
	   inverse: "order", isMaster: YES
  }),

	num: SC.Record.attr(String),
	date: SC.Record.attr(SC.DateTime),
	clientRef: SC.Record.attr(String),
	dateClientRef: SC.Record.attr(SC.DateTime),
	ordStatus: SC.Record.attr(String),
	ordType: SC.Record.attr(String),
	ordDesc: SC.Record.attr(String),
	operator: SC.Record.attr(String),
	destination: SC.Record.attr(String),
	nation: SC.Record.attr(String),
	address: SC.Record.attr(String),
	city: SC.Record.attr(String),
	cap: SC.Record.attr(String),
	prov: SC.Record.attr(String),
	tel: SC.Record.attr(String),
	fax: SC.Record.attr(String),
	cell: SC.Record.attr(String),
	ddtCausale: SC.Record.attr(String),
	ddtPorto: SC.Record.attr(String),
	ddtTrasporto: SC.Record.attr(String),
	ddtVettore: SC.Record.attr(String),
	ddtZonaVettore: SC.Record.attr(String),
	ddtModoTrasporto: SC.Record.attr(String),
	zone: SC.Record.attr(String),
	agent: SC.Record.attr(String),
	list: SC.Record.attr(String),
	valute: SC.Record.attr(String),
	modPag: SC.Record.attr(String),
	
	fullDest: function() {
	  return this.getEach('destination', 'address', 'city', 'cap', 'prov', 'tel').compact().join(' ');
	}.property('destination', 'address', 'city', 'cap', 'prov', 'tel').cacheable(),
	
	formattedDate: function() {
		return this.getEach('date').map('toFormattedString', '%d/%m/%Y');
	}.property('date').cacheable()
	
	// others from F12 standard tables :
	/* oi_dest_n_1        char (4),  { dest. nota 1 }
	oi_dest_n_2        char (4),  { dest. nota 2 }
	oi_dest_n_3        char (4),  { dest. nota 3 }
	oi_dest_n_4        char (4),  { dest. nota 4 }
	oi_note1           char (50), { nota 1 }
	oi_note2           char (50), { nota 2 }
	oi_note3           char (50), { nota 3 }
	oi_note4           char (50), { nota 4 }
	oi_sc_compl        char (5),  { Sconto Complessivo }
	oi_sc_compl_2      char (5),  { Sconto Complessivo 2 }
	oi_sc_trasp        char (5),  { Sconto per Trasporto }
	oi_spe_incasso     char (1),  { Spese Incasso (S,N) }
	oi_spe_bolli       char (1),  { Spese Bolli (S,N) }
	oi_sp1_varie       char (3),  { Spese Varie 1 }
	oi_sp2_varie       char (3),  { Spese Varie 2 }
	oi_codre           char (5),  { Resa }
	oi_citre           char (25), { Citta' di Resa }
	oi_fatturaz        char (1),  { Fatturazione (C,F) }
	oi_age_rif1        char (3),  { Agente Riferimento 1 }
	oi_age_rif2        char (3),  { Agente Riferimento 2 }
	oi_num_tel         char (25), { Telefono }
	oi_num_telefax     char (20), { Telefax }
	oi_descragg        char (40), { Descrizione Aggiuntiva }
	oi_sostituzione    char (10), { Funzione Sostituzione }
	oi_causa_errore    char (10), { Causa Errore }
	oi_stato_sost      char (1),  { Stato Sostituzione (A,E,C) }
	oi_sost_finale     char (10), { Funzione Causa Sostituzione Finale }
	oi_causa_finale    char (10), { Causa Errore Finale }
	oi_sos_rif_ser     integer,   { Ordine di Rifer.(AA/NR) }
	oi_azione_corr     char (10), { Azione Correttiva }
	oi_addebito        char (1),  { Addebito Cliente (S,N,D) }
	oi_capo_area       char (10), { Capo Area }
	oi_opeinser        char (3),  { Operatore Inserimento }
	oi_codice          char (7),  { Ordine }
	oi_stato_blo       char (1),  { Stato Blocco (N,S,B) }
	oi_cau_blo         char (10), { Causale Blocco }
	oi_validazione_ord char (1),  { Validazione (N,S,X) }
	oi_consegna        char (1),  { Tipo Consegna (N,T,U) }
	oi_dt_carico       date,      { Data carico }
	oi_ritiro_merc     char (1)   { Ritiro Merce (S,N) } */

}) ;
