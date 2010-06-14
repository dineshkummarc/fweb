// ==========================================================================
// Project:   Fweb.mainMenuController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Fweb.mainMenuController = SC.ObjectController.create(
/** @scope Fweb.mainMenuController.prototype */ {

	nowShowing: "", // binded to the view in the main container.
	sorryPane: null,
	
	print: function() {
		window.print();
	},

  showSorryPane: function() {
    var pane = SC.AlertPane.warn("Mi dispiace tantissimo ma...", 'questa funzione non è ancora stata implementata', '', "OK", this); 
    pane.append();
    this.set('sorryPane', pane);
  },

  hideSorryPane: function() {
    this.sorryPane.remove();
  }

}) ;
