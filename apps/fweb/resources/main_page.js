// ==========================================================================
// Project:   Fweb - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

// This page describes the main user interface for your application.  
Fweb.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'MainMenuView MainContainerView'.w(),

		MainMenuView: Fweb.MainMenuView.design({
			layout: { top: 0, left: 0, height: 100 },
		}),
		
		MainContainerView: SC.ContainerView.design({
		  layout: { left: 0, right: 0, top: 46, bottom: 0 },
			nowShowingBinding: 'Fweb.mainMenuController.nowShowing',
		})

	}),
	
	// ORDERS LIST View
	OrdersView: SC.View.design({
		layout: { left: 0, right: 0, top: 0, bottom: 0 },
		childViews: 'TitleView AddButtonView FilterButtonView FilterDescView OrdersTabsView'.w(),
		
		TitleView: SC.LabelView.design({
			layout: { top: 10, left: 20, width: 100, height: 24},
			classNames: ['titleMainContainer'],
			controlSize: SC.LARGE_CONTROL_SIZE,
			value: 'Ordini'
		}),
		
		AddButtonView: SC.ButtonView.design({
			layout: { top: 10, left: 150, width: 80, height: 24},
			title: 'Nuovo',
			toolTip: 'Inserimento nuovo ordine',
			icon: sc_static('resources/icons/table_add.png'),
			target: 'Fweb.orderController',
			action: 'showOrder',
		}),
		
		FilterButtonView: SC.ButtonView.design({
			layout: { top: 10, left: 250, width: 80, height: 24},
			title: 'Filtri',
			toolTip: 'Apre il pannello dei filtri',
			icon: sc_static('resources/icons/filter.png'),
			target: 'Fweb.ordersController',
    	action: 'showFilterPane',
		}),
		
		FilterDescView: SC.LabelView.design({
			layout: { top: 14, left: 340, width: 300, height: 20},
			value: 'tutti gli ordini',
			toolTip: 'Descrizione dei filtri attivi',
		}),
		
		OrdersTabsView: SC.TabView.design({
   		layout: { left:10, right:10, top:30, bottom:10 },
			nowShowing: 'OrdersTableView',
			items: [
        { title: "Table", value: "OrdersTableView", icon: sc_static('resources/icons/table.png') },
	      { title: "Tree", value: "OrdersTreeView", icon: sc_static('resources/icons/text_list_bullets.png') },
	      { title: "Pdf", value: "OrdersPdfView", icon: sc_static('resources/icons/page_white_acrobat.png') }
			],		
	    itemTitleKey: 'title',
	    itemValueKey: 'value',
			itemIconKey: 'icon',
     	userDefaultKey: "userOrdersTabs"
		}),

	}),
			
	OrdersTableView: SC.TableView.design({
		layout: { left: 10, right: 10, top: 10, bottom: 10 },
		classNames: 'listTable',
	  columns: [ 
	    SC.TableColumn.create({ 
	      key:   'num', 
	      label: 'N.',
				width: 32,
				textalign: 'right',
	    }), 
	    SC.TableColumn.create({ 
	      key:   'formattedDate', 
	      label: 'Data',
				width: 100,
	    }),
      SC.TableColumn.create({ 
	      key:   'ragSocCli',
	      label: 'Cliente', 
				width: 100,
	    }),
			SC.TableColumn.create({ 
	      key:   'ordStatus', 
	      label: 'St', 
				width: 32,
	    }),
			SC.TableColumn.create({ 
	      key:   'clientRef', 
	      label: 'Rif.cliente', 
				width: 100,
	    }),
			SC.TableColumn.create({ 
	      key:   'modPag', 
	      label: 'Pagamento', 
				width: 100,
	    }),
		   SC.TableColumn.create({ 
	      key:   'formattedDateDelivery', 
	      label: 'Spedizione',
				width: 100,
	    }),
			SC.TableColumn.create({ 
	      key:   'ddtCausale', 
	      label: 'Cau.', 
				width: 100,
	    }),
			SC.TableColumn.create({ 
	      key:   'ddtPorto', 
	      label: 'Por.', 
				width: 100,
	    }),
	 	  SC.TableColumn.create({ 
	      key:   'fullDest', 
	      label: 'Destinazione', 
				width: 100,
	    })
	  ],

	  contentBinding: 'Fweb.ordersController.arrangedObjects',
		selectionBinding: 'Fweb.ordersController.selection',
	  selectOnMouseDown: YES,
	  exampleView: SC.TableRowView, 
	  recordType: Fweb.Order,
		sortStateDidChange: function(column, sortState) {
	    cont = this.get('content').sortProperty(column.get("key"));
	    if (sortState === SC.SORT_DESCENDING) {
	      Fweb.ordersController.set('content', cont.reverse());
	    } else {
	      Fweb.ordersController.set('content', cont);        
	    }
		},
		
		mouseDown: function(evt) {
      var menuOptions = this._buildContextMenu();
      var pane = SCUI.ContextMenuPane.create({
        contentView: SC.View.design({}),
        layout: { width: 194, height: 0 },
        itemTitleKey: 'title',
        itemTargetKey: 'target',
        itemActionKey: 'action',
        itemSeparatorKey: 'isSeparator',
        itemIsEnabledKey: 'isEnabled',
        items: menuOptions
      });
      pane.popup(this, evt); // pass in the mouse event so the pane can figure out where to put itself
      return sc_super(); // or whatever you want to do
		},
		
		_buildContextMenu: function() {
	    var ret = [];
				ret.push({
	        title: "apri",
	        icon: sc_static('resources/icons/table_edit.png'),
	        isEnabled: YES,
	        target: 'Fweb.orderController',
	        action: 'showOrder'
	      });
	      ret.push({
	        title: "clona",
	        icon: sc_static('resources/icons/table_multiple.png'),
	        isEnabled: YES,
	        target: 'Fweb.orderController',
	        action: 'showSorryPane'
	      });
				ret.push({
	        title: "stampa",
	        icon: sc_static('resources/icons/printer.png'),
	        isEnabled: YES,
	        target: 'Fweb.orderController',
	        action: 'showSorryPane'
	      });
				ret.push({
	        title: "elimina",
	        icon: sc_static('resources/icons/table_delete.png'),
	        isEnabled: YES,
	        target: 'Fweb.orderController',
	        action: 'showSorryPane'
	      });
	    return ret;
	  },
		
	}),
	  
	OrdersTreeView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: 'OrdersTreeView: una vista ad albero (per data o cliente)'
	}),
	
	OrdersPdfView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: 'OrdersPdfView: una stampa in pdf (o html) formattata'
	}),
	
	
	// SINGLE ORDER view
	OrderView: SC.View.design({
		layout: { left: 0, right: 0, top: 0, bottom: 0 },
		childViews: 'TitleView ButtonView OrderTabsView'.w(),
		
		TitleView: SC.LabelView.design({
			layout: { top: 10, left: 20, width: 100, height: 24},
			classNames: ['titleMainContainer'],
			controlSize: SC.LARGE_CONTROL_SIZE,
			value: 'Ordine'
		}),
		
		ButtonView: SC.ButtonView.design({
			layout: { top: 10, left: 150, width: 80, height: 24},
			title: '???',
			toolTip: '????????????',
			icon: sc_static('resources/icons/error.png'),
			target: 'Fweb.mainMenuController',
			action: 'showSorryPane',
		}),
		
		OrderTabsView: SC.TabView.design({
   		layout: { left:10, right:10, top:30, bottom:10 },
			nowShowing: 'OrderEditView',
			items: [
        { title: "Edit", value: "OrderEditView", icon: sc_static('resources/icons/page_white.png') },
	      { title: "Table", value: "OrderTableView", icon: sc_static('resources/icons/table.png') },
	      { title: "Pdf", value: "OrderPdfView", icon: sc_static('resources/icons/page_white_acrobat.png') }
			],		
	    itemTitleKey: 'title',
	    itemValueKey: 'value',
			itemIconKey: 'icon',
     	userDefaultKey: "userOrderTabs"
		}),

	}),
	
	OrderEditView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: "OrderEditView: vista standard per l'inserimento/modifica' dell'ordine"
	}),
	
	OrderTableView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: "OrderTableView: una vista a tabella dell'ordine"
	}),
	
	OrderPdfView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: "OrderPdfView: una stampa in pdf (o html) formattata dell'ordine"
	}),
	
});
