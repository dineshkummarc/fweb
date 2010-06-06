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
			nowShowingBinding: 'Fweb.ordersController.nowShowing', // così si fa !!! bindi la vista ad una variabile i un controller !!!
			// nowShowing: "OrdersTableView"
		})

	}),
	
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
		}),
		
		FilterButtonView: SC.ButtonView.design({
			layout: { top: 10, left: 250, width: 80, height: 24},
			title: 'Filtri',
			toolTip: 'Apre il pannello dei filtri',
			icon: sc_static('resources/icons/filter.png'),
		}),
		
		FilterDescView: SC.LabelView.design({
			layout: { top: 14, left: 340, width: 300, height: 20},
			value: 'tutti gli ordini',
			toolTip: 'Descrizione dei filtri attivi',
		}),
		
		OrdersTabsView: SC.TabView.design({
   		layout: { left:10, right:10, top:30, bottom:10 },
			value: 'OrdersTableView',
			items: [
        { title: "Table", value: "OrdersTableView", icon: sc_static('resources/icons/table.png') },
	      { title: "Tree", value: "OrdersTreeView", icon: sc_static('resources/icons/text_list_bullets.png') },
	      { title: "Pdf", value: "OrdersPdfView", icon: sc_static('resources/icons/page_white_acrobat.png') }
			],		
	    itemTitleKey: 'title',
	    itemValueKey: 'value',
			itemIconKey: 'icon',
     	userDefaultKey: "table"
		}),
		
		OrdersTableView: SC.TableView.design({
	    layout: { left: 10, right: 10, top: 10, bottom: 10 },
	    backgroundColor: "#F2F2F2", 
	    columns: [ 
	      SC.TableColumn.create({ 
	        key:   'num', 
	        label: 'Numero',
					width: 50
	      }), 
	      SC.TableColumn.create({ 
	        key:   'date', 
	        label: 'Date',
					width: 100
	      }),
		     SC.TableColumn.create({ 
	        key:   'ordStatus', 
	        label: 'Status', 
					width: 50
	      })
	    ],

	    contentBinding: 'Fweb.ordersController.arrangedObjects', 
	    selectOnMouseDown: YES,
	    exampleView: SC.TableRowView, 
	    recordType: Fweb.Order,
	  })
	}),
	
	OrdersTreeView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: 'OrdersTreeView: una vista ad albero (per data o cliente)'
	}),
	
	OrdersPdfView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: 'OrdersPdfView: una stampa in pdf (o html) formattata'
	}),
	
});
