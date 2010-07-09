// ==========================================================================
// Project:   Fweb.OrderEditView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.OrderEditView = SC.View.extend(
/** @scope Fweb.OrderEditView.prototype */ {
	classNames: ['edit-ord-view'],

	createChildViews: function(){
    var view, childViews = [];
		var ord = Fweb.orderController.get('nestedOrder');
		var basicData = 'Ordine '+ord.get('num')+' del '+ord.get('formattedDate')+' di '+ord.get('ragSocCli');
		var rifData = 'rif. '+ord.get('clientRef')+' del '+ord.get('dateClientRef').toFormattedString('%d/%m%Y'); 
		var spedDestData = 'Spedizione il '+ord.get('formattedDateDelivery')+' a '+ord.get('destination')+', '+ord.get('address')+' '+ord.get('city')+' ('+ord.get('prov')+') tel.'+ord.get('tel');
		var ddtData = 'Ddt di '+ord.get('ddtCausale')+' in porto '+ord.get('ddtPorto')+' tarmite il vettore '+ord.get('ddtVettore');
		var generalData = 'Agente '+ord.get('agent')+'. Listino '+ord.get('list')+'. Pagamento '+ord.get('modPag');

		// HEAD of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 10, right: 10, top: 10, height: 75 },
				classNames: ['edit-ord-head rounded hl'],
				toolTip: "Doppio click (o matita a destra) per aprire il pannello di inserimento/modifica della testa dell'ordine",
				childViews: 'actions basic rif operator spedDest ddt general'.w(),
				
				actions: SC.View.design({
					layout: { right: 0, top: 2, height: 20, width: 60 },
					classNames: ['actions rounded'],
					childViews: 'edit del'.w(),
					
					edit: SC.LabelView.design({
						layout: { right: 26, top: 0, height: 20, width: 20 },
						classNames: ['icon-button'],
						value: '',
						icon: sc_static('resources/icons/pencil.png'),
					}),
					del: SC.LabelView.design({
						layout: { right: 2, top: 0, height: 20, width: 20 },
						classNames: ['icon-button'],
						value: '',
						icon: sc_static('resources/icons/delete.png'),
					})
				}),
				
				basic: SC.LabelView.design({
					layout: { left: 2, top: 2, height: 18, width: 300 },
					classNames: ['basic-data rounded'],
					value: basicData,
				}),
				
				rif: SC.LabelView.design({
					layout: { left: 320, top: 2, height: 18, width: 300 },
					classNames: ['rif-data rounded'],
					value: rifData,
				}),
				
				operator: SC.LabelView.design({
					layout: { left: 638, top: 2, height: 18, width: 120 },
					textAlign: 'center',
					classNames: ['operator-data rounded'],
					value: 'operatore '+ord.get('operator'),
				}),
				
				spedDest: SC.LabelView.design({
					layout: { left: 8, top: 30, height: 16, width: 600 },
					classNames: ['sped-dest-data'],
					value: spedDestData,
				}),
				
				ddt: SC.LabelView.design({
					layout: { left: 610, top: 30, height: 16, width: 600 },
					classNames: ['ddt-data'],
					value: ddtData,
				}),
				
				general: SC.LabelView.design({
					layout: { left: 8, top: 55, height: 16, width: 1200 },
					classNames: ['general-data'],
					value: generalData,
				}),
				
				doubleClick: function(evt) {
					alert('double click on .edit-ord-head');
				},
				
			})
		);
		childViews.push(view);
		
		// ROWS of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 10, right: 10, top: 90 },
				classNames: ['edit-ord-rows'],
				childViews: 'rows'.w(),
				rows: SC.ListView.design({
				  contentBinding: 'Fweb.orderController.arrangedObjects',
				  selectionBinding: 'Fweb.orderController.selection',
					exampleView: Fweb.OrderEditRowView,
					rowHeight: 25,
					contentValueKey: 'num',
				}),

			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}
	
});
