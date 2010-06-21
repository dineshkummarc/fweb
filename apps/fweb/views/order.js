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
				childViews: 'numL num dateL date ragSocCliL ragSocCli'.w(),
							
				numL: SC.LabelView.design({
					layout: { left: 0, top: 2, height: 16, width: 60 },
					classNames: ['ord-field-label'],
					value: 'numero',
				}),
				num: SC.TextFieldView.design({
					layout: { left: 0, top: 20, height: 20, width: 60 },
					valueBinding: 'Fweb.orderController.nestedOrder.num',
				}),
				
				dateL: SC.LabelView.design({
					layout: { left: 70, top: 2, height: 16, width: 80 },
					classNames: ['ord-field-label'],
					value: 'data',
				}),
				date: SC.TextFieldView.design({
					layout: { left: 70, top: 20, height: 20, width: 80 },
					valueBinding: 'Fweb.orderController.nestedOrder.formattedDate',
				}),
				
				ragSocCliL: SC.LabelView.design({
					layout: { left: 160, top: 2, height: 16, width: 150 },
					classNames: ['ord-field-label'],
					value: 'cliente',
				}),
				ragSocCli: SC.TextFieldView.design({
					layout: { left: 160, top: 20, height: 20, width: 150 },
					valueBinding: 'Fweb.orderController.nestedOrder.ragSocCli',
				}),
				
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
