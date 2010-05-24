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
		
		/* menù vendite */
		var subMenuOrdiniReport = [
			{ title: 'report 1', isEnabled: YES},
			{ title: 'report 2', isEnabled: NO}
		];
		var subMenuOrdini = [
			{ title: 'nuovo', keyEquivalent: 'ctrl_shift_n', icon: 'new-icon' },
			{ title: 'ricerca', icon: 'search-icon' },
			{ title: 'report', icon: 'report-icon', subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '990 - Alpeat' },
			{ title: '989 - L.P.T.' },
			{ title: '988 - Vant Srl' },
			{ title: '987 - Sb - lavorazioni Snc' },
			{ title: '986 - Fincantieri Spa' },
			{ title: 'vedi tutti ...' }
		];
		var menuVendite = [
			{ title: 'offerte'},
			{ title: 'ordini', subMenu: subMenuOrdini, target: 'Fweb' },
			{ title: 'ddt' },
			{ title: 'fatture' },
			{ isSeparator: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ title: 'Item with Icon', isChecked: YES, icon: 'email-icon', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', checkbox: YES, icon: 'folder', keyEquivalent: 'ctrl_p' }
		];
		/* menù acquisti */
		var menuAcquisti = [
			{ title: 'Item with sub', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'email-icon', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'folder', keyEquivalent: 'ctrl_p' }
		];
		/* menù amministrazione */
		var menuAmministrazione = [
			{ title: 'Item with sub', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'email-icon', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'folder', keyEquivalent: 'ctrl_p' }
		];
		/* menù magazzino */
		var menuMagazzino = [
			{ title: 'Item with sub', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'email-icon', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'folder', keyEquivalent: 'ctrl_p' }
		];

		// Using the Design Pattern method...only need to fill out the first parameter of the createChildView()
    view = this.createChildView( 
      SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, height: 44},
				classNames: ['topbar'],
        childViews: 'logo vendite acquisti amministrazione magazzino endButton newTabButton fwebSearchField fwebSearchCancelButton'.w(),

				logo: SC.LabelView.design({
					layout: { top: 2, left: 10, height: 40, width: 147 },
					classNames: ['f5lab-logo']
				}),
				
				vendite: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 300, height: 40, width: 100 },
					title: 'Vendite',
	        classNames: ['bar-button'],
	        toolTip: 'Menù vendite: offerte, ordini, ddt...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuVendite
	    		})
      	}),

				acquisti: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 400, height: 40, width: 100 },
					title: 'Acquisti',
	        classNames: ['bar-button'],
	        toolTip: 'Menù acquisti: offerte, ordini...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuAcquisti
	    		})
      	}),

				amministrazione: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 500, height: 40, width: 100 },
					title: 'Amministrazione',
	        classNames: ['bar-button'],
	        toolTip: 'Menù amministrazione: contabilità, anagrafica...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuAmministrazione
	    		})
      	}),

				magazzino: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 600, height: 40, width: 100 },
					title: 'Magazzino',
	        classNames: ['bar-button'],
	        toolTip: 'Menù magazzino: materiali, movimenti...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuMagazzino
	    		})
      	}),

				endButton: SC.LabelView.design({
	        layout: { centerY: 0, left: 701, height: 40, width: 0 },
	        classNames: ['bar-button']
	      }),
	
				newTabButton: SC.ButtonView.design({
					layout: { centerY: 0, right: 240, height: 24, width: 80 },
					title: 'Nuova',
					toolTip: 'Apre una nuova tab con una pagina nuova di fweb.',
					theme: 'capsule',
					icon: '',
					mouseDown: function() {
	          window.open('http://localhost:4020/fweb','_newtab');
	        },
				}),
	
				fwebSearchField: SC.TextFieldView.design(SCUI.ToolTip, {
	        layout: { centerY: 0, height: 24, right: 10, width: 200 },
	        classNames: ['search-bar'],
	        hint: "search",
	        toolTip: "search",
	        //valueBinding: 'Fweb.assignmentsController.searchFilter'
	      }),
	      fwebSearchCancelButton: SC.View.design({ // Fweb Search cancel button
	        layout: { centerY: 1, height: 12, right: 15, width: 12 },
	        isVisible: YES, //NO,
	        classNames: ['filter-cancel-icon'],
	        mouseDown: function() {
	          //Fweb.assignmentsController.set('searchFilter', '');
	        },
	        //isVisibleBinding: SC.Binding.oneWay('Fweb.assignmentsController.searchFilter').bool()
	      })
	
	
      })
    );


    childViews.push(view);

    this.set('childViews', childViews);
  }

});
