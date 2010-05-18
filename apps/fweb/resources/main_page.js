// ==========================================================================
// Project:   Fweb - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

	var submenuitems = [
	{ title: 'sub uno 1', isEnabled: YES},
	{ title: 'sub due 2', isEnabled: YES}
	]; 
	var menuitems = [
	{ title: '1 Item with sub', isEnabled: YES, subMenu: submenuitems, keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
	{ title: '2 Checked Item', isEnabled: YES, isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
	{ title: '3 Disabled Item', isEnabled: NO, keyEquivalent: 'backspace' },
	{ isSeparator: YES },
	{ title: '4 Item with Icon', isEnabled: YES, icon: 'email-icon', keyEquivalent: 'ctrl_m' },
	{ title: '5 Item with Icon', isEnabled: YES, icon: 'folder', keyEquivalent: 'ctrl_p' }
	];

// This page describes the main user interface for your application.  
Fweb.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'MainMenuView textButton'.w(),

		MainMenuView: Fweb.MainMenuView.design({
			layout: { top: 0, left: 0, height: 100 },
		}),
			
		textButton: SC.ButtonView.design(SCUI.DropDown, {
      layout: { centerY: 0, centerX: 0, top: 100, height: 40, width: 100 },
			title: 'Bottone 1',
      toolTip: 'text button with dropdown',
      dropDown: SC.MenuPane.design({
        layout: { width: 170, height: 0 },
        itemTitleKey: 'title',
        itemIconKey: 'icon',
        itemTargetKey: 'target',
        itemActionKey: 'action',
        itemSeparatorKey: 'isSeparator',
        itemIsEnabledKey: 'isEnabled',
        itemCheckboxKey: 'checkbox',
				itemSubMenuKey: 'subMenu',
  			contentView: SC.View.design({}),
				// isModal: NO,
  			items: menuitems //[{title: '1', isEnabled: YES}, {title: '2'}] //
  		})
    }),

	})
	
});
