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
	
	OrdersTableView: SC.TableView.design({
    layout: { left: 15, right: 15, top: 15, bottom: 15 },
    //backgroundColor: "white", 
    columns: [ 
      SC.TableColumn.create({ 
        key:   'num', 
        label: 'Numero', 
      }), 
      SC.TableColumn.create({ 
        key:   'date', 
        label: 'Date',
      }),
	     SC.TableColumn.create({ 
        key:   'ordStatus', 
        label: 'Status', 
      })
    ],

    contentBinding:   'Fweb.ordersController.arrangedObjects', 
    selectOnMouseDown: YES,
    exampleView: SC.TableRowView, 
    recordType: Fweb.Order,
  })
	
});
