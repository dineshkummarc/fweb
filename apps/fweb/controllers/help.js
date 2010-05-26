// ==========================================================================
// Project:   Fweb.helpController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Fweb.helpController = SC.ObjectController.create(
/** @scope Fweb.helpController.prototype */ {
	pane: null,

  showHelpPane: function() {
    var pane = SC.SheetPane.create({
      layout: { centerX: 0, centerY: 0, width: 800, height: 500 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'titleView dataView buttonView'.w(),

        titleView: SC.LabelView.extend({
          layout: { top: 10, left: 0, height: 24 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          icon: 'sc-icon-help-16',
          value: "Help online"
        }),
        
        dataView: SC.LabelView.extend({
        	layout: { top: 40, bottom: 40, left: 10, right: 10 },
        	value: "...help docs..."
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 10, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "Fweb.helpController.pane"
        })
      })
    });
    pane.append();
    this.set('pane', pane);
  },

  hidePane: function() {
    this.pane.remove();
  }

}) ;
