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
		
		/* menù list objects */
		var submenuitems = [
			{ title: 'sub uno'},
			{ title: 'sub due'}
		]; 
		var menuitems = [
			{ title: 'Item with sub', keyEquivalent: 'ctrl_shift_n', subMenu: submenuitems, target: 'Fweb' },
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
        childViews: 'logo vendite'.w(),

				logo: SC.LabelView.design({
					layout: { top: 2, left: 26, height: 40, width: 147 },
					classNames: ['f5lab-logo']
				}),
				
				vendite: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 200, height: 40, width: 100 },
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
	    			items: menuitems
	    		})
      	})
      })
    );
    childViews.push(view);

    this.set('childViews', childViews);
  }

});
