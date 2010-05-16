// ==========================================================================
// Project:   Fweb.MainMenuView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.MainMenuView = SC.View.extend(
/** @scope Fweb.MainMenuView.prototype */ {

	createChildViews: function(){
    var view, childViews = [];

		// Using the Design Pattern method...only need to fill out the first parameter of the createChildView()
    view = this.createChildView( 
      SC.ToolbarView.design({
        layout: {left: 0, top: 0, width: 1000, height: 50},
        childViews: 'title'.w(),

				title: SC.LabelView.design({
					layout: { top: 0, left: 10 },
					value: 'MainManuView'
				}),
      })
    );
    childViews.push(view);

    this.set('childViews', childViews);
  }

});
