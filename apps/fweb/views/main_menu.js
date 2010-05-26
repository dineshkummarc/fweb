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
			{ title: 'report 1', isEnabled: YES, icon: sc_static('resources/icons/table.png')},
			{ title: 'report 2', isEnabled: NO, icon: sc_static('resources/icons/table.png')}
		];
		var subMenuOrdini = [
			{ title: 'nuovo ordine', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png') },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png') },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '990 - Alpeat' },
			{ title: '989 - L.P.T.' },
			{ title: '988 - Vant Srl' },
			{ title: '987 - Sb - lavorazioni Snc' },
			{ title: '986 - Fincantieri Spa' },
			{ title: 'vedi tutti ...' }
		];
		var subMenuOfferte = [
			{ title: 'nuova offerta', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png') },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png') },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '112 - Fincantieri Spa' },
			{ title: '111 - Alpeat' },
			{ title: '110 - Vant Srl' },
			{ title: '109 - Sb - lavorazioni Snc' },
			{ title: '108 - L.P.T.' },
			{ title: 'vedi tutti ...' }
		];
		var subMenuDdt = [
			{ title: 'nuovo DDT', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png') },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png') },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '701 - Fincantieri Spa' },
			{ title: '700 - Alpeat' },
			{ title: '699 - Vant Srl' },
			{ title: '698 - Sb - lavorazioni Snc' },
			{ title: '697 - L.P.T.' },
			{ title: 'vedi tutti ...' }
		];
		var menuVendite = [
			{ title: 'offerte', subMenu: subMenuOfferte, target: 'Fweb' },
			{ title: 'ordini', subMenu: subMenuOrdini, target: 'Fweb' },
			{ title: 'ddt', subMenu: subMenuDdt, target: 'Fweb' },
			{ title: 'fatture' },
			{ isSeparator: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ title: 'Item with Icon', isChecked: YES, icon: 'sc-icon-alert-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', checkbox: YES, icon: 'sc-icon-trash-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù acquisti */
		var menuAcquisti = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-favorite-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-options-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù amministrazione */
		var menuAmministrazione = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-document-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-help-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù magazzino */
		var menuMagazzino = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-info-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-folder-16', keyEquivalent: 'ctrl_p' }
		];
		
		// Segmented Button items
		var segmentedButtons = [
			{ title: 'pref', value: 'pref', icon: 'sc-icon-options-16' },
			{ title: 'help', value: 'help', icon: 'sc-icon-help-16' }
		];

		// Using the Design Pattern method...only need to fill out the first parameter of the createChildView()
    view = this.createChildView( 
      SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, minWidth: 1024, height: 44},
				classNames: ['topbar'],
        childViews: 'logo userButton vendite acquisti amministrazione magazzino endButton optionsButtons newTabButton fwebSearchField fwebSearchCancelButton'.w(),

				logo: SC.LabelView.design({
					layout: { top: 0, left: 10, height: 44, width: 147 },
					classNames: ['f5lab-logo']
				}),
				
				userButton: SC.ButtonView.design({
        	layout: { centerY: 0, left: 151, height: 40, width: 149 },
        	title: 'Matteo Folin',
        	icon: sc_static('resources/icons/user_suit.png'),
        	classNames: ['bar-button'],
	        toolTip: 'Pannello dati utente...', 
        	target: 'Fweb.userController',
        	action: 'showUserPane',
					textAlign: 'center'
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
					title: 'Amministr.',
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
	
				optionsButtons: SC.SegmentedView.design({
					layout: { centerY: 0, left: 710, height: 24, width: 90 },
					theme: 'capsule',
					items: [
						{ title: '', value: 'pref', icon: 'sc-icon-options-16', target: 'Fweb.preferencesController', action: 'showPreferencesPane' },
						{ title: '', value: 'help', icon: 'sc-icon-help-16', target: 'Fweb.helpController', action: 'showHelpPane' },
					],
		      itemTitleKey: 'title',
		      itemValueKey: 'value',
		      itemIconKey: 'icon',
		      itemTargetKey: 'target',
		      itemActionKey: 'action'
				}),
				
				newTabButton: SC.ButtonView.design({
					layout: { centerY: 0, right: 220, height: 24, width: 80 },
					title: 'New',
					toolTip: 'Apre una nuova tab con una pagina nuova di fweb.',
					icon: sc_static('resources/icons/application_add.png'),
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
