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
		    layout: { left: 0, right: 0, top: 0, height: 50 },
				classNames: ['ord-head'],
				childViews: 'num date ragSocCli clientRef dateClientRef dateDelivery ordStatus ordType ordDesc operator numL dateL ragSocCliL clientRefL dateClientRefL dateDeliveryL ordStatusL ordTypeL ordDescL operatorL'.w(),
				// general data - Label
				numL: SC.LabelView.design({
					layout: { left: 0, top: 2, height: 16, width: 60 },
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
				// general data - Field
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
				
				/*
				// destination data
				destination: SC.Record.attr(String),
				nation: SC.Record.attr(String),
				address: SC.Record.attr(String),
				city: SC.Record.attr(String),
				cap: SC.Record.attr(String),
				prov: SC.Record.attr(String),
				tel: SC.Record.attr(String),
				fax: SC.Record.attr(String),
				cell: SC.Record.attr(String),
				// ddt data
				ddtCausale: SC.Record.attr(String),
				ddtPorto: SC.Record.attr(String),
				ddtTrasporto: SC.Record.attr(String),
				ddtVettore: SC.Record.attr(String),
				ddtZonaVettore: SC.Record.attr(String),
				ddtModoTrasporto: SC.Record.attr(String),
				zone: SC.Record.attr(String),
				// general data 
				agent: SC.Record.attr(String),
				list: SC.Record.attr(String),
				valute: SC.Record.attr(String),
				modPag: SC.Record.attr(String),
				*/
				
			})
		);
		childViews.push(view);
		
		// rows labels
		view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 60, height: 20 },
				classNames: ['ord-rows-labels'],
				childViews: 'rowNumL quantL'.w(),
				
				rowNumL: SC.LabelView.design({
					layout: { left: 0, top: 2, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'riga',
				}),
				
				quantL: SC.LabelView.design({
					layout: { left: 70, top: 2, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'quantità',
				}),
				
			})
		);
		childViews.push(view);
		
		// ROWS of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 80, bottom: 10 },
				classNames: ['ord-rows'],
				childViews: 'rows'.w(),
				
				rows: SC.ListView.design({
				  contentBinding: 'Fweb.orderController.arrangedObjects',
				  selectionBinding: 'Fweb.orderController.selection',
					exampleView: Fweb.OrderRowView,
					rowHeight: 24,
					contentValueKey: 'desc1',
				}),
				
			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}

});
