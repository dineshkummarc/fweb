// ==========================================================================
// Project:   Fweb.OrderView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.OrderView = SC.View.extend(
/** @scope Fweb.OrderView.prototype */ {

	createChildViews: function(){
    var view, childViews = [];

		// HEAD of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 0, height: 120 },
				classNames: ['ord-head'],
				childViews: 'num date ragSocCli clientRef dateClientRef dateDelivery ordStatus ordType ordDesc operator destination address city cap prov nation tel fax cell ddtCausale ddtPorto ddtTrasporto ddtVettore ddtZonaVettore ddtModoTrasporto zone agent list valute modPag numL dateL ragSocCliL clientRefL dateClientRefL dateDeliveryL ordStatusL ordTypeL ordDescL operatorL destinationL addressL cityL capL provL nationL telL faxL cellL ddtCausaleL ddtPortoL ddtTrasportoL ddtVettoreL ddtZonaVettoreL ddtModoTrasportoL zoneL agentL listL valuteL modPagL'.w(),
				// general data - Label
				numL: SC.LabelView.design({
					layout: { left: 0, top: 2, height: 16, width: 80 },
					classNames: ['ord-field-label'],
					value: 'numero',
				}),
				dateL: SC.LabelView.design({
					layout: { left: 70, top: 2, height: 16, width: 80 },
					classNames: ['ord-field-label'],
					value: 'data',
				}),
				ragSocCliL: SC.LabelView.design({
					layout: { left: 160, top: 2, height: 16, width: 150 },
					classNames: ['ord-field-label'],
					value: 'cliente',
				}),
				clientRefL: SC.LabelView.design({
					layout: { left: 320, top: 2, height: 20, width: 100 },
					classNames: ['ord-field-label'],
					value: 'rif.cli',
				}),
				dateClientRefL: SC.LabelView.design({
					layout: { left: 430, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'data rif.cli.',
				}),
				dateDeliveryL: SC.LabelView.design({
					layout: { left: 520, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'data sped.',
				}),
				ordStatusL: SC.LabelView.design({
					layout: { left: 610, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'S',
				}),
				ordTypeL: SC.LabelView.design({
					layout: { left: 640, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'tipo',
				}),
				ordDescL: SC.LabelView.design({
					layout: { left: 690, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'descrizone',
				}),
				operatorL: SC.LabelView.design({
					layout: { left: 800, top: 2, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'operatore',
				}),
				// destination data - Label
				destinationL: SC.LabelView.design({
					layout: { left: 0, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'destinazione'
				}),
				addressL: SC.LabelView.design({
					layout: { left: 160, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'indirizzo',
				}),
				cityL: SC.LabelView.design({
					layout: { left: 270, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'città',
				}),
				capL: SC.LabelView.design({
					layout: { left: 380, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'cap',
				}),
				provL: SC.LabelView.design({
					layout: { left: 440, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'pr',
				}),
				nationL: SC.LabelView.design({
					layout: { left: 480, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'nazione',
				}),
				telL: SC.LabelView.design({
					layout: { left: 590, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'telefono',
				}),
				faxL: SC.LabelView.design({
					layout: { left: 700, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'fax',
				}),
				cellL: SC.LabelView.design({
					layout: { left: 810, top: 42, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'cellulare',
				}),
				// ddt data - Fields
				ddtCausaleL: SC.LabelView.design({
					layout: { left: 0, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'causale',
				}),
				ddtPortoL: SC.LabelView.design({
					layout: { left: 110, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'porto',
				}),
				ddtTrasportoL: SC.LabelView.design({
					layout: { left: 170, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'trasporto',
				}),
				ddtVettoreL: SC.LabelView.design({
					layout: { left: 230, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'vettore',
				}),
				ddtZonaVettoreL: SC.LabelView.design({
					layout: { left: 340, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'zona vett.',
				}),
				ddtModoTrasportoL: SC.LabelView.design({
					layout: { left: 400, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'modo',
				}),
				zoneL: SC.LabelView.design({
					layout: { left: 460, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'zona',
				}),
				// general data - Labels
				agentL: SC.LabelView.design({
					layout: { left: 600, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'agente',
				}),
				listL: SC.LabelView.design({
					layout: { left: 710, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'listino',
				}),
				valuteL: SC.LabelView.design({
					layout: { left: 820, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'valuta',
				}),
				modPagL: SC.LabelView.design({
					layout: { left: 880, top: 82, height: 20, width: 80 },
					classNames: ['ord-field-label'],
					value: 'pagamento',
				}),
				
				// general data - Fields
				num: SC.TextFieldView.design({
					layout: { left: 0, top: 20, height: 20, width: 60 },
					valueBinding: 'Fweb.orderController.nestedOrder.num',
				}),
				date: SC.TextFieldView.design({
					layout: { left: 70, top: 20, height: 20, width: 80 },
					valueBinding: 'Fweb.orderController.nestedOrder.formattedDate',
				}),
				ragSocCli: SC.TextFieldView.design({
					layout: { left: 160, top: 20, height: 20, width: 150 },
					valueBinding: 'Fweb.orderController.nestedOrder.ragSocCli',
				}),
				clientRef: SC.TextFieldView.design({
					layout: { left: 320, top: 20, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.clientRef',
				}),
				dateClientRef: SC.TextFieldView.design({
					layout: { left: 430, top: 20, height: 20, width: 80 },
					valueBinding: SC.Binding.dateTime('%d/%m/%Y').from('Fweb.orderController.nestedOrder.dateClientRef'),
				}),
				dateDelivery: SC.TextFieldView.design({
					layout: { left: 520, top: 20, height: 20, width: 80 },
					valueBinding: SC.Binding.dateTime('%d/%m/%Y').from('Fweb.orderController.nestedOrder.dateDelivery'),
				}),
				ordStatus: SC.TextFieldView.design({
					layout: { left: 610, top: 20, height: 20, width: 20 },
					valueBinding: 'Fweb.orderController.nestedOrder.ordStatus',
				}),
				ordType: SC.TextFieldView.design({
					layout: { left: 640, top: 20, height: 20, width: 40 },
					valueBinding: 'Fweb.orderController.nestedOrder.ordType',
				}),
				ordDesc: SC.TextFieldView.design({
					layout: { left: 690, top: 20, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.ordDesc',
				}),
				operator: SC.TextFieldView.design({
					layout: { left: 800, top: 20, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.operator',
				}),
				// destination data - Field
				destination: SC.TextFieldView.design({
					layout: { left: 0, top: 60, height: 20, width: 150 },
					valueBinding: 'Fweb.orderController.nestedOrder.destination',
				}),
				address: SC.TextFieldView.design({
					layout: { left: 160, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.address',
				}),
				city: SC.TextFieldView.design({
					layout: { left: 270, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.city',
				}),
				cap: SC.TextFieldView.design({
					layout: { left: 380, top: 60, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.cap',
				}),
				prov: SC.TextFieldView.design({
					layout: { left: 440, top: 60, height: 20, width: 30 },
					valueBinding: 'Fweb.orderController.nestedOrder.prov',
				}),
				nation: SC.TextFieldView.design({
					layout: { left: 480, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.nation',
				}),
				tel: SC.TextFieldView.design({
					layout: { left: 590, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.tel',
				}),
				fax: SC.TextFieldView.design({
					layout: { left: 700, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.fax',
				}),
				cell: SC.TextFieldView.design({
					layout: { left: 810, top: 60, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.cell',
				}),
				// ddt data - Fields
				ddtCausale: SC.TextFieldView.design({
					layout: { left: 0, top: 100, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtCausale',
				}),
				ddtPorto: SC.TextFieldView.design({
					layout: { left: 110, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtPorto',
				}),
				ddtTrasporto: SC.TextFieldView.design({
					layout: { left: 170, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtTrasporto',
				}),
				ddtVettore: SC.TextFieldView.design({
					layout: { left: 230, top: 100, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtVettore',
				}),
				ddtZonaVettore: SC.TextFieldView.design({
					layout: { left: 340, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtZonaVettore',
				}),
				ddtModoTrasporto: SC.TextFieldView.design({
					layout: { left: 400, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.ddtModoTrasporto',
				}),
				zone: SC.TextFieldView.design({
					layout: { left: 460, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.zone',
				}),
				// general data - Fields
				agent: SC.TextFieldView.design({
					layout: { left: 600, top: 100, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.agent',
				}),
				list: SC.TextFieldView.design({
					layout: { left: 710, top: 100, height: 20, width: 100 },
					valueBinding: 'Fweb.orderController.nestedOrder.list',
				}),
				valute: SC.TextFieldView.design({
					layout: { left: 820, top: 100, height: 20, width: 50 },
					valueBinding: 'Fweb.orderController.nestedOrder.valute',
				}),
				modPag: SC.TextFieldView.design({
					layout: { left: 880, top: 100, height: 20, width: 200 },
					valueBinding: 'Fweb.orderController.nestedOrder.modPag',
				}),
				
				doubleClick: function(evt) {
					alert('double click on .ord-head');
				}
				
			})
		);
		childViews.push(view);
		
		// rows labels
		view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 132, height: 20 },
				classNames: ['ord-rows-labels'],
				childViews: 'rowNumL quantL quantEvasaL artL desc1L lengthL widthL heightL datConPrevL priceL noteL'.w(),
				
				rowNumL: SC.LabelView.design({
					layout: { left: 0, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'riga',
				}),
				quantL: SC.LabelView.design({
					layout: { left: 30, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'quantità',
				}),
				quantEvasaL: SC.LabelView.design({
					layout: { left: 90, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'evasa',
				}),
				artL: SC.LabelView.design({
					layout: { left: 150, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'articolo',
				}),
				desc1L: SC.LabelView.design({
					layout: { left: 260, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'descrizione',
				}),
				lengthL: SC.LabelView.design({
					layout: { left: 470, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'lunghezza',
				}),
				widthL: SC.LabelView.design({
					layout: { left: 530, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'larghezza',
				}),
				heightL: SC.LabelView.design({
					layout: { left: 590, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'altezza',
				}),
				datConPrevL: SC.LabelView.design({
					layout: { left: 650, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'consegna',
				}),
				priceL: SC.LabelView.design({
					layout: { left: 740, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'prezzo EURO',
				}),
				noteL: SC.LabelView.design({
					layout: { left: 830, top: 0, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'note',
				}),
				
			})
		);
		childViews.push(view);
		
		// ROWS of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 150, bottom: 10 },
				classNames: ['ord-rows'],
				childViews: 'rows'.w(),
				
				rows: SC.ListView.design({
				  contentBinding: 'Fweb.orderController.arrangedObjects',
				  selectionBinding: 'Fweb.orderController.selection',
					exampleView: Fweb.OrderRowView,
					rowHeight: 30,
					contentValueKey: 'desc1',
				}),
				
			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}

});
