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
		childViews: 'TitleView FilterView OrdersTabsView'.w(),
		
		TitleView: SC.LabelView.design({
			layout: { top: 4, left: 10, width: 100, height: 24},
			classNames: ['titleMainContainer'],
			controlSize: SC.LARGE_CONTROL_SIZE,
			value: 'Ordini'
		}),
		
		FilterView: SC.LabelView.design({
			layout: { top: 4, left: 120, width: 200, height: 24},
			value: '... qui ci vanno i filtri...'
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
		value: 'OrdersTreeView'
	}),
	
	OrdersPdfView: SC.LabelView.design({
    layout: { left: 10, right: 10, top: 10, bottom: 10 },
		value: 'OrdersPdfView'
	}),
	
});
