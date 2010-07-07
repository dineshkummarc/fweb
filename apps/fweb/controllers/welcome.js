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
        childViews: 'welcomeLogoView titleView inviteView areasButtonView invite2View newButtonView invite3View listDocsView savePrefView savePrefLabelView buttonHideView'.w(),
				
				welcomeLogoView: SC.LabelView.design({
          layout: { top: 20, right: 5, height: 139, width: 146 },
					classNames: ['welcome-logo'],
				}),
				
        titleView: SC.LabelView.design({
          layout: { top: 20, left: 20, height: 24 },
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: Fweb.userController.user.get('description')+', benvenuto in Fweb !',
        }),

				inviteView: SC.LabelView.design({
          layout: { centerY: 0, top: 80, left: 20, height: 24 },
          icon: sc_static('resources/icons/application_go.png'),
          value: 'Scegli un area in cui entrare'
        }),

				areasButtonView: SC.SegmentedView.design({
					layout: { centerY: 0, centerX: 0, top: 80, height: 24, width: 400 },
					items: [
						{ title: 'Vendite', value: 'vendite', icon: '', target: 'Fweb.welcomeController', action: 'showOrders' },
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
          layout: { centerY: 0, top: 140, left: 20, height: 24 },
          icon: sc_static('resources/icons/table_add.png'),
          value: 'oppure apri un nuovo documento'
        }),
        
        newButtonView: SC.SegmentedView.design({
					layout: { centerY: 0, centerX: 0, top: 140, height: 24, width: 400 },
					items: [
						{ title: 'Offerta', value: 'off', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
						{ title: 'Ordine', value: 'ord', icon: '', target: 'Fweb.welcomeController', action: 'showNewOrder' },
						{ title: 'DDT', value: 'ddt', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
						{ title: 'Fattura', value: 'fatt	', icon: '', target: 'Fweb.welcomeController.pane', action: 'remove' },
					],
		      itemTitleKey: 'title',
		      itemValueKey: 'value',
		      itemIconKey: 'icon',
		      itemTargetKey: 'target',
		      itemActionKey: 'action'
				}),
        
				invite3View: SC.LabelView.design({
          layout: { centerY: 0, top: 200, left: 20, height: 24 },
          icon: sc_static('resources/icons/table_edit.png'),
          value: 'oppure riapri uno dei documenti chiusi recentemente'
        }),

				listDocsView: SC.ScrollView.design({
        layout: { centerX: 0, top: 230, left: 20, height: 150, right: 20 },
        hasHorizontalScroller: NO,
				contentView: SC.ListView.design({
          layout: { top: 0, left: 0 },
					contentBinding: "Fweb.welcomeController.arrangedObjects",
					selectionBinding: "Fweb.welcomeController.selection",
					contentIconKey: "iconDoc",     
					contentValueKey: "descDoc",
					hasContentIcon: YES,
					rowHeight: 21
					}),
				}),

				savePrefView: SC.CheckboxView.design({
					layout: { centerY: 0, left: 20, bottom: 54, height: 24 },
					value: 'save',
				}),
				
				savePrefLabelView: SC.LabelView.design({
          layout: { centerY: 0, left: 45, bottom: 54, height: 24 },
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
  },

	showOrders: function() {
		this.hidePane();
		Fweb.ordersController.showOrders();
	},
	
	showNewOrder: function() {
		this.hidePane();
		Fweb.orderController.showNewOrder();
	}


}) ;
