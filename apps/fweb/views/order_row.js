// ==========================================================================
// Project:   Fweb.OrderRowView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.OrderRowView = SC.View.extend(
/** @scope Fweb.OrderRowView.prototype */ {

	createChildViews: function(){
    var view, childViews = [];
		var row = this.get('content');
		// ROW of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 0, height: 50 },
				classNames: ['ord-row'],
				childViews: 'rowNum quant quantEvasa art desc1 length width height datConPrev price note'.w(),
							
				rowNum: SC.LabelView.design({
					layout: { left: 0, top: 0, height: 20, width: 30 },
					value: row.get('rowNum'),
				}),
				quant: SC.TextFieldView.design({
					layout: { left: 30, top: 0, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.quant',
				}),
				quantEvasa: SC.TextFieldView.design({
					layout: { left: 90, top: 0, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.quantEvasa',
				}),
				art: SC.TextFieldView.design({
					layout: { left: 150, top: 0, height: 20, width: 100 },
					valueBinding: '.parentView.parentView.content.art',
				}),
				desc1: SC.TextFieldView.design({
					layout: { left: 260, top: 0, height: 20, width: 200 },
					valueBinding: '.parentView.parentView.content.desc1',
				}),
				length: SC.TextFieldView.design({
					layout: { left: 470, top: 0, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.length',
				}),
				width: SC.TextFieldView.design({
					layout: { left: 530, top: 0, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.width',
				}),
				height: SC.TextFieldView.design({
					layout: { left: 590, top: 0, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.height',
				}),
				datConPrev: SC.TextFieldView.design({
					layout: { left: 650, top: 0, height: 20, width: 80 },
					valueBinding: SC.Binding.dateTime('%d/%m/%Y').from('.parentView.parentView.content.datConPrev'),
				}),
				price: SC.TextFieldView.design({
					layout: { left: 740, top: 0, height: 20, width: 80 },
					valueBinding: '.parentView.parentView.content.price',
				}),
				note: SC.TextFieldView.design({
					layout: { left: 830, top: 0, height: 20, width: 200 },
					valueBinding: '.parentView.parentView.content.note',
				}),
				
				/*																					*** ROW *********************************
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
				*/
			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}

});
