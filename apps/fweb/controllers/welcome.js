// ==========================================================================
// Project:   Fweb.welcomeController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Fweb.welcomeController = SC.ArrayController.create(
/** @scope Fweb.welcomeController.prototype */ {
	pane: null,
	content: null,

  showWelcomePane: function() {
		this.set('content', Fweb.store.find(Fweb.Recent));
    var pane = SC.PanelPane.create({
      layout: { centerX: 0, centerY: 0, width: 800, height: 500 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'welcomeLogoView titleView inviteView areasButtonView invite2View listDocsView savePrefView savePrefLabelView buttonHideView'.w(),
				
				welcomeLogoView: SC.LabelView.design({
          layout: { top: 20, right: 20, height: 127, width: 120 },
					classNames: ['welcome-logo'],
				}),
				
        titleView: SC.LabelView.design({
          layout: { top: 20, left: 20, height: 24 },
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: Fweb.userController.user.get('description')+', benvenuto in Fweb !',
        }),

				inviteView: SC.LabelView.design({
          layout: { centerY: 0, top: 60, left: 20, height: 20 },
          value: 'Scegli un area in cui entrare per lavorare'
        }),

				areasButtonView: SC.SegmentedView.design({
					layout: { centerY: 0, centerX: 0, top: 90, height: 24, width: 400 },
					items: [
						{ title: 'Vendite', value: 'vendite', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
						{ title: 'Acquisti', value: 'acquisti', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
						{ title: 'Amministrazione', value: 'amiministrazione', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
						{ title: 'Magazzino', value: 'magazzino', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
					],
		      itemTitleKey: 'title',
		      itemValueKey: 'value',
		      itemIconKey: 'icon',
		      itemTargetKey: 'target',
		      itemActionKey: 'action'
				}),

				invite2View: SC.LabelView.design({
          layout: { centerY: 0, top: 130, left: 20, height: 20 },
          value: 'oppure riapri uno dei documenti chiusi recentemente'
        }),

				listDocsView: SC.ListView.design({
          layout: { centerX: 0, top: 160, left: 20, height: 240, right: 20 },
					contentBinding: "Fweb.welcomeController.arrangedObjects",
					selectionBinding: "Fweb.welcomeController.selection",
					contentIconKey: "typeDoc",     
					contentValueKey: "descDoc",
					hasContentIcon: YES,
					rowHeight: 21
				}),

				savePrefView: SC.CheckboxView.design({
					layout: { centerY: 0, left: 20, bottom: 54, height: 20 },
					value: 'save',
				}),
				
				savePrefLabelView: SC.LabelView.design({
          layout: { centerY: 0, left: 45, bottom: 54, height: 20 },
          value: 'ricorda questa scelta alla prossima apertura'
        }),

				buttonHideView: SC.ButtonView.design({
          layout: { width: 80, bottom: 10, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "Fweb.welcomeController.pane"
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
