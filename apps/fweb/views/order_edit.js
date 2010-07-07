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

	createChildViews: function(){
    var view, childViews = [];

		// HEAD of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 0, height: 120 },
				classNames: ['ord-head'],
				childViews: 'num'.w(),
				
				num: SC.LabelView.design({
					layout: { left: 0, top: 2, height: 16, width: 80 },
					classNames: ['ord-field'],
					value: Fweb.orderController.get('nestedOrder').get('num'),
				}),
				
				doubleClick: function(evt) {
					alert('double click on .ord-head');
				}
				
			})
		);
		childViews.push(view);
    this.set('childViews', childViews);
	}
	
});
