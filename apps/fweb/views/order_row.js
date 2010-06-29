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
				childViews: 'rowNum quant'.w(),
							
				rowNum: SC.LabelView.design({
					layout: { left: 0, top: 4, height: 20, width: 60 },
					value: row.get('rowNum'),
				}),
				
				quant: SC.TextFieldView.design({
					layout: { left: 70, top: 4, height: 20, width: 60 },
					value: this.get('content').get('quant'),
					//value: row.get('quant'),
				}),
				
			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}

});
